/* eslint-disable no-await-in-loop */
import { Client as IntercomClient } from 'intercom-client';
import { stripHtml } from 'string-strip-html';
import { WebSocket } from 'ws';

import { connectLiveAgent, disconnectLiveAgent, sendLiveAgentMessage } from '../sockets';

export class IntercomService {
  private readonly intercom = new IntercomClient({ tokenAuth: { token: process.env.INTERCOM_TOKEN! } });

  private readonly conversations = new Map<string, WebSocket>();

  private send(conversationID: string, event: { type: string; data: any }) { // CHIDI: refactor this to use sessionID
    const ws = this.conversations.get(conversationID);

    ws?.send(JSON.stringify(event));
  }

  public async connectAgent(conversation: any) {
    const agent = await this.intercom.admins.find({ id: conversation.admin_assignee_id });

    this.send(conversation.id, connectLiveAgent(conversation, agent));
  }

  public async disconnectAgent(conversation: any) {
    const agent = await this.intercom.admins.find({ id: conversation.admin_assignee_id });

    this.send(conversation.id, disconnectLiveAgent(conversation, agent));
    this.conversations.get(conversation.id)?.close();
    this.conversations.delete(conversation.id);
  }

  public async sendAgentReply(conversation: any) { //CHIDI: edit this to poll the messages endpoint
    const html = conversation.conversation_parts.conversation_parts.map((part: any) => part.body).join('\n');

    this.send(conversation.id, sendLiveAgentMessage(stripHtml(html).result)); //CHIDI: only need to change conversationID to sessionID, and the message logic here
  }

  public async sendUserReply(affinityToken: string, sessionKey: string, sessionID: string, message: string) {
    const endpointUrl = 'https://d.la3-c1-ia7.salesforceliveagent.com/chat/rest/Chasitor/ChatMessage';

    console.log(`affinityToken: ${affinityToken}`); //CHIDI: fine
    console.log(`session key: ${sessionKey}`); //CHIDI: fine
    console.log(`session id: ${sessionID}`); //CHIDI: fine
    console.log(`message: ${message}`); //CHIDI: fine

    try {
      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'X-LIVEAGENT-API-VERSION': '57',
          'X-LIVEAGENT-AFFINITY': `${affinityToken}`,
          'X-LIVEAGENT-SESSION-KEY': `${sessionKey}`,
          'X-LIVEAGENT-SEQUENCE': '2' // CHIDI: need to increment this
        },
        body: JSON.stringify({ 
            "text": `${message}`}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response); //CHIDI: Remove console log later
      return response;
    } catch (error) {
      console.error('Error sending message chat:', error);
      throw error;
    }

    // await this.intercom.conversations.replyByIdAsUser({
    //   id: conversationID,
    //   intercomUserId: userID,
    //   body: message,
    // });
  }

  public async createConversation() {    
    const endpointUrl = 'https://d.la3-c1-ia7.salesforceliveagent.com/chat/rest/System/SessionId'

    try {
      const response = await fetch(endpointUrl, {
        method: 'GET',
        headers: {
          'X-LIVEAGENT-API-VERSION': '57',
          'X-LIVEAGENT-AFFINITY': 'null',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating convo session:', error);
      throw error;
    }

    // response structure:
    // {
    //   key: '2a8816ea-3903-403a-b8ea-95f82a9c0c35!1729874169013!tLRa2SQUXW2PC9PltgdMd414Jf0=',
    //   id: '2a8816ea-3903-403a-b8ea-95f82a9c0c35',
    //   clientPollTimeout: 40,
    //   affinityToken: 'beb62388'
    // }
    
    let finalUserID = null;
    try {
      const existingUser = await this.intercom.contacts.find({ id: 'blah' });
      finalUserID = existingUser.id;
    } catch (e) {
      const user = await this.intercom.contacts.createLead();
      finalUserID = user.id;
    }

    const conversation = await this.intercom.conversations.create({
      userId: finalUserID,
      body: '<strong>A Webchat user has requested to speak with a Live Agent. The following is a transcript of the conversation with the Voiceflow Assistant:</strong>',
    });

    return {
      userID: finalUserID,
      conversationID: conversation.conversation_id!,
    };
  }

  public async initiateChat(tokens: any) {
    const endpointUrl = 'https://d.la3-c1-ia7.salesforceliveagent.com/chat/rest/Chasitor/ChasitorInit'

    try {
      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'X-LIVEAGENT-API-VERSION': '57',
          'X-LIVEAGENT-AFFINITY': `${tokens.affinityToken}`,
          'X-LIVEAGENT-SESSION-KEY': `${tokens.key}`,
          'X-LIVEAGENT-SEQUENCE': '1'
        },
        body: JSON.stringify({
            "organizationId": "00DHr00000A03xd",
            "deploymentId": "572Hr000000IKUe",
            "sessionId": `${tokens.sessionId}`,
            "buttonId": "573Hr0000009vyt",
            "screenResolution": "2560x1440",
            "userAgent": "PostmanRuntime/7.39.0",
            "language": "en-US",
            "visitorName": "Test Contact",
            "prechatDetails": [],
            "prechatEntities": [], 
            "receiveQueueUpdates": true,
            "isPost": true
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error('Error initiating chat:', error);
      throw error;
    }
  }

  public async sendHistory(userID: string, conversationID: string, history: Array<{ author: string; text: string }>) {
    for (const { author, text } of history) {
      await this.intercom.conversations.replyByIdAsUser({
        id: conversationID,
        intercomUserId: userID,
        body: `<strong>${author}:</strong> ${text}`,
      });
    }
  }

  public async subscribeToConversation(
    sessionID: string,
    ws: WebSocket,
    handler: (event: { type: string; data: any }) => any
  ) {
    console.log('subscribe to convo called'); //CHIDI: this works!!
    //const conversation = await this.intercom.conversations.find({ id: sessionID }).catch(() => null);
    //if (!conversation) return;

    ws.on('message', (message) => handler(JSON.parse(message.toString())));

    this.conversations.set(sessionID, ws);
  }
}

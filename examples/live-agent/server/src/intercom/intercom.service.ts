/* eslint-disable no-await-in-loop */
import { Client as IntercomClient } from 'intercom-client';
import { stripHtml } from 'string-strip-html';
import { WebSocket } from 'ws';
import axios from 'axios';

import { connectLiveAgent, disconnectLiveAgent, sendLiveAgentMessage } from '../sockets';

export class IntercomService {
  private readonly intercom = new IntercomClient({ tokenAuth: { token: process.env.INTERCOM_TOKEN! } });

  private readonly conversations = new Map<string, WebSocket>();

  private send(sessionID: string, event: { type: string; data: any }) {
    const ws = this.conversations.get(sessionID);

    ws?.send(JSON.stringify(event));
  }
//CHIDI: Need to change this
  public async connectAgent(conversation: any) {
    const agent = await this.intercom.admins.find({ id: conversation.admin_assignee_id });

    this.send(conversation.id, connectLiveAgent(conversation, agent));
  }
//CHIDI: Need to change this
  public async disconnectAgent(conversation: any) {
    const agent = await this.intercom.admins.find({ id: conversation.admin_assignee_id });

    this.send(conversation.id, disconnectLiveAgent(conversation, agent));
    this.conversations.get(conversation.id)?.close();
    this.conversations.delete(conversation.id);
  }

  public async sendAgentReply(affinityToken: string, sessionKey: string, sessionID: string) {
    let agent_reply = "";
    try {
      const response = await axios.get('https://d.la3-c1-ia7.salesforceliveagent.com/chat/rest/System/Messages', {
        headers: {
          'X-LIVEAGENT-API-VERSION': '57',
          'X-LIVEAGENT-AFFINITY': `${affinityToken}`,
          'X-LIVEAGENT-SESSION-KEY': `${sessionKey}`
        },
      });

      const agent_messages = response.data.messages;
      
  
      if (agent_messages && agent_messages.length > 0) {
        for (let i = 0; i < agent_messages.length; i++) {
          let message = agent_messages[i];
          
          if (message["type"] == "ChatMessage") {
            agent_reply = message["message"]["text"];
            return agent_reply;
          }
        }
      }
    } catch (error) {
      //CHIDI: sketchy error-handling due to polling
      //console.error('Error polling messages:', error); 
    }
  }

  public async sendUserReply(affinityToken: string, sessionKey: string, sessionID: string, message: string) {
    const endpointUrl = 'https://d.la3-c1-ia7.salesforceliveagent.com/chat/rest/Chasitor/ChatMessage';

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
      return response;
    } catch (error) {
      console.error('Error sending message chat:', error);
      throw error;
    }
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

    ws.on('message', (message) => handler(JSON.parse(message.toString())));

    this.conversations.set(sessionID, ws);
  }
}

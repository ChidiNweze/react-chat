/* eslint-disable consistent-return, import/no-relative-packages */
import type { Application } from 'express-ws';
import { match } from 'ts-pattern';

import { LiveAgentPlatform } from '../../../shared/live-agent-platform.enum';
import { SocketEvent } from '../../../shared/socket-event.enum';
import { IntercomService } from './intercom.service';
import { IntercomTopic } from './intercom-topic.enum';

let intercom: IntercomService | null = null;

export const intercomRoutes = (app: Application) => {

  app.ws(`/${LiveAgentPlatform.INTERCOM}/affinity/:affinityToken/session/:sessionID/sessionKey/:sessionKey/socket`, async (ws, req) => {
    if (!intercom) return ws.close(400);

    const { affinityToken, sessionID, sessionKey } = req.params;

    await intercom.subscribeToConversation(sessionID, ws, (event) =>
      match(event.type)
        .with(SocketEvent.USER_MESSAGE, () => intercom?.sendUserReply(affinityToken, sessionKey, sessionID, event.data.message))
        .otherwise(() => console.warn('unknown event', event))
    );

        // Set up polling to check for messages
    const pollForAgentMessages = async () => {
      try {
        const agent_reply = await intercom?.sendAgentReply(affinityToken, sessionKey, sessionID);

        if (agent_reply) {
          ws.send(JSON.stringify({
            type: SocketEvent.LIVE_AGENT_MESSAGE,
            data: { message: agent_reply},
          }));
        }
      } catch (error) {
        
      }
    }

    // Polling loop
  const pollInterval = setInterval(pollForAgentMessages, 5000);
  }
  );

  app.head(`/${LiveAgentPlatform.INTERCOM}`, (_, res) => {
    if (intercom) return res.send('ok');

    try {
      intercom = new IntercomService(); //CHIDI: refactor as SalesforceService()
      res.send('ok');
    } catch {
      res.status(500).send('invalid API key');
    }
  });

  app.head(`/${LiveAgentPlatform.INTERCOM}/webhook`, (_, res) => res.send('ok')); //CHIDI: not sure how necessary this is

  app.post(`/${LiveAgentPlatform.INTERCOM}/webhook`, async (req, res) => { //CHIDI: Not using this rn
    const { topic, data } = req.body;

    await match(topic)
      .with(IntercomTopic.ADMIN_ASSIGNED, () => intercom?.connectAgent(data.item))
      //.with(IntercomTopic.ADMIN_REPLIED, () => intercom?.sendAgentReply(data.item))
      .with(IntercomTopic.ADMIN_CLOSED, () => intercom?.disconnectAgent(data.item))
      .otherwise(() => console.warn('unknown topic', topic));

    res.send('ok');
  });

  app.post(`/${LiveAgentPlatform.INTERCOM}/conversation`, async (req, res) => {
    if (!intercom) return res.status(400).send('intercom not initialized'); //CHIDI: I don't think this does anything anymore

    const tokens = await intercom.createConversation();
    await intercom.initiateChat(tokens);

    res.json({ tokens });

    //await intercom.sendHistory(userID, conversationID, req.body.history);
  });
};

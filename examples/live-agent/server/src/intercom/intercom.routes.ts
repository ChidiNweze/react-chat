/* eslint-disable consistent-return, import/no-relative-packages */
import type { Application } from 'express-ws';
import { match } from 'ts-pattern';

import { LiveAgentPlatform } from '../../../shared/live-agent-platform.enum';
import { SocketEvent } from '../../../shared/socket-event.enum';
import { IntercomService } from './intercom.service';
import { IntercomTopic } from './intercom-topic.enum';

let intercom: IntercomService | null = null;

export const intercomRoutes = (app: Application) => {
  console.log('routes were loaded 1'); //CHIDI: this works
  app.ws(`/${LiveAgentPlatform.INTERCOM}/affinity/:affinityToken/session/:sessionID/sessionKey/:sessionKey/socket`, async (ws, req) => {
    console.log('socket connection successful methinks'); //CHIDI: this works
    if (!intercom) return ws.close(400);
    console.log('connection not lost') //CHIDI: this works

    const { affinityToken, sessionID, sessionKey } = req.params;

    await intercom.subscribeToConversation(sessionID, ws, (event) =>
      match(event.type)
        .with(SocketEvent.USER_MESSAGE, () => intercom?.sendUserReply(affinityToken, sessionKey, sessionID, event.data.message))
        .otherwise(() => console.warn('unknown event', event))
    );
  });

  app.head(`/${LiveAgentPlatform.INTERCOM}`, (_, res) => {
    if (intercom) return res.send('ok');

    try {
      intercom = new IntercomService(); //CHIDI: refactor with salesforce services
      res.send('ok');
    } catch {
      res.status(500).send('invalid API key');
    }
  });

  app.head(`/${LiveAgentPlatform.INTERCOM}/webhook`, (_, res) => res.send('ok'));

  app.post(`/${LiveAgentPlatform.INTERCOM}/webhook`, async (req, res) => {
    const { topic, data } = req.body;

    await match(topic)
      .with(IntercomTopic.ADMIN_ASSIGNED, () => intercom?.connectAgent(data.item))
      .with(IntercomTopic.ADMIN_REPLIED, () => intercom?.sendAgentReply(data.item))
      .with(IntercomTopic.ADMIN_CLOSED, () => intercom?.disconnectAgent(data.item))
      .otherwise(() => console.warn('unknown topic', topic));

    res.send('ok');
  });

  app.post(`/${LiveAgentPlatform.INTERCOM}/conversation`, async (req, res) => {
    if (!intercom) return res.status(400).send('intercom not initialized');

    const tokens = await intercom.createConversation();
    await intercom.initiateChat(tokens);
    let stringTokens = JSON.stringify(tokens);
    console.log(`tokens from inside /conversation ws route: ${stringTokens}`)

    res.json({ tokens });

    //await intercom.sendHistory(userID, conversationID, req.body.history);
  });
};

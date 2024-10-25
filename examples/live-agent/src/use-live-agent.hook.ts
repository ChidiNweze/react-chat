import { FetchClient } from '@voiceflow/fetch';
import type { RuntimeState } from '@voiceflow/react-chat';
import { TurnType } from '@voiceflow/react-chat';
import { serializeToText } from '@voiceflow/slate-serializer/text';
import type { Emitter } from 'nanoevents';
import { useMemo } from 'react';
import { match } from 'ts-pattern';

import type { LiveAgentPlatform } from '../shared/live-agent-platform.enum';
import { SocketEvent } from '../shared/socket-event.enum';

const SESSION_USER_ID_KEY = 'session:user_id';
const SESSION_CONVERSATION_ID_KEY = 'session:conversation_id';

export interface LiveAgentEvents {
  live_agent: (platform: LiveAgentPlatform) => void;
}

const createTurn = <Type extends TurnType>(type: Type) => ({
  type,
  id: `${Math.random()}-${Date.now()}`,
  timestamp: Date.now(),
});

const extractHistory = (api: RuntimeState['api']) =>
  api.getTurns().flatMap((turn) =>
    match(turn)
      .with({ type: TurnType.USER }, (turn) => ({ author: 'user', text: turn.message }))
      .with({ type: TurnType.SYSTEM }, (turn) =>
        turn.messages.flatMap((message) =>
          match(message)
            .with({ type: 'text' }, (message) => ({
              author: 'bot',
              text: typeof message.text === 'string' ? message.text : serializeToText(message.text),
            }))
            .otherwise(() => [])
        )
      )
      .exhaustive()
  );

export const useLiveAgent = (emitter: Emitter<LiveAgentEvents>) => {
  return useMemo(() => {
    console.log('uselivaagenthook triggered') //CHIDI: This IS working
    const client = new FetchClient({ baseURL: 'http://localhost:9099' });

    let socket: WebSocket | null = null;
    let isEnabled = false;

    return {
      extend: (api: RuntimeState['api']): RuntimeState['api'] => {
        console.log('RuntimeState[api] class works'); //CHIDI:  This prints

        const addSystemTurn = (message: string) =>
          api.addTurn({
            ...createTurn(TurnType.SYSTEM),
            messages: [{ type: 'text', text: message }],
          });

        const addUserTurn = async (message: string) => {
          console.log('addUserTurn triggered') //CHIDI:
          api.addTurn({ ...createTurn(TurnType.USER), message });

          socket?.send(JSON.stringify({ type: SocketEvent.USER_MESSAGE, data: { message } }));
        };

        const continueConversation = () => {
          socket?.close();
          socket = null;
          console.log('convo continued'); //CHIDI: This is working
          api.interact({ type: 'continue' });
        };

        const subscribeToConversation = (platform: LiveAgentPlatform, affinityToken: string, sessionID: string, sessionKey: string) => {
          console.log('subscribeToConversation triggered') //CHIDI: This works
          socket = new WebSocket(
            `ws://localhost:9099/${platform}/affinity/${affinityToken}/session/${sessionID}/sessionKey/${sessionKey}/socket`
          );
          socket.onmessage = (message) => {
            const event = JSON.parse(message.data);

            match(event)
              .with({ type: SocketEvent.LIVE_AGENT_CONNECT }, () =>
                addSystemTurn(`connecting you with ${event.data.agent.name}`)
              )
              .with({ type: SocketEvent.LIVE_AGENT_MESSAGE }, () => addSystemTurn(event.data.message))
              .with({ type: SocketEvent.LIVE_AGENT_DISCONNECT }, () => {
                addSystemTurn(`${event.data.agent.name} has left the chat`);
                talkToRobot();
              })
              .otherwise(() => console.error('unexpected event', event));
          };
        };

        const talkToRobot = () => {
          console.log('talkToRobot triggered') //CHIDI:
          isEnabled = false;
          addSystemTurn('Returning you to the Voiceflow bot...');
          continueConversation();
        };

        const talkToHuman = async (platform: LiveAgentPlatform) => {
          console.log('talkToHuman triggered') //CHIDI: This works
          const isPlatformEnabled = await client
            .head(`/${platform}`)
            .then(() => true)
            .catch(() => false);

          isEnabled = true;

          const history = extractHistory(api);
          console.log(history); //CHIDI: Working!!
          //const prevUserID = sessionStorage.getItem(SESSION_USER_ID_KEY);

          const { tokens } = await client
            .post(`/${platform}/conversation`, {
              json: { history },
            })
            .json<any>();

          let sessionId = tokens.id;
          let sessionKey = tokens.key;
          // sessionStorage.setItem(SESSION_USER_ID_KEY, userID);
          sessionStorage.setItem(SESSION_CONVERSATION_ID_KEY, sessionId); //CHIDI: not sure what i'm doing with this lol

          subscribeToConversation(platform, tokens.affinityToken, sessionId, sessionKey);
        };

        emitter.on('live_agent', talkToHuman);

        return {
          ...api,
          reply: (message) => {
            if (isEnabled) {
              return addUserTurn(message);
            }

            return api.reply(message);
          },
        };
      },
    };
  }, []);
};

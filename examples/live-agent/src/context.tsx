import { RuntimeProvider as BaseProvider } from '@voiceflow/react-chat';
import { createNanoEvents } from 'nanoevents';
import { useMemo } from 'react';

import { ASSISTANT, CONFIG } from './config';
import { LiveAgent } from './traces/LiveAgent.trace';
import type { LiveAgentEvents } from './use-live-agent.hook';
import { useLiveAgent } from './use-live-agent.hook';
import { LiveAgentPlatform } from '../shared/live-agent-platform.enum';

export const RuntimeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const emitter = useMemo(() => createNanoEvents<LiveAgentEvents>(), []);
  const liveAgent = useLiveAgent(emitter);

  return (
    <BaseProvider
      assistant={ASSISTANT}
      config={CONFIG}
      traceHandlers={[LiveAgent(() => emitter.emit('live_agent', LiveAgentPlatform.INTERCOM))]} //CHIDI: platform the platform var was blocking me, so I just hardcoded lol
      extend={liveAgent.extend}
    >
      {children}
    </BaseProvider>
  );
};

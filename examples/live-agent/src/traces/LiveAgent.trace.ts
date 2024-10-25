import type { TraceHandler } from '@voiceflow/react-chat';

import type { LiveAgentPlatform } from '../../shared/live-agent-platform.enum';

export const LiveAgent = (handoff: (platform: LiveAgentPlatform) => void): TraceHandler => ({
  canHandle: ({ type }) => (type as string) === 'talk_to_agent',
  handle: ({ context }, trace) => {
    console.log('handoff initiated') //CHIDI: this doesn't work
    handoff(trace.payload.platform);
    return context;
  },
});

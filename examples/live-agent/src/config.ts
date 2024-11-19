import { AssistantOptions, ChatConfig } from '@voiceflow/react-chat';

const IMAGE = 'https://companieslogo.com/img/orig/RIVN-6c24fd1f.png?t=1720244493';
const AVATAR = 'https://companieslogo.com/img/orig/RIVN-6c24fd1f.png?t=1720244493';

export const ASSISTANT: AssistantOptions = AssistantOptions.parse({
  title: 'Scout',
  color: '#040404',
  description: 'Rivian AI Guide',
  watermark: false,
  image: IMAGE,
  avatar: AVATAR,
});

export const CONFIG = ChatConfig.parse({
  verify: { projectID: import.meta.env.VF_PROJECT_ID },
});

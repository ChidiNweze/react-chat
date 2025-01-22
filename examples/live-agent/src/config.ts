import { AssistantOptions, ChatConfig } from '@voiceflow/react-chat';

const IMAGE = 'https://cdn.worldvectorlogo.com/logos/rivian.svg';
const AVATAR = 'https://cdn.worldvectorlogo.com/logos/rivian.svg';

export const ASSISTANT: AssistantOptions = AssistantOptions.parse({
  title: "Rivian",
  color: '#040404',
  description: "Demonstrating Live Agent Hand-Off with Salesforce",
  watermark: false,
  image: IMAGE,
  avatar: AVATAR,
});

export const CONFIG = ChatConfig.parse({
  verify: { projectID: import.meta.env.VF_PROJECT_ID },
});

import { AssistantOptions, ChatConfig } from '@voiceflow/react-chat';

const IMAGE = 'https://www.ci-portal.de/wp-content/uploads/hertz.jpg';
const AVATAR = 'https://www.ci-portal.de/wp-content/uploads/hertz.jpg';

export const ASSISTANT: AssistantOptions = AssistantOptions.parse({
  title: 'Hertz - Live Agent Demo',
  color: '#231f20',
  description: 'Demonstration of integrating Voiceflow with Salesforce Live Chat',
  image: IMAGE,
  avatar: AVATAR,
});

export const CONFIG = ChatConfig.parse({
  verify: { projectID: import.meta.env.VF_PROJECT_ID },
});

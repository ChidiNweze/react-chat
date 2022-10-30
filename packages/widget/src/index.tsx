import { Assistant, ChatWidget, Listeners, PostMessage, RuntimeOptions, useStateRef } from '@voiceflow/react-chat';
import React, { useCallback, useRef } from 'react';

import { useSendMessage } from './hooks';
import { getSession, saveSession } from './session';

interface WidgetProps extends React.PropsWithChildren, RuntimeOptions {
  assistant?: Assistant;
  widgetURL?: string;
}

const Widget: React.FC<WidgetProps> = ({ children, widgetURL, ...config }) => {
  /** initialization */
  const chatRef = useRef<HTMLIFrameElement>(null);
  const [assistant, setAssistant, assistantRef] = useStateRef<Assistant | undefined>(config.assistant);

  const sendMessage = useSendMessage(chatRef, widgetURL);
  const onLoad = useCallback(() => sendMessage({ type: PostMessage.Type.FETCH_ASSISTANT, payload: config }), [config]);

  // rely on iframe to fetch assistant configuration
  Listeners.useListenMessage(PostMessage.Type.FETCHED_ASSISTANT, ({ payload: assistant }) => {
    setAssistant(assistant);
    sendMessage({
      type: PostMessage.Type.SESSION,
      payload: {
        ...config,
        assistant,
        session: getSession(assistant.persistence, config.userID),
      },
    });
  });

  Listeners.useListenMessage(PostMessage.Type.SAVE_SESSION, ({ payload }) => {
    const persistence = assistantRef.current?.persistence;
    if (persistence) {
      saveSession(persistence, payload);
    }
  });

  return (
    <ChatWidget assistant={assistant} sendMessage={sendMessage} chatAPI={window.voiceflow.chat}>
      <iframe src={widgetURL} title="voiceflow-chat" ref={chatRef} onLoad={onLoad} style={{ height: '100%', width: '100%', border: 'none' }} />
    </ChatWidget>
  );
};

export default Widget;
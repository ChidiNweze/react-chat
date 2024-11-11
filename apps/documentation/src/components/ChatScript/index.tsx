import Head from 'next/head';

export const ChatScript = ({ projectID, embedded = false }: { projectID: string; embedded?: boolean }) => {
  if (!projectID) {
    return null;
  }

  const script = `
    (function (d, t) {
      const v = d.createElement(t);
      const s = d.getElementsByTagName(t)[0];
      v.onload = function () {
        window.voiceflow.chat.load({
          verify: { projectID: "${projectID}"  },
            assistant: {
            stylesheet: '../../bundle/style.css',
          }
          ${embedded ? ', render: { mode: "embedded", target: document.getElementById("chat_embed") }' : ''}
        });
      };
      v.src = '../../bundle/bundle.mjs';
      v.type = 'text/javascript';
      s.parentNode.insertBefore(v, s);
    })(document, 'script');
  `;

  return (
    <Head>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: script,
        }}
      />
    </Head>
  );
};

// ChatbotEmbed.js
import React, { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "bSBsdDP9ZT6TITPs_ToOO",
        domain: "www.chatbase.co"
      };
    `;

    const script2 = document.createElement('script');
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.setAttribute('chatbotId', 'bSBsdDP9ZT6TITPs_ToOO');
    script2.setAttribute('domain', 'www.chatbase.co');
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Clean up the scripts when the component is unmounted
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      {/* Any other content for your component */}
    </div>
  );
};

export default ChatbotEmbed;

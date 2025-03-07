// src/components/Chatbot.js
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');
    script.src = 'https://app.wotnot.io/chat-widget/6h4b8nWdK3ZR074927555164SvyFthm2.js';
    script.defer = true;  // Ensure the script is loaded asynchronously
    script.onload = () => {
      console.log('Chatbot script loaded successfully!');
    };
    
    // Append the script to the body to make the chatbot appear
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render any UI
};

export default Chatbot;

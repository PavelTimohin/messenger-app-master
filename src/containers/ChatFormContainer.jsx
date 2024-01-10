import React from 'react';
import ChatForm from '../components/ChatForm';
import { sendMessage } from '../containers/actions';

const ChatFormPage = ({ activeChatUser, currentUser }) => {
  const handleSendMessage = (message) => {
    sendMessage(message);
  };

  return (
    <ChatForm
      activeChatUser={activeChatUser}
      currentUser={currentUser}
      onSendMessage={handleSendMessage}
    />
  );
};

export default ChatFormPage;

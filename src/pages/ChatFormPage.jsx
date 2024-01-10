import React from 'react';
import ChatForm from '../components/ChatForm';
import { sendMessage } from '../containers/actions';

const ChatFormPage = ({ socket, currentUser, activeChatUser }) => {
  const handleSendMessage = (message) => {
    sendMessage(message);
  };

  return (
    <ChatForm
      socket={socket}
      currentUser={currentUser}
      activeChatUser={activeChatUser}
      onSendMessage={handleSendMessage}
    />
  );
};

export default ChatFormPage;


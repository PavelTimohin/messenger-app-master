import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/chatActions';
import MessageForm from '../components/MessageForm';

const MessageFormContainer = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(message); // отправляем сообщение через Redux action
    setMessage('');
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <MessageForm
      message={message}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = {
  sendMessage,
};

export default connect(null, mapDispatchToProps)(MessageFormContainer);

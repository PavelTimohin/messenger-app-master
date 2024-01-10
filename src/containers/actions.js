// Определение констант для типов действий
export const SEND_MESSAGE = 'SEND_MESSAGE';

// Создание действия для отправки сообщения
export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
};

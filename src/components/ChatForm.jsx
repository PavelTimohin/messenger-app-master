import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto 1fr',
    gridGap: '40px',
    padding: '40px',
    backgroundColor: '#F6F8FA',
    minHeight: '90vh',
  },
  backButton: {
    gridRow: '1',
    gridColumn: '1',
    justifySelf: 'start',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    cursor: 'pointer',
    padding: '20px',
    border: '2px solid #1B6ACB',
    borderRadius: '15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    padding: '12px 40px',
    margin: '10px 20px',
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%)',
    backgroundPosition: '100% 0',
    backgroundSize: '200% 200%',
    fontFamily: 'Montserrat, sans-serif',
    width: '200px',
    height: '50px',
    fontSize: '24px',
    fontWeight: '300',
    color: 'black',
    boxShadow: '0 16px 32px 0 rgba(0, 40, 120, .35)',
    transition: '.5s',
    minWidth: '16px',
  },
  activeChat: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#F6F6F6',
    borderRadius: '8px',
    marginTop: '20px',
  },
  activeChatTitle: {
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  pressedButton: {
    boxShadow: '0 0 0 0 rgba(0, 40, 120, 0)',
    backgroundPosition: '0 0',
  },
  sidebar: {
    gridColumn: '1',
    gridRow: '2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    border: '2px solid black',
  },
  dialogItem: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid blue',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
  },
  dialogPhoto: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
    backgroundColor: 'gray',
    borderRadius: '50%',
    backgroundImage:
      'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTOFiiYtKQzVLa9U8u8AzhqqA0HELsmVySw&usqp=CAU)',
    backgroundSize: 'cover',
  },
  dialogInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  dialogName: {
    fontWeight: 'bold',
  },
  dialogLastMessage: {
    color: '#666',
  },
  content: {
    gridColumn: '2',
    gridRow: '1 / span 2',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '2px solid black',
  },
  messageList: {
    marginBottom: '20px',
    flex: 1,
    maxHeight: 'calc(100vh - 80px)',
    overflowY: 'auto',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  input: {
    flex: '1',
    marginRight: '10px',
  },
  sendButton: {
    minWidth: '120px',
  },
  messageItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  senderIcon: {
    width: '20px',
    height: '20px',
    backgroundColor: 'green',
    marginRight: '10px',
  },
  receiverIcon: {
    width: '20px',
    height: '20px',
    backgroundColor: 'blue',
    marginRight: '10px',
  },
  messageContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  messageInfo: {
    color: '#666',
    fontSize: '12px',
  },
  messageText: {
    marginTop: '5px',
  },
}));

const ChatForm = () => {
  const classes = useStyles();
  const [currentDialog, setCurrentDialog] = useState('');
  const [message, setMessage] = useState('');
  const [dialogMessages, setDialogMessages] = useState([]);
  const [activeChat, setActiveChat] = useState('');
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleDialogSelect = (dialog) => {
    setCurrentDialog(dialog);
    setDialogMessages([]);
    setActiveChat(dialog); // Обновление активного чата
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    const newMessage = {
      sender: 'Вы',
      time: new Date().toLocaleTimeString(),
      content: message,
    };
    setDialogMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
  };

  const handleBurgerMenuToggle = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const handleCloseBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  const BurgerMenu = ({ isOpen, onClose }) => {
    return (
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <ul className="burger-menu-list">
          <li className="burger-menu-item">Настройки</li>
          <li className="burger-menu-item">Профиль</li>
          <li className="burger-menu-item">Выйти</li>
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    );
  };

  const handleBack = () => {
    console.log('Going back to profile');
  };

  return (
    <div className={classes.root}>
      <a href="" className={`${classes.backButton} ${classes.pressedButton}`} onClick={handleBack}>
        Назад
      </a>
      <div className={classes.sidebar}>
        <div className={classes.dialogItem} onClick={() => handleDialogSelect('Название диалога 1')}>
          <div className={classes.dialogPhoto}></div>
          <div className={classes.dialogInfo}>
            <div className={classes.dialogName}>Название диалога 1</div>
            <div className={classes.dialogLastMessage}>Последнее сообщение</div>
          </div>
        </div>
        <div className={classes.dialogItem} onClick={() => handleDialogSelect('Название диалога 2')}>
          <div className={classes.dialogPhoto}></div>
          <div className={classes.dialogInfo}>
            <div className={classes.dialogName}>Название диалога 2</div>
            <div className={classes.dialogLastMessage}>Последнее сообщение</div>
          </div>
        </div>
        {/* Добавление других диалогов */}
      </div>
      <div className={classes.content}>
        {currentDialog && (
          <div className={classes.activeChat}>
            <div className={classes.activeChatTitle}>{activeChat}</div>
          </div>
        )}
        <div className={classes.messageList}>
          {dialogMessages.map((message, index) => (
            <div className={classes.messageItem} key={index}>
              <div className={message.sender === 'Вы' ? classes.senderIcon : classes.receiverIcon}></div>
              <div className={classes.messageContent}>
                <div className={classes.messageInfo}>
                  {message.sender} - {message.time}
                </div>
                <div className={classes.messageText}>{message.content}</div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit} className={classes.inputContainer}>
          <TextField
            className={classes.input}
            label="Сообщение"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
       <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
        </form>
      </div>
      <div className="burger-menu-wrapper">
        <div className={`burger-icon ${burgerMenuOpen ? 'open' : ''}`} onClick={handleBurgerMenuToggle}>
          <span className="burger-icon-line"></span>
          <span className="burger-icon-line"></span>
          <span className="burger-icon-line"></span>
        </div>
      </div>
      {burgerMenuOpen && <BurgerMenu isOpen={burgerMenuOpen} onClose={handleCloseBurgerMenu} />}
    </div>
  );
};

export default ChatForm;
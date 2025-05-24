import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import queryIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [userMsg, setUserMsg] = useState('');
  const chatsRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    setUserMsg(input);
    setResponse('');
    try {
      const res = await sendMsgToOpenAI(input);
      setResponse(res);
    } catch (err) {
      setResponse('Błąd: ' + err.message);
    }
    setInput('');
  };

  useEffect(() => {
    if (chatsRef.current) {
      chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
    }
  }, [userMsg, response]);

  const handleNewChat = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT Clone</span>
          </div>
          <button className="midBtn" onClick={handleNewChat}>
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={queryIcon} alt="query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={queryIcon} alt="query" />
              How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listitemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listitemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Get a Pro" className="listitemsImg" />
            Get a Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div
          className="chats"
          ref={chatsRef}
          style={{ overflowY: 'auto', maxHeight: '70vh' }}
        >
          {userMsg && (
            <div className="chat">
              <img className="chatImg" src={userIcon} alt="" />
              <p className="txt">{userMsg}</p>
            </div>
          )}
          {response && (
            <div className="chat bot">
              <img className="chatImg" src={gptImgLogo} alt="" />
              <p className="txt">{response}</p>
            </div>
          )}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places or
            facts. ChatGPT May 23 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

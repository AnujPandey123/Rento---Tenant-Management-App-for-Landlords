// src/components/ChatDetail.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import './ChatDetail.css';

const ChatDetailContainer = styled.div`
  padding: 20px;
`;
const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;
const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const BackButton = styled.button`
  background-color: pink;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ChatBox = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageBubble = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  max-width: 70%;
`;

const LeftMessageBubble = styled(MessageBubble)`
  align-self: flex-start;
  background-color: lightblue;
`;

const RightMessageBubble = styled(MessageBubble)`
  align-self: flex-end;
  background-color: lightgreen;
`;

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MessageInput = styled.textarea`
  flex: 1;
  min-height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  resize: none;
`;

const SendButton = styled.button`
  background-color: pink;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChatDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey Ethan!", sender: "Walden Schmidt" },
    { id: 2, text: "Wassup", sender: "Walden Schmidt" },
    { id: 3, text: "Hi Walden Schmidt, I'm Good:)", sender: "You" },
    { id: 4, text: "I'll give my rent tomorrow", sender: "Walden Schmidt" },
    { id: 5, text: "Is it okay?", sender: "Walden Schmidt" },
    { id: 6, text: "Sure! Pay via cash", sender: "You" }
  ]);

  // Replace with actual chat fetching logic based on `id`
  const chat = { name: 'Walden Schmidt' }; // Replace with actual chat fetching logic

  const handleBack = () => {
    navigate('/app');
  };

  const sendMessage = () => {
    if (message.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'You', // Assuming sender is the current user for demo purposes
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <ChatDetailContainer>
      <Header>Rento</Header>
      <BackButton onClick={handleBack}>Back</BackButton>
      <ImageContainer>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/hotel-7208441-5868697.png" alt="Survey" />
      </ImageContainer>
      <h2>Tenant Chat: {chat.name}</h2>
      <ChatBox>
        <MessageContainer>
          {messages.map((msg) => {
            if (msg.sender === 'You') {
              return (
                <RightMessageBubble key={msg.id}>
                  {msg.text}
                </RightMessageBubble>
              );
            } else {
              return (
                <LeftMessageBubble key={msg.id}>
                  {msg.text}
                </LeftMessageBubble>
              );
            }
          })}
        </MessageContainer>
      </ChatBox>
      <MessageInputContainer>
        <MessageInput
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendButton onClick={sendMessage}>
          <span role="img" aria-label="Send Message">
            📩
          </span>{' '}
          Send
        </SendButton>
      </MessageInputContainer>
    </ChatDetailContainer>
  );
};

export default ChatDetail;

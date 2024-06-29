// src/components/Messages.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for navigation

const MessageContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const SubHeader = styled.h2`
  font-size: 1.2rem;
  margin: 20px 0;
`;

const ChatThread = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ChatName = styled.div`
  font-size: 1rem;
`;

const NotificationBadge = styled.div`
  background-color: #ff00ff;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 0.8rem;
`;
const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

const Messages = () => {
  const [chats, setChats] = useState([
    { id: 1, name: 'Joe Goldberg', messages: [], notifications: 1 },
    { id: 2, name: 'Don Draper', messages: [], notifications: 3 },
    { id: 3, name: 'Walden Schmidt', messages: [], notifications: 1 },
    { id: 4, name: 'Harvey Spectre', messages: [], notifications: 0 },
  ]);

  return (
    <MessageContainer>
      <Header>Rento</Header>
      <ImageContainer>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/hotel-7208441-5868697.png" alt="Survey" />
      </ImageContainer>
      <SubHeader>Tenants chat threads</SubHeader>
      {chats.map((chat) => (
        <Link to={`/app/chat/${chat.id}`} key={chat.id}>
          <ChatThread>
            <ChatName>{chat.name}</ChatName>
            {chat.notifications > 0 && (
              <NotificationBadge>{chat.notifications}</NotificationBadge>
            )}
          </ChatThread>
        </Link>
      ))}
    </MessageContainer>
  );
};

export default Messages;

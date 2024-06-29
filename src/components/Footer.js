import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaFileInvoiceDollar, FaPoll } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #ccc;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FooterIcon = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #888;

  svg {
    margin-bottom: 5px;
  }

  &.active {
    color: #ff00ff;
  }

  &:hover {
    color: #555;
  }
`;

const Footer = () => (
  <FooterContainer>
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <NavLink to="/app" activeClassName="active" style={{ textDecoration: 'none' }}>
        <FooterIcon>
          <FaEnvelope size={20} />
          <div>Messages</div>
        </FooterIcon>
      </NavLink>
      <NavLink to="/invoice" activeClassName="active" style={{ textDecoration: 'none' }}>
        <FooterIcon>
          <FaFileInvoiceDollar size={20} />
          <div>Invoice</div>
        </FooterIcon>
      </NavLink>
      <NavLink to="/survey" activeClassName="active" style={{ textDecoration: 'none' }}>
        <FooterIcon>
          <FaPoll size={20} />
          <div>Survey</div>
        </FooterIcon>
      </NavLink>
    </div>
    <div style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>
      Created by Anuj Pandey
      <br />
      <a href="https://github.com/AnujPandey123" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
      <a href="https://www.linkedin.com/in/anuj-pandey-551bb6226/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <div style={{ color: '#555', fontSize: '10px', marginTop: '5px' }}>
      © {new Date().getFullYear()} Rento App. All rights reserved.
    </div>
  </FooterContainer>
);

export default Footer;

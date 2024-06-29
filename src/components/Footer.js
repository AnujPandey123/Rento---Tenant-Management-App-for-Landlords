import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaFileInvoiceDollar, FaPoll } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
  </FooterContainer>
);

export default Footer;

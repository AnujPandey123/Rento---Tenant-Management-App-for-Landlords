// src/components/Invoice.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import AddInvoice from './AddInvoice'; // Import AddInvoice component

const InvoiceContainer = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const SubHeader = styled.h2`
  font-size: 1.2rem;
  margin: 20px 0;
`;

const InvoiceItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InvoiceDetail = styled.div`
  margin: 5px 0;
`;

const AddInvoiceButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff00ff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Invoice = () => {
  const [invoices, setInvoices] = useState([
    { id: 92, tenant: 'Don Draper', amount: 400, status: 'Paid', date: '22/07/24' },
  ]);

  const navigate = useNavigate(); // Import and use useNavigate hook

  const addInvoice = (newInvoice) => {
    const id = invoices.length + 1;
    setInvoices([...invoices, { ...newInvoice, id }]);
    navigate('/invoice'); // Navigate back to the invoice page after adding
  };

  return (
    <InvoiceContainer>
      <Header>Rento</Header>
      <SubHeader>Tenants Rent Invoices</SubHeader>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id}>
          <InvoiceDetail>Invoice ID: {invoice.id}</InvoiceDetail>
          <InvoiceDetail>Tenant: {invoice.tenant}</InvoiceDetail>
          <InvoiceDetail>Amount: ${invoice.amount}</InvoiceDetail>
          <InvoiceDetail>Status: {invoice.status}</InvoiceDetail>
          <InvoiceDetail>Date: {invoice.date}</InvoiceDetail>
        </InvoiceItem>
      ))}
      <AddInvoice addInvoice={addInvoice} /> {/* Pass addInvoice function as prop */}
      <AddInvoiceButton to="/add-invoice">Add Invoice</AddInvoiceButton>
    </InvoiceContainer>
  );
};

export default Invoice;

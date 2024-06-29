// src/components/Invoice.js
import React, { useState } from 'react';
import styled from 'styled-components';
import './Invoice.css';

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
  color: ${(props) => (props.paid ? 'green' : 'red')};
`;

const AddInvoiceButton = styled.button`
  background-color: #ff00ff;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
`;

const InvoiceForm = styled.div`
  margin-top: 20px;
`;

const InvoiceInput = styled.input`
  margin: 10px;
  padding: 10px;
  width: calc(100% - 20px);
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StatusSelector = styled.select`
  margin: 10px;
  padding: 10px;
  width: calc(100% - 20px);
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled(AddInvoiceButton)`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.paid ? 'green' : 'red')};
`;
const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;
const Invoice = () => {
  const [invoices, setInvoices] = useState([
    { id: 92, tenant: 'Don Draper', amount: 400, status: 'Paid', date: '22/07/24' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newInvoice, setNewInvoice] = useState({ tenant: '', amount: '', status: 'Paid', date: '' });

  const addInvoice = () => {
    setInvoices([...invoices, { ...newInvoice, id: invoices.length + 1 }]);
    setShowForm(false);
    setNewInvoice({ tenant: '', amount: '', status: 'Paid', date: '' }); // Default status to Paid for next entry
  };

  return (
    <InvoiceContainer>
      <Header>Rento</Header>
      <SubHeader>Tenants Rent Invoices</SubHeader>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id}>
          <InvoiceDetail paid={invoice.status === 'Paid'}>Invoice ID: {invoice.id}</InvoiceDetail>
          <InvoiceDetail paid={invoice.status === 'Paid'}>Tenant: {invoice.tenant}</InvoiceDetail>
          <InvoiceDetail paid={invoice.status === 'Paid'}>Amount: ${invoice.amount}</InvoiceDetail>
          <InvoiceDetail paid={invoice.status === 'Paid'}>Status: {invoice.status}</InvoiceDetail>
          <InvoiceDetail paid={invoice.status === 'Paid'}>Date: {invoice.date}</InvoiceDetail>
        </InvoiceItem>
      ))}
      <AddInvoiceButton onClick={() => setShowForm(true)}>Add Invoice</AddInvoiceButton>
      {showForm && (
        <InvoiceForm>
          <InvoiceInput
            type="text"
            placeholder="Tenant"
            value={newInvoice.tenant}
            onChange={(e) => setNewInvoice({ ...newInvoice, tenant: e.target.value })}
          />
          <InvoiceInput
            type="number"
            placeholder="Amount"
            value={newInvoice.amount}
            onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
          />
          <StatusSelector
            value={newInvoice.status}
            onChange={(e) => setNewInvoice({ ...newInvoice, status: e.target.value })}
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </StatusSelector>
          <InvoiceInput
            type="date"
            placeholder="Date"
            value={newInvoice.date}
            onChange={(e) => setNewInvoice({ ...newInvoice, date: e.target.value })}
          />
          <SubmitButton paid={newInvoice.status === 'Paid'} onClick={addInvoice}>
            Submit Invoice
          </SubmitButton>
        </InvoiceForm>
      )}
    </InvoiceContainer>
  );
};

export default Invoice;

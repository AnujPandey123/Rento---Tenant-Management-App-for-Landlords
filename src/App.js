// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Messages from './components/Messages';
import Invoice from './components/Invoice';
import Survey from './components/Survey';
import SurveyResult from './components/SurveyResult'; // Import SurveyResult component
import AuthProvider from './context/AuthContext';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';
import ChatDetail from './components/ChatDetail'; // Import ChatDetail component
import AddInvoice from './components/AddInvoice'; // Import AddInvoice component

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0; /* Added background color for better visibility */
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 430px) {
    html, body, #root {
      width: 100%; /* Adjusted width to 100% for full viewport width */
      height: 100%; /* Adjusted height to 100% for full viewport height */
      overflow-x: hidden; /* Prevent horizontal scrolling */
    }
  }
`;

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/*" element={<Messages />} />
        <Route path="/app/chat/:id" element={<ChatDetail />} /> {/* Route for ChatDetail */}
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/add-invoice" element={<AddInvoice />} /> {/* Route for AddInvoice */}
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey-result" element={<SurveyResult />} /> {/* Route for SurveyResult */}
      </Routes>
      {location.pathname !== '/' && <Footer />} {/* Render Footer except for login page */}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;

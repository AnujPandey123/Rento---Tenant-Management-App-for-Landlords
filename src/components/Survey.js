// src/components/Survey.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const SurveyContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

const QuestionContainer = styled.div`
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const QuestionHeader = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const OptionContainer = styled.div`
  margin-bottom: 10px;
`;

const OptionLabel = styled.label`
  display: block;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

const OptionInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
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

const Survey = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/survey-result', { state: { selectedOption } });
  };
  return (
    <SurveyContainer>
      <Header>Rento</Header>
      <ImageContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Online_Survey_Icon_or_logo.svg" alt="Survey" />
      </ImageContainer>
      <QuestionContainer>
        <QuestionHeader>Tenant Survey</QuestionHeader>
        <p>Which tenant is creating most noise in apartment?</p>
        <OptionContainer>
          <OptionLabel>
            <OptionInput
              type="radio"
              value="Don Draper"
              checked={selectedOption === 'Don Draper'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            A. Don Draper
          </OptionLabel>
          <OptionLabel>
            <OptionInput
              type="radio"
              value="Harvey Spectre"
              checked={selectedOption === 'Harvey Spectre'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            B. Harvey Spectre
          </OptionLabel>
          <OptionLabel>
            <OptionInput
              type="radio"
              value="Walden Schmidt"
              checked={selectedOption === 'Walden Schmidt'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            C. Walden Schmidt
          </OptionLabel>
          <OptionLabel>
            <OptionInput
              type="radio"
              value="Joe Goldberg"
              checked={selectedOption === 'Joe Goldberg'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            D. Joe Goldberg
          </OptionLabel>
        </OptionContainer>
        <SubmitButton onClick={handleSubmit}>Submit Survey</SubmitButton>
      </QuestionContainer>
    </SurveyContainer>
  );
};

export default Survey;

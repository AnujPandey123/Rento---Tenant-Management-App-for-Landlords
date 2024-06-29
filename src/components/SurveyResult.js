// src/components/SurveyResult.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const SurveyResultContainer = styled.div`
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

const BackButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff00ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

const SurveyResult = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = document.getElementById('surveyChart').getContext('2d');

    // Destroy any existing charts on this canvas
    if (Chart.getChart(ctx)) {
      Chart.getChart(ctx).destroy();
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Option A', 'Option B', 'Option C', 'Option D'],
        datasets: [
          {
            label: 'Survey Analytics (Dummy)',
            data: [2, 1, 1, 1],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <SurveyResultContainer>
      <Header>Rento</Header> 
      <BackButton onClick={() => navigate('/survey')}>Back</BackButton>
      <ImageContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Online_Survey_Icon_or_logo.svg" alt="Survey" />
      </ImageContainer>
      <SubHeader>Tenant Survey Analytics</SubHeader>
      <div>
        <h3>Which tenant is creating most noise in apartment?</h3>
        <canvas id="surveyChart"></canvas>
      </div>
    </SurveyResultContainer>
  );
};

export default SurveyResult;

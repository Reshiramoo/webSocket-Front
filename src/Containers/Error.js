import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const errorMessages = {
  E500: 'An unexpected server error occurred.',
  E50001: 'A database error occurred. Please contact the administrator.',
  E503: 'The service is temporarily unavailable. Please try again later.',
  E404: 'The requested resource could not be found.',
  E400: 'The request could not be understood or was missing required parameters.',
  E40001: 'The input provided is invalid. Please verify and try again.',
  E401: 'Authentication failed. Please provide valid credentials.',
  E40101: 'The provided authentication token is invalid.',
  E403: 'You do not have permission to access this resource.',
  E400XX: 'Custom error message here.',
  SERVER_ERROR: "Something is wrong with the server",
  CLIENT_ERROR: "Something is wrong with the client"
};

const ErrorPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const errorCode = queryParams.get('errorCode');
  const navigate = useNavigate();

  // Error messages based on error codes

  const message = errorMessages[errorCode] || '알 수 없는 오류가 발생했습니다.';

  return (
    <div style={styles.container}>
      <span style={styles.icon}>⚠️</span>
      <h1 style={styles.title}>오류 발생</h1>
      <p style={styles.message}>{message}</p>
      <button style={styles.button} onClick={() => navigate("/")}>
        돌아가기
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FAFAFA',
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  icon: {
    fontSize: '64px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: '10px',
  },
  message: {
    fontSize: '16px',
    color: '#4A4A4A',
    marginBottom: '30px',
    lineHeight: '1.5',
  },
  button: {
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#FFF',
    backgroundColor: '#444444',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#222222',
  },
};

// // Add hover effect dynamically
// document.addEventListener('mouseover', (event) => {
//   if (event.target.matches('button')) {
//     event.target.style.backgroundColor = styles.buttonHover.backgroundColor;
//   }
// });
// document.addEventListener('mouseout', (event) => {
//   if (event.target.matches('button')) {
//     event.target.style.backgroundColor = styles.button.backgroundColor;
//   }
// });

export default ErrorPage;
import React from 'react';

const PetTheCat = ({ counter, incrementCounter }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Pet the Cat</h2>
      {/* <p style={styles.counter}>You've petted the cat {counter} times!</p> */}
      <button style={styles.button} onClick={incrementCounter}>
        Pet the Cat
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f7f8fa',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  counter: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PetTheCat;
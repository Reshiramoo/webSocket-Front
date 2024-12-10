import React from 'react';

const CatInfo = ({ image, fact, counter }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt="Cat" style={styles.image} />
      <p style={styles.fact}>{fact}</p>
      <p style={styles.counter}>This cat has been petted {counter} times!</p>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  fact: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#333',
    fontWeight: '400',
    marginBottom: '10px',
  },
  counter: {
    fontSize: '1rem',
    color: '#555',
    fontWeight: '300',
  },
};

export default CatInfo;
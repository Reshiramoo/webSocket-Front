import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useItems } from '../Context/globalContext';
import LoadingOverlay from '../Components/LoadingOverlay';
import { handleError } from '../Utility/errorHandler';
import WebSocketComponent from '../Components/WebSocketComponent';



const Home = () => {
  const { state, fetchItem, incrementCounter } = useItems();
  const { item, counter, loading, error } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!item || Object.keys(item).length === 0) {
      fetchItem();
    }
  }, [item, fetchItem]);

  useEffect(() => {
    if (error) {
      handleError(error, navigate);
    }
  }, [error, navigate]);

  if (loading) {
    return <LoadingOverlay state={{ loading: true, message: 'Loading' }} />;
  }

  return (
    <div style={styles.container}>
      <WebSocketComponent/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f8fa',
    padding: '20px',
  },
};

export default Home;
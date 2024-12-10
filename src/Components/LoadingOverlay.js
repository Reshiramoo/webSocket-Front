import React from 'react';

const LoadingOverlay = ({ state }) => {
    const { loading, message = '로딩중' } = state;

    if (!loading) return null;

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999, // Above everything else
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.5rem',
        },
        spinner: {
            width: '50px',
            height: '50px',
            border: '5px solid rgba(255, 255, 255, 0.3)',
            borderTop: '5px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '1rem',
        },
        keyframes: `
            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        `,
    };

    // Inject keyframes for the spinner animation
    const styleSheet = document.styleSheets[0];
    if (styleSheet && styleSheet.insertRule) {
        try {
            styleSheet.insertRule(styles.keyframes, styleSheet.cssRules.length);
        } catch (error) {
            // Ignore if already inserted
        }
    }

    return (
        <div style={styles.overlay}>
            <div style={styles.spinner}></div>
            <p>{message}</p>
        </div>
    );
};

export default LoadingOverlay;
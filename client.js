const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
    console.log('Connected to WebSocket server.');
    ws.send('Hello Server!');
});

ws.on('message', (data) => {
    console.log('Message from server:', data);
});

ws.on('close', () => {
    console.log('Connection closed by server.');
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

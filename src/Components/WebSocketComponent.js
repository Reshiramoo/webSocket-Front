import useWebSocket from 'react-use-websocket';

const WebSocketComponent = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket('ws://localhost:3000', {
    onOpen: () => console.log('Connected to WebSocket'),
    onClose: () => console.log('Disconnected from WebSocket'),
    onMessage: (message) => console.log('message:', message)
  });

  return (
    <div>
      <h1>WebSocket Notifications</h1>
      {lastMessage ? <p>Notification: {lastMessage.data}</p> : <p>No notifications yet.</p>}
    </div>
  );
};

export default WebSocketComponent;

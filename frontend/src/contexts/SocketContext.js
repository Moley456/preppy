import { createContext } from 'react';
import io from 'socket.io-client';
const LIVE_URL =
  process.env.ENV === 'PROD' ? process.env.LIVE_URL : 'http://20.24.216.60';

const matchingSocket = io(`${LIVE_URL}:8080`, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 50,
  path: '/matching',
});

const codingSocket = io(`${LIVE_URL}:8080`, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 50,
  path: '/coding',
});

const roomSocket = io(`${LIVE_URL}:8080`, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 50,
  path: '/room',
});

const SocketContext = createContext({
  matchingSocket: matchingSocket,
  codingSocket: codingSocket,
  roomSocket: roomSocket,
});

export default SocketContext;

import { createContext } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext({
  matchingSocket: io.connect(`http://localhost:8001`),
  codingSocket: io.connect(`http://localhost:8002`),
});

export default SocketContext;
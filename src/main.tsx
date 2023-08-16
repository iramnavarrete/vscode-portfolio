import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider
      toastOptions={{
        defaultOptions: {
          position: 'bottom-right',
          variant: 'solid',
        },
      }}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
);

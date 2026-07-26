import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;

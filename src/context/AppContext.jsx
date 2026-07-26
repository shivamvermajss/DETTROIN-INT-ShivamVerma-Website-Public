import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

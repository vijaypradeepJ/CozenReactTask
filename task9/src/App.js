import React from 'react';
import { ThemeProvider} from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ 
        backgroundColor: isDarkTheme ? '#333' : '#FFF', 
        color: isDarkTheme ? '#FFF' : '#000', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <h1>Theme Switcher</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;

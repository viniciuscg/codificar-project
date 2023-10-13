import React from 'react';
import { GlobalProvider } from './context/globalContext';
import Home from './pages/Home';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <GlobalProvider>
      <StyledEngineProvider injectFirst>
        <Home/>
      </StyledEngineProvider>
    </GlobalProvider>
  )
}

export default App

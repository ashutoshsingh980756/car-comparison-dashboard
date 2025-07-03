import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CarProvider } from './context/CarProvider';
import './index.scss';
import App from './App.tsx';
import { Header } from './components/Header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarProvider>
      <Header />
      <App />
    </CarProvider>
  </StrictMode>
);

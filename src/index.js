import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetProvider } from './components/BudgetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BudgetProvider>
      <App />
  </BudgetProvider>
);


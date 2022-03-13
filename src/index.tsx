import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss';
import ShopContextProvider from './StateManagement/context';

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

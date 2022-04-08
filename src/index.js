import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from 'web3uikit';
//notification


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="3rhFGTGrZIp0fyHuA5SSLI1ythkUF8jhnNvFMLU1" serverUrl="https://ewr7zq1p7sju.usemoralis.com:2053/server">
      <NotificationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

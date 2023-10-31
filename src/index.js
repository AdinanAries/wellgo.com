import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CONSTANTS from './Constants/Constants';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={CONSTANTS.site_pages.account} element={<App />} />
        <Route path={CONSTANTS.site_pages.search} element={<App />} />
        <Route path={CONSTANTS.site_pages.trips} element={<App />} />
        <Route path={CONSTANTS.site_pages.deals} element={<App />} />
        <Route path={CONSTANTS.site_pages.explore} element={<App />} />
        <Route path={CONSTANTS.site_pages.landing} element={<App />} />
        <Route path={CONSTANTS.site_pages.support} element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

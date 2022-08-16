import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import RefrigeradoraLayout from './refrigeradora/RefrigeradoraLayout';
import CocinaLayout from './cocina/CocinaLayout'
import Top10Layout from './top10/Top10Layout'
ReactDOM.render(
  <React.StrictMode>
    <RefrigeradoraLayout />
    <CocinaLayout/>
    <Top10Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

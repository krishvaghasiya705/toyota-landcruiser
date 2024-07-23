import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from "./components/preloader/preloader.js"
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>,
  document.getElementById('root')
);

setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 5000);

reportWebVitals();
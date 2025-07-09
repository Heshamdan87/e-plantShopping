/**
 * Main Entry Point for Paradise Nursery Shopping Application
 * 
 * This file initializes the React application and sets up the Redux store
 * to provide global state management throughout the app.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import './index.css';

// Create the root element and render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import InfoStore from './store/InfoStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ user: new UserStore(), info: new InfoStore() }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


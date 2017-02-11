import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import store from './redux/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from '@thrash-industries/react-actioncable-provider';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { API_WS_ROOT } from './constants';


ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <App />
  </ActionCableProvider>,
  document.getElementById('root')
);



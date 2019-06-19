import'../public/style.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import {Root} from './components/Root' //IMPORT CLASS, TODO REDUX CONNECT DEFAULT EXPORT

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('app')
);

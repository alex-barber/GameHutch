import'../public/style.css'

import { render } from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import {Root} from './components/Root' //IMPORT CLASS, TODO REDUX CONNECT DEFAULT EXPORT
// import * as serviceWorker from

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('app')
);

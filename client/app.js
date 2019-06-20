import'../public/style.css'

import { render } from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store.js';
import {Root} from './components/Root' //IMPORT CLASS, TODO REDUX CONNECT DEFAULT EXPORT
import { PersistGate} from "redux-persist/integration/react";

// import * as serviceWorker from

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Root/>
      </PersistGate>
  </Provider>,
  document.getElementById('app')
);

// import'../public/style.css'

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
      <PersistGate loading={<Root />} persistor={persistor}>
    <Root/>
      </PersistGate>
  </Provider>,
  document.getElementById('app')
);

 if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
         console.error(registrationError)
     });
   });
 }

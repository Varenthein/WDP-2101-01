import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

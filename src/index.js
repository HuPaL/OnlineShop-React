import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './config/store'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';




const app = <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>

</Provider>
ReactDOM.render(app, document.getElementById('root'));


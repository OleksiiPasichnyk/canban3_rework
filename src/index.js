import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as uuidv4 from "uuidv4";


ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App key = {uuidv4}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';
import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

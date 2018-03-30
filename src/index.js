import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './components/contact_page';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

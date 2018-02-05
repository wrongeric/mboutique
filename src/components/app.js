import React from 'react';
import HomePage from './home_page';
import ContactPage from './contact_page';
import {BrowserRouter as Router, Route, Navlink} from 'react-router-dom';


const App = () => (
    <Router>
    <div className="container">
        <Route exact path="/" component={HomePage}></Route>
        {/*<Route path="/our_macarons" component={OurMacarons}></Route>*/}
        {/*<Route path="/gifts_parties" component={GiftsParties}></Route>*/}
        <Route path="/contact_info" component={ContactPage}></Route>
    </div>
    </Router>
);

export default App;

import React from 'react';
import '../assets/css/homepage.css';
import Header from './header';
import HomePage from './home_page';
import ContactPage from './contact_page';
import OurMacarons from './our-macarons';
import GiftsParties from './gifts_page';
import Footer from './footer';
import {BrowserRouter as Router, Route, Navlink} from 'react-router-dom';


const App = () => (
    <div className="container">
        <Header />
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/our-macarons" component={OurMacarons}></Route>
        <Route path="/gifts_parties" component={GiftsParties}></Route>
        <Route path="/contact_info" component={ContactPage}></Route>
        <Footer />
    </div>
);

export default App;

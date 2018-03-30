import React from 'react';
import macaronsImage from '../assets/images/macarons-image.png';

const Home = () => {
    return (
        <div className="welcomeInfoContainer">
            {/*<img src={macaronsImage} id="macaronsimage" />*/}
            {/*<br/>*/}
            {/*<br/>*/}
            <div className="welcomeInfo">
                <h1>Welcome to MBoutique!</h1>
                <p>We're a home-based baking business that specializes in the making of French macarons, a gluten-free pastry item made from ground almonds.
                    Our business began at the West Reading Farmers Market in 2011.  Last year (2013) marked our third and final season
                    of participation at the market.  MBoutique was established to pay homage to the delicate French confectionery,
                    the macaron.  Our shop has been recognized as the connoisseurs of this delicious French pastry because of the
                    wonderful variety of flavors from our great master chefs.
                </p>
                <br/>
                <br/>
                <h1>We love Macarons!</h1>
                <br/>
                <p>Renowned macarons, French delights of the moment can be met in a variety of flavors and colors
                    and are brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose
                    blanket jam, chocolate butter cream is spread inviting.
                    <br/>
                    <br/>
                    Macarons combines perfectly with champaigne or white wine, tea or hot chocolate, fresh juices and natural
                    fruit flavorred coffee and guarantee that these little delights soon become friend that you can
                    not break.
                </p>
                <br/>
                <br/>
                <h1>Find that flavor you like. Try a sample every day!</h1>
            </div>
        </div>
    );
}
export default Home;


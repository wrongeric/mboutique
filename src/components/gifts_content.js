import React from 'react';

const GiftsContent = () => {
    return (
        <div className="gift-container">
            <h2>Let's eat macarons!</h2>
            <p>We make it easy to share la passion du macaron with friends, family, and colleagues.  Choose from our array of premium gift options, or we can create a custom solution.  Contact us when you need help planning your celebration! <span>orders@mboutique.com</span></p>
            <h2>Gift Boxes</h2>
            <div className="gifts-background-image">
                <p>Our signature gift boxes make macarons the perfect gift for any occasion.</p>
                <ul className="gift-box">
                    <li>gift box of 6 macarons in raspberrywhite - $10</li>
                    <li>gift box of 12 macarons in white, pistachio, or violet - $20</li>
                    <li>gift box of 24 macarons in violet - $40</li>
                    <li>gift box of 36 macarons in silver - $60</li>
                    <li>gift box of 60 macarons in violet or silver - $120</li>
                </ul>
                <h2>Party Tower</h2>
                <div className="five-tiered">
                    <p>Our 5-tiered party tower becomes the centerpiece of any special event or private celebration, elegantly presenting your unique selection of sixty macarons.</p>
                    <ul className="gift-box">
                        <li>tower of 60 macarons - $120</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GiftsContent;
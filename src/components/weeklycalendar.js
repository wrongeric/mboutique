import React from 'react';
import '../assets/css/calendar.css';
import chocolate from '../assets/images/chocolate.png';
import coconut from '../assets/images/coconut.png';
import violetcassis from '../assets/images/violet-cassis.png';
import greentea from '../assets/images/green-tea.png';
import vanilla from '../assets/images/vanilla.png';
import passionfruit from '../assets/images/passion-fruit.png';
import coffee from '../assets/images/coffee.png';
import pistachio from '../assets/images/pistachio.png';
import lemon from '../assets/images/lemon.png';
import raspberry from '../assets/images/raspbery.png';
import rose from '../assets/images/rose.png';
import tiffanyblue from '../assets/images/tiffany-blue.png';
import almond from '../assets/images/almond.png';
import caramel from '../assets/images/caramel.png';

const Calendar = () => {
    return (
        <div className="schedule">
            <div className="day">
                <div>
                    <p className="day-div">Monday</p>
                    <p className="day-div">15:00-16:00</p>
                </div>
                <div className="macaron">
                    <p>Chocolate</p>
                    <img src={chocolate} />
                </div>
                <br/>
                <div className="coconut macaron">
                    <p>Coconut</p>
                    <img src={coconut} />
                </div>
            </div>

            <div className="day">
                <div>
                    <p className="day-div">Tuesday</p>
                    <p className="day-div">14:00-15:00</p>
                </div>

                <div className="macaron">
                    <p>Ice Cream</p>
                    <img src={violetcassis} />
                </div>
                <br/>

                <div className="macaron">
                    <p>Tea Latte</p>
                    <img src={greentea} />
                </div>
            </div>

            <div className="day">
                <div>
                    <p className="day-div">Wednesday</p>
                    <p className="day-div">09:00-10:00</p>
                </div>

                <div className="macaron">
                        <p>Passion</p>
                        <img src={passionfruit} />
                </div>
                <br/>
                <div className="vanilla macaron">
                    <p>Vanilla</p>
                    <img src={vanilla} />
                </div>
            </div>

            <div className="day">
                <div>
                    <p className="day-div">Thursday</p>
                    <p className="day-div">18:00-19:00</p>
                </div>

                <div className="macaron">
                    <p> Coffee </p>
                    <img src={coffee} />
                </div>
                <br/>
                <div className="macaron">
                    <span>Peanut</span>
                    <img src={pistachio} />
                </div>
            </div>

            <div className="day">

                <div>
                    <p className="day-div">Friday</p>
                    <p className="day-div">11:00-12:00</p>
                </div>

                <div className="macaron">
                    <p> Raspberry</p>
                    <img src={raspberry} />
                </div>
                <br/>
                <div className="lemon macaron">
                    <p>Lemonbar</p>
                    <img src={lemon} />
                </div>
            </div>

            <div className="day">
                <div>
                    <p className="day-div">Saturday</p>
                    <p className="day-div">18:00-19:00</p>
                </div>

                <div className="macaron">
                    <p>Pink Rose</p>
                    <img src={rose} />
                </div>
                <br/>
                <div className="macaron">
                    <p>Teal Blue</p>
                    <img src={tiffanyblue} />
                </div>
            </div>

            <div className="day">
                <div>
                    <p className="day-div">Sunday</p>
                    <p className="day-div">10:00-11:00</p>
                </div>

                <div className="macaron">
                    <span>Caramel</span>
                    <img src={caramel} />
                </div>
                <br/>
                <div className="almond macaron">
                    <p>Almond</p>
                    <img src={almond} />
                </div>
            </div>
        </div>

)};

export default Calendar;
import React, {Component} from 'react';
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

class weeklyCalendar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const weeklyCalendar = [
            {
                id: "monday",
                day: "Monday",
                hours: "15:00-16:00",
                macaron1: "chocoate",
                macImage1: chocolate,
                macaron2: "coconut",
                macImage2: coconut,
                class: "coconut macaron"
            },
            {
                id: "tuesday",
                day: "Tuesday",
                hours: "14:00-15:00",
                macaron1: "ice cream",
                macImage1: violetcassis,
                macaron2: "Tea Latte",
                macImage2: greentea,
                class: "teaLatte macaron"
            },
            {
                id: "wednesday",
                day: "Wednesday",
                hours: "15:00-16:00",
                macaron1: "passion",
                macImage1: passionfruit,
                macaron2: "vanilla",
                macImage2: vanilla,
                class: "vanilla macaron",
            },
            {
                id: "thursday",
                day: "Thursday",
                hours: "18:00-19:00",
                macaron1: "coffee",
                macImage1: coffee,
                macaron2: "peanut",
                macImage2: pistachio,
                class: "peanut macaron",
            },
            {
                id: "friday",
                day: "Friday",
                hours: "11:00-12:00",
                macaron1: "raspberry",
                macImage1: raspberry,
                macaron2: "lemonbar",
                macImage2: lemon,
                class: "lemon macaron"
            },
            {
                id: "saturday",
                day: "Saturday",
                hours: "18:00-19:00",
                macaron1: "pink rose",
                macImage1: rose,
                macaron2: "teal blue",
                macImage2: tiffanyblue,
                class: "tealBlue macaron",
            },
            {
                id: "sunday",
                day: "Sunday",
                hours: "10:00-11:00",
                macaron1: "caramel",
                macImage1: caramel,
                macaron2: "almond",
                macImage2: almond,
                class: "almond macaron",
            },
        ];

        const Calendar = weeklyCalendar.map((item, index) => {
            return (
                    <div key={index} className="day">
                        <div>
                            <p className="day-div">{item.day}</p>
                            <p className="time-div">{item.hours}</p>
                        </div>
                        <div className="macaron">
                            <p>{item.macaron1}</p>
                            <img src={item.macImage1}/>
                        </div>
                        <div className={item.class}>
                            <p>{item.macaron2}</p>
                            <img className="bottom-macaron-image" src={item.macImage2}/>
                        </div>
                    </div>
            )
        });
        return <div className="schedule">{Calendar}</div>;
    }}

export default weeklyCalendar;
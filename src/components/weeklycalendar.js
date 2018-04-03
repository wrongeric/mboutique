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
                hours: "3pm-4pm",
                macaron1: "chocolate",
                macImage1: chocolate,
                macaron2: "coconut",
                macImage2: coconut,
                class1: "macaron",
                class2: "coconut macaron"
            },
            {
                id: "tuesday",
                day: "Tuesday",
                hours: "2pm-3pm",
                macaron1: "ice cream",
                macImage1: violetcassis,
                macaron2: "Tea Latte",
                macImage2: greentea,
                class1: "macaron",
                class2: "teaLatte macaron"
            },
            {
                id: "wednesday",
                day: "Wednesday",
                hours: "3pm-4pm",
                macaron1: "passion",
                macImage1: passionfruit,
                macaron2: "vanilla",
                macImage2: vanilla,
                class1: "macaron",
                class2: "vanilla macaron",
            },
            {
                id: "thursday",
                day: "Thursday",
                hours: "6pm-7pm",
                macaron1: "coffee",
                macImage1: coffee,
                macaron2: "peanut",
                macImage2: pistachio,
                class1: "macaron",
                class2: "peanut macaron",
            },
            {
                id: "friday",
                day: "Friday",
                hours: "11am-12pm",
                macaron1: "raspberry",
                macImage1: raspberry,
                macaron2: "lemonbar",
                macImage2: lemon,
                class1: "macaron",
                class2: "lemon macaron"
            },
            {
                id: "saturday",
                day: "Saturday",
                hours: "6pm-7pm",
                macaron1: "pink rose",
                macImage1: rose,
                macaron2: "teal blue",
                macImage2: tiffanyblue,
                class1: "macaron",
                class2: "tealBlue macaron",
            },
            {
                id: "sunday",
                day: "Sunday",
                hours: "10am-11am",
                macaron1: "caramel",
                macImage1: caramel,
                macaron2: "almond",
                macImage2: almond,
                class1: "caramel macaron",
                class2: "almond macaron",
            },
        ];

        const Calendar = weeklyCalendar.map((item, index) => {
            return (
                    <div key={index} className="day">
                        <div>
                            <p className="day-div">{item.day}</p>
                            <p className="time-div">{item.hours}</p>
                        </div>
                        <div className={item.class1}>
                            <p>{item.macaron1}</p>
                            <img src={item.macImage1}/>
                        </div>
                        <div className={item.class2}>
                            <p>{item.macaron2}</p>
                            <img src={item.macImage2}/>
                        </div>
                    </div>
            )
        });
        return <div className="schedule">{Calendar}</div>;
    }}

export default weeklyCalendar;
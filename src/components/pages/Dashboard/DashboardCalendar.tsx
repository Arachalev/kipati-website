import classes from "./DashboardCalendar.module.css";
// import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import { useState } from "react";


const DashboardCalendar =()=>{
    const [date, setDate] = useState(new Date())

    return(
        <div>
            <Calendar onChange={setDate} value={date} className={classes.calendar} />

        </div>
    )
}
export default DashboardCalendar




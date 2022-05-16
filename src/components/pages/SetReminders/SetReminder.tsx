import classes from "./SetReminder.module.css"
import HeaderLogged from "../../UI/HeaderLogged"
import ReminderForm from "./ReminderForm"
import {IoIosArrowBack} from "react-icons/io"

const SetReminder = ()=>{
    return(
        <div className="max-w-[100vw] overflow-hidden">
            <HeaderLogged/>
            <div className={classes.setReminderContainer}>
            <div>
                <div className={classes.reminderButton}>
                    <IoIosArrowBack className="text-xl font-bold"/>
                    <h4>Set Reminder</h4>
                </div>
                <ReminderForm/>
            </div>

            </div>
           

        </div>
    )
}

export default SetReminder
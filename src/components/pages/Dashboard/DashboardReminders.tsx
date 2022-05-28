import classes from "./DashboardReminders.module.css";
import { DUMMY_DATA } from "../../UI/DummyData";
import SingleReminder from "../Reminders/SingleReminder";
import {IoIosArrowDown} from "react-icons/io"

// interface reminderProps{
//     title?: string,
//     dueDate?: string,
//     sentTo?: string,
//     nextReminder?: string,
//     status?: string,
//     statusClass?:string,
//     children?:any
// }

const allReminders = DUMMY_DATA.map((reminder) => (
   <SingleReminder
    key={reminder.key}
    title={reminder.title}
    dueDate={reminder.dueDate}
    sentTo={reminder.sentTo}
    nextReminder={reminder.nextReminder}
    status={reminder.status}
    statusClass={reminder.statusClass}
    
  />
));

const DashboardReminders = () => {
  return (
    <div className={classes.remindersContainer}>
          <div className={classes.sortContainer}>
            <div className={classes.sortReminders}>
              <h2>Reminders</h2>
              <span className={classes.sortSelector}>
                <h4>SORT BY: ALL</h4> <IoIosArrowDown className="text-xl" />
              </span>
            </div>
            <hr />
          </div>
      <div className={classes.allreminders}>
          {allReminders}
          
      </div>
        
    </div>
  );
};

export default DashboardReminders;

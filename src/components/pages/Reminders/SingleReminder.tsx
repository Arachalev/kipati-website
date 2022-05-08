import classes from "./SingleReminder.module.css"
import {FC} from "react"
import {BiPencil} from "react-icons/bi"
import {CgBox} from "react-icons/cg"
import {RiDeleteBin6Line} from "react-icons/ri"

interface reminderProps{
    title?: string,
    dueDate?: string,
    sentTo?: string,
    nextReminder?: string,
    status?: string,
    statusClass?:string,
}


const SingleReminders:FC<reminderProps> = (props)=>{
    const{title, dueDate,sentTo, nextReminder, status, statusClass}=props
    const statusClassName = `${statusClass} ${classes.status}`
    return(
        <div className={classes.singleReminder}>
            <div className={classes.reminderDetails}>
                <h4>{title}</h4>
                <p>Due {dueDate}</p>
            </div>
            <div className={classes.reminderDetails}>
                <p className={classes.sentReminder}>Sent to: {sentTo}</p>
                <p>Next Reminder {nextReminder}</p>
            </div>
            <div className={classes.reminderStatus} >
                <div className={classes.reminderActions}><BiPencil className={classes.reminderIcons}/> <CgBox className={classes.reminderIcons}/> <RiDeleteBin6Line className={classes.reminderIcons}/>  </div>
                <span className={statusClassName} >{status}</span>
            </div>

        </div>
    )
}

export default SingleReminders
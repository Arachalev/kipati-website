import classes from "./SingleNotification.module.css";
import { BsCheck2 } from "react-icons/bs";
import {BiCheck} from "react-icons/bi"

interface NotificationProps {
  title: string;
  text: string;
  time: string;
  headerClass?:string,
  textClass?:string
}


const SingleNotification = (props: NotificationProps) => {
  const { title, text, time,headerClass,textClass } = props;
  
  return (
    <div className={classes.notificationContainer}>
      <span className={classes.check}>
      <BsCheck2 className="text-2xl font-bold" />
      </span>
      <div className={classes.notificationInfo}>
        <h4 className={headerClass}>{title}</h4>
        <p className={textClass}>{text}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default SingleNotification;

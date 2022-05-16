import classes from "./SingleNotification.module.css";
import { BsCheck2 } from "react-icons/bs";
import {BiCheck} from "react-icons/bi"

interface NotificationProps {
  title: string;
  text: string;
  time: string;
}

const SingleNotification = (props: NotificationProps) => {
  const { title, text, time } = props;

  return (
    <div className={classes.notificationContainer}>
      <span>
      <BsCheck2 className="text-2xl font-bold" />
      </span>
      <div className={classes.notificationInfo}>
        <h4>{title}</h4>
        <p>{text}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default SingleNotification;

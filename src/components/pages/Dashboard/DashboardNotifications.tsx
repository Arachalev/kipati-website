import classes from "./DashboardNotifications.module.css";
import SingleNotification from "../Notifications/SingleNotification";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";




const DashboardNotifications = () => {
  const notificationsData = useSelector((state:RootState)=>state.notification.notification)
  const allNotifications = notificationsData.map((item) => (
    <SingleNotification
    key={item.key}
    title={item.title}
    text={item.text}
    time={item.time}
    headerClass="text-[14px]"
    textClass="text-[12px]"
    />
    ));
  return (
    <div className={classes.notificationsContainer}>
      <h4 className={classes.header}>Latest Notifications</h4>
      <div className={classes.allNotifications}>{allNotifications}</div>
    </div>
  );
};

export default DashboardNotifications;

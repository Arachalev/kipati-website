import classes from "./DashboardNotifications.module.css";
import SingleNotification from "../Notifications/SingleNotification";
import { DUMMY_DATA2 } from "../../UI/DummyData";

const allNotifications = DUMMY_DATA2.map((item) => (
  <SingleNotification
    key={item.key}
    title={item.title}
    text={item.text}
    time={item.time}
    headerClass="text-[14px]"
    textClass="text-[12px]"
  />
));

const DashboardNotifications = () => {
  return (
    <div className={classes.notificationsContainer}>
      <h4 className={classes.header}>Latest Notifications</h4>
      <div className={classes.allNotifications}>{allNotifications}</div>
    </div>
  );
};

export default DashboardNotifications;

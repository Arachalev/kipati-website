import Search from "../../UI/Search";
import HeaderLogged from "../../UI/HeaderLogged";
import classes from "./Notifications.module.css";
import { Fragment } from "react";
import SingleNotification from "./SingleNotification";
import { DUMMY_DATA2 } from "../../UI/DummyData";

const Notifications = () => {
  const allNotifications = DUMMY_DATA2.map((item) => (
    <SingleNotification
      title={item.title}
      time={item.time}
      text={item.text}
      key={item.key}
    />
  ));
  return (
    <div className={classes.notifications}>
      <HeaderLogged />
      <div className={classes.notificationContainer}>
        <Search />
        <div className={classes.allNotifications}>
          <div>
          <h4>All Notifications</h4>
          <hr />
          </div>
          
          <div className={classes.notifications}>
            {allNotifications}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Notifications;

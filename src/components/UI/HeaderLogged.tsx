import classes from "./HeaderLogged.module.css";
import Button from "./Button";
import { IoNotificationsSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import profile from "../../assets/images/testimony.png";

const HeaderLogged = () => {
  return (
    <header className={classes.header}>
      <div>
        <Button
          text={` Create a Reminder`}
          icon={<AiOutlinePlus/>}
          className="px-4 py-2 text-white"
        />
      </div>
      <div className={classes.profile}>
        <div className={classes.notification}>
          <IoNotificationsSharp className="text-5xl" /> <span>12</span>{" "}
        </div>
        <div className={classes.profileInfo}>
          <h4>Ajadioni Francis</h4>
          <p>Admin</p>
        </div>
        <div className={classes.profileImage}>
          <img src={profile} />
        </div>
      </div>
    </header>
  );
};

export default HeaderLogged;

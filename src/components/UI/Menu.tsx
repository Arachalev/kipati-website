import classes from "./Menu.module.css";
// import logo from "../../assets/images/kipati2.svg";
// import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Button from "./Button";

const Menu = () => {
  return (
    <div className={classes.menu}>
      {/* <div className={classes.logo}>
        <AiOutlineMenu className="text-2xl" /> 
        <span>
          <img src={logo} />
        </span>
      </div> */}
      <div className={classes.optionsContainer}>
        <div className={classes.options}>
          <MdDashboard className="text-2xl text-links" /> <p>Dashboard</p>
        </div>
        <div className={classes.options}>
          <BsAlarm className="text-2xl text-links" /> <p>Reminders</p>
        </div>
        <button className={classes.optionsButton}>
          <BsPerson className="text-3xl  text-links" /> Profile
        </button>
      </div>
      <div className={classes.goPremium}>
        <Button text="Go Premium" className="px-10 py-2" />
        <div className={classes.logOut}>
          <AiOutlinePoweroff className="text-2xl text-links" /> Log Out
        </div>
      </div>
    </div>
  );
};

export default Menu;

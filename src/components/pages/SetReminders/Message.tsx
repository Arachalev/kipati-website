import classes from "./Message.module.css";
import { GrStar } from "react-icons/gr";

const text = {
  /* <textarea
name=""
id=""
cols={30}
rows={10}
placeholder="This is a reminder that [deadline/e
xpiration date] for your [reminder type e.g d
  river's license renewal] is just a week aw
  ay, on the [date]. Kindly get your [require
      ments] ready for [filing/submission]"
></textarea> */
};
const classname = `${classes.slider} ${classes.round}`;
const Message = () => {
  return (
    <div >
      <form action="" className={classes.form}>
        <div>
          <div className={classes.label}>
            <label htmlFor="">Message to recipients</label>
            <span className={classes.important}>
              <GrStar />
            </span>
          </div>
          <div className={classes.messageBody}>
            <h4>Hello(Recipients First Name)</h4>
            <p>
              This is a reminder that [deadline/expiration date] for your
              [reminder type e.g driver's license renewal] is just a week away,
              on the [date]. Kindly get your [requirements] ready for
              [filing/submission]
            </p>
            <div className={classes.editButton}>
              <button> Edit Text</button>
              <p>(PRO)</p>
            </div>
          </div>
        </div>
        <div className={classes.alertsContainer}>
          <div className={classes.alerts}>
            <h4>Email Alerts</h4>
            <label className={classes.switch}>
              {/* <label htmlFor="">SMS Alerts(PRO)</label> */}
              <input type="checkbox" name="" id="" />
              <span className={classes.slider}></span>
            </label>
          </div>

          <div className={classes.alerts}>
            <h4>SMS Alers (PRO)</h4>
            <label className={classes.switch}>
              {/* <label htmlFor="">SMS Alerts(PRO)</label> */}
              <input type="checkbox" name="" id="" />
              <span className={classes.slider}></span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Message;

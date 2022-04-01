import { FC } from "react";
import classes from "./Works.module.css";
import icon1 from "../../../assets/images/user.svg";
import icon2 from "../../../assets/images/calendar.svg";
import icon3 from "../../../assets/images/clock.svg";
import Button from "../../UI/Button"
import work1 from "../../../assets/images/work1.png"
import work2 from "../../../assets/images/work2.png"


interface worksProps {
  title: String;
  icon?: any;
  text: String;
}
const SingleWorks: FC<worksProps> = (props) => {
  return (
    <div className={classes.singleWorks}>
      <h3>{props.title}</h3>
      <img src={props.icon} />
      <p>{props.text}</p>
    </div>
  );
};

const Works = () => {
  return (
    <div className={classes.works}>
      <h2 className={classes.worksH2}>How Kipati Works</h2>
      <div className={classes.worksContainer}>
        <SingleWorks
          title=" Sign Up"
          text="Start your journey with a simple email sign-up, and get instant access to a cloud-based reminder software, anytime, anywhere, and on any device"
          icon={icon1}
        />
        <SingleWorks
          title=" Set a Reminder"
          text="Create a customizable reminders and handle a long list of recipients seamlessly with a smart tool that allows you upload contacts as CSV file"
          icon={icon2}
        />
        <SingleWorks
          title="Get a Reminder"
          text="Get reminders to all people that matter, when it matters. whether it concerns compliance deadlines for filing taxes, license renewal, and more."
          icon={icon3}
        />
      </div>
      <div className={classes.plans}>
        <div className={classes.missed}>
          <h2>Missed deadliness cost a lot more than this timely Reminder</h2>
          <p>
            Upgrade to our Premium Plan now to enjoy amazing flexibility and
            ease. Kipati Premium keeps business and professionals organized and
            safe from fines and penalties for late filing and missed deadlines
            with one smart tool that gives you the power to manage unlimited
            reminders and an unlimited pool of recipients, on autopilot
          </p>
          <Button text="Compare Plans" className=" py-3 px-6 "/>

        </div>
        <div className={classes.reminders}>
            <span><img src={work1}/></span>
            <span className={classes.topImg}><img src={work2}/></span>

        </div>
      </div>
    </div>
  );
};

export default Works;

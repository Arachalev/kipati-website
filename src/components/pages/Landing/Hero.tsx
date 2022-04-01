import classes from "./Hero.module.css";
import Header from "../../UI/Header";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import hero1 from "../../../assets/images/hero1.png"

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
      <main className={classes.main}>
        <div className={classes.intro}>
          <h1>Never Get Penalized for Missed Deadlines</h1>
          <p>
            Kipati is one cloud-based automated reminder with everything you
            need to stay up-to-date with deadlines and steer clear of penalties
            for late filing
          </p>
          <div className={classes.buttonContainer}> <Button text="Sign Up for Free" className=" w-48 h-14"/>
          <button className={classes.button}><Link to="#">Why Kipati?</Link></button>
          </div>
        </div>
        <div className={classes.img}>
            <img src={hero1}/>

        </div>
      </main>
    </div>
  );
};

export default Hero;

import classes from "./LearnMore.module.css";
import Button from "../../UI/Button";
import little from "../../../assets/images/little.png";
import little1 from "../../../assets/images/little.png";


const LearnMore = () => {
  return (
    <div className={classes.littleMore}>
      <div className={classes.images}>
        <span>
          <img src={little} />
        </span>
        <span className={classes.mainImg}>
          <img src={little1} />
        </span>
      </div>
      <div className={classes.message}>
        <h2>
          From the Big things to Little ones, Kipati is your friendly reminder{" "}
        </h2>
        <p>
          Kipati is a cloud-based automated reminder created especially for
          business managers, professionals, and just about anyone with pressing
          deadlines, license renewal dates, and due dates for filing compliance
          requirements
        </p>
        <Button text="Learn More" className=" px-10 py-3 w-fit"/>
      </div>
    </div>
  );
};

export default LearnMore;

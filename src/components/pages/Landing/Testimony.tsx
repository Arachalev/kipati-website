import classes from "./Testimony.module.css";
import SingleTestimony from "./SingleTestimony";
import img1 from "../../../assets/images/testimony.png";

const Testimony = () => {
  const message =
    "We no longer need to bother if our operations license is up to date. We no longer have to wait until it's too late to file for a renewal of our compliance certificate with the regulators. Kipati has saved us precious time and money";
  return (
    <div className={classes.testimony}>
      <h2>Why Become our next Happy User</h2>
      <div className={classes.testimonyContainer}>
        <SingleTestimony
          name="Black Widow"
          title="Project Manager @ Google"
          src={img1}
          message={message}
        />
        <SingleTestimony
          name="Black Widow"
          title="Project Manager @ Google"
          src={img1}
          message={message}
        />
        <SingleTestimony
          name="Black Widow"
          title="Project Manager @ Google"
          src={img1}
          message={message}
        />
        <SingleTestimony
          name="Black Widow"
          title="Project Manager @ Google"
          src={img1}
          message={message}
        />
        <SingleTestimony
          name="Black Widow"
          title="Project Manager @ Google"
          src={img1}
          message={message}
        />
        
        <SingleTestimony
          name="Black Widow"
          title="Project Manager @ Google"
          src={img1}
          message={message}
        />
      </div>
    </div>
  );
};

export default Testimony;

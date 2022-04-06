import classes from "./ProfileInfo.module.css";
import { FC } from "react";

interface profileDetails {
  title1: string;
  detail1: string;
  title2: string;
  detail2: string;
  buttonText: string;
}

const ProfileInfo: FC<profileDetails> = (props) => {
  return (
    <div  className={classes.profileInfo}>
      <div className={classes.info}>
        <div >
          <p >{props.title1}</p>
          <h4>{props.detail1}</h4>
        </div>
        <div>
          <p>{props.title2}</p>
          <h4>{props.detail2}</h4>
        </div>
      </div>
      <button>{props.buttonText}</button>
    </div>
  );
};

export default ProfileInfo;

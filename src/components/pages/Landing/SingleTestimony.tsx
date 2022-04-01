import classes from "./SingleTestimony.module.css";
import { FC } from "react";

import quote from "../../../assets/images/quote.png";

interface testimonyProps {
  name: string;
  title: string;
  message: string;
  src: any;
}

const SingleTestimony: FC<testimonyProps> = (props): JSX.Element => {
  return (
    <div className={classes.single}>
      <div className={classes.details}>
        <span>
          <img src={props.src} />
        </span>
        <div className={classes.name}>
          <h4>{props.name}</h4>
          <p>{props.title}</p>
        </div>
      </div>
      <div className={classes.quote}>
        <span>
          <img src={quote} />
        </span>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default SingleTestimony;

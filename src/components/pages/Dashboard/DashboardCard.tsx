import classes from "./DashboardCard.module.css";
import { IoIosArrowForward } from "react-icons/io";

interface cardProps {
  amount: number;
  text: string;
  link: string;
  linkText: string;
}

const DashboardCard = (props: cardProps) => {
  const { amount, text, link, linkText } = props;
  return (
    <div className={classes.cardContainer}>
      <div className={classes.amount}>
        <h2>{amount}</h2>
        <p>{text}</p>
      </div>
      <div className={classes.linksContainer}>
        <div  className={classes.link}>
          <p>{linkText}</p>
          <IoIosArrowForward />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default DashboardCard;

import classes from "./Header.module.css";
import logo from "../../assets/images/kipati.svg";
import { Link } from "react-router-dom";
import dots from "../../assets/images/dots.svg";
import Button from "./Button";


const Header = () => {
  return (
    <header>
      <nav>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.links}>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Pricing</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={classes.login}>
          <button className={classes.log}>
            <Link to="#">Log in</Link>
          </button>
          <Button className= "px-4" text="Create Account ">            
            <Link to="#"></Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

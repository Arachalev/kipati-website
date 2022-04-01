import classes from "./Footer.module.css";
import logo from "../../assets/images/kipati.svg";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerIntro}>
          <span>
            <img src={logo} />
          </span>
          <p>
            Kipati is a cloud-based automated reminder created especially for
            business managers, professionals, and just about anyone with
            pressing deadlines, license renewal dates, and due dates for filing
            compliance requirements.
          </p>
          <div className={classes.icons}>
            <FiFacebook />
            <FiTwitter />
            <FiLinkedin />
          </div>
        </div>

        <div className={classes.footerLinks}>
          <h3>Company</h3>
          <ul className={classes.footerUl}>
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
        <div className={classes.footerInsights}>
          <h3>Get real Insights on Compliance</h3>
          <h4>Subscribe to the Kipati Newletter</h4>
          <div className={classes.subscribe}>
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.privacy} >
        <ul>
          <li>
            <p>&copy; Kipati 2022</p>
          </li>
          <li>
            <Link to="#">Terms of Service</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

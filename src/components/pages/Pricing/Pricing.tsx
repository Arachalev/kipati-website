import classes from "./Pricing.module.css";
import { Fragment, useState } from "react";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Button from "../../UI/Button";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdEuroSymbol } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import shield from "../../../assets/images/shield.svg";
import {IoIosArrowDown} from "react-icons/io"
const Pricing = () => {
  return (
    <Fragment>
      <div className={classes.pricing}>
        <Header />
        <div className={classes.pricingHero}>
          <h2>Why Everyone is Using Kipati Premium</h2>
          <div className={classes.pricingOptions}>
            <ul>
              <li className="bg-links rounded-tl-md rounded-bl-md  ">Monthly</li>
              <li>Quarterly</li>
              <li>Bi-anually</li>
              <li>Yearly</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.prices}>
        <div className={classes.pricingPlans}>
          {/* <form>
                        <select name="currencies" id="currencies">
                            <option value="dollars"><BsCurrencyDollar/></option>
                            <option value="euros"><MdEuroSymbol/></option>
                        </select>
                    </form> */}

          <div className={classes.pricingCurrency}>
            <BsCurrencyDollar className="p-1 bg-[#F2FDFF] rounded-sm text-3xl" /> <IoIosArrowDown/>
          </div>
          <h4 >Free Plan</h4>
          <div className={classes.pricingLogo}>
            <img src={shield} />
          </div>
          <h3>
            $0<span>/month</span>
          </h3>
          <div className={classes.perksContainer}>
            <div className={classes.pricingPerks}>
              <p>Up to 5 Reminders Setup</p>
              <BsCheckCircleFill />
            </div>
            <div className={classes.pricingPerks}>
              <p>Email Alert</p>
              <BsCheckCircleFill />

            </div>
          </div>
          <button className={classes.pricingButton}>Start for Free</button>
        </div>
        <div className={classes.pricingPlans}>
          {/* <form>
                        <select name="currencies" id="currencies">
                            <option value="dollars"><BsCurrencyDollar/></option>
                            <option value="euros"><MdEuroSymbol/></option>
                        </select>
                    </form> */}

          <div className={classes.pricingCurrency}>
            <BsCurrencyDollar className="p-1 bg-[#F2FDFF] rounded-sm text-3xl" /> <IoIosArrowDown/>
          </div>
          <h4 >Free Plan</h4>
          <div className={classes.pricingLogo}>
            <img src={shield} />
          </div>
          <h3>
            $50<span>/month</span>
          </h3>
          <div className={classes.perksContainer}>
            <div className={classes.pricingPerks}>
              <p>Unlimited Reminders Setup</p>
              <BsCheckCircleFill />
            </div>
            <div className={classes.pricingPerks}>
              <p>Unlimited Recipient Listing</p>
              <BsCheckCircleFill />

            </div>
            <div className={classes.pricingPerks}>
              <p>SMS Alert</p>
              <BsCheckCircleFill />

            </div>
            <div className={classes.pricingPerks}>
              <p>Email Alert</p>
              <BsCheckCircleFill />

            </div>
            <div className={classes.pricingPerks}>
              <p>Upload Recipients Contacts as CSV </p>
              <BsCheckCircleFill />

            </div>
            <div className={classes.pricingPerks}>
              <p>24/7 Customer Support</p>
              <BsCheckCircleFill />

            </div>
          </div>
          <Button className="px-8 py-3 text-white mt-8" text="Start for Free"></Button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Pricing;

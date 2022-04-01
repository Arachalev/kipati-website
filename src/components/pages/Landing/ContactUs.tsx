import classes from "./ContactUs.module.css";
import arrow from "../../../assets/images/arrow.svg"
import Button from "../../UI/Button";

const ContactUs = () => {
  return (
    <div className={classes.contactUs}>
      <div className={classes.questions}>
        <h2>Still Got those Questions?<br/> Ask Kipati 24-7</h2>
        <p>
          Our customer support agents are always ready to help you get the best
          out<br/> of Kipati. Please feel free to send all your enquiries about
          Kipati here
        </p>
        <span><img src={arrow}/></span>

      </div>
      <div className={classes.form}>
          <form>
              <div className={classes.inputContainer}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Ajadioni Francis"/>
              </div>
              <div className={classes.inputContainer}>
                  <label htmlFor="email">Name</label>
                  <input type="text" id="email" placeholder="francis@kipati.com"/>
              </div>
              <div className={classes.inputContainer}>
                  <label htmlFor="message">Name</label>
                  <textarea   id="message" placeholder=" Type your message here..."/>
              </div>
              <Button text="Contact Us" type="submit" className="border py-2  "/>
          </form>

      </div>
    </div>
  );
};

export default ContactUs;

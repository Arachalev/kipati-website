import classes from "./RecipientsForm.module.css";
import { BsPlusLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { GrStar } from "react-icons/gr";

const RecipientsForm = () => {
  const data = (
    <div className={classes.data}>
      <div className={classes.dataDetails}>
        <p>First Name: Francis</p>
        <p>Last Name: Ajadioni</p>
        <p>Email: ajadioni@gmail.com</p>
        <p>Phone: +2348185622857</p>
      </div>
      <span className={classes.dataIcon}>
        <IoMdClose />
      </span>
    </div>
  );

  const formHandler = (e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.addRecipientsContainer}>
          <div className={classes.addRecipients}>
            <div className={classes.plus}>
              <span className={classes.addIcon}>
                <BsPlusLg />
              </span>
              <div className={classes.label}>
                <label>Add Reciepients </label>
                <span className={classes.important}>
                  <GrStar />
                </span>
              </div>
            </div>
            <p>Upload Recipients (PRO) </p>
          </div>
          <p className={classes.csv}>
            Type in the name of the recipient or upload a CSV file of the
            recipients
          </p>
        </div>
        <div>{data}</div>

        <div className={classes.inputContainer}>
          <div className={classes.inputTitle}>
            <h4>Enter Recipient Details</h4>
            <p>Choose from Recipient List</p>
          </div>
          <div className={classes.mainInputContainer}>
            <div className={classes.inputControl}>
              <label htmlFor="">First Name:</label>
              <input type="text" />
            </div>
            <div className={classes.inputControl}>
              <label htmlFor="">Last Name:</label>
              <input type="text" />
            </div>
            <div className={classes.inputControl}>
              <label htmlFor="">Company Name:</label>
              <input type="text" />
            </div>
            <div className={classes.inputControl}>
              <label htmlFor="">Role: </label>
              <input type="text" />
            </div>
            <div className={classes.inputControl}>
              <label htmlFor="">Email:</label>
              <input type="email" />
            </div>
            <div className={classes.inputControl}>
              <label htmlFor="">Phone:</label>
              <input type="tel" />
            </div>
            <div className={classes.SubmitIcon} onClick={formHandler}>
              <BsPlusLg />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecipientsForm;

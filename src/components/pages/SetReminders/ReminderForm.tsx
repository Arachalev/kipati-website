import classes from "./ReminderForm.module.css";
import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import Button from "../../UI/Button";
import SetForm from "./SetForm";
import RecipientsForm from "./RecipientsForm";
import SelectForm from "./SelectForm";
import AmountForm from "./AmountForm";

const ReminderForm = () => {
  const DummyData = [
    "Company Card","Birth Certificate", "National Passport"
  ]
  const DummyData2 = ["14/09/22"]
  return (
    <div className={classes.formContainer}>
      <div className={classes.forms}>
        <div className={classes.leftForm}>
          <div className={classes.leftFormContainer}>
            <SelectForm
              label="Reminder Type"
              example="e.g Driver's License"
              type="text"
            />
            <SetForm
              label="Add Requirements"
              type="text"
              example="e.g Birth Certificate"
              requirements={DummyData}
            />
            <RecipientsForm />
          </div>
        </div>
        <div className={classes.rightForm}>
         <SelectForm label="Due Date " type="date"/>
          <SetForm label="Add Reminder Date" type="date" requirements={DummyData2} />
          <AmountForm/>
          <div>
            <label htmlFor="">Message to recipients</label>
            <div>
              <h4>Hello(Recipients First Name)</h4>
              <p>
                This is a reminder that [deadline/expiration date] for your
                [reminder type e.g driver's license renewal] is just a week
                away, on the [date]. Kindly get your [requirements] ready for
                [filing/submission]
              </p>
            </div>
            <div>
              <button> Edit Text</button>
              <p>(PRO)</p>
            </div>
            {/* <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="This is a reminder that [deadline/e
              xpiration date] for your [reminder type e.g d
                river's license renewal] is just a week aw
                ay, on the [date]. Kindly get your [require
                    ments] ready for [filing/submission]"
            ></textarea> */}
          </div>
          <div>
            <div>
              <label htmlFor="">Email Alerts</label>
              <input type="checkbox" name="" id="" />
              <span></span>
            </div>
            <div>
              <label htmlFor="">SMS Alerts(PRO)</label>
              <input type="checkbox" name="" id="" />
              <span></span>
            </div>
          </div>
          <Button
            text="Create New Reminder"
            type="submit"
            className="text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ReminderForm;

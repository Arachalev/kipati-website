import classes from "./ReminderForm.module.css";
import Button from "../../UI/Button";
import SetForm from "./SetForm";
import RecipientsForm from "./RecipientsForm";
import SelectForm from "./SelectForm";
import AmountForm from "./AmountForm";
import Message from "./Message";

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
          <Message/>
          <Button
            text="Create New Reminder"
            type="submit"
            className="text-xl px-4 py-3 mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ReminderForm;

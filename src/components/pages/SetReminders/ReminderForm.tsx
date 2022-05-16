import classes from "./ReminderForm.module.css";
import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import Button from "../../UI/Button";

const ReminderForm = () => {
  return (
    <div className={classes.formContainer}>
      <form>
        <div>
          <div>
            <div>
              <label htmlFor="type">Reminder Type</label>
              <p>e.g Driver's License</p>
            </div>
            <input type="text" name="type" id="type" />
          </div>
          <div>
            <div>
              <span>
                <BsPlusLg />
              </span>
              <label htmlFor="requirements">Add Requirements</label>
              <p>e.g Birth Certificate</p>
            </div>
            <div>
              <p>Birth Certificate</p>
              <span>
                <GrClose />
              </span>
            </div>
            <div>
              <input type="text" name="" id="" />
              <span>
                <BsPlusLg />
              </span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>
                  <BsPlusLg />
                </span>
                <label>Add Reciepients </label>
                <p>Upload Recipients (PRO) </p>
              </div>
              <p>
                Type in the name of the recipient or upload a CSV file of the
                recipients
              </p>
            </div>
            <div>
              <div>
                <p>First Name: Francis</p>
                <p>Last Name: Ajadioni</p>
                <p>Email: Ajadionifrancis@gmail.com</p>
                <p>Phone : +234-12-345-67-890</p>
              </div>
              <span>
                <GrClose />
              </span>
            </div>
            <div>
              <div>
                <h4>Enter Recipient Details</h4>
                <p>Choose from Recipient List</p>
              </div>
              <div>
                <div>
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder="Francis" />
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder="Ajadioni" />
                </div>
                <div>
                  <label htmlFor="">Company Name</label>
                  <input type="text" placeholder="Kipati" />
                </div>
                <div>
                  <label htmlFor="">Role </label>
                  <input type="text" placeholder="Team Lead" />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="ajadionifrancis@gmail.com" />
                </div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input type="tel" placeholder="+2348123456789" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">Due Date</label>
            <input type="date" name="" id="" />
          </div>
          <div>
            <div>
              <span>
                <BsPlusLg />
              </span>
              <label htmlFor="">Add Reminders Date</label>
              <div>
                <p>14/09/22</p>
                <span>
                  <GrClose />
                </span>
              </div>
            </div>
            <div>
              <input type="date" name="" id="" />
              <span>
                <BsPlusLg />
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="">Amount (If Any)</label>
            <input type="number" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Message to recipients</label>
            <div>
                <h4>Hello(Recipients First Name)</h4>
                <p>This is a reminder that [deadline/expiration date] for your [reminder type e.g driver's license renewal] is just a week away, on the [date]. Kindly get your [requirements] ready for [filing/submission]</p>
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
          <Button text='Create New Reminder' type="submit" className="text-2xl"/>

        </div>
      </form>
    </div>
  );
};

export default ReminderForm;

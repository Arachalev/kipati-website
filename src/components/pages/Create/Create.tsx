import { create } from "domain";
import classes from "./Create.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import dots from "../../../assets/images/dots.svg";
import kipati from "../../../assets/images/kipati.svg";
import Button from "../../UI/Button";

const Create = () => {
  return (
    <div className={classes.create}>
      <div className={classes.account}>
        <h3>Create an account</h3>
        <form className={classes.form}>
          <div className={classes.formContainer}>
            <div className={classes.formInput}>
              <label>First Name</label>
              <input type="text" placeholder="Francis" />
            </div>
            <div className={classes.formInput}>
              <label>Last Name</label>
              <input type="text" placeholder="Ajadioni" />
            </div>
            <div className={classes.formInput}>
              <label>Email</label>
              <input type="text" placeholder="ajadionifrancis@kipati.com" />
            </div>
            <div className={classes.formInput}>
              <label>Password</label>
              <input type="password" placeholder="**********" />
            </div>
          </div>

          <p className={classes.privacy}>
            By signing up, you confirm that you've read and accepted our
            <a>
              <Link to="#"> Terms of Service</Link>
            </a>{" "}
            and
            <a>
              <Link to="#"> Privacy Policy</Link>
            </a>
            .
          </p>
          <Button type="submit" text="Create Account" className=" mt-8 py-3 w-full"/>
        </form>
        <div className={classes.alternative}>
          <h4>OR</h4>
          <button>
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>
          <p>
            Already have an account?{" "}
            <a>
              <Link to="#">Sign in</Link>
            </a>
          </p>
        </div>
      </div>
      <div className={classes.kipati}>
        <h3>Get Reminders that Matter, when it mattter most with</h3>
        <div>
          <img src={kipati} />
        </div>
      </div>
    </div>
  );
};

export default Create;

import classes from "./SelectForm.module.css";
import { GrStar } from "react-icons/gr";

interface selectProp {
  label?: string;
  example?: string;
  type?: string;
}

const SelectForm = (props: selectProp) => {
  const { label, example, type } = props;
  return (
    <div className={classes.selectForm}>
      <form action="">
        <div className={classes.title}>
          <div className={classes.label}>
            <label htmlFor="type">{label}</label>
            <span className={classes.important}>
              <GrStar />
            </span>
          </div>
          <p>{example}</p>
        </div>
        <input type={type} name="type" id="type" />
      </form>
    </div>
  );
};

export default SelectForm;

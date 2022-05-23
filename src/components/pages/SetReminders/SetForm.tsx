import classes from "./SetForm.module.css";
import { BsPlusLg } from "react-icons/bs";
import {IoMdClose} from "react-icons/io"

interface formProps {
  type: string;
  label: string;
  example?: string,
  requirements?:Array<string>,
}

const SetForm = (props: formProps) => {
  const { type, label, example, requirements } = props;
  const data = requirements?.map( items=>(
    <div className={classes.data}>
      <p>{items}</p>
      <span className={classes.dataIcon} >
        <IoMdClose  />        
      </span>
    </div>
  )
  );

  const formHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" >
        <div>
          <div className={classes.labelContainer}>
            <div className={classes.label}>
              <span className={classes.plus}>
                <BsPlusLg />
              </span>
              <label htmlFor="requirements">{label}</label>
            </div>
            <p>{example}</p>
          </div>
          <div className={classes.dataContainer}>
            {data}
          </div>

          <div className={classes.input}>
            <input type={type} name="" id="" />
            <span className={classes.submitPlus}>
              <BsPlusLg onClick={formHandler}  />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SetForm;

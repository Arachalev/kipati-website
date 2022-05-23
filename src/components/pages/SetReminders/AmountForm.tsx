import classes from "./AmountForm.module.css";
import {FaDollarSign} from "react-icons/fa"
import { FaEuroSign } from "react-icons/fa";
import { FaPoundSign } from "react-icons/fa";
import Select from "react-select"


const options = 
[
    {value:"Dollars" , label: <FaDollarSign/>}, {value:"euros", label:<FaEuroSign/>},{value:"pounds", label:<FaPoundSign/>} 
]
const AmountForm = () => {
  return (
    <div className={classes.amountForm}>
      <form action="">
        <label htmlFor="">Amount (If Any)</label>
        <div>
          <input type="number" name="" id="" />
          <Select options={options}  className={classes.select}/>
          
        </div>
      </form>
    </div>
  );
};

export default AmountForm;

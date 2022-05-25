import classes from "./AmountForm.module.css";
import {FaDollarSign} from "react-icons/fa"
import { FaEuroSign } from "react-icons/fa";
import { FaPoundSign } from "react-icons/fa";
import Select,{components} from "react-select"


const options = 
[
    {value:"Dollars" , label: <FaDollarSign className=" text-white"/>}, {value:"euros", label:<FaEuroSign className=" text-white"/>},{value:"pounds", label:<FaPoundSign className=" text-white"/>} 
];


const customStyles={
  option:(provided:any,state:any)=>({
    ...provided,
    background:" rgb(0, 215, 255)",
    // border:'1px dotted red',
    // border: "0",
    // color: state.isSleceted?"red":"black",
    // padding:5,
  }),
  placeholder:(defaultStyles:any)=>{
      return{
        ...defaultStyles,
        color:"white"
      }
  },
  control:()=>({
    width: "fit-content",
    color:"white",
    backgroundColor:"black",
    border:"0",
    borderRadius:"10px", 
    display:"flex",
    placeholder: "white",
    backgroundImage:"linear-gradient(90deg,rgb(89, 89, 90)    0%,  rgb(0, 215, 255) 100% )",
    padding:0,

    
    
  }),
  // singleValue:(provided:any,state:any)=>{
  //   const opacity = state.isDisabled?0.5:1;
  //   const transition = "opacity 300ms";

  //   return{...provided, opacity, transition};

  // }
};

 

const AmountForm = () => {
  return (
    <div className={classes.amountForm}>
      <form action="">
        <label htmlFor="">Amount (If Any)</label>
        <div className={classes.amountInput}>
          <input type="number" name="" id=""  />
          <Select options={options} placeholder={<FaDollarSign/>}    className={classes.select} styles={customStyles}/>
          
        </div>
      </form>
    </div>
  );
};

export default AmountForm;

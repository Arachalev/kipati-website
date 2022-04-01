import classes from "./Business.module.css";
import {AiOutlineDropbox} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FcDoughnutChart} from "react-icons/fc"
import microsoft from "../../../assets/images/microsoft.png"
import legal from "../../../assets/images/legal.png"


const Business = ()=>{
    return(
        <div className={classes.business}>
            <h3>Join 100+ businesses [in Nigeria] that always meet deadlines with Kipati</h3>
            <div className={classes.icons}>
                <AiOutlineDropbox className="text-[4rem]"/>
                <FcGoogle className="text-[4rem]"/>
                <img src={microsoft}/>
                <FcDoughnutChart className="text-[4rem]"/>
                <img src={legal}/>

            </div>
        </div>
    )
}

export default Business
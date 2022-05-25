import classes from "./Button.module.css"
import dots from "../../assets/images/dots.svg";
import { FC } from "react";

interface ButtonProps{
    type?: 'submit' | 'reset' | 'button',
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    text?: String,
    className?: String,
    icon?:any


}
 

const Button: FC<ButtonProps> = ( props) : JSX.Element =>{
    const className = `${classes.button} ${props.className} `
    return(
        <button type={props.type} onClick={props.onClick} className={className}  >
              <span className={classes.dots}>
                <img src={dots} />
              </span> 
              <div className="flex justify-center items-center gap-2">
              {props.icon}
              {props.text}

              </div>
              
            </button>
    )
}

export default Button
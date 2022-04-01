import classes from "./Button.module.css"
import dots from "../../assets/images/dots.svg";
import { FC } from "react";

interface ButtonProps{
    type?: 'submit' | 'reset' | 'button',
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    text?: String,
    className?: String,


}
 

const Button: FC<ButtonProps> = ( props) : JSX.Element =>{
    const className = `${classes.button} ${props.className} `
    return(
        <button type={props.type} onClick={props.onClick} className={className}  >
              <span className={classes.dots}>
                <img src={dots} />
              </span> 
              {props.text}
            </button>
    )
}

export default Button
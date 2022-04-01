import classes from "./FaqQuestions.module.css"
import {FC,useState} from "react"
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"


interface faqProps{
    question:string,
    answer:string

}


const FaqQuestions: FC<faqProps> = (props):JSX.Element=>{
    const[icon, setIcon] = useState(true)
    const[showAnswer, setShowAnswer] = useState(false)

    const answerHandler =()=>{
        setIcon(!icon)
        setShowAnswer(!showAnswer)
    }

    const symbol = icon ? <AiOutlinePlus onClick={answerHandler} className=" font-bold text-2xl"/> : <AiOutlineMinus onClick={answerHandler} className=" font-bold text-2xl"/>
    return(
        <div className={classes.faq}>
            <div className={classes.question}>
                {symbol}
                <h4>{props.question}</h4>
            </div>
            {
                showAnswer&& <p>{props.answer}</p>
            }



        </div>
    )
}

export default FaqQuestions
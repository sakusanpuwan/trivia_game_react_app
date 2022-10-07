import { useState } from "react";
import '../Category.css'
const Question = ({question}) => {

    const [status,setStatus] = useState("");

    const handleClickTrue = () => {
        if (question.correct_answer === "True") {
            setStatus("✅")
        } else {
          setStatus("❌")  
        }
        
    }

    const handleClickFalse = () => {
        if (question.correct_answer === "False") {
            setStatus("✅")
        }else {
            setStatus("❌")
        }
        
    }


    return (
        <>
            <li className="qs">{question.question} <button onClick={handleClickTrue}>True</button> <button onClick={handleClickFalse}>False</button> {status} </li>
        </>
    )
}

export default Question;
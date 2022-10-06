import { useState } from "react";

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
            <li>{question.question} <button onClick={handleClickTrue}>True</button> <button onClick={handleClickFalse}>False</button> {status} </li>
        </>
    )
}

export default Question;
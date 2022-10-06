import { useState } from "react";
import QuestionList from "./QuestionList";
const Science = ({questions}) => {


    return (
        <>
            <h2>Science Questions!</h2>
            <QuestionList questions = {questions}/>
        </>
    )
}

export default Science;
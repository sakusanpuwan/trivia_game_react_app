import { useState } from "react";
import QuestionList from "./QuestionList";
const Science = ({questions}) => {


    return (
        <>
            <h2>Science Questions!</h2>
            <img src="https://37.media.tumblr.com/8ede53e49cb10303fbc2f9e9b1b10691/tumblr_n36gvtOF9b1re3xqwo1_500.gif"></img>
            <QuestionList questions = {questions}/>
        </>
    )
}

export default Science;
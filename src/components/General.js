import QuestionList from "./QuestionList";

const General = ({questions}) => {

    return(
        <>
            <h2>General Questions!</h2>
            <QuestionList questions = {questions}/>
        </>
    )
}

export default General;
import QuestionList from "./QuestionList";
import '../Category.css'
const Entertainment = ({questions}) => {

    return (
        <>
            <h2>Entertainment Questions!</h2>
            <img src="https://www.maggotdrowning.com/forums/media/eating-popcorn-gif.16788/full" className="entertaingif"></img>
            <QuestionList questions = {questions}/>
        </>
    )
}

export default Entertainment;
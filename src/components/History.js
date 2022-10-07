import QuestionList from "./QuestionList";
import '../Category.css'
const History = ({questions}) => {
    
    // const getHistoryQuestions = (array) => {
    //     const historyQs = array.filter(question => question.category === "History")
    //     return historyQs;
    // }
    return (
        <>
            <h2>History Questions!</h2>
            <img src="https://media.tenor.com/3C1d5-mEjmMAAAAC/horrible-histories-mathew-baynton.gif" className="historygif" ></img>
            <QuestionList questions = {questions}/>
        </>
    )
}

export default History;
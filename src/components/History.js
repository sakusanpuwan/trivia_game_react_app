import QuestionList from "./QuestionList";
const History = ({questions}) => {
    
    // const getHistoryQuestions = (array) => {
    //     const historyQs = array.filter(question => question.category === "History")
    //     return historyQs;
    // }
    return (
        <>
            <h2>History</h2>
            <QuestionList questions = {questions}/>
        </>
    )
}

export default History;
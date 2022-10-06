import Question from "./Question"

const QuestionList = ({questions}) => {

    // const questionComponents = questions.map(question => {
    //     return <Question question={question} answer={question.correct_answer} />
    // })
    const questionComponents = questions.map(question => {
        return <Question question={question} />
    })
    return (
        <>
            {questionComponents}
            
        </>
    )
}

export default QuestionList;
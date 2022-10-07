import QuestionList from "./QuestionList";
import '../Category.css'
const General = ({questions}) => {

    return(
        <>
            <h2>General Questions!</h2>
            <img src="https://i.pinimg.com/originals/ae/0d/21/ae0d212e871380423126a9facf42523f.gif" 
            className="generalgif" >

            </img>
            <QuestionList questions = {questions}/>
        </>
    )
}

export default General;
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import General from "../components/General";
import Entertainment from "../components/Entertainment";
import Home from "../components/Home";
import Science from "../components/Science";
import History from "../components/History";
import { useEffect, useState } from "react";


const QuestionContainer = () => {

    const [questions,setQuestions] = useState([]);
    const [scienceQuestions,setScienceQuestions] = useState([]);
    const [historyQuestions,setHistoryQuestions] = useState([]);
    const [entertainmentQuestions,setEntertainmentQuestions] = useState([]);


    const fetchData = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean");
        const data = await response.json();
        setQuestions(data.results);
        setHistoryQuestions(getHistoryQuestions(data.results))
        setScienceQuestions(getScienceQuestions(data.results))
        setEntertainmentQuestions(getEntertainmentQuestions(data.results))
    } 

    useEffect(() => {
        fetchData();
    },[])

    const getHistoryQuestions = (array) => {
        const historyQs = array.filter(question => question.category === "History" || question.category === "Mythology" || question.category === "Art")
        return historyQs;
    }

    const getScienceQuestions = (array) => {
        const scienceQs = array.filter(question => question.category === "Science & Nature" || question.category === "Science: Computers" || question.category === "Science: Mathematics")
        return scienceQs;
    }

    const getEntertainmentQuestions = (array) => {
        const entertainmentQs = array.filter(question => question.category === "Entertainment: Books" || "Entertainment: Film" || "Entertainment: Music" || "Entertainment: Television" || "Entertainment: Video Games")
        return entertainmentQs;
    }


    return (
        <>
            <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/general'>General</Link></li>
                <li><Link to='/entertainment'>Entertainment</Link></li>
                <li><Link to='/science'>Science</Link></li>
                <li><Link to='/history'>History</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='general' element={<General questions = {questions}/>}/>
                <Route path='/entertainment' element={<Entertainment questions = {entertainmentQuestions}/>}/>
                <Route path='/science' element={<Science questions = {scienceQuestions}/>}/>
                <Route path='/history' element={<History questions = {historyQuestions}/>}/>
                
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default QuestionContainer;
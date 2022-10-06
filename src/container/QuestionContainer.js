import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import General from "../components/General";
import Entertainment from "../components/Entertainment";
import Home from "../components/Home";
import Science from "../components/Science";
import History from "../components/History";
import { useEffect, useState } from "react";


const QuestionContainer = () => {

    const [questions,setQuestions] = useState([]);
    const [generalQuestions,setGeneralQuestions] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=50&difficulty=easy&type=boolean");
        const data = await response.json();
        setQuestions(data.results);
    } 

    useEffect(() => {
        fetchData();
    },[])

    // const getGeneralQuestions = (questions) => {
    //     const generalQs = questions.filter( question => question.category === "General Knowledge");
    //     setGeneralQuestions(generalQs);
    //     return generalQuestions;
    // }
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
                <Route path='/entertainment' element={<Entertainment/>}/>
                <Route path='/science' element={<Science/>}/>
                <Route path='/history' element={<History/>}/>
                
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default QuestionContainer;
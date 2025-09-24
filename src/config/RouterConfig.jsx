import React from "react";
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp.jsx'
import Pantry from "../components/Pantry.jsx";
import Home from '../components/Home.jsx'
import { Routes, Route } from "react-router-dom";

function RouterConfig() {
    return(
        <Routes>
            <Route path = '/' element={<Home/>} />
            <Route path = '/login' element={<Login/>} />
            <Route path = '/signUp' element={<SignUp/>} />
            <Route path = '/pantry' element={<Pantry/>} />
        </Routes>
    )
}

export default RouterConfig
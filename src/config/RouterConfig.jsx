import React from "react";
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp.jsx'
import Pantry from "../components/Pantry.jsx";
import Home from '../components/Home.jsx'
import { Routes, Route } from "react-router-dom";
import Recipes from "../components/Recipes.jsx";
import Storage from "../components/Storage.jsx"
import About from "../components/About.jsx";
import ScoreSheet from "../components/ScoreSheet.jsx";

function RouterConfig() {
    return(
        <Routes>
            <Route path = '/' element={<Home/>} />
            <Route path = '/login' element={<Login/>} />
            <Route path = '/signUp' element={<SignUp/>} />
            <Route path = '/pantry' element={<Pantry/>} />
            <Route path = '/recipes' element={<Recipes/>} />
            <Route path = '/storage' element={<Storage/>} />
            <Route path = '/about' element={<About/>} />
            <Route path = '/score' element={<ScoreSheet/>} />

        </Routes>
    )
}

export default RouterConfig
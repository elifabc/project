import React from "react";
import Header from "./Header.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";


function About(){

    const navigate = useNavigate();


    return(
        <div>
            <Header/>
            <br/>
            <div className='myPantry'>
                <ArrowBackIosIcon onClick={() => navigate("/")}
                                  style={{marginLeft: '20px'}}/>
                <h1>Puan Durumu</h1>
            </div>
            <br/>
        </div>

    )
}

export default About
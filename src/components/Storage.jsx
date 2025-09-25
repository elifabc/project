import React from "react";
import Header from "./Header.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useNavigate} from "react-router-dom";
import StorageCard from "./StorageCard.jsx";

function Storage(){

    const navigate = useNavigate();


    return(
        <div>
            <Header/>
            <br/>
            <div className='myPantry'>
                <ArrowBackIosIcon onClick={() => navigate("/")}
                                  style={{marginLeft: '20px'}}/>
                <h1>Saklama Koşulları</h1>
            </div>
            <br/>
            <div>
                <h1 className='welcomeHome'>Doğru Saklama Yöntemleri ile Gıda Ömrünü Uzat! </h1>
                <p style={{textAlign: 'center', backgroundColor: '#a6b1ab', marginTop:'-30px'}}><i>Doğru saklama yöntemleri,
                    gıdanın birtakım işlemlerden geçerek yaşam ömrünün uzatılmasına yarar.
                    Bu işlemler gıdanın bozulmasını, çürümesini veya insan sağlığına zararlı hale gelmesini
                    engeller. </i></p>
            </div>
            <StorageCard/>

        </div>
    )
}

export default Storage
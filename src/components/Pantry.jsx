import * as React from 'react';
import Header from "./Header.jsx";
import DataTable from "./DataTable.jsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/Pantry.css'
import MediaCard from "./MediaCard.jsx";
import {useNavigate} from "react-router-dom";

export default function Pantry() {

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <br/>
            <div className='myPantry'>
                <ArrowBackIosIcon onClick={() => navigate("/")}
                    style={{marginLeft:'20px'}} />
                <h1>Dolabım</h1>
            </div>
            <br/>
            
            <div className='flexRow'>
                <div className='data-table'>
                    <DataTable/>
                </div>
                <div>
                    <button className='addProduct'>+ Yeni Malzeme Ekle</button>
                    <br/><br/>
                    <h2 className='offer'>Senin İçin Önerilen Tarif:</h2>
                    <MediaCard/>
                </div>
            </div>
        </div>
    )
}

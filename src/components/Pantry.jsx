import * as React from 'react';
import Header from "./Header.jsx";
import DataTable from "./DataTable.jsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/Pantry.css'
import MediaCard from "./MediaCard.jsx";
import {useNavigate} from "react-router-dom";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";

export default function Pantry() {

    const [open, setOpen] = useState(false);
    const functionopenpopup = () => {
        setOpen(true);
    }
    const closepoppup = () => {
        setOpen(false);
    }

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
                    <button className='addProduct' onClick={functionopenpopup}>+ Yeni Malzeme Ekle</button>
                    <Dialog open={open} onClose={closepoppup} fullWidth maxWidth="md">
                        <DialogTitle>Başlık</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                İçerik buraya…
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closepoppup}>Kapat</Button>
                        </DialogActions>
                    </Dialog>
                    <br/><br/>
                    <h2 className='offer'>Senin İçin Önerilen Tarif:</h2>
                    <MediaCard/>
                </div>
            </div>
        </div>
    )
}

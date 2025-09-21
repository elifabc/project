import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import logo from '../images/logo.png'
import '../css/Header.css'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useEffect} from "react";


function Header() {

    const [name, setName] = useState("");

    useEffect(() => { setName("EA"); }, []);

    const navigate = useNavigate();


    return(
        <div className='header' >
            <div className= 'flex-row'>
                <img className='logo' src={logo}/>
                <p className='logo-text'> Yeşil Dolap A.Ş.</p>
                <div className='categories'>
                    <h3 className='categories' onClick={() => navigate("/Pantry")}>Dolabım</h3>
                    <h3 className='categories'>Tarifler</h3>
                    <h3 className='categories'>Saklama Koşulları</h3>
                    <h3 className='categories'>Hakkımızda</h3>
                </div>
                <CircleNotificationsIcon className='icon'/>
                <Stack className='avatar'>
                    <Avatar sx={{height:'40px' , width:'40px'}}>{name}</Avatar>
                </Stack>
            </div>
        </div>
    )
}

export default Header
import React, {useEffect, useState} from "react";
import Header from "./Header.jsx";
import '../css/Home.css'
import DataTable from "./DataTable.jsx";
import MediaCard from "./MediaCard.jsx";
import ButtonBaseDemo from "./ButtonBaseDemo.jsx";
import logo from "../images/logo.png";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "react-router-dom";
import Video from '../images/video.png'

function Home() {

    const [name, setName] = useState("");

    useEffect(() => { setName("Elif"); }, []);

    const navigate = useNavigate();


    return(
        <div>
            <div className='header'>
                <div className='flex-row'>
                    <img className='logo' src={logo}/>
                    <p className='logo-text'> Yeşil Dolap A.Ş.</p>
                    <CircleNotificationsIcon className='icon'/>
                    <Stack className='avatar'>
                        <Avatar sx={{height: '40px', width: '40px'}}>{name}</Avatar>
                    </Stack>
                </div>
            </div>

            <h1 className='welcome'>YEŞİLDOLAP' A HOŞGELDİN {name}! </h1>
            <div>
                <h3 style={{color: '#093217',
                    fontSize:' 50px',
                    textAlign: 'center',
                    backgroundColor: 'Background',
                    backgroundSize: '60px'
                }}>Yeşildolap Nasıl Çalışır?</h3>
                <img style={{ height: '250px',
                    display: 'block',
                    margin: '0 auto'
                }} src={Video}/>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    paddingBottom: '10px',
                    textAlign: 'center'
                }}>
                    <ButtonBaseDemo/>
                </div>
            </div>
        </div>
    )
}

export default Home
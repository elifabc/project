import React, {useEffect, useState} from "react";
import '../css/Home.css'
import ButtonBaseDemo from "./ButtonBaseDemo.jsx";
import logo from "../images/logo.png";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "react-router-dom";
import Video from '../images/video.png'
import Header from "./Header.jsx";
import LogoutIcon from '@mui/icons-material/Logout';

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
                    <Stack className='avatar'>
                        <Avatar >{name}</Avatar>
                    </Stack>
                    <LogoutIcon onClick={() => navigate("/login")}
                                      style={{marginLeft:'20px'}} />
                </div>
            </div>

            <h1 className='welcomeHome'>YEŞİLDOLAP' A HOŞGELDİN {name}! </h1>
            <div>
                <h3 style={{color: '#093217',
                    fontSize:' 50px',
                    textAlign: 'center',
                    backgroundColor: 'Background',
                    backgroundSize: '60px'
                }}>Yeşildolap Nasıl Çalışır?</h3>
                <img style={{ height: '250px',
                    display: 'block',
                    margin: '0 auto',
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
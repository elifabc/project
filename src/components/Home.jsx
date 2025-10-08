import React, {useEffect, useState} from "react";
import '../css/Home.css'
import ButtonBaseDemo from "./ButtonBaseDemo.jsx";
import Video from '../images/video.png'
import Header from "./Header.jsx";
import Popper from "@mui/material/Popper";

function Home() {

    const [name, setName] = useState("");

    useEffect(() => { setName("Elif"); }, []);


    return(

        <div>

            <Header/>
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
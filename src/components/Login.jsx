import React from "react";
import '../css/Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";



function Login() {

    const navigate = useNavigate();

    return (
        <div className='App'>
            <div className='login-box'>
                <h1 className='logo-name'>YEŞİLDOLAP</h1>
                <br/>
                <p className='slogan'>Atık Değil, Lezzet Yarat!</p>
                <br/><br/>
                <div className='login-box'>
                    <Box
                        component="form"
                        sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            rowGap: 2,
                            textAlign: 'center'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h3 className='login'>Giriş Yap</h3>
                        <TextField id="outlined-basic" label="E-posta" variant="outlined" color='success'
                                   fullWidth/>
                        <TextField id="outlined-basic" label="Şifre" variant="outlined" color='success' fullWidth/>
                        <Button onClick={() => navigate("/")}
                            variant="contained" disableElevation
                                sx={{
                                    width: '100%',
                                    py: 1.2,
                                    bgcolor: 'var(--primary)',
                                    '&:hover': {bgcolor: 'var(--primary-600)'}
                                }}>
                            Giriş
                        </Button>
                        <p style={{textAlign: 'right', color:'#01091a'}}>Şifreni mi unuttun?</p>
                        <div className="line-text">
                            <span>Veya</span>
                        </div>
                        <div className='flex-row'>
                            <h4 style={{color: '#3C3933'}}>Hesabın yok mu?</h4>
                            <Button variant="contained" size="small" color='info'
                                    onClick={() => navigate("/signUp")}>
                                Kaydol
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Login
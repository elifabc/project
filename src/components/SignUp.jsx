import React from "react";
import '../css/SignUp.css'
import {useFormik} from "formik";
import {SignUpSchemas} from '../schemas/SignUpSchemas.jsx'
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    const submit = (values, action) => {
        setTimeout( ()=> {
            action.resetForm();
        }, 2000)
    }

    const {values, handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: SignUpSchemas,
        onSubmit: submit
    });


    return(
        <div className='App'>
            <h1 className='welcome'>YEŞİLDOLAP AİLESİNE HOŞGELDİN!</h1>
            <div>
                <form onSubmit={handleSubmit}>

                    <div className='inputDiv'>
                        <label>İsim</label>
                        <input type="text" id="name"
                               placeholder='İsminizi giriniz'
                               value={values.name}
                               onChange={handleChange}/>
                        {errors.name && <p className='input-error'>{errors.name}</p>}
                    </div>

                    <div className='inputDiv'>
                        <label>Soyad</label>
                        <input type="text" id="surname"
                               placeholder='Soyadınızı giriniz'
                               value={values.surname}
                               onChange={handleChange}/>
                        {errors.surname && <p className='input-error'>{errors.surname}</p>}
                    </div>

                    <div className='inputDiv'>
                        <label>Email</label>
                        <input type="text" id="email"
                               placeholder='Email giriniz'
                               value={values.email}
                               onChange={handleChange}/>
                        {errors.email && <p className='input-error'>{errors.email}</p>}
                    </div>

                    <div className='inputDiv'>
                        <label>Şifre</label>
                        <input type="password" id="password"
                               placeholder='Şifrenizi giriniz'
                               value={values.password}
                               onChange={handleChange}/>
                        {errors.password && <p className='input-error'>{errors.password}</p>}
                    </div>

                    <div className='inputDiv'>
                        <label>Şifre Tekrarı</label>
                        <input type="password" id="confirmPassword"
                               placeholder='Şifrenizi tekrar giriniz'
                               value={values.confirmPassword}
                               onChange={handleChange}/>
                        {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
                    </div>

                    <div className='inputDiv'>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start'
                        }}>
                            <input style={{width: '20px', height: '12px'}}
                                   type="checkbox" id="term"
                                   value={values.term}
                                   onChange={handleChange}/>
                            <label>Kullanıcı Sözleşmesini Kabul Ediyorum</label>
                        </div>
                        {errors.term && <p className='input-error'>{errors.term}</p>}
                    </div>

                    <button type='submit' className='saveButton'>Kaydet</button>
                    <br/><br/>
                    <div style={{textAlign: 'right'}}>
                        <Button onClick={() => navigate("/login")} variant="contained" size="small" color="warning">
                            Geri Dön
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignUp
import React from "react";
import "../css/SignUp.css";
import { useFormik } from "formik";
import { SignUpSchemas } from "../schemas/SignUpSchemas.jsx";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function SignUp() {
    const navigate = useNavigate();

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000);
    };

    const {
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        submitCount,
    } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
            term: false,
        },
        validationSchema: SignUpSchemas,

        onSubmit: submit,
         validateOnBlur: true,
    });

    const showError = (field) => (touched[field] || submitCount > 0) && !!errors[field];

    return (
        <div className="App">
            <h1 className="welcomeSignUp">YEŞİLDOLAP AİLESİNE HOŞGELDİN!</h1>

            <form onSubmit={handleSubmit} noValidate>

                <h2 style={{textAlign:'center'}}>Kayıt Sayfası</h2>

                <div className="inputDiv">
                    <TextField
                        label="Ad"
                        variant="standard"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={showError("name")}
                        helperText={showError("name") ? errors.name : " "}
                        fullWidth
                    />
                </div>

                <div className="inputDiv">
                    <TextField
                        label="Soyad"
                        variant="standard"
                        id="surname"
                        name="surname"
                        value={values.surname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={showError("surname")}
                        helperText={showError("surname") ? errors.surname : " "}
                        fullWidth
                    />
                </div>

                <div className="inputDiv">
                    <TextField
                        label="E-mail"
                        variant="standard"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={showError("email")}
                        helperText={showError("email") ? errors.email : " "}
                        fullWidth
                    />
                </div>

                <div className="inputDiv">
                    <TextField
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Şifre"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        error={showError("password")}
                        helperText={showError("password") ? errors.password : " "}
                        fullWidth
                    />
                </div>

                <div className="inputDiv">
                    <TextField
                        id="confirmPassword"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Şifre Tekrar"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        error={showError("confirmPassword")}
                        helperText={showError("confirmPassword") ? errors.confirmPassword : " "}
                        fullWidth
                    />
                </div>

                <div className="inputDiv">
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="term"
                                name="term"
                                checked={values.term}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        }
                        label={<span style={{ color: "#494848" }}>Kullanıcı Sözleşmesini Kabul Ediyorum</span>}
                    />
                    {showError("term") && <p className="input-error">{errors.term}</p>}
                </div>

                <button type="submit" className="saveButton">Kaydet</button>
                <br /><br />
                <div style={{ textAlign: "right" }}>
                    <Button onClick={() => navigate("/login")} variant="contained" size="small" color="warning">
                        Geri Dön
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;

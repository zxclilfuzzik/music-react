import React, { useState } from 'react';
import axios from 'axios';

import { Button, TextField, Container, Typography, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

import '../css/register.modules.css';


const Register = () => {


const registration = async (Email, Password, Login, Name) => {
                try {
                    const response = await axios.post('http://localhost:8803', {Email, Password, Login, Name})
                    alert('Done!')
                } catch(e) {
                    alert('Press F to pay respects...');
                }
            }

        const sumbitRegister = props => {  }

        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");
        const [passwordConfirm, setPasswordConfirm] = useState("");

        const handleSubmit = (e) => {
                e.preventDefault()

                if (email && name && login && password && passwordConfirm) {
                        if (password == passwordConfirm) {
                                registration(email, password, login, name);
                        }
                }
        }
    
        return(
        <>
                <Container fixed>
                    <Typography align = "center" variant = "h2" color = "textPrimary" sx = {{
                        fontWeight: 700,
                        marginTop: '13vh',
                    }}>
                        Регистрация
                    </Typography>
                        <form noValidate autoComplete = "off" className = "form-root">
                            <TextField id = "outline-basic"
                                label = "E-mail"
                                variant = "outlined"
                                onChange = {(e) => setEmail(e.target.value)}
                                required
                                sx = {{
                                    marginTop: '7vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Имя"
                                variant = "outlined"
                                onChange = {(e) => setName(e.target.value)}
                                required
                                sx = {{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Имя пользователя"
                                variant = "outlined"
                                onChange = {(e) => setLogin(e.target.value)}
                                required
                                sx = {{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Пароль"
                                variant = "outlined"
                                type="password"
                                onChange = {(e) => setPassword(e.target.value)}
                                required
                                sx = {{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Повторите пароль"
                                variant = "outlined"
                                type="password"
                                onChange = {(e) => setPasswordConfirm(e.target.value)}
                                required
                                sx = {{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <Link to = '/login'>
                                    <Typography sx = {{
                                            marginTop: '10px',
                                            marginBottom: -4,
                                            color: 'black'
                                    }}>
                                            Уже зарегистрированы?
                                    </Typography>
                            </Link>

                            <Button onClick = {handleSubmit} variant = "contained" size = "large" sx = {{
                                    marginTop: '5vh',
                                    maxWidth: 300,
                                    minWidth: 200,
                                    backgroundColor: 'black',
                            }}>
                                    Зарегистрироваться
                            </Button>

                        </form>
            </Container>
        </>
    );
}

export default Register;
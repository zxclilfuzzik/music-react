import React, { useState } from 'react';

import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import '../css/login.modules.css';


const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email && password) {
            console.log(email);
            console.log(password);
        }
    }

    return (

        <>
            <Container fixed>
                    <Typography align = "center" variant = "h2" color = "textPrimary" sx = {{
                        fontWeight: 700,
                        marginTop: '20vh',
                    }}>
                        Вход
                    </Typography>
                        <form noValidate className = 'form-root'>

                            <TextField id = "outline-basic"
                                label = "Логин"
                                variant = "outlined"
                                onChange = {(e) => setEmail(e.target.value)}
                                required
                                sx = {{
                                    marginTop: '7vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Пароль"
                                variant = "outlined"
                                onChange = {(e) => setPassword(e.target.value)}
                                type = "password"
                                required
                                sx = {{
                                    marginTop: '5vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <Box sx = {{display: 'flex'}}>
                                <Link to = '/register'>
                                        <Typography sx={{
                                                marginTop: '10px',
                                                marginBottom: -4,
                                                color: 'black'
                                        }}>
                                                Не зарегистрированы?
                                        </Typography>
                                </Link>

                                <Link to = '/recovery'>
                                        <Typography sx = {{
                                                marginTop: '10px',
                                                marginBottom: -4,
                                                color: 'black'
                                        }}>
                                                Восстановить аккаунт
                                        </Typography>
                                </Link>
                            </Box>

                            <Button onClick = {handleSubmit} variant = "contained" size = "large" sx = {{
                                    marginTop: '6vh',
                                    maxWidth: 300,
                                    minWidth: 200,
                                    backgroundColor: 'black',
                            }}>
                                    Войти
                            </Button>
                        </form>
            </Container>
        </>
    );
}

export default Login;


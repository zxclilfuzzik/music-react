import React from 'react';

import { Button, TextField, Container, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import '../css/register.modules.css';

const sumbitRegister = props => {  }

const Register = () => {
    
    return(
        <>
             <Container fixed>
                    <Typography align='center' variant='h2' color="textPrimary" sx={{
                        fontWeight: 700,
                        marginTop: '13vh',
                    }}>
                        Регистрация
                    </Typography>
                        <form noValidate className='form-root'>
                            <TextField id = "outline-basic"
                                label = "E-mail"
                                variant = "outlined"
                                required
                                sx={{
                                    marginTop: '7vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Имя"
                                variant = "outlined"
                                required
                                sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Имя пользователя"
                                variant = "outlined"
                                required
                                sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Пароль"
                                variant = "outlined"
                                type="password"
                                required
                                sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic"
                                label = "Повторите пароль"
                                variant = "outlined"
                                type="password"
                                required
                                sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <Link to = '/login'>
                                    <Typography sx={{
                                            marginTop: '10px',
                                            marginBottom: -4,
                                            color: 'black'
                                    }}>
                                            Уже зарегистрированы?
                                    </Typography>
                            </Link>

                            <Button variant = "contained" size="large" sx={{
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
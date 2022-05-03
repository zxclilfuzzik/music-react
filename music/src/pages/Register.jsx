import React from 'react';
import { Button, TextField, createStyles, Container, Typography } from '@mui/material';


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
                        <form className='form-root'>
                            <TextField id = "outline-basic" label = "E-mail" variant= "outlined" sx={{
                                    marginTop: '7vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic" label = "Имя" variant= "outlined" sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic" label = "Имя пользователя" variant= "outlined" sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic" label = "Пароль" variant= "outlined" sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic" label = "Повторите пароль" variant= "outlined" sx={{
                                    marginTop: '3vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <Button onClick={ () => {alert('Click!')} } variant = "contained" size="large" sx={{
                                    marginTop: '6vh',
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
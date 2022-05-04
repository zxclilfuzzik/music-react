import React, { useState } from 'react';

import { TextField, Button, Typography, Container, Alert } from '@mui/material';

import '../css/login.modules.css';


const sumbitLogin = () => {  }


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('not email');
    const [passwordError, setPasswordError] = useState('not password');

    const BlurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break

        }
    }

    return (
        <>
            <Container fixed>
                    <Typography align='center' variant='h2' color="textPrimary" sx={{
                        fontWeight: 700,
                        marginTop: '20vh',
                    }}>
                        Вход
                    </Typography>
                        <form className='form-root'>
                            {(emailDirty && emailError) && <Alert severity = "error">{emailError}</Alert>}
                            <TextField value={email} name = 'login' id = "outline-basic" label = "Логин" variant= "outlined" sx={{
                                    marginTop: '7vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>
                            {(passwordDirty && passwordError) && <Alert severity = "error">{passwordError}</Alert>}
                            <TextField value = {password} name = 'password' id = "outline-basic" label = "Пароль" variant= "outlined" sx={{
                                    marginTop: '5vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <Button onClick={ () => {alert('Click!')} } variant = "contained" size="large" sx={{
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
import React from 'react';
import { TextField, Button, Typography, Container, Box, Grid } from '@mui/material';

import '../css/login.modules.css';

const sumbitLogin = props => {  }


const Login = () => {

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
                            <TextField id = "outline-basic" label = "Логин" variant= "outlined" sx={{
                                    marginTop: '7vh',
                                    maxWidth: 700,
                                    minWidth: 500,
                            }}/>

                            <TextField id = "outline-basic" label = "Пароль" variant= "outlined" sx={{
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

//className = {classes.loginButton}
//http://localhost:3000/login


// const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
//     loginButton: {
//         marginTop: theme.spacing(1)
//     }
// }))
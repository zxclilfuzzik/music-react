import React from 'react';

import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';


const HelpPage = (props) => {

    // const [email, setEmail]
    // const [email, setEmail]

    return (
        <>
            <Header />

            <Box sx = {{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Paper style = {{backgroundImage: `url(${props.imageLink})` || `url()`}}
                        sx = {{
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                        height: '480px'
                    }}>

                    </Paper>
                </Box>

                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <form noValidate className='form-root'>
                        <TextField id = 'outline-basic'
                            variant = 'outlined'
                            required
                        />
                        <TextField id = 'outline-basic' 
                            variant = 'outlined'
                            required
                        />
                        <TextField id = 'outline-basic'
                            variant = 'outlined'
                            required
                        />

                        <Button id = '' />
                    </form>
                </Box>
            </Box>


            <Footer />
        </>
    );
}

export default HelpPage;
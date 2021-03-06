import React from 'react';

import { Box ,Typography, Paper, Grid } from '@mui/material';

import '../css/theme.modules.css';


const Theme = (props) => {

    return (

        <Box sx = {{
            height: '170px',
            width: '300px',
            paddingLeft: '2vw',
            paddingBottom: '2vw',
            paddingTop: '2vw'
        }}>
            <Paper style = {{backgroundImage: `url(${props.image})`}} 
                sx = {{
                    height: 170,
                    width: 300,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: props.colorText || 'white',
                    borderRadius: '15px',
                    backgroundColor: props.colorBg || 'black'
                }}>
                        <Grid container>
                            <Grid item md = {6}>
                                <Box sx = {{
                                    position: 'relative',
                                }}>
                                    <Typography component = 'h5' color = 'inherit' gutterBottom = 'true' sx = {{
                                        color: 'white',
                                        paddingTop: '80px',
                                        paddingLeft: '20px',
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                        margin: 0
                                    }}>
                                        {props.title}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                </Paper>
             </Box>
    );
}

export default Theme;



import React from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const RadioThemeTwo = (props) => {

    return (
        <>
            <Box sx = {{
                width: '150px',
                height: '150px',
                backgroundColor: props.color || 'black',
                marginLeft: props.marginLeft || '3vw',
                backgroundImage: `url(${props.imageLink})`,
                borderRadius: '15px',
                marginRight: '2vh'
            }}>
                <Typography sx = {{
                    color: props.colorText || 'white',
                }}>
                    {props.title}
                </Typography>
            </Box>
        </>
    );
}

export default RadioThemeTwo;


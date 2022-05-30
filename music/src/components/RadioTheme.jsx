import React from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const RadioTheme = (props) => {

    return(
        <Box sx = {{
            width: '246px',
            height: '185px',
            backgroundColor: props.color || 'black',
            borderRadius: '20px',
            marginLeft: props.leftMagrin || '3wv',
            marginRight: '10vh',
            backgroundImage: `url(${props.image})`
        }}>
            <Typography sx = {{
                fontSize: '20px',
                color: props.textColor || 'white',
                fontWeight: 'bold',
                marginLeft: '30px',
                marginTop: '130px'
            }}>
                {props.title}
            </Typography>
        </Box>
    );
}

export default RadioTheme;



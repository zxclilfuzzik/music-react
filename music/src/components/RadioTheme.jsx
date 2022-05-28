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
            marginLeft: props.leftMagrin || '16px',
            marginRight: '35px'
        }}>
            <Typography sx = {{
                fontSize: '20px',
                color: props.textColor
            }}>
                {props.title}
            </Typography>
        </Box>
    );
}

export default RadioTheme;
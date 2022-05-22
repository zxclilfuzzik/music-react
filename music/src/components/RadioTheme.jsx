import React from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const RadioTheme = (props) => {

    return(
        <Box sx={{
            width: '150px',
            height: '150px',
            backgroundColor: props.color,
            borderRadius: '15px',
            marginLeft: props.leftMagrin || '16px',
            marginRight: '16.5px'
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
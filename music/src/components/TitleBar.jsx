import React from 'react';
import { Typography, Box } from '@mui/material';

const TitleBar = (props) => {

    return (
        <Box>
            <Typography sx = {{
                fontSize: 55,
                fontWeight: 'bold',
                paddingLeft: '35px',
                paddingTop: '40px',
                color: props.colorTitle || 'black'
            }}>
                {props.title}
            </Typography>
        </Box>
    );
}

export default TitleBar;
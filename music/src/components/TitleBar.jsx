import React from 'react';

import { Typography, Box } from '@mui/material';

const TitleBar = (props) => {

    return (
        <Box>
            <Typography sx = {{
                fontSize: 55 || props.size,
                fontWeight: props.weight || 'bold',
                paddingLeft: props.paddingLeft || '3vw',
                paddingTop: '40px',
                color: props.colorTitle || 'black'
            }}>
                {props.title}
            </Typography>
        </Box>
    );
}

export default TitleBar;



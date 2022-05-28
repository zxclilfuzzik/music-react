import React from 'react';

import { Divider, Box, Typography } from '@mui/material';

const LibraryList = (props) => {

    return (
        <>
            <Box sx = {{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: props.marginLeft || '40px',
                marginBottom: props.marginBottom || '18px'
            }}>
                <Box sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '15px'
                }}>
                    <Box sx = {{
                        width: '90px',
                        height: '90px',
                        backgroundImage: `url(${props.imageLink})`,
                        borderRadius: '10px',
                        backgroundColor: props.colorBG || 'black'
                    }}>

                    </Box>

                    <Typography sx = {{
                        color: 'black',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        marginLeft: '3vw',
                        marginTop: '20px'
                    }}>
                        {props.title}
                    </Typography>
                </Box>
                <Divider sx = {{
                    width: '82vw',
                    backgroundColor: 'black'
                }} />
            </Box>
        </>
    );
}

export default LibraryList;
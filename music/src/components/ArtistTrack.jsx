import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ArtistTrack = (props) => {

    return (
        <>
            <Link to = '/'><Box>
                <Box sx = {{
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '12px',
                    paddingLeft: '20px',
                }}>
                    <Box sx = {{
                        height: '90px',
                        width: '90px',
                        backgroundColor: 'black',
                        borderRadius: '15px'
                    }}>
                        <img src = {props.image} alt = {props.alt} />
                    </Box>

                    <Box sx = {{
                        paddingLeft: '20px',
                    }}>
                        <Typography sx = {{
                            fontSize: '20px',
                            color: 'black',
                            fontWeight: 'bold',
                            paddingTop: '25px'
                        }}>
                            {props.title}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Link>
            <Divider sx = {{paddingTop: '50px'}}/>
        </>
    );
}

export default ArtistTrack;
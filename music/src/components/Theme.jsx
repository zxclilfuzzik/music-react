import React from 'react';

import { Box ,Typography, Container, Paper, Grid } from '@mui/material';

import '../css/theme.modules.css';


const Theme = (props) => {
    return (
        <Box sx={{
            
        }}>
            <Paper style = {{backgroundImage: `url(https://blog.soundcloud.com/wp-content/uploads/2018/11/cropped-SCBlog_Header_06.21-Search-1.jpg)`}} 
                sx = {{
                    height: 480,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    color: 'white',
                    marginBottom: 4,
                    marginTop: 8
                }}>
                    <Container fixed>
                        <Grid container>
                            <Grid item md = {6}>
                                <Box sx = {{
                                    position: 'relative',
                                    marginTop: 20,
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <Typography component = 'h1' color = 'inherit' gutterBottom = 'true' sx = {{
                                        color: 'white',
                                    }}>
                                        {props.title}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
        </Box>
    );
}

export default Theme;
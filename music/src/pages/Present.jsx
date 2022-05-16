import  { React } from 'react';
import { Typography, Container, Paper, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/present.modules.css';



const Present = () => {

    
    return (
        <>
           <Header />
            <main>
                <Paper style = {{backgroundImage: `url(https://blog.soundcloud.com/wp-content/uploads/2018/11/cropped-SCBlog_Header_06.21-Search-1.jpg)`}} 
                sx = {{
                    height: 480,
                    backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
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
                                        fontSize: 45,
                                        fontWeight: 700,
                                    }}>
                                    Стриминговый сервис для музыкантов
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>

                <Container fixed>
                    <Box sx = {{
                        dislplay: 'flex',
                        flexDirection: 'column',
                        marginBottom: 10,
                    }}>
                        <Box sx = {{
                            
                        }}>
                            
                            <Box>
                                <Typography color = "textPrimary" sx = {{
                                    fontSize: 35,
                                    fontWeight: 700,
                                    marginLeft: 5,
                                    marginTop: 13,
                                }}>
                                    Слушай музыку, делись музыкой
                                </Typography>

                                <Typography color = "textPrimary" sx = {{
                                    fontSize: 35,
                                    fontWeight: 700,
                                    marginLeft: 5,
                                }}>
                                    Делай что хочешь c музыкой.
                                </Typography>

                                <Button color = 'secondary' variant = 'contained' sx = {{
                                    width: 200,
                                    backgroundColor: 'black',
                                    paddingTop: 1,
                                    paddingBottom: 1,
                                    color: 'white',
                                    marginTop: 10,
                                    marginLeft: 5,
                                }}>
                                    Начать
                                </Button>

                                <Typography align = 'center' color = "textPrimary" sx = {{
                                    fontSize: 35,
                                    fontWeight: 700,
                                    marginTop: 12,
                                }}>
                                    Блог
                                </Typography>
                            </Box>

                            <Box sx = {{
                                height: 500,
                            }}>
                                
                            <Container fixed sx = {{
                                marginTop: 12,
                            }}>
                                <Grid container justify = 'center' spacing = {21}>
                                    <Grid item>
                                            <Link to = '/'>
                                                <Card>
                                                    <CardMedia 
                                                        image = 'https://blog.soundcloud.com/wp-content/uploads/2021/02/SCPlayerOne_Partner_BlogPost.jpg'
                                                        title = 'image title'
                                                        sx = {{
                                                            width: 250,
                                                            height: 250,
                                                            backgroundColor: 'black',
                                                        }}
                                                    />

                                                    <CardContent>
                                                        <Typography variant = 'h5' gutterBottom>
                                                            Blog post
                                                        </Typography>

                                                        <Typography>
                                                            Info post
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                    </Grid>

                                    <Grid item>
                                            <Link to = '/'>
                                                <Card>
                                                    <CardMedia 
                                                        image = 'https://blog.soundcloud.com/wp-content/uploads/2021/02/SCPlayerOne_Partner_BlogPost.jpg'
                                                        title = 'image title'
                                                        sx = {{
                                                            width: 250,
                                                            height: 250,
                                                            backgroundColor: 'black',
                                                        }}
                                                    />

                                                    <CardContent>
                                                        <Typography variant = 'h5' gutterBottom>
                                                            Blog post
                                                        </Typography>

                                                        <Typography>
                                                            Info post
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                    </Grid>

                                    <Grid item>
                                        <Link to = '/'>
                                            <Card>
                                                <CardMedia 
                                                    image = 'https://blog.soundcloud.com/wp-content/uploads/2021/02/SCPlayerOne_Partner_BlogPost.jpg'
                                                    title = 'image title'
                                                    sx = {{
                                                        width: 250,
                                                        height: 250,
                                                        backgroundColor: 'black',
                                                    }}
                                                />

                                                <CardContent>
                                                    <Typography variant = 'h5' gutterBottom>
                                                        Blog post
                                                    </Typography>

                                                    <Typography>
                                                        Info post
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                </Grid>
                                </Grid>
                            </Container>
                            </Box>
                        </Box>
                    </Box>
                </Container>

                <Footer />
            </main>
        </>
    );
}

export default Present;



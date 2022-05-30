import  { React } from 'react';
import { Typography, Container, Paper, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/present.modules.css';

const Present = (props) => {

    
    return (
        <>
           <Header />
            <main>
                <Paper style = {{backgroundImage: `url(https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/12/e5/b0/12e5b00f-45a5-3ed3-4748-68ba15169333/source/1060x608sr.webp)`}} 
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
                                                        image = 'https://cdn.dribbble.com/users/130631/screenshots/18075389/media/69c97e334299fbf4c44f85312f97494e.png?compress=1&resize=1200x900&vertical=top'
                                                        title = 'image title'
                                                        sx = {{
                                                            width: 250,
                                                            height: 250,
                                                            backgroundColor: 'black',
                                                        }}
                                                    />

                                                    <CardContent>
                                                        <Typography variant = 'h5' gutterBottom>
                                                            Музыка помогает?
                                                        </Typography>

                                                        <Typography>
                                                            Научное исследование
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                    </Grid>

                                    <Grid item>
                                            <Link to = '/'>
                                                <Card>
                                                    <CardMedia 
                                                        image = 'https://cdn.dribbble.com/users/130631/screenshots/15908017/media/8d560faf96b70a2486fca1f0f786da5e.png?compress=1&resize=1200x900&vertical=top'
                                                        title = 'image title'
                                                        sx = {{
                                                            width: 250,
                                                            height: 250,
                                                            backgroundColor: 'black',
                                                        }}
                                                    />

                                                    <CardContent>
                                                        <Typography variant = 'h5' gutterBottom>
                                                            Для авторов
                                                        </Typography>

                                                        <Typography>
                                                            Авторское пособие
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                    </Grid>

                                    <Grid item>
                                        <Link to = '/'>
                                            <Card>
                                                <CardMedia 
                                                    image = 'https://cdn.dribbble.com/users/372/screenshots/15518063/media/2a94790f4d1213b8e044b0fe061c7d34.jpg?compress=1&resize=1200x900&vertical=top'
                                                    title = 'image title'
                                                    sx = {{
                                                        width: 250,
                                                        height: 250,
                                                        backgroundColor: 'black',
                                                    }}
                                                />

                                                <CardContent>
                                                    <Typography variant = 'h5' gutterBottom>
                                                        Для слушателей
                                                    </Typography>

                                                    <Typography>
                                                        Как начать?
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


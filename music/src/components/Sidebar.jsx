import React from 'react';

import { Link } from 'react-router-dom';
import { Divider, Typography, Box } from '@mui/material';

import '../css/sidebar.modules.css'


const Sidebar = (props) => {
    
    return (
 
        <>
            <Box sx = {{
                backgroundColor: 'black',
                width: '25vh',
                minWidth: '25vh',
                minHeight: '100vh', 
            }}>
                <Typography sx = {{
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginTop: '60px',
                }}>
                    Blueberry
                </Typography>

                <Typography sx = {{
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '300',
                    marginTop: '40px',
                    textAlign: 'center'
                }}>
                    Меню
                </Typography>
                <Link to = '/home'><Typography sx = {{
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '700',
                    ":hover": {
                        color: 'violet'
                    }
                }}>
                    Home
                </Typography></Link>

                <Link to = '/radio'><Typography sx = {{
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '700',
                    ":hover": {
                        color: 'violet'
                    }
                }}>
                    Радио
                </Typography></Link>

                <Link to = '/library'><Typography sx = {{
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '700',
                    ":hover": {
                        color: 'violet'
                    }
                }}>
                    Библиотека
                </Typography></Link>

                <Link to = '/search'><Typography sx = {{
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '700',
                    ":hover": {
                        color: 'violet'
                    }
                }}>
                    Поиск
                </Typography></Link>

                <Divider sx = {{
                            backgroundColor: 'white',
                            width: '11vw',
                            marginLeft: '1.5vw',
                            marginBottom: '25px'
                        }} />

                <Link to = '/profile'><Typography sx = {{
                    color: 'white',
                    fontSize: '25px',
                    fontWeight: '700',
                    ":hover": {
                        color: 'violet'
                    }
                }}>
                    Профиль
                </Typography></Link>
            </Box>
        </>
       
    );
}

export default Sidebar;


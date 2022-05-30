import React from 'react';

import { BottomNavigation, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import '../css/footer.modules.css'

const Footer = (props) => {

    return (
        <BottomNavigation sx = {{
            backgroundColor: props.colorFooter || 'black',
            height: 100,
        }}>
           <Box sx = {{
               display: 'flex',
               flexDirection: 'row'
           }}>
                <Link to = '/'>
                    <Typography align = 'center' sx = {{
                        color: props.colorText || 'white',
                        marginTop: 5
                    }}>
                        Blueberry
                    </Typography>
                </Link>

                <Link to = '/login'>
                    <Typography sx = {{
                        color: props.colorText || 'white',
                        marginTop: 5
                    }}>
                        Вход
                    </Typography>
                </Link>

                <Link to = '/register'>
                    <Typography sx = {{
                        color: props.colorText || 'white',
                        marginTop: 5
                    }}>
                        Регистрация
                    </Typography>
                </Link>
           </Box>
        </BottomNavigation>
    ); 
}

export default Footer;





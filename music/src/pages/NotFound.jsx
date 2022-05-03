import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const NotFound = () => {

    return (
        <>
            <Header />
            <Container>
                <Box>
                    <Typography align = 'center' variant = 'h1' color = "textPrimary" sx = {{
                        fontSize: 200,
                        fontWeight: 700,
                        marginTop: '40vh'
                    }}>
                        404
                    </Typography>
                    <Link to = '/'>
                        <Typography align = 'center' color = "textPrimary" sx = {{
                            fontSize: 20,
                            fontWeight: 700,
                        }}>
                            Похоже что это не работает, попробуем перейти на главную?
                        </Typography>
                    </Link>
                </Box>
            </Container>
        </>
    );
}

export default NotFound;
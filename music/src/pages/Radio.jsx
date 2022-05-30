import React from 'react';

import { Box } from '@mui/system';
import { Link } from 'react-router-dom'; // нужно для перехода 

import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';
import RadioTheme from '../components/RadioTheme';
import RadioThemeTwo from '../components/RadioThemeTwo';

import '../css/radio.modules.css';

const Radio = (props) => {

    return (
        <>
            <div className = 'container'>
                <Sidebar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            <div className = 'wrapper'>
                    <TitleBar title = {'Radio'} />
                </div>

               <Box sx = {{
                   display: 'flex',
                   flexDirection: 'column',
                   marginBottom: '30px'
               }}>
                    <Box sx = {{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '3vh'
                    }}>
                        <RadioTheme title = {''} color = {'black'} textColor = {''} leftMagrin = {'3vw'} image = 'https://is3-ssl.mzstatic.com/image/thumb/Features126/v4/64/50/06/6450068e-4a96-8aef-b755-5d110bf19d41/U0MtTVMtUlVTLUhpdHMtQURBTV9JRD0xNDk4MTU1NTQ4LnBuZw.png/432x432sr.webp'/>
                        <RadioTheme title = {''} color = {'black'} textColor = {''} image = 'https://is2-ssl.mzstatic.com/image/thumb/Features126/v4/70/03/b7/7003b732-22fa-b752-3857-e9b068b8898a/U0MtTVMtUlVTLVJ1c3NpYW5IaXBIb3AtQURBTV9JRD0xNTc5NTQ0MTQzLnBuZw.png/432x432sr.webp' />
                        <RadioTheme title = {''} color = {'black'} textColor = {''} image = 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/57/83/4c/57834cd5-7b9c-176d-e37f-ebfaa413efc6/U0MtTVMtUlVTLUNoaWxsLUFEQU1fSUQ9OTg1NDg0OTQzLnBuZw.png/432x432sr.webp'/>
                        <RadioTheme title = {''} color = {'black'} textColor = {''} image = 'https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/23/ea/fc/23eafc32-623b-9e77-15d9-ee776823ebc8/U0MtTVMtUlVTLUNsYXNzaWNIaXBIb3AtQURBTV9JRD05ODU0OTQ1NDQucG5n.png/432x432sr.webp'/>
                    </Box>

                    <Box sx = {{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Box sx = {{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '31px',
                            marginBottom: '19px',
                        }}>
                            <RadioThemeTwo title = '' color = 'black' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'yellow' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'green' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'purple' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'pink' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'brown' textColor = '' imageLink = '' />
                        </Box>

                        <Box sx = {{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '19px'
                        }}>
                            <RadioThemeTwo title = '' color = 'pink' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'brown' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'black' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'green' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'yellow' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'purple' textColor = '' imageLink = '' />
                        </Box>

                        <Box sx = {{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <RadioThemeTwo title = '' color = 'black' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'pink' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'purple' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'yellow' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' imageLink = '' />
                            <RadioThemeTwo title = '' color = 'green' textColor = '' imageLink = '' />
                        </Box>
                    </Box>

               </Box>

                </Box>
            </div>
        </>
    );
}

export default Radio;





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
                        <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} leftMagrin = {'40px'} />
                        <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
                        <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
                        <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
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
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                        </Box>

                        <Box sx = {{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '19px'
                        }}>
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                        </Box>

                        <Box sx = {{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                            <RadioThemeTwo title = '' color = 'red' textColor = '' marginLeft = '40px' imageLink = 'https://is2-ssl.mzstatic.com/image/thumb/Video125/v4/d1/cb/ca/d1cbca62-8b5f-3713-48c4-56a290fefcb8/Job900d2ebb-3b74-4260-8dec-c533ec7cb7ab-120553658-PreviewImage_preview_image_nonvideo_sdr-Time1628974926301.png/610x610cc.webp' />
                        </Box>
                    </Box>

               </Box>

                </Box>
            </div>
        </>
    );
}

export default Radio;

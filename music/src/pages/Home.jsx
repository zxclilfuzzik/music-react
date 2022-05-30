import React from 'react';

import { Box } from '@mui/system';

import Sidebar from '../components/Sidebar';
import TitleBar from '../components/TitleBar';
import AlbumCover from '../components/AlbumCover';
import Theme from '../components/Theme';

import '../css/home.modules.css'


const Home = (props) => {

    return (
        <>
            <Box sx = {{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh'
            }}>
                <Sidebar />

                <Box sx = {{
                     maxWidth: '75vw',
                     display: 'flex',
                     flexDirection: 'column'
                }}>

                    <TitleBar title = 'Home' />
                    <Box sx = {{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Theme title = 'Первый альбом' colorBg = '#B728FF' image = ''/>
                        <Theme title = 'Новые имена' colorBg = '#6202FF' image = 'https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/1d/4a/4c/1d4a4c94-a227-26e0-b0f6-901ee62f1197/source/680x382sr.webp' />
                        <Theme title = 'Джаз' colorBg = 'red' image = 'https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/e7/69/eb/e769ebec-27ec-f420-3bb8-f7eaf4db727f/U0gtTVMtUlVTLVNvZnRQb3AtQURBTV9JRD05OTEyMDA1MDgucG5n.png/1060x608sr.webp' />
                        <Theme title = 'Lo-fi' colorBg = 'green' image = 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/27/58/f5/2758f50b-072f-877f-36b4-6097f3618728/U0gtTVMtUlVTLVNtb290aEphenotQURBTV9JRD05ODU0OTY1MTEucG5n.png/1060x608sr.webp' />
                    </Box>

                    <Box sx ={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <AlbumCover image = 'https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/62/fa/4d/62fa4d02-7d4a-3338-6085-a80fcb561977/Job21c6aa9a-3c04-4f31-955d-c8ad54a8f71d-131339976-PreviewImage_preview_image_nonvideo_sdr-Time1651186228284.png/610x610cc.webp' />
                        <AlbumCover image = 'https://is5-ssl.mzstatic.com/image/thumb/Video115/v4/33/ec/cd/33eccd92-9fa1-a4c7-7c17-7f09ce43aa57/Joba8a797fd-7165-436c-9756-9d73a680e8cb-111249991-PreviewImage_preview_image_nonvideo_sdr-Time1618353849484.png/610x610cc.webp' />
                        <AlbumCover image = 'https://is3-ssl.mzstatic.com/image/thumb/Video125/v4/a5/a9/43/a5a9438b-d506-0865-1314-2afbca4df415/Job3b80de09-b7a6-4e73-a97f-ecc525ab425b-111898676-PreviewImage_preview_image_nonvideo_sdr-Time1618939442084.png/610x610cc.webp' />
                        <AlbumCover image = 'https://is2-ssl.mzstatic.com/image/thumb/Video115/v4/40/35/d0/4035d0e4-2eb3-c929-f2ef-9a3827f496ec/Job98a9b878-c1e1-4c11-9802-53a902693965-122359604-PreviewImage_preview_image_nonvideo_sdr-Time1630084222465.png/610x610cc.webp' />
                        <AlbumCover image = '' colorBg = 'violet'/>
                        <AlbumCover image = '' colorBg = 'red'/>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '3vh'
                    }}>
                        <AlbumCover image = '' colorBg = '#B728FF'/>
                        <AlbumCover imahe = '' colorBg = '#58FF6A'/>
                        <AlbumCover image = '' colorBg = 'green'/>
                        <AlbumCover image = '' colorBg = 'purple' />
                        <AlbumCover image = '' colorBg = 'black'/>
                        <AlbumCover image = '' colorBg = 'yellow' />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Home;





import React from 'react';

import { Box } from '@mui/system';

const ProfileComponent = (props) => {

    return (
        <>
            <Box sx = {{
                width: '50px',
                height: '50px',
                borderRadius: '50px'
              }}>
              <Box sx = {{
                  backgroundImage: `url(${props.imageURL})` || `url()`,
                  backgroundColor: 'black',
                }}>

              </Box>
            </Box>
        </>
    );
}

export default ProfileComponent;

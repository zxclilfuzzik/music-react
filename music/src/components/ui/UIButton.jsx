import { React } from 'react';
import { Button } from '@mui/material';

import '../../css/uibutton.modules.css'
const UIButton = (props) => {

    return (
            <Button variant="contained">{props}</Button>

    );
}

export default UIButton;
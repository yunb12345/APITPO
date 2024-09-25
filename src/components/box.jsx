import * as React from 'react';
import Mbox from '@mui/material/Box';

const Box = (props) =>{
    const {moreStyles,children } = props;

    return(
        <Mbox sx={{ ...style,moreStyles }}>
            {children}
        </Mbox>
    )
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
};

export default Box;
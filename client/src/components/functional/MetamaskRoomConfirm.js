import React, {useRef} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
const Wait = ({ display}) => {
    const textArea = useRef(null)
    const onClick = () =>{
        textArea.current.select()
        document.execCommand('copy')
    }

    return (
        <div className='wait' style={{display:display?'flex':'none'}}>
            <h1 className="wait-message">Click on Confirm to create a Blockchain Room.</h1>
            Please wait for a while, after clicking confirm, we are getting you a room ID.
        <CircularProgress/>
        </div>
    );
}

export default Wait;

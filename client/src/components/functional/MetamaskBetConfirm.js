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
            <h1 className="wait-message">Blockchain Room is created.</h1>
            Please confirm to pay the bet amount.
        <CircularProgress/>
        </div>
    );
}

export default Wait;

import React from 'react';

const LandingButton = ({type, choice, label, onChoice}) => {
    return (
        <div className={`btn btn-${type}`} onClick={onChoice.bind(this, choice)}>{label}</div>
    )
}

export default LandingButton;
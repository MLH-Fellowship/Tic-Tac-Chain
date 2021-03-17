// this file contains the component definition for the buttons on choice page

import React from 'react';

const ChoiceButton = ({type, choice, label, onChoice}) => {
    return (
        <button className={`btn btn-${type}`} onClick={onChoice.bind(this, choice)}>
            {label}
        </button>
    )
}

export default ChoiceButton;
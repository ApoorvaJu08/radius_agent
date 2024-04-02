import React from 'react';
import './Box.css';

const Box = ({boxClicked, clicked, boxIndex}) => {

    return (
        <div className={`box ${!clicked ? 'bg-grey': 'bg-green'}`} onClick={() => boxClicked(boxIndex)}></div>
    )
}

export default Box;
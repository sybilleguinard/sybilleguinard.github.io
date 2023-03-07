import './Arrow.css';
import React from 'react';

function Arrow({ dimension, direction, className, hover, onClick }) {
    return (
        <>
            <div className={"arrow " + className} onClick={onClick} style={{ '--dimension': dimension, '--direction': direction, '--hover': hover }}/>
        </>
    );
}

export default Arrow;

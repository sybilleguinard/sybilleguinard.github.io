import './Arrow.css';
import React from 'react';

function Arrow({ dimension, direction }) {
    return (
        <>
            <div className="arrow" style={{ '--dimension': dimension, '--direction': direction }}></div>
        </>
    );
}

export default Arrow;

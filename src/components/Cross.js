import './Cross.css';
import React from 'react';

function Cross({ className, onClick }) {
    return (
        <div onClick={onClick} className={'cross-container ' + className}>
            <div className="cross" />
        </div>
    );
}

export default Cross;

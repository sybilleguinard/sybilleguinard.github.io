import './Textarea.css';
import React from 'react';

function Textarea({ name, setValue, value, error, label }) {
    return (
        <div className="field-container">
            <div className="form-field textarea-field">
                <label htmlFor={name}>{label}</label>
                <textarea id={name} onChange={(e) => setValue(e.target.value)} value={value} />
            </div>
            <p className="error">{error}</p>
        </div>
    );
}

export default Textarea;

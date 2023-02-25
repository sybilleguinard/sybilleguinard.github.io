import './TextInput.css';
import React from 'react';

function TextInput({ label, register, value, setValue, name, error, isCol }) {
    return (
        <div className="field-container">
            <div className={"form-field text-field" + isCol ? ' vertical' : ''}>
                <label htmlFor={name}>{label}</label>
                <input className={ isCol ? 'input-vertical' : ''} type="text" {...(register ? {...register(name)} : '')} name={name} value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <p className="error">{error}</p>
        </div>
    );
}

export default TextInput;

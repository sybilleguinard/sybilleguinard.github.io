import './FileInput.css';
import React from 'react';
import Arrow from '../Arrow';

function FileInput({ label, register, setValue, name, error, multiple, isCol }) {
    return (
        <div className="field-container">
            <div className={'file-field' + isCol ? ' vertical' : ''}>
                <label htmlFor={name}>{label}</label>
                <label htmlFor={name} className={"input-file" + (isCol ? ' input-vertical' : '')}>
                    Upload
                    <Arrow />
                </label>
                <input
                    type="file"
                    {...(register ? { ...register(name) } : '')}
                    id={name}
                    onChange={(e) => setValue(multiple ? e.target.files : e.target.files[0])}
                    multiple={multiple}
                />
            </div>
            <p className="error">{error}</p>
        </div>
    );
}

export default FileInput;

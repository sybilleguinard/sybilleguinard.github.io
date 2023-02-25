import './AboutAdmin.css';
import React, { useEffect, useState } from 'react';
import FileInput from '../../components/forms/FileInput';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Textarea from '../../components/forms/Textarea';
import Button from '../../components/forms/Button';

function AboutAdmin() {
    const [picture, setPicture] = useState({});
    const [pictureError, setPictureError] = useState('');
    const [desc, setDesc] = useState('');
    const [descError, setDescError] = useState('');

    useEffect(() => {
        console.log(picture);
    }, [picture]);

    return (
        <>
            <Header />
            <form className="form-simple">
                <FileInput label="Photo :" name="picture" setValue={setPicture} error={pictureError} />
                <Textarea label="Descriptif :" name="desc" value={desc} setValue={setDesc} error={descError} />
                <Button />
            </form>
            <Footer />
        </>
    );
}

export default AboutAdmin;

import './ArtworksAdmin.css';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/forms/TextInput';
import Textarea from '../../components/forms/Textarea';
import FileInput from '../../components/forms/FileInput';
import Button from '../../components/forms/Button';

function ArtworksAdmin() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [desc, setDesc] = useState('');
    const [descError, setDescError] = useState('');
    const [mainPicture, setMainPicture] = useState({});
    const [mainPictureError, setMainPictureError] = useState('');
    const [pictures, setPictures] = useState([]);
    const [picturesError, setPicturesError] = useState('');

    return (
        <>
            <Header />
            <form className="form-simple">
                <TextInput label="Nom du dessin :" name='name' value={name} setValue={setName} error={nameError} />
                <Textarea label="Descriptif :" name='desc' value={desc} setValue={setDesc} error={descError} />
                <FileInput label="Photo principale :" name='mainPicture' setValue={setMainPicture} error={mainPictureError} />
                <FileInput label="Autres photos :" name='pictures' setValue={setPictures} error={picturesError} multiple />
                <Button />
            </form>
            <Footer />
        </>
    );
}

export default ArtworksAdmin;

import './ProjetAdmin.css';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/forms/TextInput';
import Textarea from '../../components/forms/Textarea';
import FileInput from '../../components/forms/FileInput';
import Button from '../../components/forms/Button';

function ProjetAdmin() {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [desc, setDesc] = useState('');
    const [descError, setDescError] = useState('');
    const [miniature, setMiniature] = useState({});
    const [miniatureError, setMiniatureError] = useState('');
    const [project, setProject] = useState({});
    const [projectError, setProjectError] = useState('');

    return (
        <>
            <Header/>
            <form className="form-simple">
                <TextInput label="Titre du ProjetAdmin :" name='title' value={title} setValue={setTitle} error={titleError} />
                <Textarea label="Synthèse du ProjetAdmin :" name='desc' value={desc} setValue={setDesc} error={descError} />
                <FileInput label="Miniature :" name='miniature' setValue={setMiniature} error={miniatureError} />
                <FileInput label="ProjetAdmin :" name='ProjetAdmin' setValue={setProject} error={projectError} />
                <Button />
            </form>
            <Footer />
        </>
    );
}

export default ProjetAdmin;

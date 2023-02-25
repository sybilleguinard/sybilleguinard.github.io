import './HomeAdmin.css'
import React from 'react'
import { useForm } from 'react-hook-form'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import img1 from '../../uploads/home/img1.png';
import img2 from '../../uploads/home/img2.png';
import img3 from '../../uploads/home/img3.png';
import FileInput from '../../components/forms/FileInput';
import TextInput from '../../components/forms/TextInput';

function HomeAdmin() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function submit(values) {

    }
    
  return (
    <>
    <Header />
        <form onSubmit={handleSubmit(submit)}>
            <div className='row'>
            <div className='col col-home-admin'>
                <img src={img1} alt="Image 1" />
                <FileInput isCol register={register} label="Image d'accueil 1 :" name='img1'  error={errors?.img1 && errors.img1.message} />
                <TextInput isCol register={register} label='Lien vers le projet :' name='projet1' error={errors?.projet1 && errors.projet1.message} />
            </div>
            <div className='col col-home-admin'>
                <img src={img1} alt="Image 1" />
                <FileInput isCol register={register} label="Image d'accueil 1 :" name='img1'  error={errors?.img1 && errors.img1.message} />
                <TextInput isCol register={register} label='Lien vers le projet :' name='projet1' error={errors?.projet1 && errors.projet1.message} />
            </div>
            <div className='col col-home-admin'>
                <img src={img1} alt="Image 1" />
                <FileInput isCol register={register} label="Image d'accueil 1 :" name='img1'  error={errors?.img1 && errors.img1.message} />
                <TextInput isCol register={register} label='Lien vers le projet :' name='projet1' error={errors?.projet1 && errors.projet1.message} />
            </div>
            </div>
        </form>
    <Footer />
    </>
  )
}

export default HomeAdmin
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header'
import './Contact.css'
import data from '../data.json'

function Contact() {

    const content = "sybilleguinard@gmail.com :)"
    
  return (
    <>
    <Header isSecondVisible/>
        <div className='container contact-container'>
            <a href="mailto:sybille.guinard@gmail.com">{data.contact.email}</a>
        </div>
    <Footer withArrow />
    </>
  )
}

export default Contact
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Contact.css';
import data from '../data.json';

function Contact() {
    return (
        <>
            <div className="container contact-container">
                <div>
                <p>Contact me on:</p>
                <a href="mailto:sybille.guinard@gmail.com">{data.contact.email}</a></div>
            </div>
            <p className='arrows-desc'>Discover more on:</p>
            <Footer withArrow />
        </>
    );
}

export default Contact;

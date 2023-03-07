import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import data from '../data.json';
import './About.css';

function About() {
    return (
        <>
            <Header isSecondVisible />
            <div className="container about">
                <img src={require('../uploads/about/' + data.about.avatar_path)} alt="Avatar" />
                <div className="about-text">{data.about.desc}</div>
            </div>
            <Footer />
        </>
    );
}

export default About;

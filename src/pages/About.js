import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import data from '../data.json';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <Header isSecondVisible />
            <div className="logo-container-about">
                <div className="logo-second">Hello, I am</div>
                <Link className="logo" to={'/'}>
                    Sybille Guinard
                </Link>
                <div className="logo-second">
                    Art director junior,
                    <br />
                    based in Lyon.
                </div>
            </div>
            <div className="container about-container">
                <div className="about">
                    <img src={require('../uploads/about/' + data.about.avatar_path)} alt="Avatar" />
                    <div className="about-text">
                        {data.about.desc.split('#').map((row, key) => {
                            return row[0] === 'g' ? <b key={key}>{row.slice(1)}</b> : <p key={key}>{row.slice(1)}</p>;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;

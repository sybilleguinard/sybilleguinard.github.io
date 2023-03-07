import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Arrow from '../components/Arrow';
import './DetailProjet.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function DetailProjet() {
    const values = [
        {
            id: 0,
            path: 'versionpng.png',
        },
        {
            id: 1,
            path: 'versionpng.png',
        },
        {
            id: 3,
            path: 'versionpng.png',
        },
        {
            id: 40,
            path: 'versionpng.png',
        },
    ];

    const to = useNavigate();

    const img = require('../uploads/projets/' +
        values.filter((a) => String(a.id) === new URLSearchParams(window.location.search).get('id'))[0].path);

    const [windowScroll, setWindowScroll] = useState(0);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setWindowScroll(document.documentElement.scrollTop);
        });
    }, []);

    return (
        <>
        <Helmet>
            <title>Sybille Guinard</title>
        </Helmet>
            <Header />
            <div className="container">
                <div className="go-back" onClick={() => to('/projets')}>
                    <Arrow direction="1px 0 0 1px" hover="3px 0 0 3px" />
                    <p>Voir les autres projets</p>
                </div>
                <img className="detail-projet-img" src={img} alt="Description d'un projet" />
                <Arrow
                    onClick={scrollTop}
                    direction="1px 1px 0 0"
                    className={'to-top' + (windowScroll ? '' : ' d-none')}
                    hover="3px 3px 0 0"
                />
            </div>
            <Footer />
        </>
    );
}

export default DetailProjet;

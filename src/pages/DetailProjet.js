import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Arrow from '../components/Arrow';
import './DetailProjet.css';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import data from '../data.json';

function DetailProjet() {
    const to = useNavigate();

    const img = require('../uploads/projets/presentations/desktop/' +
        data.projects.filter(a => String(a.id) === new URLSearchParams(window.location.search).get('id'))[0]
            .project_path);

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
                <Link className="go-back" to={-1}>
                    <Arrow direction="1px 0 0 1px" hover="3px 0 0 3px" dimension="15px" />
                    <p>Voir les autres projets</p>
                </Link>
                <img className="detail-projet-img" src={img} alt="Description d'un projet" />
                <Arrow
                    onClick={scrollTop}
                    direction="1px 1px 0 0"
                    className={'to-top' + (windowScroll ? '' : ' d-none')}
                    hover="3px 3px 0 0"
                    dimension="15px"
                />
            </div>
            <Footer />
        </>
    );
}

export default DetailProjet;

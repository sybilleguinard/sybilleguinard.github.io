import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Arrow from '../components/Arrow';
import './DetailProjet.css';

function DetailProjet() {

    const values = [
        {
            id: 0,
            path: 'versionpng.png'
        },
        {
            id: 1,
            path: 'versionpng.png'
        },
        {
            id: 3,
            path: 'versionpng.png'
        },
        {
            id: 40,
            path: 'versionpng.png'
        },
    ]
    
    const img = require('../uploads/projets/' + values.filter(a => String(a.id) ===  new URLSearchParams(window.location.search).get('id'))[0].path)
    
    useEffect(() => {
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="go-back">
                    <Arrow direction="1px 0 0 1px" />
                    <p>Voir les autres projets</p>
                </div>
                <img className='detail-projet-img' src={img} alt="Description d'un projet" />
            </div>
            <Footer />
        </>
    );
}

export default DetailProjet;

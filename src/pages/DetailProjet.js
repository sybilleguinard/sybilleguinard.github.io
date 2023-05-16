import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Arrow from '../components/Arrow';
import './DetailProjet.css';
import { Link } from 'react-router-dom';
import data from '../data.json';

function DetailProjet() {
    const [windowScroll, setWindowScroll] = useState(0);
    console.log(window.location.href.split('=')[1]);
    const [content, setContent] = useState(
        data.projects.filter(a => String(a.id) === window.location.href.split('=')[1])[0].project_path
    );

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
            <div className="container">
                <Link className="go-back" to={-1}>
                    <Arrow direction="1px 0 0 1px" hover="3px 0 0 3px" dimension="12px" />
                    <p>Voir les autres projets</p>
                </Link>
                <div className="project-container">
                    {content.map((image, key) => {
                        return (
                            <img
                                className="detail-projet-img"
                                src={require('../uploads/projets/presentations/desktop/' + image)}
                                key={key}
                                alt="Description d'un projet"
                            />
                        );
                    })}
                </div>
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

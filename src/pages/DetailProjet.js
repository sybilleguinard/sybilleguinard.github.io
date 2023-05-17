import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Arrow from '../components/Arrow';
import './DetailProjet.css';
import { Link } from 'react-router-dom';
import data from '../data.json';
import { useWindowSize } from '../Utils';

function DetailProjet() {
    const [windowScroll, setWindowScroll] = useState(0);
    const [content, setContent] = useState([]);
    const [width, height] = useWindowSize();

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
        setPageContent(width);
    }, []);

    useEffect(() => {
        console.log(width);
        setPageContent(width);
    }, [width]);

    function setPageContent(width) {
        if (width > 1000) {
            setContent(data.projects.filter(a => String(a.id) === window.location.href.split('=')[1])[0].project_path);
        } else {
            setContent(
                data.projects.filter(a => String(a.id) === window.location.href.split('=')[1])[0].mobile_project_path
            );
        }
    }

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
                                src={
                                    width > 1000
                                        ? require('../uploads/projets/presentations/desktop/' + image)
                                        : require('../uploads/projets/presentations/mobile/' + image)
                                }
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

import './Footer.css';
import React from 'react';
import sm from '../assets/icons/sm-arrow.svg';
import lg from '../assets/icons/lg-arrow.svg';
import { Link } from 'react-router-dom';

function Footer({ withArrow }) {
    return (
        <section className="footer">
            <div className="links">
                <Link to="https://www.behance.net/sybilleguinard" target="_blank">
                    <div
                        className={'arrows-container-footer arrows-container-footer-sm' + (withArrow ? '' : ' d-none')}>
                        <img src={sm} alt="Petite flèche" />
                    </div>
                    Behance
                </Link>
                <Link to="https://www.linkedin.com/in/sybille-guinard-11888718b/" target="_blank">
                    <div className={'arrows-container-footer' + (withArrow ? '' : ' d-none')}>
                        <img src={lg} alt="Grande flèche" />
                    </div>
                    Linkedin
                </Link>
            </div>
            <div className="copyright">© 2023 Sybille Guinard</div>
        </section>
    );
}

export default Footer;

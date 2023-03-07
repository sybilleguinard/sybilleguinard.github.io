import './Header.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header({ isSecondVisible }) {
    const to = useNavigate();

    const path = useLocation().pathname

    return (
        <section className="header">
            <div className="logo-container">
                <div className="logo-second" style={{ '--visible': isSecondVisible ? 'visible' : 'hidden' }}>
                    Hello, I am
                </div>
                <div className="logo" onClick={() => to('/')}>
                    Sybille Guinard
                </div>
                <div className="logo-second" style={{ '--visible': isSecondVisible ? 'visible' : 'hidden' }}>
                    Art director junior,
                    <br />
                    based in Lyon.
                </div>
            </div>
            <ul className="navbar">
                <li className={path.includes("/artworks") ? "active" : ""} onClick={() => to('/artworks')}>Artworks</li>
                <li className={path.includes("/projets") ? "active" : ""} onClick={() => to('/projets')}>Portfolio</li>
                <li className={path.includes("/about") ? "active" : ""} onClick={() => to('/about')}>About</li>
                <li className={path.includes("/contact") ? "active" : ""} onClick={() => to('/contact')}>Contact</li>
            </ul>
        </section>
    );
}

export default Header;

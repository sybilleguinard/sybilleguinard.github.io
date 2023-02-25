import './Header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ isSecondVisible }) {
    const to = useNavigate();

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
            <div className="navbar">
                <p onClick={() => to('/projets')}>Portfolio</p>
                <p onClick={() => to('/artworks')}>Artworks</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </section>
    );
}

export default Header;

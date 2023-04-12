import './Header.css';
import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useWindowSize } from '../Utils';

function Header({ isSecondVisible }) {
    const to = useNavigate();
    const [width, height] = useWindowSize();
    const [burgerActive, setBurgerActive] = useState(false);
    const path = useLocation().pathname;

    console.log(path);

    return (
        <section className="header">
            <div className="logo-container">
                <div className={'logo-second' + (isSecondVisible ? '' : ' d-none')}>Hello, I am</div>
                <div className="logo" onClick={() => to('/')}>
                    Sybille Guinard
                </div>
                <div className={'logo-second' + (isSecondVisible ? '' : ' d-none')}>
                    Art director junior,
                    <br />
                    based in Lyon.
                </div>
                <div className={'logo-second' + (width < 1000 ? '' : ' d-none')}>{path.slice(1)}</div>
            </div>
            <div
                className={'burger-container ' + (burgerActive && 'active')}
                onClick={() => setBurgerActive(val => !val)}>
                <div className="burger" />
                <div className="burger" />
                <div className="burger" />
            </div>
            <nav className={'navbar ' + (burgerActive && 'active')}>
                <NavLink to={'/artworks'}>Artworks</NavLink>
                <NavLink to={'/portfolio'}>Portfolio</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </nav>
        </section>
    );
}

export default Header;

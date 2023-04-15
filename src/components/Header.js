import './Header.css';
import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink, Link } from 'react-router-dom';
import { useWindowSize } from '../Utils';
import Arrow from '../components/Arrow';
import { useEffect } from 'react';

function Header({ isSecondVisible, isSecondMobileVisible }) {
    const [width, height] = useWindowSize();
    const [burgerActive, setBurgerActive] = useState(false);
    const path = useLocation().pathname;

    const LogoContainer = () => {
        if (width > 1000)
            switch (path) {
                case '/':
                case '/about':
                case '/contact':
                    return (
                        <div className="logo-container">
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
                    );
                case '/artworks':
                case '/portfolio':
                default:
                    return (
                        <div className="logo-container">
                            <Link className={'logo ' + (width < 1000 && path === '/about' && ' d-none')} to={'/'}>
                                Sybille Guinard
                            </Link>
                        </div>
                    );
            }
        else
            switch (path) {
                case '/':
                    return (
                        <div className="logo-container-home">
                            <div className="logo-second">Hello, I am</div>
                            <Link className="logo" to={'/'}>
                                Sybille Guinard
                            </Link>
                            <div className="logo-second">
                                Art director junior,
                                <br />
                                based in Lyon.
                            </div>
                            <div className="arrow-container">
                                <Arrow
                                    hover="0 0 2px 2px"
                                    onClick={() => setBurgerActive(value => !value)}
                                    dimension="15px"
                                    className={burgerActive && 'active'}
                                />
                            </div>
                        </div>
                    );
                case '/about':
                    return (
                        <div className="logo-container">
                            <div className="logo-second">{path.slice(1)}</div>
                        </div>
                    );
                case '/artworks':
                case '/portfolio':
                case '/contact':
                    return (
                        <div className="logo-container">
                            <Link className="logo" to={'/'}>
                                Sybille Guinard
                            </Link>
                            <div className="logo-second">{path.slice(1)}</div>
                        </div>
                    );
                default:
                    return (
                        <div className="logo-container">
                            <Link className="logo" to={'/'}>
                                Sybille Guinard
                            </Link>
                        </div>
                    );
            }
    };

    return (
        <section className={'header ' + (path === '/' && ' home')}>
            <LogoContainer />
            <div
                className={'burger-container ' + (burgerActive && 'active ') + (path === '/' && ' d-none')}
                onClick={() => setBurgerActive(val => !val)}>
                <div className="burger" />
                <div className="burger" />
                <div className="burger" />
            </div>
            <nav className={'navbar ' + (burgerActive && 'active ') + (path === '/' && ' navbar-home')}>
                <NavLink to={'/portfolio'}>Portfolio</NavLink>
                <NavLink to={'/artworks'}>Artworks</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </nav>
        </section>
    );
}

export default Header;

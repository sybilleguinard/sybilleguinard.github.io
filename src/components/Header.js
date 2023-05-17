import './Header.css';
import React, { useState, useRef } from 'react';
import { useNavigate, useLocation, NavLink, Link } from 'react-router-dom';
import { useWindowSize } from '../Utils';
import Arrow from '../components/Arrow';
import { useEffect } from 'react';

function Header() {
    const [width, height] = useWindowSize();
    const [fade, setFade] = useState('d-none');
    const [burgerActive, setBurgerActive] = useState(false);
    const [history, setHistory] = useState([]);
    const path = useLocation().pathname;

    useEffect(() => {
        const pages = {
            with: ['/', '/about'],
            wihtout: ['/artworks', '/portfolio', '/contact'],
        };
        const previous = history.length ? history[history.length - 1] : '';

        if (pages.with.includes(path)) {
            if (pages.with.includes(previous)) setFade('');
            else setFade('fade-in');
        } else {
            if (pages.with.includes(previous)) setFade('fade-out');
            else setFade('d-none');
        }

        setHistory([...history, path]);
    }, [path]);

    useEffect(() => {
        setTimeout(() => {
            if (fade === 'fade-in') setFade('');
            else if (fade === 'fade-out') setFade('d-none');
        }, 1300);
    }, [fade]);

    const LogoContainer = () => {
        if (width > 1000)
            return (
                <div className="logo-container">
                    <div className={'logo-second ' + fade}>Hello, I am</div>
                    <Link className="logo" to={'/'}>
                        Sybille Guinard
                    </Link>
                    <div className={'logo-second ' + fade}>
                        Art director junior,
                        <br />
                        based in Lyon.
                    </div>
                </div>
            );
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
        <section className={'header ' + (path === '/' ? 'home' : undefined)}>
            <LogoContainer />
            <div
                className={'burger-container ' + (burgerActive ? 'active ' : undefined) + (path === '/' ? ' d-none' : undefined)}
                onClick={() => setBurgerActive(val => !val)}>
                <div className="burger" />
                <div className="burger" />
                <div className="burger" />
            </div>
            <div className={path === '/' ? 'invisible-onclick' : undefined} onClick={() => setBurgerActive(false)}></div>
            <nav className={'navbar ' + (burgerActive ? 'active ' : undefined) + (path === '/' ? ' navbar-home' : undefined)}>
                <NavLink to={'/portfolio'} onClick={() => setBurgerActive(false)}>
                    portfolio
                </NavLink>
                <NavLink to={'/artworks'} onClick={() => setBurgerActive(false)}>
                    artworks
                </NavLink>
                <NavLink to={'/about'} onClick={() => setBurgerActive(false)}>
                    about
                </NavLink>
                <NavLink to={'/contact'} onClick={() => setBurgerActive(false)}>
                    contact
                </NavLink>
            </nav>
        </section>
    );
}

export default Header;

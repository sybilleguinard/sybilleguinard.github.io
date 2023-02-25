import './Footer.css';
import React from 'react';

function Footer() {
    return (
        <section className="footer">
            <div className="links">
                <a href="https://www.behance.net/sybilleguinard" target="_blank">
                    Behance
                </a>
                <a href="https://www.linkedin.com/in/sybille-guinard-11888718b/" target="_blank">
                    Linkedin
                </a>
            </div>
            <div className="copyright">© 2023 Sybille Guinard</div>
        </section>
    );
}

export default Footer;

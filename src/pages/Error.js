import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Error.css';

function Error() {
    return (
        <>
            <div className="error-404-container">
                <div className="error-404">ERROR<span> 404</span></div>
            </div>
            <Footer />
        </>
    );
}

export default Error;

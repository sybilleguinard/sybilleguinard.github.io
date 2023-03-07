import './Artworks.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Helmet } from 'react-helmet';
import data from '../data.json';

function Artworks() {
    return (
        <>
            <Helmet>
                <title>Sybille Guinard</title>
            </Helmet>
            <Header />
            <Carousel children={data.artworks} hasChildren />
            <Footer />
        </>
    );
}

export default Artworks;

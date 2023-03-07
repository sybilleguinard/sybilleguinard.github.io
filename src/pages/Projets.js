import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../data.json';

function Projets() {
    return (
        <>
            <Header />
            <Carousel children={data.projects} path="" />
            <Footer />
        </>
    );
}

export default Projets;

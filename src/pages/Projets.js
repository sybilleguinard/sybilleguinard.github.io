import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from '../data.json';
import { useWindowSize } from '../Utils';

function Projets() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Carousel children={data.projects} path="" />
            {width > 1000 && <Footer />}
        </>
    );
}

export default Projets;

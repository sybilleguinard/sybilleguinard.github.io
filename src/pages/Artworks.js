import './Artworks.css';
import React from 'react';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Helmet } from 'react-helmet';
import data from '../data.json';
import { useWindowSize } from '../Utils';

function Artworks() {
    const [width, height] = useWindowSize();

    return (
        <>
            <Carousel clickToViewMore={width < 1000 && true} children={data.artworks} hasChildren />
            {width > 1000 && <Footer />}
        </>
    );
}

export default Artworks;

import './Artworks.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Helmet } from 'react-helmet';

function Artworks() {
    const content = [
        {
            path: 'rsz_dsc_1552.jpg',
            title: 'beretta m9',
            desc: 'Format 10x120, Micron',
            children: ['DSC_1097.jpg', 'DSC_1106.jpg', 'DSC_1099.jpg', 'DSC_1107.jpg'],
        },
        {
            path: 'rsz_dsc_1094.jpg',
            title: 'beretta m9',
            desc: 'Format 10x120, Micron',
            children: ['DSC_1097.jpg', 'DSC_1099.jpg', 'DSC_1106.jpg', 'DSC_1107.jpg'],
        },
        {
            path: 'rsz_dsc_1552.jpg',
            title: 'beretta m9',
            desc: 'Format 10x120, Micron',
            children: ['DSC_1097.jpg', 'DSC_1099.jpg', 'DSC_1106.jpg', 'DSC_1107.jpg'],
        },
        {
            path: 'rsz_dsc_1094.jpg',
            title: 'beretta m9',
            desc: 'Format 10x120, Micron',
            children: ['DSC_1097.jpg', 'DSC_1099.jpg', 'DSC_1106.jpg', 'DSC_1107.jpg'],
        },
    ];

    return (
        <>
        <Helmet>
            <title>Sybille Guinard</title>
        </Helmet>
            <Header />
            <Carousel children={content} hasChildren  />
            <Footer />
        </>
    );
}

export default Artworks;

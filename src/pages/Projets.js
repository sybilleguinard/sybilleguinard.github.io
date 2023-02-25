import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Projets() {

    const content = [
        {
            id: 0,
            path: 'igm1.jpg',
            title: 'Neurosciences',
            desc: 'Lorem ipsum dolor sit amet coucou faut que ça fasse 2 lignes lipsum'
        },
        {
            id: 1,
            path: 'igm1.jpg',
            title: 'Neurosciences',
            desc: 'Lorem ipsum dolor sit amet coucou faut que ça fasse 2 lignes lipsum'
        },
        {
            id: 3,
            path: 'igm1.jpg',
            title: 'Neurosciences',
            desc: 'Lorem ipsum dolor sit amet coucou faut que ça fasse 2 lignes lipsum'
        },
        {
            id: 40,
            path: 'igm1.jpg',
            title: 'Neurosciences',
            desc: 'Lorem ipsum dolor sit amet coucou faut que ça fasse 2 lignes lipsum'
        },
    ]
    
  return (
    <>
    <Header />
    <Carousel children={content} path="" />
    <Footer />
    </>
  )
}

export default Projets
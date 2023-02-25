import React, { useEffect, useRef, useState } from 'react';
import '../stylesheets/main.css';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../uploads/home/img1.png';
import img2 from '../uploads/home/img2.png';
import img3 from '../uploads/home/img3.png';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

function Home() {
    const [step, setStep] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) setStep((step) => (step + 1) % 3);
            else setPause(false);
        }, 10000);
        return () => clearInterval(interval);
    }, [, pause]);

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <>
            <Header isSecondVisible />
            <section className="Home-carousel-container">
                <div className="Home-carousel" style={{ '--step': step }}>
                    <img src={img1} alt=">Image de présentation" />
                    <img src={img2} alt=">Image de présentation" />
                    <img src={img3} alt=">Image de présentation" />
                </div>
                <div className="Home-carousel-buttons">
                    <div onClick={() => {setStep(0); setPause(true)}} className={step === 0 ? 'active' : ''} />
                    <div onClick={() => {setStep(1); setPause(true)}} className={step === 1 ? 'active' : ''} />
                    <div onClick={() => {setStep(2); setPause(true)}} className={step === 2 ? 'active' : ''} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;

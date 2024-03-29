import React, { useEffect, useState } from 'react';
import '../stylesheets/main.css';
import './Home.css';
import Footer from '../components/Footer';
import img1 from '../uploads/home/img1.webp';
import img2 from '../uploads/home/img2.webp';
import img3 from '../uploads/home/img3.webp';
import data from '../data.json';
import { Link } from 'react-router-dom';

function Home() {
    const [step, setStep] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        document.title = 'Sybille Guinard';
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) setStep(step => (step + 1) % data.home.length);
            else setPause(false);
        }, 5000);
        return () => clearInterval(interval);
    }, [pause]);

    return (
        <>
            <section className="Home-carousel-container">
                <div className="Home-carousel" style={{ '--step': step }}>
                    <Link to={data.home[0].project_link}>
                        <img src={img1} alt="Image de présentation" />
                    </Link>
                    <Link to={data.home[1].project_link}>
                        <img src={img2} alt="Image de présentation" />
                    </Link>
                    <Link to={data.home[2].project_link}>
                        <img src={img3} alt="Image de présentation" />
                    </Link>
                </div>
                <div className="Home-carousel-buttons">
                    <div
                        onClick={() => {
                            setStep(0);
                            setPause(true);
                        }}
                        className={step === 0 ? 'active' : ''}
                    />
                    <div
                        onClick={() => {
                            setStep(1);
                            setPause(true);
                        }}
                        className={step === 1 ? 'active' : ''}
                    />
                    <div
                        onClick={() => {
                            setStep(2);
                            setPause(true);
                        }}
                        className={step === 2 ? 'active' : ''}
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;

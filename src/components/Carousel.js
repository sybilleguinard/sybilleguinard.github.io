import './Carousel.css';
import React, { useEffect, useRef, useState } from 'react';
import Cross from './Cross';
import { useNavigate } from 'react-router-dom';

function Carousel({ children, hasChildren, childrenPath, path }) {
    const [step, setStep] = useState(0);
    const [stepWidth, setStepWidth] = useState(-1000 - 995 - 718);
    const [currentWidth, setCurrentWidth] = useState(995);
    const [childActive, setChildActive] = useState(null);
    const [subPics, setSubPics] = useState(<></>);
    const [childrenContainerClasses, setChildrenContainerClasses] = useState(' hidden h-none');

    const to = useNavigate();

    let ids = useRef(new Array(children.length).fill(null));

    useEffect(() => {
        if (hasChildren) {
            if (childActive !== null) {
                setSubPics(
                    children[childActive].children_paths.map((element, key) => {
                        return (
                            <div className="child-pic" key={key}>
                                <img src={require('../uploads/artworks/content/' + element)} alt="Détail" />
                            </div>
                        );
                    })
                );
                setChildrenContainerClasses('');
            } else {
                setChildrenContainerClasses(' hidden');
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
                setTimeout(() => {
                    setChildrenContainerClasses(' hidden h-none d-abs');
                }, 500);
            }
        }
    }, [childActive]);

    useEffect(() => {
        calcStepWidth();
    }, [step]);

    useEffect(() => {
        setTimeout(() => {
            calcStepWidth();
        }, 100);
    }, []);

    function calcStepWidth() {
        let tmp = [];
        for (let i = 0; i < ids.current.length; i++) {
            tmp.push(ids.current[i].offsetWidth);
        }
        let stepWidth = 1000;
        for (let i = 0; i < step; i++) {
            stepWidth += tmp[i];
        }
        setStepWidth(stepWidth);
        setCurrentWidth(tmp[step]);
    }

    function nextStep() {
        if (childActive === null) {
            if (step < children.length - 1) setStep(step + 1);
            else setStep(0);
        } else setChildActive(null);
    }

    function previousStep() {
        if (childActive === null) {
            if (step > 0) {
                setStep(step - 1);
            }
        } else setChildActive(null);
    }

    function toggleChildActive(key) {
        if (hasChildren) {
            if (key === step) {
                if (childActive === null) setChildActive(key);
                else setChildActive(null);
            } else if (childActive === null) setStep(key);
            else setChildActive(null);
        } else to('/detail-projet?id=' + children[key].id);
    }

    let Content = children.map((element, key) => {
        return (
            <React.Fragment key={key}>
                {key !== 0 && <div className={'separator' + (childActive !== null ? ' big' : '')} />}
                <div
                    className={
                        'carousel-element' +
                        (hasChildren
                            ? childActive !== null
                                ? childActive != key
                                    ? ' blur'
                                    : ' focused'
                                : ''
                            : key === step
                            ? ' focused'
                            : '')
                    }
                    ref={el => (ids.current[key] = el)}>
                    <div className="main-pic-container" alt="Artwork" onClick={() => toggleChildActive(key)}>
                        <img
                            src={
                                hasChildren
                                    ? require('../uploads/artworks/' + element.miniature_path)
                                    : require('../uploads/projets/miniatures/desktop/' + element.miniature_path)
                            }
                            alt="Image du portfolio"
                            className="main-pic"
                        />
                        <div className="text-container">
                            <h2>{element.title}</h2>
                            <p>{element.desc}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    });
    Content = Content.reduce((prev, next) => [prev, , next]);

    return (
        <>
            <section className="carousel-container">
                <Cross
                    className={'carousel-cross' + (childActive !== null ? '' : ' d-none')}
                    onClick={() => setChildActive(null)}
                />
                <div className="carousel-div">
                    <div
                        className="carousel"
                        style={{ '--step-width': '-' + stepWidth + 'px', '--current-width': currentWidth + 'px' }}>
                        <div className="white" />
                        {Content}
                        <div className="white" />
                    </div>
                    <div className="side left" onClick={previousStep} />
                    <div className="side right" onClick={nextStep} />
                </div>
                {hasChildren ? (
                    <div className={'children-pic-container' + (childActive !== null ? '' : childrenContainerClasses)}>
                        <div className="children-cache" />
                        {subPics}
                    </div>
                ) : (
                    <></>
                )}
            </section>
            {/* <p className={'click-drag' + (childActive !== null ? ' d-none' : '')}>Click or drag</p> */}
        </>
    );
}

export default Carousel;

import './Carousel.css';
import React, { useEffect, useRef, useState } from 'react';
import Cross from './Cross';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '../Utils';
import Arrow from './Arrow';

function Carousel({ children, hasChildren, clickToViewMore }) {
    const [step, setStep] = useState(2);
    const [stepWidth, setStepWidth] = useState(-1000 - 995 - 718);
    const [currentWidth, setCurrentWidth] = useState(995);
    const [childActive, setChildActive] = useState(null);
    const [subPics, setSubPics] = useState(<></>);
    const [childrenContainerClasses, setChildrenContainerClasses] = useState(' hidden h-none');
    const [content, setContent] = useState(children);
    const ref = useRef();
    const [width, height] = useWindowSize();

    const to = useNavigate();

    let ids = useRef(new Array(children.length).fill(null));

    useEffect(() => {
        setContent([
            children[children.length - 2],
            children[children.length - 1],
            ...children,
            children[0],
            children[1],
        ]);
        setTimeout(() => {
            calcStepWidth();
        }, 200);
        ref.current.style.transition = 'all .3s ease';
    }, []);

    useEffect(() => {
        if (hasChildren) {
            if (childActive !== null) {
                setSubPics(
                    content[childActive].children_paths.map((element, key) => {
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
            setStep(step + 1);
            if (step === content.length - 3) {
                let child = ref.current.children[5].firstChild;

                setTimeout(() => {
                    ref.current.style.transition = '';
                    child.style.transition = '0s transform';
                    child.lastChild.style.transition = '0s all';

                    setStep(2);

                    setTimeout(() => {
                        ref.current.style.transition = 'all .3s ease';
                        child.style.transition = '.3s transform';
                        child.lastChild.style.transition = 'ax-height 0.3s, padding-top 0.3s';
                    }, 100);
                }, 300);
            }
        } else setChildActive(null);
    }

    function previousStep() {
        if (childActive === null) {
            setStep(step - 1);
            if (step === 2) {
                let child = ref.current.children[ref.current.children.length - 6].firstChild;

                setTimeout(() => {
                    ref.current.style.transition = '';

                    child.style.transition = '0s transform';
                    child.lastChild.style.transition = '0s all';
                    setStep(content.length - 3);

                    setTimeout(() => {
                        ref.current.style.transition = 'all .3s ease';
                        child.style.transition = '.3s transform';
                        child.lastChild.style.transition = 'ax-height 0.3s, padding-top 0.3s';
                    }, 100);
                }, 300);
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
        } else to('/detail-projet?id=' + children[key - 2].id);
    }

    let Content = content.map((element, key) => {
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
                        ref={ref}
                        style={{ '--step-width': '-' + stepWidth + 'px', '--current-width': currentWidth + 'px' }}>
                        <div className="white" />
                        {Content}
                        <div className="white" />
                    </div>
                    <div className="side left" onClick={previousStep}>
                        {width < 1000 && <Arrow direction="1px 0 0 1px" hover="2px 0 0 2px" />}
                    </div>
                    <div className="side right" onClick={nextStep}>
                        {width < 1000 && <Arrow direction="1px 0  0 1px" hover="2px 0  0 2px" />}
                    </div>
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
            <p className={'click-drag' + (childActive !== null || !clickToViewMore ? ' d-none' : '')}>
                Click to view more :)
            </p>
        </>
    );
}

export default Carousel;

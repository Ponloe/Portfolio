import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import React, { useState, useEffect } from 'react';
import Logo from './Logo'
import './index.scss';
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'p', 'o', 'n', 'l', 'o', 'e']
    const jobArray = ['W', 'e','b', ' ', 'D','e','v','e', 'l','o','p','e','r','.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
            // Clean up the timeout
            clearTimeout(timeoutId);
        };
    }, []);
    

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={15}/>
                </h1>
                <h2>Software Engineer / Student / Sophomore </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
};

export default Home;

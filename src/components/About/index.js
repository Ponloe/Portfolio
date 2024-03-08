import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Greetings! I'm Soponloe Sovann, a computer science enthusiast currently enrolled at Paragon University. 
                    My journey in the world of technology is fueled by a passion for Web Development. 
                    As a student at Paragon, I am immersed in a dynamic learning environment that constantly challenges and inspires me. 
                </p>
                <p >
                    Beyond the classroom, I thrive on collaboration and innovation. 
                    Engaging in hackathons and contributing to open-source projects are among my favorite ways to apply my skills in real-world scenarios. 
                    The tech community has become my second home, and this website serves as a digital hub where I showcase my projects, experiences, and thoughts on the ever-evolving tech landscape.
                </p>
                <p>
                    I'm a quietly confident, naturally curious, and perpetually working on 
                    improving my skills one problem at a time.
                </p>
            </div>
            <div className='stage-cube-cont'>   
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faC} color="#28A4D9" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJava} color="#DD0031" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
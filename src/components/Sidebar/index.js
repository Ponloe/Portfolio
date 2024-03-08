import { Link,NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { faEnvelope, faHome, faUser, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)


    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logoSub" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon
             onClick={() => setShowNav(false)}
             icon ={faClose}
             color="#ffd700"
             size="3x"
             className='close-icon'
             />
        </nav>
        <ul>
            <li>
                <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/sovann-soponloe-b47502292/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="blank" rel="noreferrer" href="https://github.com/Ponloe?tab=overview&from=2024-02-01&to=2024-02-29">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="blank" rel="noreferrer" href="https://www.facebook.com/ponloe.sovann/">
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="blank" rel="noreferrer" href="https://www.instagram.com/ponloee/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon'
        />
    </div>
)}

export default Sidebar
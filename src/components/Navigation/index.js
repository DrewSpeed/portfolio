import React from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faAddressCard, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Nav() {
    return (
        <header>
            
            <div className='navbar'>
                <nav>

                    <a className='about-link' href="/"> <FontAwesomeIcon icon={faUser}   color="#4d4d4e"/></a>
                    <a className='contact-link' href="/"> <FontAwesomeIcon icon={faEnvelope}  classNamecolor="#4d4d4e"/></a>
                    <a className='work-link' href="/"> <FontAwesomeIcon icon={faCode}  color="#4d4d4e" /></a>
                    <a className='resume-link' href="/"> <FontAwesomeIcon icon={faAddressCard}  color="#4d4d4e"/></a>
                </nav>
                <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/drew-j-speed/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href="https://github.com/DrewSpeed">
                            <FontAwesomeIcon icon={faGithub}  />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Nav; 
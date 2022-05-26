import React, { Component } from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faAddressCard, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'


function Nav() {
    return (
        <header>
            
            <div className='navbar'>
                <nav>

                    <NavLink exact="true" activeClassName="active" to="/" className='about-link' href="/"> 
                        <FontAwesomeIcon icon={faUser}   color="#4d4d4e"/>
                    </NavLink>
                    <NavLink activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope}  classNamecolor="#4d4d4e"/>
                    </NavLink>
                    <NavLink activeclassname="active" className="work-link" to="/work">
                        <FontAwesomeIcon icon={faCode}  color="#4d4d4e" />
                    </NavLink>
                    <a className="resume-link" target="_blank" href="https://drive.google.com/file/d/1EyPFbdEMN58bxE7-uNX_Gz_eBGSEVb2U/view">
                        <FontAwesomeIcon icon={faAddressCard}  color="#4d4d4e"/>
                    </a>

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
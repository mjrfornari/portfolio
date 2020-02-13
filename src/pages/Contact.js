import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { Icon } from 'react-icons-kit'
import {iosTelephone} from 'react-icons-kit/ionicons/iosTelephone'
import {email} from 'react-icons-kit/ionicons/email'
import {github} from 'react-icons-kit/icomoon/github'
import {facebook2} from 'react-icons-kit/icomoon/facebook2'
import {instagram} from 'react-icons-kit/icomoon/instagram'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {location2} from 'react-icons-kit/icomoon/location2'
import { Animated } from "react-animated-css";
import '../App.css';

function Contact({ visible }) {

  useEffect(()=>{
  }, [])

  return (
    <>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={500} animationOutDuration={500} isVisible={true}>
            <div className="page Contact" id="contact">
                <h1>Contact</h1>
                <div>
                  <li>
                    <a href="https://www.google.com/maps/place/Porto+Alegre,+RS/@-30.0396306,-51.2074418,13z/data=!4m5!3m4!1s0x95199cd2566acb1d:0x603111a89f87e91f!8m2!3d-30.0346471!4d-51.2176584" target='_blank'>
                      <Icon size={40} icon={location2} /> Porto Alegre - RS - Brazil
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5551982912797&text=Hello!%20Saw%20your%20phone%20number%20in%20your%20portfolio...%20" target='_blank'>
                      <Icon size={40} icon={iosTelephone} /> Phone: +55 (51) 98291-2797
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mjrfornari@gmail.com">
                      <Icon size={40} icon={email} /> Email: mjrfornari@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mjrfornari" target='_blank'>
                      <Icon size={40} icon={linkedin} /> LinkedIn: mjrfornari
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mjrfornari" target='_blank'>
                      <Icon size={40} icon={github} /> Github: mjrfornari
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/mjrfornari" target='_blank'>
                      <Icon size={40} icon={facebook2} /> Facebook: mjrfornari
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mjrfornari" target='_blank'>
                      <Icon size={40} icon={instagram} /> Instagram: mjrfornari
                    </a>
                  </li>
                </div>
            </div>                 
        </Animated>
    </>
  );
}

export default Contact;
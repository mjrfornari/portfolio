import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { Animated } from "react-animated-css";
import '../App.css';

function Projects({ visible }) {

  useEffect(()=>{
    
  }, [])

  return (
    <>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={500} animationOutDuration={500} isVisible={true}>
            <div className="page Projects" id="projects">
                <h1>Projects</h1>
                
            </div>                 
        </Animated>
    </>
  );
}

export default Projects;
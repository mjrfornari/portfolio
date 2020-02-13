import React, { useEffect } from 'react';
import { Animated } from "react-animated-css";
import '../App.css';

function Skills({ visible }) {

  useEffect(()=>{
    
  }, [])

  return (
    <>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={500} animationOutDuration={500} isVisible={true}>
            <div className="page Skills" id="skills">
                <h1>Skills</h1>

            </div>                 
        </Animated>
    </>
  );
}

export default Skills;
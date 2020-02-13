import React, { useEffect } from 'react';
import Typist from 'react-typist';
import { Animated } from "react-animated-css";
import '../App.css';

function Bio({ visible }) {

  useEffect(()=>{
    
  }, [])

  return (
    <>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={500} animationOutDuration={500} isVisible={true}>
            <div className="page Bio" id="bio">
                <h1>Bio</h1>
                <div>
                  <p> 
                      Student of analysis and systems development, electronics technician, 
                      gamer and technology enthusiast. Also father of a 7y.o. boy. :)
                  </p>
                </div>
            </div>               
        </Animated>
    </>
  );
}

export default Bio;
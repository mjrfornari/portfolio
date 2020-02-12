import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import { Animated } from "react-animated-css";
import { Icon } from 'react-icons-kit'
import {iosContact} from 'react-icons-kit/ionicons/iosContact'
import {codeWorking} from 'react-icons-kit/ionicons/codeWorking'
import {iosBook} from 'react-icons-kit/ionicons/iosBook'

import './App.css';

function App() {
  const [isCodeVisible, setIsCodeVisible] = useState(true)
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false)
  const [toggled, setToggled] = useState(true)

  useEffect(()=>{
    
  }, [])

  return (
    <>
      <div id="app" className="Home" >
        { toggled ? (
          <Animated animationOut="fadeOut" animationOutDuration={600} isVisible={isCodeVisible}>
              <Typist className="Code" startDelay={1000} avgTypingDelay={40}
                cursor={{...Typist.cursor, element: '_', blink: true, hideWhenDone: true, hideWhenDoneDelay: 0}}
                onTypingDone={()=> {
                  setTimeout(() => {
                    setIsCodeVisible(false)
                    setTimeout(() => {
                      setIsPortfolioVisible(true)
                      setToggled(false)
                    }, 1000)
                  }, 700)
                }}
              >
                <p>showMarcosFornariPortfolio();</p>
              </Typist>
          </Animated>
        ) : (
          <Animated animationIn="fadeIn" animationInDuration={1000} isVisible={false || isPortfolioVisible}>
              <aside>
                <img src="perfil.jpg" className="FotoPerfil" />
                <button onClick={(e)=>e.preventDefault()} className="asideButton">
                  <Icon icon={iosContact} size={50}/>
                  <strong>Contact</strong>
                </button>
                <button onClick={(e)=>e.preventDefault()} className="asideButton">
                  <Icon icon={iosBook} size={50}/>
                  <strong>Bio</strong>
                </button>
                <button onClick={(e)=>e.preventDefault()} className="asideButton">
                  <Icon icon={codeWorking} size={50}/>
                  <strong>Projects</strong>
                </button>
              </aside> 
              <div className="Info">

              </div>
          </Animated>)
        }
      </div>
    </>
  );
}

export default App;

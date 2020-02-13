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

  function setDivFocus (e, id) {
    e.preventDefault(); 
    document.getElementById(id).scrollIntoView();
  }

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
              <div className="mainScreen">
                <aside>
                  <img src="perfil.jpg" className="FotoPerfil" />
                  <button onClick={(e) => setDivFocus(e, 'contact')} className="asideButton">
                    <Icon icon={iosContact} size={50}/>
                    <strong>Contact</strong>
                  </button>
                  <button onClick={(e) => setDivFocus(e, 'bio')} className="asideButton">
                    <Icon icon={iosBook} size={50}/>
                    <strong>Bio</strong>
                  </button>
                  <button onClick={(e) => setDivFocus(e, 'projects')} className="asideButton">
                    <Icon icon={codeWorking} size={50}/>
                    <strong >Projects</strong>
                  </button>
                </aside> 
                <main className="Info">
                  <div className="InfoTitle">
                    <strong>Marcos Fornari</strong><br/>
                    <strong>Full Stack Developer</strong>
                  </div>
                  <div className="InfoBody">
                    <div className="Contact" id="contact">
                      <p>Contact</p>
                    </div>
                    

                    <div className="Bio" id="bio">
                      <p>Bio</p>
                    </div> 

                    <div className="Projects" id="projects">
                      <p>Projects</p>
                    </div>                 
                  </div>
                </main>
              </div>
          </Animated>)
        }
      </div>
    </>
  );
}

export default App;

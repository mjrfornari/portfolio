import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Typist from 'react-typist';
import { Animated } from "react-animated-css";
import { Icon } from 'react-icons-kit'
import { LinkContainer } from 'react-router-bootstrap'
import {iosContact} from 'react-icons-kit/ionicons/iosContact'
import {codeWorking} from 'react-icons-kit/ionicons/codeWorking'
import {iosBook} from 'react-icons-kit/ionicons/iosBook'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Bio from './pages/Bio'

import './App.css';

function App() {
  const [isCodeVisible, setIsCodeVisible] = useState(true)
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false)
  const [showPage, setShowPage] = useState('Contact')
  const [toggled, setToggled] = useState(true)

  function setDivFocus (e, page) {
    e.preventDefault(); 
    setShowPage(page)
    console.log(page)
  }

  useEffect(()=>{
  }, [])

  return (
    <Router>
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
                  <LinkContainer to={'/contact'}>
                    <button className="asideButton">
                      <Icon icon={iosContact} size={50}/> Contact
                    </button>
                  </LinkContainer>
                  <LinkContainer to={'/bio'} className="asideButton">
                    <button className="asideButton">
                      <Icon icon={iosBook} size={50}/> Bio
                    </button>
                  </LinkContainer>
                  <LinkContainer to={'/projects'} className="asideButton">
                    <button className="asideButton">
                      <Icon icon={codeWorking} size={50}/> Projects
                    </button>
                  </LinkContainer>
                </aside> 
                <main className="Info">
                  <div className="InfoTitle">
                    <strong>Marcos Fornari</strong><br/>
                    <strong>Full Stack Developer</strong>
                  </div>
                  <div className="InfoBody">
                    <Switch>
                      <Route path="/contact" component={ Contact } />
                      <Route exact path="/bio" component={ Bio } />
                      <Route exact path="/projects" component={ Projects } />
                      <Route component={ Contact } />
                    </Switch>
                  </div>
                </main>
              </div>                    
          </Animated>)
        }
      </div>
    </Router>
  );
}

export default App;

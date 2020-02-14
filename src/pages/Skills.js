import React, { useEffect } from 'react';
import { Animated } from "react-animated-css";
import { Icon } from 'react-icons-kit'
import {androidStar} from 'react-icons-kit/ionicons/androidStar'
import {androidStarOutline} from 'react-icons-kit/ionicons/androidStarOutline'
import {androidStarHalf} from 'react-icons-kit/ionicons/androidStarHalf'
import '../App.css';

function Skills({ visible }) {

  useEffect(()=>{
    
  }, [])

  return (
    <>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={500} animationOutDuration={500} isVisible={true}>
            <div className="page Skills" id="skills">
                <h1>Skills</h1>
                <li>
                  ReactJS - 1 year
                  <div>
                      (
                        <Icon size={20} icon={androidStar} />
                        <Icon size={20} icon={androidStar} />
                        <Icon size={20} icon={androidStar} />
                        <Icon size={20} icon={androidStar} />
                        <Icon size={20} icon={androidStarOutline} />
                      )
                  </div> 
                </li>
                <li>
                  NodeJS - 1 year
                  <div>
                    (
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStarHalf} />
                      <Icon size={20} icon={androidStarOutline} />
                    )
                  </div> 
                </li>
                <li>
                  React Native - 2 months
                    <div>
                      (
                        <Icon size={20} icon={androidStar} />
                        <Icon size={20} icon={androidStar} />
                        <Icon size={20} icon={androidStarOutline} />
                        <Icon size={20} icon={androidStarOutline} />
                        <Icon size={20} icon={androidStarOutline} />
                      )
                    </div> 
                </li>
                <li>
                  PHP - 2 months
                  <div>
                    (
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStarOutline} />
                      <Icon size={20} icon={androidStarOutline} />
                      <Icon size={20} icon={androidStarOutline} />
                    )
                  </div> 
                </li>
                <li>
                  Delphi - 2 years
                  <div>
                    (
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStar} />
                      <Icon size={20} icon={androidStarOutline} />
                    )
                  </div> 
                </li>

            </div>                 
        </Animated>
    </>
  );
}

export default Skills;
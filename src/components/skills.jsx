import React from 'react';
import './skills.css';
import pythonskill from '../images/pythonskill.png';
import reactskill from '../images/reactskill.png';
import wordpressskill from '../images/wordpressskill.png';
import officeskill from '../images/officeskill.png';

const Skills = () => {
  return (
    <div className='SkillsContainer'>
      <h4>My Skill Set</h4>
      <div className='skillslogocontainer'>
        <div className='skill'>
          <img className='skilllogo' alt='Python' src={pythonskill} />
          <span className='skillname'>Python</span>
        </div>
        <div className='skill'>
          <img className='skilllogo' alt='React' src={reactskill} />
          <span className='skillname'>React</span>
        </div>
        <div className='skill'>
          <img className='skilllogo' alt='WordPress' src={wordpressskill} />
          <span className='skillname'>WordPress</span>
        </div>
        <div className='skill'>
          <img className='skilllogo' alt='Microsoft Office' src={officeskill} />
          <span className='skillname'>Office</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

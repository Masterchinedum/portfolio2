import React, { useState } from 'react';
import './projectCard.css';

const ProjectCard = ({ year, name, isNew, imagePath, Comment }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project-image">
        <img src={imagePath} alt={name} />
        {isHovering && (
          <div className="view-project">
            <i className="eye-icon"></i> View Project
          </div>
        )}
      </div>
      <div className="project-details">
        {isNew && <div className="new-badge">NEW</div>}
        <div className="year">{year}</div>
        <div className="project-name">{name}</div>
        <div className='comment'>{Comment} </div>
      </div>
    </div>
  );
};

export default ProjectCard;

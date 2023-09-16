import React, { useRef, useEffect } from 'react';
import './Home.css';
import Hero from '../../components/Hero';
import Skills from '../../components/skills';
import ProjectCard from '../../components/ProjectCard';
import space1Image from '../../images/space1.png';
import spaceImage from '../../images/space.jpeg';
import space2Image from '../../images/space2.png';
import space3Image from '../../images/space3.png';

const Home = () => {
  const projects = [
    {
      id: 1,
      year: "2022-present",
      name: "Project 1",
      isNew: true,
      imagePath: space1Image,
    },
    {
      id: 2,
      year: "2017",
      name: "Project 2",
      isNew: false,
      imagePath: spaceImage,
      Comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      id: 3,
      year: "2019-2020",
      name: "Project 3",
      isNew: false,
      imagePath: space2Image,
      Comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      year: "2023",
      name: "Project 4",
      isNew: true,
      imagePath: space3Image,
      Comment: 'lorem ipsum saniterim prempid haskil astermantyl la isail',
    },
    // Add more projects as needed
  ];

  const slideRef = useRef(null);

  // Function to handle the sliding effect
  const slideProjects = () => {
    const slideContainer = slideRef.current;
    if (slideContainer) {
      const firstSlide = slideContainer.children[0];
      slideContainer.style.transition = 'transform 0.3s ease-in-out';
      slideContainer.style.transform = `translateX(-${firstSlide.offsetWidth}px)`;
      setTimeout(() => {
        slideContainer.appendChild(firstSlide);
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = 'translateX(0)';
      }, 300);
    }
  };

  // Start sliding effect on mount and set interval
  useEffect(() => {
    const slideInterval = setInterval(slideProjects, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
      <div className="ProjectCardDisplay">
        <div className="slide-container" ref={slideRef}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              year={project.year}
              name={project.name}
              isNew={project.isNew}
              imagePath={project.imagePath}
              Comment={project.Comment}
            />
          ))}
        </div>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;

import React from 'react';
import './Home.css';
import Hero from '../../components/Hero';
import ProfileCardSlides from '../../components/ProfileCardSlides';
import Skills from '../../components/skills';


const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <ProfileCardSlides />
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;

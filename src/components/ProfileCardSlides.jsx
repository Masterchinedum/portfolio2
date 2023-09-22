import React from 'react';
import "../pages/Home/Home.css";
import ProfileCard from './Profilecard';

// Import your images
import myselfImage from '../images/myself.png';
import space1Image from '../images/space1.png';
import space3Image from '../images/space3.png';

const ProfileCardSlides = () => {
  return (
    <div className='Profile-card-container'>
      <div className="ProfileCard">
        <ProfileCard 
          imageSrc={myselfImage}
          instagramLink="#instagram"
          twitterLink="#twitter"
          threadsLink="#threads"
          linkedinLink="#linkedin"
          name="MasterChinedum"
          bio="I'm a JavaScript full-stack engineer, love working with React and Node.js."
        />
      </div>
      <div className="ProfileCard">
        <ProfileCard 
          imageSrc={myselfImage}
          instagramLink="#instagram"
          twitterLink="#twitter"
          threadsLink="#threads"
          linkedinLink="#linkedin"
          name="MasterChinedum"
          bio="I'm a JavaScript full-stack engineer, love working with React and Node.js."
        />
      </div>
      <div className="ProfileCard">
        <ProfileCard 
          imageSrc={space1Image}
          instagramLink="#instagram"
          twitterLink="#twitter"
          threadsLink="#threads"
          linkedinLink="#linkedin"
          name="MasterChinedum"
          bio="I'm a JavaScript full-stack engineer, love working with React and Node.js."
        />
      </div>
      <div className="ProfileCard">
        <ProfileCard 
          imageSrc={space3Image}
          instagramLink="#instagram"
          xLink="#twitter"
          threadsLink="#threads"
          linkedinLink="#linkedin"
          viewLink= "#view"
          name="MasterChinedum"
          bio="I'm a JavaScript full-stack engineer, love working with React and Node.js."
        />
      </div>
    </div>
  )
}

export default ProfileCardSlides;

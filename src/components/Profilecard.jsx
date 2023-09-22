import React from 'react';
import './ProfileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function ProfileCard(props) {
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <div className="profile-image">
          <img src={props.imageSrc} alt="Profile" />
        </div>
        <ul className="social-icons">
          <li>
            <a href={props.instagramLink} title="Share on Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Instagram SVG Path */}
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>
          <li>
            <a href={props.xLink} title="Share on X">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"> <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg> {/* Eye icon */}
            </a>
          </li>
          <li>
            <a href={props.threadsLink} title="Share on Threads">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Threads SVG Path */}
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href={props.linkedinLink} title="Share on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* LinkedIn SVG Path */}
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href={props.viewLink} title="view Project">
              <FontAwesomeIcon icon={faEye} /> {/* Eye icon */}
            </a>
          </li>

        </ul>
        <div className="profile-name">
          <h2>{props.name}</h2>
          <div className="profile-bio">
            {props.status}
          </div>
          <div className="profile-bio">
            {props.bio}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

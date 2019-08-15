import React from 'react';
import './App.css';
import IconTextContainer from './IconTextContainer';
import GithubIcon from './icons/github';
import LinkedInIcon from './icons/linkedin';
import LocationIcon from './icons/location';
import MailIcon from './icons/mail';
import PhoneIcon from './icons/phone';

function LeftBar(props) {
  return (
    <div className="leftBarWrapper">
      <nav className="leftBar">
        <div className="mainName">{props.data.name}</div>
        <div className="leftInfoBox">
          <IconTextContainer
            icon=<GithubIcon />
            link={props.data.github.link}
            text={props.data.github.short} />
          <IconTextContainer
            icon=<LinkedInIcon />
            link={props.data.linkedin.link}
            text={props.data.linkedin.short} />
          <IconTextContainer
            icon=<MailIcon />
            link={"mailto:" + props.data.email}
            text={props.data.email} />
          <IconTextContainer
            icon=<PhoneIcon/>
            text={props.data.phone} />
          <IconTextContainer
            icon=<LocationIcon />
            text={props.data.location} />
        </div>

        <p className="sectionHeader">Languages</p>
        <div className="leftInfoBox">
          {props.data.languages.map(item =>
            <span key={item} className="tagBox">{item}</span>
          )}
        </div>

        <p className="sectionHeader">Technologies</p>
        <div className="leftInfoBox">
          {props.data.technologies.map(item =>
            <span key={item} className="tagBox">{item}</span>
          )}
        </div>

        <p className="sectionHeader">Techniques</p>
        <div className="leftInfoBox">
          {props.data.techniques.map(item =>
            <span key={item} className="tagBox">{item}</span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default LeftBar;

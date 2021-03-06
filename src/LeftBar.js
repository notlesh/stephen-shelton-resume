import React, {useState, useEffect} from 'react';
import './App.css';
import IconTextContainer from './IconTextContainer';
import ThemeToggler from './ThemeToggler';
import Tag from './components/Tag';
import GithubIcon from './icons/github';
import LinkedInIcon from './icons/linkedin';
import LocationIcon from './icons/location';
import MailIcon from './icons/mail';
import PhoneIcon from './icons/phone';

function LeftBar(props) {

  useEffect(() => {
    const leftBar = document.getElementById("leftBar");
    const scrollHandler = () => {
      leftBar.scrollTop = window.pageYOffset;
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
       window.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  return (
    <div className="leftBarWrapper">
      <nav id="leftBar" className="leftBar">
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

        <p className="leftSectionHeader">Languages</p>
        <div className="leftInfoBox">
          {props.data.languages.map(item =>
            <Tag key={item.name} className="tagBox" text={item.name} fill={item.strength}/>
          )}
        </div>

        <p className="leftSectionHeader">Technologies</p>
        <div className="leftInfoBox">
          {props.data.technologies.map(item =>
            <Tag key={item.name} className="tagBox" text={item.name} fill={item.strength}/>
          )}
        </div>

        <p className="leftSectionHeader">Techniques</p>
        <div className="leftInfoBox">
          {props.data.techniques.map(item =>
            <Tag key={item.name} className="tagBox" text={item.name} fill={item.strength}/>
          )}
        </div>
        <div className="leftBarSpacer" />
        <ThemeToggler />
      </nav>
    </div>
  );
}

export default LeftBar;

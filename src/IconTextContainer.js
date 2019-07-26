import React from 'react';
import './App.css';

function IconTextContainer(props) {
  return (
    <div className="iconTextContainer">
      <img className="icon" src={props.icon} alt="github" />
      <a href={props.link}>
        <span className="iconText">{props.text}</span>
      </a>
    </div>
  );
}

export default IconTextContainer;

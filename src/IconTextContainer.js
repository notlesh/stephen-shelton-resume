import React from 'react';
import './App.css';
import Phone from './icons/phone';

function IconTextContainer(props) {
  return (
    <div className="iconTextContainer">
    {props.icon}
    <a href={props.link}>
      <span className="iconText">{props.text}</span>
    </a>
    </div>
  );
}

export default IconTextContainer;

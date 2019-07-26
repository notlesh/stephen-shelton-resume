import React from 'react';
import './App.css';

function EducationContainer(props) {
  return (
    <div className="educationContainer">
      <p className="educationHeader">
        <span className="educationDateRange">{props.education.start} - {props.education.end}: </span>
        <span className="educationText">{props.education.text}</span>
      </p>
    </div>
  );
}

export default EducationContainer;

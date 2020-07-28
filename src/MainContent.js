import React from 'react';
import './App.css';
import RoleContainer from './RoleContainer';
import EducationContainer from './EducationContainer';
import ExtraEndContainer from './ExtraEndContainer';

function MainContent(props) {
  return (
    <div className="mainContent">
      <div>
        <p className="sectionHeader">Overview</p>
        <p className="mainDescription">{props.data.description}</p>
      </div>

      <div>
        <p className="sectionHeader">Professional Experience</p>
        {props.data.roles.map(role =>
          <RoleContainer key={role.org + role.title} role={role} />
        )}
      </div>

      <div>
        <p className="sectionHeader">Education</p>
        {props.data.education.map(education =>
          <EducationContainer key={education.text} education={education} />
        )}
      </div>

      { props.data.extraEnd.map(extra =>
        <ExtraEndContainer key={extra.headline} extra={extra} />
      )}

      <div className="printDummyPageEnd" />
    </div>
  );
}

export default MainContent;

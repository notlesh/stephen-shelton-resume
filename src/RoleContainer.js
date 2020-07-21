import React from 'react';
import './App.css';

function RoleContainer(props) {
  return (
    <div className="roleContainer">
      <div className="printSpacer" />
      <div className="roleHeader">
        <span className="roleDateRange">{props.role.start} - {props.role.end}: </span>
        <span className="roleOrganization">{props.role.org} - </span>
        <span className="roleTitle">{props.role.title}</span>
        <ul className="roleList">
          {props.role.points.map(point =>
            <li key={point} className="roleListItem" dangerouslySetInnerHTML={{__html: point}}></li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RoleContainer;

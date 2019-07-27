import React from 'react';
import parse from 'html-react-parser';

import './App.css';

function ExtraEndContainer(props) {
  return (
    <div>
      <p className="sectionHeader">{props.extra.headline}</p>
      <div className="extraEndContainer">
        <span className="extraText">{parse(props.extra.body)}</span>
      </div>
    </div>
  );
}

export default ExtraEndContainer;

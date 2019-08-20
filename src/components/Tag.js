import React from 'react';
import ProgressBar from './ProgressBar';
import '../App.css';

function Tag(props) {

  return (
    <span className="tagBox">
      {props.text}
      <ProgressBar fill={props.fill} />
    </span>
  );
}

export default Tag;

import React from 'react';
import '../App.css';

function ProgressBar(props) {

  const style = {
    width: ""+ (props.fill * 100) +"%",
  }

  return (
    <div className="progressBar">
      <div className="progressBarFill" style={style}>
      </div>
    </div>
  );
}

export default ProgressBar;

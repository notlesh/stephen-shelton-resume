import React from 'react';
import './App.css';
import ToggleIcon from './icons/toggle';
import switchTheme, { currentTheme } from './Theme';

function handleTogglePress() {

  let nextTheme = "";
  switch (currentTheme) {
    case "dark":
      nextTheme = "light";
      break;
    case "light":
      nextTheme = "monochrome";
      break;
    case "monochrome":
      nextTheme = "dark";
      break;
  }

  switchTheme(nextTheme);
}

function EducationContainer(props) {
  return (
    <a className="themeToggle" href="#" onClick={handleTogglePress}>
      <ToggleIcon/>
    </a>
  );
}

export default EducationContainer;

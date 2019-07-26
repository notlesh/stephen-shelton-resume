import React from 'react';
import './App.css';
import data from './data';

import LeftBar from './LeftBar';
import MainContent from './MainContent';

function App() {
  return (
    <div className="root">
      <LeftBar data={data}/>
      <MainContent data={data}/>
    </div>
  );
}

export default App;

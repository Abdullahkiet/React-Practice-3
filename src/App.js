import React from 'react';
import './App.css';
import Parent from './Parent';
import React, { useState } from 'react';

function App() {
  let [nummber,setnumber]=useState(45)

  return (
    
    <div>
      Hello World

      <Parent num={nummber}></Parent>


    </div>
  );
}

export default App;

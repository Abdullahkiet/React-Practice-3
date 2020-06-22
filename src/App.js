import React from 'react';
import './App.css';
import Parent from './Parent';
import { useState } from 'react';

function App() {

  let [nummber,setnumber]=useState(45)

  return (

    <div>
      Hello World
      <Parent num={nummber}></Parent>
      <button onClick={()=>{ setnumber(++nummber)}}>Increase number</button>
     

    </div>
  );
}

export default App;

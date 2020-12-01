import React, { useState } from 'react';
import Dice from './Dice';
import Name from './Name';
import './App.css';
import Characteristics from './Characteristics';

const App = () => {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [subrace, setSubrace] = useState('');

  const handleChange1 = event => {
    setName(event.target.value);
  }

  const handleChange2 = event => {
    setRace(event.target.value);
  }

  const handleChange3 = event => {
    setSubrace(event.target.value);
  }

  return (
    <div>
      <h1>Primordial Ooze</h1>
      <p id="welcome-message">
        Welcome to Primordial Ooze, a D&D 5e character creation page. This page is
        intended to expedite the character creation process. Follow the steps
        while entering your desired character traits, and watch as your hero
        emerges from the Primordial Ooze!
    </p>
      <div className="profile">
        <p>Name: {name}</p>
        <p>Race: {race} ({subrace})</p>
      </div>

      <div className="parent">

        <Name handleChange1={handleChange1} />
        <Characteristics handleChange2={handleChange2} handleChange3={handleChange3} />
        <Dice />

      </div>
    </div>
  );
}

export default App;

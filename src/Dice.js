import React, { useState } from 'react';

const Dice = () => {
    const [state, setState] = useState("");
    const [dice, setDice] = useState("");

    const rollOneDie = () => {
        var stringToNumber = Number(state);
        var rollOneDie = Math.ceil(Math.random() * stringToNumber);
        return setDice(rollOneDie);
    }

    const handleChange = event => {
        setState(event.target.value);
    }

    return (
        <div className="child6">
            <label htmlFor="dice-choice">Select Dice:
        <select id="dice-choice" onChange={handleChange}>
                    <option>--</option>
                    <option value="2">d2</option>
                    <option value="4">d4</option>
                    <option value="6">d6</option>
                    <option value="8">d8</option>
                    <option value="10">d10</option>
                    <option value="12">d12</option>
                    <option value="20">d20</option>
                    <option value="100">d100</option>
                </select>
            </label>
            <button onClick={rollOneDie}>Roll Dice!</button>
            <p id="diceRoll">{dice}</p>
        </div>
    );
};

export default Dice;
import React, { useState } from 'react';

const Name = ({ handleChange1 }) => {

    const [input, setInput] = useState('');

    const handleChange = event => {
        setInput(event.target.value);
        event.preventDefault();
    };

    return (
        <div className="child3">
            <form action="#" onSubmit={() => handleChange1(input)}>
                <input
                    id="name"
                    type="text"
                    placeholder="Character Name"
                    className="name"
                    autoComplete="off"
                    value={input}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Name;
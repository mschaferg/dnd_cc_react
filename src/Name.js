import React from 'react';

const Name = ({ handleChange1 }) => {

    return (
        <div class="child3">
            <form for="name">
                <label class="ability">Name:
          <input
                        id="name"
                        type="text"
                        placeholder="Character Name"
                        class="name"
                        autocomplete="off"
                        onChange={handleChange1}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Name;
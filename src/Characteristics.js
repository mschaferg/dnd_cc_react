import React from 'react';

const Characteristics = ({ handleChange2, handleChange3, handleChange4, handleChange5 }) => {


    return (
        <div className="child1">
            <form onChange={handleChange2}>
                <h3><u>Race</u></h3>
                <label htmlFor="race">Choose your race:</label>
                <select className="select" name="race" id="race">
                    <option value="race">**Choose your race**</option>
                    <option value="Dwarf" id="dwarf">Dwarf</option>
                    <option value="Elf" id="elf">Elf</option>
                    <option value="Halfling" id="halfling">Halfling</option>
                    <option value="Human" id="human">Human</option>
                    <option value="Dragonborn" id="dragonborn">Dragonborn</option>
                    <option value="Gnome" id="gnome">Gnome</option>
                    <option value="Half-Elf" id="halfElf">Half-Elf</option>
                    <option value="Half-Orc" id="halfOrc">Half-Orc</option>
                    <option value="Tiefling" id="tiefling">Tiefling</option>
                </select>
            </form>

            <form onChange={handleChange3}>
                <h3><u>Subrace</u></h3>
                <label htmlFor="subrace">Choose your subrace:</label>
                <select className="select" name="subrace" id="subrace">
                    <option value="race">**Choose your subrace**</option>
                    <option>Dwarf</option>
                    <option value="Hill Dwarf" id="hillDwarf">--Hill Dwarf</option>
                    <option value="Mountain Dwarf" id="mountainDwarf">
                        --Mountain Dwarf
          </option>
                    <option>Elf</option>
                    <option value="High Elf" id="highElf">--High Elf</option>
                    <option value="Wood Elf" id="woodElf">--Wood Elf</option>
                </select>
            </form>

            <form onChange={handleChange4}>
                <h3><u>Class</u></h3>
                <label htmlFor="job">Choose your class:</label>
                <select className="select" name="job" id="job">
                    <option value="job">**Choose your class**</option>
                    <option value="Barbarian" id="barbarian">Barbarian</option>
                    <option value="Bard" id="bard">Bard</option>
                    <option value="Cleric" id="cleric">Cleric</option>
                    <option value="Druid" id="druid">Druid</option>
                    <option value="Fighter" id="fighter">Fighter</option>
                    <option value="Monk" id="monk">Monk</option>
                    <option value="Paladin" id="paladin">Paladin</option>
                    <option value="Ranger" id="ranger">Ranger</option>
                    <option value="Rogue" id="rogue">Rogue</option>
                    <option value="Sorcerer" id="sorcerer">Sorcerer</option>
                    <option value="Warlock" id="warlock">Warlock</option>
                    <option value="Wizard" id="wizard">Wizard</option>
                </select>
            </form>

            <form onChange={handleChange5}>
                <h3><u>Background</u></h3>
                <label htmlFor="background">Choose your background:</label>
                <select className="select" name="background" id="background">
                    <option value="background">**Choose your background**</option>
                    <option value="Acolyte" id="acolyte">Acolyte</option>
                    <option value="Charlatan" id="charlatan">Charlatan</option>
                    <option value="Criminal" id="criminal">Criminal</option>
                    <option value="Entertainer" id="entertainer">Entertainer</option>
                    <option value="Folk Hero" id="folkHero">Folk Hero</option>
                    <option value="Guild Artisan" id="guildArtisan">Guild Artisan</option>
                    <option value="Hermit" id="hermit">Hermit</option>
                    <option value="Noble" id="noble">Noble</option>
                    <option value="Outlander" id="outlander">Outlander</option>
                    <option value="Sage" id="sage">Sage</option>
                    <option value="Sailor" id="sailor">Sailor</option>
                    <option value="Soldier" id="soldier">Soldier</option>
                    <option value="Urchin" id="urchin">Urchin</option>
                </select>
            </form>
        </div>
    );
}

export default Characteristics;
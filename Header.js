import React from "react";
const Header = ({handleToggleDarkMode }) => {
    return(
        <div className="header">
            <h1>NoteForge</h1>
            <img src="./image/Note Forge.jpg" alt=""/>
            <button onClick={() => handleToggleDarkMode(
                (previousDarkMode) => !previousDarkMode)}
                className="save">Toggle Mode</button>
        </div>
    )
}

export default Header;
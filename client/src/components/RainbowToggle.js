import React from 'react';

import useRainbowMode from "../hooks/useRainbowMode"

const RainbowToggle= () => {
  const [rainbowMode, setRainbowMode] = useRainbowMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setRainbowMode(!rainbowMode);
  };
  return (
    <nav className="navbar">
      <h1>Rainbow Background</h1>
      <div className="rainbow-mode__toggle">
        <div
          onClick={toggleMode}
          className={rainbowMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default RainbowToggle;

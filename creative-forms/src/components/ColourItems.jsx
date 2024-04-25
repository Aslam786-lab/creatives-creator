import React, { useState } from "react";

export default function ColourItems({ colors, onSelect, isDrawer }) {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color) => {
    if (selectedColor) {
      setSelectedColor("");
      onSelect("");
    } else {
      setSelectedColor(color);
      onSelect(color);
    }
  };

  return (
    <div className="color-filter">
      <label>{isDrawer ? 'background color' : 'color:'}</label>
      <div className="color-list-container">
        {colors.length &&
          colors.map((color) => (
            <span
              key={color}
              className={`color-item ${
                selectedColor === color ? "selected-color" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            ></span>
          ))}
      </div>
    </div>
  );
}

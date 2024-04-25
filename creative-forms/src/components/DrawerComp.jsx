import React, { useState } from "react";
import ColourItems from "./ColourItems";

export default function DrawerComp({
  toggleDrawer,
  colors,
  handleInput,
  handleColorInput,
  formInput,
  handleSubmit
}) {
  
  const isDoneBtnEnabled = !(formInput.title && formInput.subtitle && formInput.color);

  return (
    <div className="drawer">
      <div className="drawer-header">
        <h3>Creative Creation</h3>
        <button className="close-btn" onClick={toggleDrawer}>
          X
        </button>
      </div>
      <form className="creative-form" onSubmit={handleSubmit}>
        <div className="title-input">
          <label htmlFor="title-input">title</label>
          <input
            type="text"
            name="title"
            className="form-input"
            placeholder="enter the title"
            id="title-input"
            onChange={handleInput}
          />
        </div>
        <div className="subtitle-input">
          <label htmlFor="subtitle-input">subtitle</label>
          <input
            type="text"
            name="subtitle"
            className="form-input"
            placeholder="enter the subtitle"
            id="subtitle-input"
            onChange={handleInput}
          />
        </div>
        <div className="form-bg-colors">
          <ColourItems colors={colors} onSelect={handleColorInput} isDrawer/>
        </div>
        <button type="submit" className="done-btn" disabled={isDoneBtnEnabled}>
          Done
        </button>
      </form>
    </div>
  );
}

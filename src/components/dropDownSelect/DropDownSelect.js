import React, { useState } from "react";
import chevronDown from "../../assets/chevron-down.png";
import "./DropDownSelect.css";

function DropDownSelect(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="drop_down">
      <div className="dropdown_btn" onClick={() => setIsActive(!isActive)}>
        <p>{props.tittle}</p>
        <img src={chevronDown} alt="Logo" className="arrow" />
      </div>
      {isActive && (
        <div className="dropDown_content">
          {props.items.map((item) => (
            <div className="items">{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DropDownSelect;

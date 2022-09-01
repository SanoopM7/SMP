import React from "react";
import "./SideTab.css";
import canvasLogo from "../../assets/canvasLogo.png";
function SideTab() {
  return (
    <div className="side_tab">
      <div className="logo_container">
        <img src={canvasLogo} alt="Logo" className="canvas_logo" />
      </div>
      <div className="contents">
        <div className="elements"></div>
        <div className="elements"></div>
        <div className="elements"></div>
        <div className="elements"></div>
        <div className="elements"></div>
      </div>
    </div>
  );
}

export default SideTab;

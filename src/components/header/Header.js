import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/search_icon.png";
import userIcon from "../../assets/profilePic.png";
import chevronDown from "../../assets/chevron-down.png";
import endponintIcon from "../../assets/icon-endpoints.png";
import assetIcon from "../../assets/icon-assets.png";
import assetGrpIcon from "../../assets/icon-uniqueGroups.png";

import "./Header.css";
function Header(props) {
  console.log(props);
  const [isActive, setIsActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    searchInput?.length === 0 ? setIsActive(false) : setIsActive(true);
  }, [searchInput]);
  return (
    <div className="header">
      <p className="tittle">SMP</p>
      <div className="side_container">
        <div className="search_container">
          <div className="search_box">
            <img src={searchIcon} alt="Logo" className="search_icon" />
            <input
              type={"search"}
              className="search_input"
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
            ></input>
          </div>
          {isActive && (
            <div
              className="search_dropDown_content"
              onClick={() => {
                props.open(true);
                setIsActive(false);
              }}
            >
              <div className="search_dropDown_content_sec">
                <div className="search_result_tile">
                  <img
                    src={endponintIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">PCF Endpoint</span>
                    <span className="search_tile_count">
                      1.1.15.1281-f20f535a
                    </span>
                  </div>
                </div>
                <div className="search_result_tile">
                  <img
                    src={endponintIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">PCF Endpoint</span>
                    <span className="search_tile_count">
                      1.1.15.1281-f20f535a
                    </span>
                  </div>
                </div>
                <div className="search_result_tile">
                  <img
                    src={endponintIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">PCF Endpoint</span>
                    <span className="search_tile_count">
                      1.1.15.1281-f20f535a
                    </span>
                  </div>
                </div>
                <div className="search_suggestion">
                  <img src={searchIcon} alt="Logo" className="search_icon" />
                  <span className="see_all">See all Endpoints</span>
                </div>
              </div>
              <div className="search_dropDown_content_sec sec_2">
                <div className="search_result_tile">
                  <img
                    src={assetIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">Asset</span>
                    <span className="search_tile_count">do-haproxy</span>
                  </div>
                </div>
                <div className="search_result_tile">
                  <img
                    src={assetIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">Assett</span>
                    <span className="search_tile_count">do-haproxy</span>
                  </div>
                </div>
                <div className="search_result_tile">
                  <img
                    src={assetIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">Asset</span>
                    <span className="search_tile_count">do-haproxy</span>
                  </div>
                </div>
                <div className="search_suggestion">
                  <img src={searchIcon} alt="Logo" className="search_icon" />
                  <span className="see_all">See all Endpoints</span>
                </div>
              </div>
              <div className="search_dropDown_content_sec sec_3">
                <div className="search_result_tile">
                  <img
                    src={assetGrpIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">Asset Group</span>
                    <span className="search_tile_count">
                      magenta selling and services
                    </span>
                  </div>
                </div>
                <div className="search_result_tile">
                  <img
                    src={assetGrpIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">Asset Groupt</span>
                    <span className="search_tile_count">
                      magenta selling and services
                    </span>
                  </div>
                </div>
                <div className="search_result_tile">
                  <img
                    src={assetGrpIcon}
                    alt="Logo"
                    className="search_tile_icon"
                  />
                  <div className="tile_content">
                    <span className="search_tile_tittle">Asset Group</span>
                    <span className="search_tile_count">
                      magenta selling and services
                    </span>
                  </div>
                </div>
                <div className="search_suggestion">
                  <img src={searchIcon} alt="Logo" className="search_icon" />
                  <span className="see_all">See all Endpoints</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="user_container">
          <p className="hi_john">Hi John</p>
          <img
            src={chevronDown}
            alt="Logo"
            className="chevron_down"
            onClick={() => {
              props.modalOpen1(true);
            }}
          />
          <img
            src={userIcon}
            alt="Logo"
            className="user_icon"
            onClick={() => {
              props.modalOpen2(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

import downloadIcon from "../../assets/icons-download.png";
import chevronDown from "../../assets/chevron-down.png";
import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import closeIcon from "../../assets/modal_close_icon.png";
import "./GroupDetailsModal.css";

function GroupDetailsModal(props) {
  const resultDetails = [
    {
      name: "Asset ID:",
      value: "APM0208413",
    },
    {
      name: "Endpoint Label:",
      value: "kubernetes",
    },
    {
      name: "Endpoint:",
      value: "kubernetes:https://digital-hap-q2.px-npe1104.pks.t-mobile.com",
    },
    {
      name: "Group:",
      value: "account management apps",
    },
    {
      name: "Group ID:",
      value: "APM0103539",
    },
    {
      name: "Environment:",
      value: "QLAB02",
    },
    {
      name: "Version:",
      value: "3.0154-d7aec49a",
    },
    {
      name: "Created By:",
      value: "tkumara",
    },
    {
      name: "Created Date:",
      value: "12/21/2020 12:55:28 PM",
    },
    {
      name: "Updated By:",
      value: "System",
    },
    {
      name: "Updated Date:",
      value: "04/06/2021 12:00:12 PM",
    },
  ];

  return (
    <div className="search_result_modal_container">
      <div className="modal_background"></div>
      <div className="search_result_modal">
        <div className="modal_content">
          <div className="modal_head">
            magneta selling and services
            <img
              src={closeIcon}
              alt="Logo"
              className="close_icon"
              onClick={() => {
                props.modalOpen(false);
              }}
            />
          </div>
          <Autocomplete
            value="QLAB02"
            inputValue="QLAB02"
            id="controllable-states-demo"
            options={["QLAB02"]}
            renderInput={(params) => (
              <TextField {...params} label="Environment Selected" />
            )}
          />
          <div className="modal_details_group">
            <div className="details_sec">
              <p className="details_text">Details</p>
              <div className="details_content">
                <div>
                  <p className="details_name">Group ID</p>
                  <p className="details_value">APM0202302</p>
                </div>
                <div>
                  <p className="details_name">Assets</p>
                  <p className="details_value">58</p>
                </div>
                <div>
                  <p className="details_name">Endpoints</p>
                  <p className="details_value">58</p>
                </div>
                <div>
                  <p className="details_name">Unhealthy Endpoints</p>
                  <p className="details_value">0</p>
                </div>
              </div>
            </div>
            <div className="group_asset_sec">
              <div className="group_asset_sec_header">
                <p>Assets (58)</p>
                <div className="download_sec">
                  <img
                    src={downloadIcon}
                    alt="Logo"
                    className="icon_download"
                  />
                  <p>Download</p>
                </div>
              </div>
              <div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>do-haproxy</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>genericcejmsadapter</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>genericcejmsadapter</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>genericcejmsadapter</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>orders-digital-wf-rsp-a...</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>orders-digital-wf-rsp-a...</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>orders-digital-wf-rsp-a...</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>orders-digital-wf-rsp-a...</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>orders-digital-wf-rsp-a...</p>
                </div>
                <div className="list_item">
                  <div className="ellipse"></div>
                  <p>orders-digital-wf-rsp-a...</p>
                </div>
              </div>
              <div className="show_all">
                Show All
                <img src={chevronDown} alt="Logo" className="icon_download" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupDetailsModal;

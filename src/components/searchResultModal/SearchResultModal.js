import React from "react";
import closeIcon from "../../assets/modal_close_icon.png";

import "./SearchResultModal.css";
function SearchResultModal(props) {
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
            managepaymentinsturmentsv3
            <img
              src={closeIcon}
              alt="Logo"
              className="close_icon"
              onClick={() => {
                props.modalOpen(false);
              }}
            />
          </div>
          <div className="modal_details">
            {resultDetails.map((item) => {
              return (
                <>
                  <div className="details_label">{item.name}</div>
                  <div className="details_value">{item.value}</div>
                </>
              );
            })}
          </div>
          <div className="modal_btn">View in Registries/Matrix</div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultModal;

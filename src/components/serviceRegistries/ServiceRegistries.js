import React from "react";
import DropDownSelect from "../dropDownSelect/DropDownSelect";
import "./ServiceRegistries.css";
import iconExpand from "../../assets/icon-expand.png";
import upDown from "../../assets/up_down.png";

function ServiceRegistries() {
  let theadData = ["Group ID", "Group", "Assets", "Endpoint", "Environments"];
  let tbodyData = [
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
    {
      GroupId: "APM0202304",
      Group: "account managment apps",
      Assets: "3",
      Endpoint: "21",
      Environments: "8",
    },
  ];
  return (
    <div className="main_section">
      <div className="register_sec">
        <div className="header_sec type_1">
          <p className="header_tittle">Service Registries</p>
          <img src={iconExpand} alt="Logo" className="icon_exp" />
        </div>
        <table>
          <thead>
            <tr className="row_data">
              {theadData.map((h) => {
                return (
                  <td title={h}>
                    <div className="table_heads">
                      {h}
                      <img src={upDown} alt="Logo" className="up_Down" />
                    </div>
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tbodyData.map((item) => {
              return (
                <tr className="row_data contents_1">
                  <td title={item.GroupId} className="row_items">
                    {item.GroupId}
                  </td>
                  <td title={item.Group} className="row_items">
                    {item.Group}
                  </td>
                  <td title={item.Assets} className="row_items row_items_2">
                    {item.Assets}
                  </td>
                  <td title={item.Endpoint} className="row_items row_items_2">
                    {item.Endpoint}
                  </td>
                  <td
                    title={item.Environments}
                    className="row_items row_items_3"
                  >
                    {item.Environments}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="matrix_sec">
        <div className="header_sec">
          <p className="header_tittle">Dependency Matrix</p>
          <div className="filter_sec_container">
            <div className="filter">
              <DropDownSelect
                tittle="Asset ID"
                items={["none", "none", "none"]}
              />
            </div>
            <div className="filter">
              <DropDownSelect
                tittle="Environment"
                items={["none", "none", "none"]}
              />
            </div>
            <div className="filter">
              <DropDownSelect
                tittle="Health"
                items={["none", "none", "none"]}
              />
            </div>
          </div>
          <img src={iconExpand} alt="Logo" className="icon_exp" />
        </div>
      </div>
    </div>
  );
}

export default ServiceRegistries;

import React from "react";
import iconRefresh from "../../assets/icon-refresh.png";
import DropDownSelect from "../dropDownSelect/DropDownSelect";
import "./SearchResult.css";

function SearchResult(props) {
  console.log(props);
  return (
    <div className="main_container">
      <div className="filter_sec">
        <div className="result_header">Search Results</div>
        <div className="search_filters_container">
          <div className="search_filter_head">
            <p>Filters</p>
            <img src={iconRefresh} alt="Logo" className="icon_refresh" />
          </div>
          <div className="search_filter">
            <DropDownSelect
              tittle="Environment"
              items={["none", "none", "none"]}
            />
            <DropDownSelect
              tittle="Asset Group"
              items={["none", "none", "none"]}
            />
            <DropDownSelect tittle="Phases" items={["none", "none", "none"]} />
            <DropDownSelect
              tittle="Group ID"
              items={["none", "none", "none"]}
            />
            <DropDownSelect tittle="Assets" items={["none", "none", "none"]} />
            <DropDownSelect
              tittle="Asset ID"
              items={["none", "none", "none"]}
            />
            <div className="dropdown_btn">
              <p className="Endpoint_substring">Endpoint Substring...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content_sec">
        <div className="result_header">
          <p>5 results for “3.0154-d7aec49a”</p>
          <div
            className="go_dashboard"
            onClick={() => {
              props.open(false);
            }}
          >
            Go To Main Dashboard
          </div>
        </div>
        <div className="result_tab_contnr">
          <div className="result_tab selected_tab">All Results</div>
          <div className="result_tab">Assets</div>
          <div className="result_tab">Groups</div>
          <div className="result_tab">Endpoints</div>
        </div>
        <p className="top_result">Top Result</p>
        <div
          className="result_card"
          onClick={() => {
            props.modalOpen(true);
          }}
        >
          <p className="result_card_tittle">kubernetes.3.0154-d7aec49a</p>
          <div className="result_card_dtils_ctnr">
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group ID:<span className="card_dtils_content">APM0202302</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group:
                <span className="card_dtils_content">
                  magenta selling and serve apps
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset ID:<span className="card_dtils_content">APM0208413</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset:
                <span className="card_dtils_content">
                  managepaymentinsturmentsv3
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Environment:
                <span className="card_dtils_content">QLAB02</span>
              </span>
            </div>
          </div>
        </div>
        <p className="top_result">Endpoints</p>
        <div className="result_card">
          <p className="result_card_tittle">kubernetes.3.0154-d7aec49a</p>
          <div className="result_card_dtils_ctnr">
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group ID:<span className="card_dtils_content">APM0202302</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group:
                <span className="card_dtils_content">
                  magenta selling and serve apps
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset ID:<span className="card_dtils_content">APM0208413</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset:
                <span className="card_dtils_content">
                  managepaymentinsturmentsv3
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Environment:
                <span className="card_dtils_content">QLAB02</span>
              </span>
            </div>
          </div>
        </div>
        <div className="result_card">
          <p className="result_card_tittle">kubernetes.3.0154-d7aec49a</p>
          <div className="result_card_dtils_ctnr">
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group ID:<span className="card_dtils_content">APM0202302</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group:
                <span className="card_dtils_content">
                  magenta selling and serve apps
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset ID:<span className="card_dtils_content">APM0208413</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset:
                <span className="card_dtils_content">
                  managepaymentinsturmentsv3
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Environment:
                <span className="card_dtils_content">QLAB02</span>
              </span>
            </div>
          </div>
        </div>
        <div className="result_card">
          <p className="result_card_tittle">kubernetes.3.0154-d7aec49a</p>
          <div className="result_card_dtils_ctnr">
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group ID:<span className="card_dtils_content">APM0202302</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group:
                <span className="card_dtils_content">
                  magenta selling and serve apps
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset ID:<span className="card_dtils_content">APM0208413</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset:
                <span className="card_dtils_content">
                  managepaymentinsturmentsv3
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Environment:
                <span className="card_dtils_content">QLAB02</span>
              </span>
            </div>
          </div>
        </div>
        <div className="result_card">
          <p className="result_card_tittle">kubernetes.3.0154-d7aec49a</p>
          <div className="result_card_dtils_ctnr">
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group ID:<span className="card_dtils_content">APM0202302</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group:
                <span className="card_dtils_content">
                  magenta selling and serve apps
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset ID:<span className="card_dtils_content">APM0208413</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset:
                <span className="card_dtils_content">
                  managepaymentinsturmentsv3
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Environment:
                <span className="card_dtils_content">QLAB02</span>
              </span>
            </div>
          </div>
        </div>
        <div className="result_card">
          <p className="result_card_tittle">kubernetes.3.0154-d7aec49a</p>
          <div className="result_card_dtils_ctnr">
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group ID:<span className="card_dtils_content">APM0202302</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Group:
                <span className="card_dtils_content">
                  magenta selling and serve apps
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset ID:<span className="card_dtils_content">APM0208413</span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Asset:
                <span className="card_dtils_content">
                  managepaymentinsturmentsv3
                </span>
              </span>
            </div>
            <div className="result_card_dtils">
              <span className="card_dtils_tittle">
                Environment:
                <span className="card_dtils_content">QLAB02</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

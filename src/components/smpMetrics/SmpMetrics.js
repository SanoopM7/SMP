import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import iconMinimize from "../../assets/icon-minimize.png";
import iconExpand from "../../assets/icon-expand.png";
import tileIcon1 from "../../assets/icon-endpoints.png";
import tileIcon2 from "../../assets/icon-assets.png";
import tileIcon3 from "../../assets/icon-resolutions.png";
import tileIcon4 from "../../assets/icon-bad endpoints.png";
import tileIcon5 from "../../assets/icon-uniqueGroups.png";
import donetGrapgh from "../../assets/donet-graph.png";
import lineGraph from "../../assets/line-graph.png";

import "./SmpMetrics.css";

const useStyles = makeStyles(() => ({
  expanded: {},
  content: {
    height: "3.125rem",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&$expanded": {
      margin: 0,
      height: "3.125rem",
    },
  },
}));

function SmpMetricsAccordion() {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        classes={{ content: classes.content, expanded: classes.expanded }}
      >
        <span className="accordion_tittle">SMP Metrics</span>
        <div className="min_ex_icons">
          <img src={iconMinimize} alt="Logo" className="icon_min_exp" />
          <img src={iconExpand} alt="Logo" className="icon_min_exp" />
        </div>
      </AccordionSummary>
      <div className="metrics">
        <div className="section_1">
          <div className="tile">
            <img src={tileIcon1} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Endpoints</span>
              <span className="tile_count">10,000</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon2} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Assets</span>
              <span className="tile_count">600</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon3} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Resolutions</span>
              <span className="tile_count">11</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon4} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Unhealthy Endpoints</span>
              <span className="tile_count">20</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon5} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Unique Groups</span>
              <span className="tile_count">30</span>
            </div>
          </div>
        </div>
        <div className="section_2">
          <span className="section_tittle">Endpoint Types</span>
          <img src={donetGrapgh} alt="Logo" className="donet_grapgh" />
        </div>
        <div className="section_3">
          <span className="section_tittle">Onboarding</span>
          <img src={lineGraph} alt="Logo" className="line_grapgh" />
        </div>
        <div className="section_4">
          <span className="section_tittle">App Density by Environments</span>
          <p className="environments_count">
            11<span className="environments_tittle">Environments</span>
          </p>
          <div className="grid_container">
            <div class="item1">
              <span className="item_tittle">QLAB02</span>
            </div>
            <div class="item2">
              <span className="item_tittle">QLAB03</span>
            </div>
            <div class="item3">
              <span className="item_tittle">QLAB07</span>
            </div>
            <div class="item4">
              <span className="item_tittle">QLAB01</span>
            </div>
            <div class="item5">
              <span className="item_tittle">PLAB01</span>
            </div>
            <div class="item6">
              <span className="item_tittle">PLAB02</span>
            </div>
            <div class="item7">
              <span className="item_tittle">PLAB01</span>
            </div>
            <div class="item8">
              <span className="item_tittle">PLAB02</span>
            </div>
            <div class="item9">
              <span className="item_tittle">PLAB06</span>
            </div>
            <div class="item10">
              <span className="item_tittle">PROD</span>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
}

export default SmpMetricsAccordion;

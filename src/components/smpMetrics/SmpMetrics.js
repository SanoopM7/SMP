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
import { Chart } from "react-google-charts";
import data from "../../APIres.json";
import { Carousel } from "@trendyol-js/react-carousel";
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
  let smp_data = data.smp_data;
  const donet_options = {
    pieHole: 0.7,
    is3D: false,
    legend: "none",
    chartArea: { left: 0, top: 15, width: "90%", height: "75%" },
    colors: ["#1d5d87", "#71bae0", "#31394d"],
    pieSliceText: "none",
  };
  const line_options = {
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#e20074", "#576d9b"],
    vAxis: {
      format: "#%",
      gridlines: { minSpacing: 50 },
    },
    pointsVisible: true,
    chartArea: { left: 30, top: 20, width: "80%", height: "70%" },
  };
  const tree_map_options = {
    minColor: "#71bae0",
    midColor: "#1d5d87",
    maxColor: "#31394d",
    headerHeight: 0,
    showScale: false,
    fontColor: "#cbcdd3",
  };
  const donet_data = smp_data.Endpoint_types.map((item) => {
    return [item.type, item.count];
  });

  donet_data.splice(0, 1);
  console.log("dataaa", donet_data);
  const donet_graph_data = [["Effort", "total Endpoints"], ...donet_data];

  const line_data = smp_data.onboarding.catalog_onboarding.map((item) => {
    return [item.month, parseFloat(item.percentage) / 100];
  });
  smp_data.onboarding.registry_onboarding.map((item, index) => {
    line_data[index].push(parseFloat(item.percentage) / 100);
  });
  const line_graph_data = [["Year", "Catalogue", "Registry"], ...line_data];
  const tree_data = smp_data.registry_density.map((item) => {
    return [item.environment, "Environments", item.count];
  });
  const tree_map_data = [
    ["ID", "environment", "count"],
    ["Environments", null, 0],
    ...tree_data,
  ];
  return (
    <Accordion defaultExpanded="true">
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
              <span className="tile_count">{smp_data.Endpoints}</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon2} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Assets</span>
              <span className="tile_count">{smp_data.Assets}</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon3} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Resolutions</span>
              <span className="tile_count">{smp_data.healthy_Endpoints}</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon4} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Unhealthy Endpoints</span>
              <span className="tile_count">{smp_data.unhealthy_Endpoints}</span>
            </div>
          </div>
          <div className="tile">
            <img src={tileIcon5} alt="Logo" className="tile_icon" />
            <div className="tile_content">
              <span className="tile_tittle">Unique Groups</span>
              <span className="tile_count">{smp_data.Groups}</span>
            </div>
          </div>
        </div>
        <div className="section_2">
          <span className="section_tittle">Endpoint Types</span>
          <div className="sec_2_content">
            <Chart
              chartType="PieChart"
              width="100%"
              height="95%"
              data={donet_graph_data}
              options={donet_options}
              className="donet_graph"
            />
            <div className="total_endpoint_types_count">
              <p>{(smp_data.Endpoint_types[0].count / 1000).toFixed(1)}k</p>
              <span className="total_endpoint_types_label"> Endpoints</span>
            </div>
            <div className="legend_carousel">
              <Carousel
                show={3}
                slide={3}
                swiping={true}
                leftArrow={false}
                rightArrow={false}
                useArrowKeys={true}
              >
                {donet_data.map((item) => {
                  return (
                    <div className="pie_chart_legend">
                      <div className="donet_legendColor"></div>
                      <div className="donet_legend_type">
                        {item[0].length > 5
                          ? item[0].substring(0, 5) + "..."
                          : item[0]}
                        <div className="donet_legend_count">
                          {(item[1] / 1000).toFixed(1)}k
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="section_3">
          <span className="section_tittle">Onboarding</span>
          <Chart
            chartType="LineChart"
            width="100%"
            height="95%"
            data={line_graph_data}
            options={line_options}
          />
        </div>
        <div className="section_4">
          <span className="section_tittle">App Density by Environments</span>
          <p className="environments_count">
            {smp_data.registry_density.length}
            <span className="environments_tittle">Environments</span>
          </p>
          <Chart
            chartType="TreeMap"
            width="100%"
            height="85%"
            data={tree_map_data}
            options={tree_map_options}
          />
        </div>
      </div>
    </Accordion>
  );
}

export default SmpMetricsAccordion;

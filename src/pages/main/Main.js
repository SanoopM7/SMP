import React, { useState } from "react";
import SmpMetricsAccordion from "../../components/smpMetrics/SmpMetrics";
import Header from "../../components/header/Header";
import SideTab from "../../components/sideTab/SideTab";
import ServiceRegistries from "../../components/serviceRegistries/ServiceRegistries";
import "./Main.css";
import SearchResult from "../../components/searchResult/SearchResult";
import SearchResultModal from "../../components/searchResultModal/SearchResultModal";
import AssetDetailsModal from "../../components/assetDetailsModal/AssetDetailsModal";
function Main() {
  const [searchResult, setSearchResult] = useState(false);
  const [searchResultModal, setSearchResultModal] = useState(false);
  const [AssetModal, setassetModal] = useState(false);

  return (
    <div className={searchResultModal || AssetModal ? "body_overflow" : "body"}>
      <div className="main_page">
        <SideTab />
        <div className="main-section">
          <Header open={setSearchResult} modalOpen={setassetModal} />
          <div className="page_contents">
            {!searchResult ? (
              <>
                <SmpMetricsAccordion />
                <ServiceRegistries />
              </>
            ) : (
              <SearchResult
                open={setSearchResult}
                modalOpen={setSearchResultModal}
              />
            )}
          </div>
        </div>
        {searchResultModal && (
          <SearchResultModal modalOpen={setSearchResultModal} />
        )}
        {AssetModal && <AssetDetailsModal modalOpen={setassetModal} />}
      </div>
    </div>
  );
}

export default Main;

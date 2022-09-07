import React, { useState } from "react";
import SmpMetricsAccordion from "../../components/smpMetrics/SmpMetrics";
import Header from "../../components/header/Header";
import SideTab from "../../components/sideTab/SideTab";
import ServiceRegistries from "../../components/serviceRegistries/ServiceRegistries";
import "./Main.css";
import SearchResult from "../../components/searchResult/SearchResult";
import SearchResultModal from "../../components/searchResultModal/SearchResultModal";
import AssetDetailsModal from "../../components/assetDetailsModal/AssetDetailsModal";
import GroupDetailsModal from "../../components/groupDetailsModal/GroupDetailsModal";
function Main() {
  const [searchResult, setSearchResult] = useState(false);
  const [searchResultModal, setSearchResultModal] = useState(false);
  const [groupModal, setGroupModal] = useState(false);

  const [AssetModal, setassetModal] = useState(false);

  return (
    <div
      className={
        searchResultModal || AssetModal || groupModal ? "body_overflow" : "body"
      }
    >
      <div className="main_page">
        <SideTab />
        <div className="main-section">
          <Header
            open={setSearchResult}
            modalOpen1={setassetModal}
            modalOpen2={setGroupModal}
          />
          <div className="page_contents">
            {!searchResult ? (
              <>
                <SmpMetricsAccordion />
                <ServiceRegistries />
              </>
            ) : (
              <>
                <SearchResult
                  open={setSearchResult}
                  modalOpen={setSearchResultModal}
                />
                {console.log("blahh")}
              </>
            )}
          </div>
        </div>
        {searchResultModal && (
          <SearchResultModal modalOpen={setSearchResultModal} />
        )}
        {AssetModal && <AssetDetailsModal modalOpen={setassetModal} />}
        {groupModal && <GroupDetailsModal modalOpen={setGroupModal} />}
      </div>
    </div>
  );
}

export default Main;

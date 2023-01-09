import React from "react";
import { SalesChartWidget } from "./../widgets/SalesChartWidget";
import { CustomerFeedbackWidget } from "./../widgets/CustomerFeedbackWidget";
import "./dashboardLayout.css";
import OfferRankingWidget from "../widgets/OfferRankingWidget";

export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="DashboardLayout">
            <OfferRankingWidget />
            <div id="right_column_container">
              <CustomerFeedbackWidget />
            </div>
             <SalesChartWidget/>
            </div>
        )}
  }

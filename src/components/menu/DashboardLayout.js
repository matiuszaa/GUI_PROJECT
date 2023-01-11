import React from "react";
import { SalesChartWidget } from "./../widgets/SalesChartWidget";
import { CustomerFeedbackWidget } from "./../widgets/CustomerFeedbackWidget";
import "./dashboardLayout.css";
import {OfferRankingWidget} from "../widgets/OfferRankingWidget";
import "./../../trans/i18n";
import { Translation } from "react-i18next";

export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Translation>
        {(ln) => (
          <div className="DashboardLayout">
            <OfferRankingWidget data={this.props.offerData}/>
            <CustomerFeedbackWidget data={this.props.feedbackData}/>

            <div id="right_column_container">
            </div>
             <SalesChartWidget data={this.props.salesChartData}/>
            </div>
        )}
    </Translation>
        )}
  }

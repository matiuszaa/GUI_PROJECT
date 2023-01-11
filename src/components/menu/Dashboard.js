import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import { Translation } from "react-i18next";
import { salesChartData, feedbackData, offerRankingData} from "../../data/user";
export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
        feedbackData: feedbackData,
        offerRankingData: offerRankingData,
        salesAdviceData: null,
        salesChartData: salesChartData,
        salesQualityData: null
      };
  }
  
  render() {
    return (
        <Translation>
            {(ln) => (
          <div className="Dashboard">
            <DashboardLayout className="DashboardLayout" 
                salesChartData={this.state.salesChartData}
                feedbackData={this.state.feedbackData}
                offerData={this.state.offerRankingData}
            />
          </div>
            )}
        </Translation>
    )}

  }
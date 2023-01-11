import React from "react";
import { SalesChartWidget } from "./../widgets/SalesChartWidget";
import { CustomerFeedbackWidget } from "./../widgets/CustomerFeedbackWidget";
import "./dashboardLayout.css";
import {OfferRankingWidget} from "../widgets/OfferRankingWidget";
import "./../../trans/i18n";
import { Translation } from "react-i18next";
import { OrderWidget } from "../widgets/OrderWidget/OrderWidget";
import {SalesQualityWidget } from '../widgets/SalesQualityWidget/SalesQualityWidget'
import {SalesAdviceWidget} from '../widgets/SalesAdviceWidget';
import { Grid } from "@mui/material";

export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Translation>
        {(ln) => (
          <div className="DashboardLayout">
            <div id="FirstRow">
              <SalesChartWidget data={this.props.salesChartData}/>
              <OfferRankingWidget data={this.props.offerData}/>
            </div>
            <div id="SecondRow">
              <CustomerFeedbackWidget data={this.props.feedbackData}/>
              <div className="rightSecondRow">
                <OrderWidget />
                <SalesQualityWidget />
                <SalesAdviceWidget />
              </div>
            </div>
          </div>
        )}
    </Translation>
        )}
  }

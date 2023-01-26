import React from "react";

import SalesChartWidget from "./../widgets/SalesChartWidget";
import CustomerFeedbackWidget from "./../widgets/CustomerFeedbackWidget";
import OfferRankingWidget from "../widgets/OfferRankingWidget";
import OrderWidget from "../widgets/OrderWidget";
import SalesQualityWidget from '../widgets/SalesQualityWidget'
import SalesAdviceWidget from '../widgets/SalesAdviceWidget';

import { useTranslation } from "react-i18next";
import "./css/dashboardLayout.css";
import "./../../trans/i18n";


const DashboardLayout = (props) => {
  const [ln, i18n] = useTranslation();  
  
  return (
    <div className="DashboardLayout">
      <div id="FirstRow">
        <SalesChartWidget data={props.salesChartData}/>
        <OfferRankingWidget data={props.offerData}/>
      </div>
      <div id="SecondRow">
        <CustomerFeedbackWidget data={props.feedbackData}/>
        <div className="rightSecondRow">
          <OrderWidget data={props.ordersData}/>
          <SalesQualityWidget data={props.qualityMark} />
          <SalesAdviceWidget />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;
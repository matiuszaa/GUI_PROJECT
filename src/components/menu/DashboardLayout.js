import React from "react";
import { SalesChartWidget } from "./../widgets/SalesChartWidget";
import { CustomerFeedbackWidget } from "./../widgets/CustomerFeedbackWidget";
import "./dashboardLayout.css";
import OfferRankingWidget from "../widgets/OfferRankingWidget";
import { OrderWidget } from "../widgets/OrderWidget/OrderWidget";
import {SalesQualityWidget } from '../widgets/SalesQualityWidget/SalesQualityWidget'
import {SalesAdviceWidget} from '../widgets/SalesAdviceWidget';
import LogoutIcon from '@mui/icons-material/Logout';

export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DashboardLayout">
        <LogoutIcon className="logout" onClick={this.props.logout} />
        <div>
          <OfferRankingWidget />
          <OrderWidget />
          <SalesAdviceWidget />
        </div>
        <SalesQualityWidget />
        <div id="right_column_container">
          <CustomerFeedbackWidget />
        </div>
        <SalesChartWidget/>
      </div>
    )
  }
}

import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import { Translation } from "react-i18next";
import { accountsData} from "../../data/user";
import { AppHeader } from "../AppHeader";
import { Accounts } from "../Accounts";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
        feedbackData: accountsData[props.accountName]['feedbackData'],
        offerRankingData:  accountsData[props.accountName]['offerRankingData'],
        salesAdviceData: null,
        salesChartData:  accountsData[props.accountName]['salesChartData'],
        salesQualityData: null
      };
  }
  
  handleChildValueChange = (value) => {
    console.log(value)
    this.setState({
        feedbackData: accountsData[value]['feedbackData'],
        offerRankingData:  accountsData[value]['offerRankingData'],
        salesAdviceData: null,
        salesChartData:  accountsData[value]['salesChartData'],
        salesQualityData: null
    });
  };

  render() {
    return (     
        <div>
          <Translation>
              {(ln) => (
                <div>
                <div className="Dashboard">
                <Accounts linkedAccounts={accountsData} onValueChange={this.handleChildValueChange}></Accounts>
                  <DashboardLayout className="DashboardLayout" 
                      salesChartData={this.state.salesChartData}
                      feedbackData={this.state.feedbackData}
                      offerData={this.state.offerRankingData}
                  />
                </div>
            </div>

              )}
          </Translation>
          </div>
    )}

  }
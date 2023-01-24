import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import { Translation } from "react-i18next";
import { accountNames, FirstAccountData,EmptyAccountData, DataMock} from "../../data/user";
import { AppBar, Tab, Tabs, Typography } from "@mui/material";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.dataRequester = new DataMock();

    this.state = {  
        accountName: "FIRST",
        salesChartData: FirstAccountData['salesChartData'],
        feedbackData: FirstAccountData['feedbackData'],
        offerRankingData: FirstAccountData['offerRankingData']
      };
      
  }

  handleChildValueChange = (e) => {
    console.log(e.target.innerText)
    let Data=this.dataRequester.getOfferRankingData(e.target.innerText)
    this.setState( (state) => ({
        accountName: e.target.innerText,
        salesChartData: Data['salesChartData'],
        feedbackData: Data['feedbackData'],
        offerRankingData: Data['offerRankingData']
    }));
  };

  render() {
    return (     
          <Translation>
              {(ln) => (
                <div>
                <div>
                    <div className='CustomRoot' />
                        <AppBar position="static">
                            <Tabs
                                className='CustomSelectedTab'
                            >
                                {accountNames.map((account) => (
                                    <Tab
                                    key={account}
                                    value={account}
                                    label={<Typography variant="account">{account}</Typography>}
                                    onClick={this.handleChildValueChange}
                                    />
                                ))}
                            </Tabs>
                        </AppBar>
                    </div>
                <div className="Dashboard">
                  <DashboardLayout className="DashboardLayout" 
                      salesChartData={this.state.salesChartData}
                      feedbackData={this.state.feedbackData}
                      offerData={this.state.offerRankingData}
                  />
                </div>
            </div>

              )}
          </Translation>
    )}

  }
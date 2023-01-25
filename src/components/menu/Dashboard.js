import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { accountNames, FirstAccountData,EmptyAccountData, DataMock} from "../../data/user";
import { AppBar, Tab, Tabs, Typography } from "@mui/material";

const Dashboard = ({accountName, login, setLogin}) => {
  const dataRequester = new DataMock();
  const [state, setState] = useState({
    accountNames: "FIRST",
    salesChartData: FirstAccountData['salesChartData'],
    feedbackData: FirstAccountData['feedbackData'],
    offerRankingData: FirstAccountData['offerRankingData']
  })

  const handleChildValueChange = (e) => {
    let data = dataRequester.getOfferRankingData(e.target.innerText)
    setState({ ...state,
        accountName: e.target.innerText,
        salesChartData: data['salesChartData'],
        feedbackData: data['feedbackData'],
        offerRankingData: data['offerRankingData']
    });
  };

  return (     
    <div>
      <div>
        <div className='CustomRoot'></div>
          <AppBar position="static">
            <Tabs
              className='CustomSelectedTab'
              >{accountNames.map((account) => (
                <Tab
                  key={account}
                  value={account}
                  label={<Typography variant="account">{account}</Typography>}
                  onClick={handleChildValueChange}
                />
              ))}
            </Tabs>
          </AppBar>
        </div>
      <div className="Dashboard">
        <DashboardLayout className="DashboardLayout" 
            salesChartData={state.salesChartData}
            feedbackData={state.feedbackData}
            offerData={state.offerRankingData}
        />
      </div>
    </div>
  )
}

export default Dashboard;
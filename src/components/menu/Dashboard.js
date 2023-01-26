import React, { useContext, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { accountNames, FirstAccountData, EmptyAccountData, DataMock} from "../../data/user";
import { AppBar, Tab, Tabs, Typography } from "@mui/material";
import { RequiredAuth } from "../../context/ctxAuth";
import './css/dashboard.css';
import { ctxTheme } from "../../context/ctxTheme";

const Dashboard = () => {
  const dataRequester = new DataMock();
  const { theme } = useContext(ctxTheme);
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
    <RequiredAuth>
      <div>
        <AppBar position="static">
          <Tabs
            className={`CustomSelectedTab ${theme}`}
            >{accountNames.map((account) => (
              <Tab
                key={account}
                value={account}
                label={<Typography variant="account">{account}</Typography>}
                onClick={handleChildValueChange}
                className=' tabSelector'
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
    </RequiredAuth>
  )
}

export default Dashboard;
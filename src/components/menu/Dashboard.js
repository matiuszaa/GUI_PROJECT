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
    accountName: "FIRST",
    salesChartData: FirstAccountData['salesChartData'],
    feedbackData: FirstAccountData['feedbackData'],
    offerRankingData: FirstAccountData['offerRankingData'],
    ordersData: FirstAccountData['orders'],
    qualityMark: FirstAccountData['qualityMark']
  })

  const handleChildValueChange = (e) => {
    let data = dataRequester.getOfferRankingData(e.target.innerText)
    setState({ ...state,
        accountName: e.target.innerText,
        salesChartData: data['salesChartData'],
        feedbackData: data['feedbackData'],
        offerRankingData: data['offerRankingData'],
        ordersData: data['orders'],
        qualityMark: data['qualityMark']
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
                style={{backgroundColor: account === state.accountName ? "#FFD12D" : "#FAFF11"}}
                label={<Typography variant="account" style={{fontWeight: account === state.accountName ? "bold" : ""}}>{account}</Typography>}
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
            ordersData={state.ordersData}
            qualityMark={state.qualityMark}
        />
      </div>
    </RequiredAuth>
  )
}

export default Dashboard;
import React, { useEffect, useState } from 'react';
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line } from 'recharts';

import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
} from "@mui/material";
import { Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import { CustomMenuItem, CustomSelect, CustomToggleButton, CustomToggleButtonGroup } from '../common/commoncomp';
import { useTranslation } from "react-i18next";

import barChartPicture from "./../../data/photos/barChart.webp"
import linearChartPicture from "./../../data/photos/linearChart.png"

import "./css/widgets.css"
import "./css/SalesChartWidget.css"

const SalesChartWidget = ({data}) => {
  const [ln, i18n] = useTranslation();
  let [chartType, setChartType] = useState('bar');
  let [selectedValue, setSelectedValue] = useState('amount')
  let [dataType, setDataType] = useState('days');
  let [currentPeriod, setCurrentPeriod] = useState(true);
  let [previousPeriod, setPreviousPeriod] = useState(false);
  let [dataToUse, setDataToUse] = useState(data.dataDays);

  useEffect(() => {
    setDataToUse(dataType === 'days' ? data.dataDays : dataType === 'months' ? data.dataMonths : data.dataHours);
  })

  const changeHandler = (event) => {
    event.target.value === "amount" 
    ? setSelectedValue("amount")
    : setSelectedValue("turnover")
  };

  const toggleChartType = () => setChartType(chartType === 'bar' ? 'line' : 'bar');

  const toggleDataType = (dataType) => setDataType(dataType);

  const togglePreviousPeriod = () => setPreviousPeriod(!previousPeriod);

  const toggleCurrentPeriod = () => setCurrentPeriod(!currentPeriod);

  return (
    <div className='charWidget'>
      <Paper 
        sx={{
          boxShadow: 4,
          borderRadius: 5,
          backgroundColor: "background.paper",
          width: "100%",
          height: "100%"
        }}>        
        <div className='WidgetsPadding'>
          <div className='salesChartWidgetHeader'>
            <Typography variant="widgetHeader">
              {ln("salesChart")}
            </Typography>
            <div>
              <CustomSelect defaultValue='amount' onChange={changeHandler}>
                <CustomMenuItem value='amount'>
                  {ln('amount')}
                </CustomMenuItem>
                <CustomMenuItem value='turnover'>
                  {ln('turnover')}
                </CustomMenuItem>
              </CustomSelect>
            </div>
          </div>     
          <div className="buttonsWidget">
            <div>
              <CustomToggleButtonGroup>
                
                <CustomToggleButton value={'hours'} selected={dataType ==="hours"} color="#FDAA4A" onClick={() => toggleDataType('hours')}>
                  <Typography variant="buttonsAndSelectLabel">{ln("day")}</Typography>
                </CustomToggleButton>

                <CustomToggleButton value={'days'} selected={dataType ==="days"} color = "#FDAA4A" onClick={() => toggleDataType('days')}>
                  <Typography variant="buttonsAndSelectLabel">{ln("week")}</Typography>
                </CustomToggleButton>
                
                <CustomToggleButton value={'months'} selected={dataType ==="months"} color = "#FDAA4A" onClick={() => toggleDataType('months')}>
                  <Typography variant="buttonsAndSelectLabel">{ln("year")}</Typography>
                </CustomToggleButton>

              </CustomToggleButtonGroup>
            </div>
            <div className='salesChartWidgetChartButtons'>
              <div>
                <CustomToggleButton value={'charType'} style={{width: 50, height: 50, backgroundColor: "#FFFDD0"}} className='button-spacing' onClick={toggleChartType}>
                  <Avatar src={chartType === "bar" ? barChartPicture : linearChartPicture} style={{width: 40, height: 40, borderRadius: 0}}/>
                </CustomToggleButton>
              </div>
              <div>
                <CustomToggleButtonGroup
                  style={{marginTop: 25}}
                  variant="outlined"
                  exclusive
                  sx={{
                    height: 10,
                    width: 20,
                  }}
                  disabled={false}
                >
                  <CustomToggleButton value={'currentPierod'} selected={currentPeriod} color= '#8884d8' style={{marginRight: 20}} type="button" onClick={() => toggleCurrentPeriod()}>
                    <Typography variant = "buttonsAndSelectLabel">{ln("current")}</Typography>
                  </CustomToggleButton>
                  <CustomToggleButton value={'previousPierod'} selected={previousPeriod} color= '#32CD32' type="button" onClick={() => togglePreviousPeriod()}>
                    <Typography variant = "buttonsAndSelectLabel">{ln("previous")}</Typography>
                  </CustomToggleButton>
                </CustomToggleButtonGroup>
              </div>
            </div>    
          </div>
          {chartType === 'bar' 
            ? (
              <BarChart width={800} height={300} data={dataToUse}>
              <XAxis dataKey="name" tickFormatter={(tick) => ln(tick)} />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              {currentPeriod ? <Bar dataKey={selectedValue === "amount" ? "currentAmount" : "piecesSold"} name={ln("currentPeriod")} fill="#8884d8" tooltip={{label: ln("currentPeriod")}}/> : ""}
              {previousPeriod ? <Bar dataKey={selectedValue === "amount" ? "previousAmount" : "previousPiecesSold"} name={ln("previousPeriod")} tooltip={{label: ln("previousPeriod")}} fill="#32CD32"  /> : ""}
            </BarChart>) 
            : (
            <LineChart width={800} height={300} data={dataToUse}>
                <XAxis dataKey="name" tickFormatter={(tick) => ln(tick)} />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
                <Tooltip />
                <Legend />
                {currentPeriod ? <Line type="monotone" dataKey={selectedValue === "amount" ? "currentAmount" : "piecesSold"} strokeWidth={3} name={ln("currentPeriod")} stroke="#8884d8" tooltip={{label: ln("currentPeriod")}} /> : ""}
                {previousPeriod ? <Line type="monotone" dataKey={selectedValue === "amount" ? "previousAmount" : "previousPiecesSold"} strokeWidth={3} name={ln("previousPeriod")} stroke="#32CD32" tooltip={{label: ln("previousPeriod")}} /> : ""}
            </LineChart>)
          }
        </div>
      </Paper>
    </div>
  );
}
export default SalesChartWidget;

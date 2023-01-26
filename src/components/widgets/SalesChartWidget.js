import React, { useEffect, useState, useContext } from 'react';
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line } from 'recharts';

import {
  Paper,
  Avatar,
} from "@mui/material";
import { Typography } from '@mui/material';

import { CustomMenuItem, CustomSelect, CustomToggleButton, CustomToggleButtonGroup } from '../common/commoncomp';
import { useTranslation } from "react-i18next";

import barChartPicture from "./../../data/photos/barChart.webp"
import linearChartPicture from "./../../data/photos/linearChart.png"

import { ctxTheme } from "../../context/ctxTheme";

import "./css/widgets.css"
import "./css/SalesChartWidget.css"

const SalesChartWidget = ({data}) => {
  const [ln, i18n] = useTranslation();
  const {theme} = useContext(ctxTheme);
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

  const style = {
    color1: theme === 'dark' ? '#123456' : '#8884d8' ,
    color2: theme === 'dark' ? '#76bb11' : '#32CD32' ,
  }

  return (
    <div className={`charWidget ${theme}`}>
      <Paper 
        sx={{
          boxShadow: 4,
          borderRadius: 5,
          backgroundColor: "background.paper",
          width: "100%",
          height: "100%"
        }}>        
        <div className='WidgetsPadding'>
          <div className='salesChartWidgetHeader title'>
            <Typography variant="widgetHeader">
              {ln("salesChart")}
            </Typography>
            <div>
              <CustomSelect className={`selectValue ${theme}`} defaultValue='amount' onChange={changeHandler}>
                <CustomMenuItem className={`selectValueli ${theme}`} value='amount'>
                  {ln('amount')}
                </CustomMenuItem>
                <CustomMenuItem className={`selectValueli ${theme}`} value='turnover'>
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
              {currentPeriod ? <Bar dataKey={selectedValue === "amount" ? "currentAmount" : "piecesSold"} name={ln("currentPeriod")} fill={style.color1} tooltip={{label: ln("currentPeriod")}}/> : ""}
              {previousPeriod ? <Bar dataKey={selectedValue === "amount" ? "previousAmount" : "previousPiecesSold"} name={ln("previousPeriod")} tooltip={{label: ln("previousPeriod")}} fill={style.color2}  /> : ""}
            </BarChart>) 
            : (
            <LineChart width={800} height={300} data={dataToUse}>
                <XAxis className='xAxis' dataKey="name" tickFormatter={(tick) => ln(tick)} />
                <YAxis className='yAxis' />
                <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
                <Tooltip />
                <Legend />
                {currentPeriod ? <Line type="monotone" dataKey={selectedValue === "amount" ? "currentAmount" : "piecesSold"} strokeWidth={3} name={ln("currentPeriod")} stroke={style.color1} tooltip={{label: ln("currentPeriod")}} /> : ""}
                {previousPeriod ? <Line type="monotone" dataKey={selectedValue === "amount" ? "previousAmount" : "previousPiecesSold"} strokeWidth={3} name={ln("previousPeriod")} stroke={style.color2} tooltip={{label: ln("previousPeriod")}} /> : ""}
            </LineChart>)
          }
        </div>
      </Paper>
    </div>
  );
}
export default SalesChartWidget;

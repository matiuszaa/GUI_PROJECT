import React, { useEffect, useState } from 'react';
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line } from 'recharts';

import { ToggleButton } from '@material-ui/lab';

import {
  Paper,
  ToggleButtonGroup,
  Avatar,
} from "@mui/material";
import { Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

import { CustomMenuItem, CustomSelect } from '../common/commoncomp';
import { useTranslation } from "react-i18next";

import barChartPicture from "./../../data/photos/barChart.webp"
import linearChartPicture from "./../../data/photos/linearChart.png"

import "./css/widgets.css"
import "./css/SalesChartWidget.css"


const CustomToggleButton = styled(ToggleButton)(props => ({
    border: "1px solid #FDAA4A",
    "&:hover": {
      border: "1px solid #FDAA4A",
      backgroundColor: props.selected ? '#FFFFFF' : props.color
    },
    "&.Mui-selected": {
        backgroundColor: props.selected ? props.color : '#FFFFFF'
    },

  }));

  const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
    "& .MuiToggleButtonGroup-grouped": {
      "&:not(:first-of-type)": {
        borderLeft: "1px solid #FDAA4A"
      }
    },
  }));

const SalesChartWidget = ({data}) => {
  const [ln, i18n] = useTranslation();
  let [state, setState] = useState({
    chartType: 'bar',
    selectedValue: 'amount',
    dataType: 'days',
    currentPeriod: true,
    previousPeriod: false,
  })
  let dataToUse;
  let dataLength;
  let dataType;
  let chartType;

  const changeHandler = (event) => {
    event.target.value === "amount" 
    ? state.selectedValue = "amount" 
    : state.selectedValue = "turnover";
    setState({...state});
  };

  const toggleChartType = () => {
    setState({
      ...state,
      chartType: state.chartType === 'bar' ? 'line' : 'bar',
    });
  }

  const toggleDataType = (dataType) => {
    setState({
      ...state,
      dataType,
    });
  }

  const togglePreviousPeriod = () => {
    setState({
      ...state,  
      previousPeriod: !state.previousPeriod,
    });
  }

  const toggleCurrentPeriod = () => {
    setState({
      ...state,
      currentPeriod: !state.currentPeriod,
    });
  }

  useEffect(() => {
    dataType = state.dataType;
    chartType = state.chartType
    if (dataType === 'days') {
      dataToUse = data.dataDays;
      dataLength = dataToUse.length;
    } else if (dataType === 'months') {
      dataToUse = data.dataMonths;
      dataLength = dataToUse.length;
    } else if (dataType === 'hours') {
      dataToUse = data.dataHours;
      dataLength = dataToUse.length;
    }
  })

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
                <CustomToggleButton selected={dataType ==="hours"} color="#FDAA4A" onClick={() => toggleDataType('hours')}>
                  <Typography variant="buttonsAndSelectLabel">{ln("day")}</Typography>
                </CustomToggleButton>
                <CustomToggleButton selected={dataType ==="days"} color = "#FDAA4A" onClick={() => toggleDataType('days')}>
                  <Typography variant="buttonsAndSelectLabel">{ln("week")}</Typography>
                </CustomToggleButton>
                <CustomToggleButton selected={dataType ==="months"} color = "#FDAA4A" onClick={() => toggleDataType('months')}>
                  <Typography variant="buttonsAndSelectLabel">{ln("year")}</Typography>
                </CustomToggleButton>
              </CustomToggleButtonGroup>
            </div>
            <div className='salesChartWidgetChartButtons'>
              <div>
                <CustomToggleButton style={{width: 50, height: 50, backgroundColor: "#FFFDD0"}} className='button-spacing' onClick={toggleChartType}>
                  <Avatar src={state.chartType === "bar" ? barChartPicture : linearChartPicture} style={{width: 40, height: 40, borderRadius: 0}}/>
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
                  <CustomToggleButton selected={state.currentPeriod} color= '#8884d8' style={{marginRight: 20}} type="button" onClick={() => toggleCurrentPeriod()}>
                    <Typography variant = "buttonsAndSelectLabel">{ln("current")}</Typography>
                  </CustomToggleButton>
                  <CustomToggleButton selected={state.previousPeriod} color= '#32CD32' type="button" onClick={() => togglePreviousPeriod()}>
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
              {state.currentPeriod ? <Bar dataKey={state.selectedValue === "amount" ? "currentAmount" : "piecesSold"} name={ln("currentPeriod")} fill="#8884d8" tooltip={{label: ln("currentPeriod")}}/> : ""}
              {state.previousPeriod ? <Bar dataKey={state.selectedValue === "amount" ? "previousAmount" : "previousPiecesSold"} name={ln("previousPeriod")} tooltip={{label: ln("previousPeriod")}} fill="#32CD32"  /> : ""}
            </BarChart>) 
            : (
            <LineChart width={800} height={300} data={dataToUse}>
                <XAxis dataKey="name" tickFormatter={(tick) => ln(tick)} />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
                <Tooltip />
                <Legend />
                {state.currentPeriod ? <Line type="monotone" dataKey={state.selectedValue === "amount" ? "currentAmount" : "piecesSold"} strokeWidth={3} name={ln("currentPeriod")} stroke="#8884d8" tooltip={{label: ln("currentPeriod")}} /> : ""}
                {state.previousPeriod ? <Line type="monotone" dataKey={state.selectedValue === "amount" ? "previousAmount" : "previousPiecesSold"} strokeWidth={3} name={ln("previousPeriod")} stroke="#32CD32" tooltip={{label: ln("previousPeriod")}} /> : ""}
            </LineChart>)
          }
        </div>
      </Paper>
    </div>
  );
}
export default SalesChartWidget;

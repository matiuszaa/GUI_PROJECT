import React from 'react';
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line } from 'recharts';
import {
    Paper,
    ToggleButtonGroup,
    Avatar,
  } from "@mui/material";
import { ToggleButton } from '@material-ui/lab';
import { CustomMenuItem, CustomSelect } from '../common/commoncomp';
import { Translation } from "react-i18next";
import { Typography } from '@mui/material';
import "./widgets.css"
import "./SalesChartWidget.css"
import { styled } from "@mui/material/styles";
import barChartPicture from "./../../data/photos/barChart.webp"
import linearChartPicture from "./../../data/photos/linearChart.png"

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

export class SalesChartWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: 'bar',
      dataType: 'days',
      currentPeriod: true,
      previousPeriod: false,
    };
  }
  
  toggleChartType = () => {
    this.setState((state) => ({
      chartType: state.chartType === 'bar' ? 'line' : 'bar',
    }));
  }

  toggleDataType = (dataType) => {
    this.setState({
      dataType,
    });
  }

  togglePreviousPeriod = () => {
    this.setState((state) => ({
        previousPeriod: !state.previousPeriod,
      }));
  }
  toggleCurrentPeriod = () => {
    this.setState((state) => ({
        currentPeriod: !state.currentPeriod,
    }));
  }
  render() {
    const { chartType, dataType } = this.state;
    let dataToUse;
    if (dataType === 'days') {
      dataToUse = this.props.data.dataDays;
    } else if (dataType === 'months') {
      dataToUse = this.props.data.dataMonths;
    } else if (dataType === 'hours') {
      dataToUse = this.props.data.dataHours;
    }
    
    return (
    <Translation>
    {(ln) => (
      <div className='charWidget'>
        <Paper sx={{
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
            <CustomSelect defaultValue={10}>
                <CustomMenuItem value={10}>
                    {ln('amount')}
                </CustomMenuItem>
                <CustomMenuItem value={20}>
                    {ln('turnover')}
                </CustomMenuItem>
            </CustomSelect>
            </div>
            </div>
            
        <div className="buttonsWidget">
            <div>
            <CustomToggleButtonGroup>
                <CustomToggleButton selected={dataType ==="hours"} color="#FDAA4A" onClick={() => this.toggleDataType('hours')}><Typography variant="buttonsAndSelectLabel">{ln("day")}</Typography></CustomToggleButton>
                <CustomToggleButton selected={dataType ==="days"} color = "#FDAA4A" onClick={() => this.toggleDataType('days')}><Typography variant="buttonsAndSelectLabel">{ln("week")}</Typography></CustomToggleButton>
                <CustomToggleButton selected={dataType ==="months"} color = "#FDAA4A" onClick={() => this.toggleDataType('months')}><Typography variant="buttonsAndSelectLabel">{ln("year")}</Typography></CustomToggleButton>
                </CustomToggleButtonGroup>
            </div>
            <div className='salesChartWidgetChartButtons'>
                <div>
                <CustomToggleButton style={{width: 50, height: 50, backgroundColor: "#FFFDD0"}} className='button-spacing' onClick={this.toggleChartType}>
                    <Avatar src={this.state.chartType === "bar" ? barChartPicture : linearChartPicture} style={{width: 40, height: 40, borderRadius: 0}}/>
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
                <CustomToggleButton selected={this.state.currentPeriod} color= '#8884d8' style={{marginRight: 20}} type="button" onClick={() => this.toggleCurrentPeriod()}>
                <Typography variant = "buttonsAndSelectLabel">{ln("current")}</Typography>
                </CustomToggleButton>
                <CustomToggleButton selected={this.state.previousPeriod} color= '#32CD32' type="button" onClick={() => this.togglePreviousPeriod()}>
                <Typography variant = "buttonsAndSelectLabel">{ln("previous")}</Typography>
                </CustomToggleButton>
            </CustomToggleButtonGroup>
            </div>
            </div>
        </div>
        {chartType === 'bar' ? (
          <BarChart width={800} height={300} data={dataToUse}>
            <XAxis dataKey="name" tickFormatter={(tick) => ln(tick)} />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            {this.state.currentPeriod ? <Bar dataKey="piecesSold" name="Current period" fill="#8884d8" tooltip={{label: "Current period:"}}/> : ""}
            {this.state.previousPeriod ? <Bar dataKey="piecesSold2" name="Previous period" fill="#32CD32"  /> : ""}
          </BarChart>
        ) : (
          <LineChart width={800} height={300} data={dataToUse}>
            <XAxis dataKey="name" tickFormatter={(tick) => ln(tick)} />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
            <Tooltip />
            <Legend />
            {this.state.currentPeriod ? <Line type="monotone" dataKey="piecesSold" strokeWidth={3} name = "Current period" stroke="#8884d8" tooltip={{label: "Current period:"}} /> : ""}
            {this.state.previousPeriod ? <Line type="monotone" dataKey="piecesSold2" strokeWidth={3} name = "Current period" stroke="#32CD32" tooltip={{label: "Previous period:"}} /> : ""}
          </LineChart>
        )}
        </div>
        </Paper>
      </div>
    )}
      </Translation>
    );
  }
}


import React from 'react';
import { BarChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line } from 'recharts';
import {
    Paper,
    ToggleButtonGroup,
    ToggleButton,
    Typography,
    Avatar,
  } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";


const dataDays = [
  { name: 'Monday', piecesSold: 5000, piecesSold2: 3000},
  { name: 'Tuesday', piecesSold: 600, piecesSold2: 300 },
  { name: 'Wednesday', piecesSold: 70, piecesSold2: 300 },
  { name: 'Thursday', piecesSold: 80 , piecesSold2: 300 },
  { name: 'Friday', piecesSold: 90, piecesSold2: 300  },
  { name: 'Saturday', piecesSold: 100, piecesSold2: 300  },
  { name: 'Sunday', piecesSold: 110 , piecesSold2: 300 },
];

const dataMonths = [
  { name: 'Jan', piecesSold: 500  , piecesSold2: 500 },
  { name: 'Feb', piecesSold: 600  , piecesSold2: 600 },
  { name: 'Mar', piecesSold: 700  , piecesSold2: 700 },
  { name: 'Apr', piecesSold: 800  , piecesSold2: 800 },
  { name: 'May', piecesSold: 900  , piecesSold2: 900 },
  { name: 'Jun', piecesSold: 1000 , piecesSold2: 1000},
  { name: 'Jul', piecesSold: 1100 , piecesSold2: 1100},
  { name: 'Aug', piecesSold: 1200 , piecesSold2: 1200},
  { name: 'Sep', piecesSold: 1300 , piecesSold2: 1300},
  { name: 'Oct', piecesSold: 1400 , piecesSold2: 1400},
  { name: 'Nov', piecesSold: 1500 , piecesSold2: 1500},
  { name: 'Dec', piecesSold: 1600 , piecesSold2: 1600},
];

const dataHours = [
  { name: '12am', piecesSold: 30 ,piecesSold2: 30 },
  { name: '1am', piecesSold: 10  ,piecesSold2: 10 },
  { name: '2am', piecesSold: 25  ,piecesSold2: 25 },
  { name: '3am', piecesSold: 71  ,piecesSold2: 71 },
  { name: '4am', piecesSold: 22  ,piecesSold2: 22 },
  { name: '5am', piecesSold: 60  ,piecesSold2: 60 },
  { name: '6am', piecesSold: 70  ,piecesSold2: 70 },
  { name: '7am', piecesSold: 130 ,piecesSold2: 130 },
  { name: '8am', piecesSold: 68  ,piecesSold2: 68 },
  { name: '9am', piecesSold: 34  ,piecesSold2: 34 },
  { name: '10am', piecesSold: 61 ,piecesSold2: 61 },
  { name: '11am', piecesSold: 62 ,piecesSold2: 62 },
  { name: '12pm', piecesSold: 57 ,piecesSold2: 57 },
  { name: '1pm', piecesSold: 34,piecesSold2: 34 },
  { name: '2pm', piecesSold: 21,piecesSold2: 21 },
  { name: '3pm', piecesSold: 55,piecesSold2: 55 },
  { name: '4pm', piecesSold: 17,piecesSold2: 17 },
  { name: '5pm', piecesSold: 42,piecesSold2: 42 },
  { name: '6pm', piecesSold: 55,piecesSold2: 55 },
  { name: '7pm', piecesSold: 30,piecesSold2: 30 },
  { name: '8pm', piecesSold: 140 ,piecesSold2: 140 },
  { name: '9pm', piecesSold: 111 ,piecesSold2: 111 },
  { name: '10pm', piecesSold: 13 ,piecesSold2: 130 },
  { name: '11pm', piecesSold: 12 ,piecesSold2: 125 },
];
const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#fdaa4a"
      },
      secondary: {
        main: "#F47933"
      },
      background: {
        default: "#fff8ef",
        paper: "#ffffff",
        header: "#FFE1BA"
      },
      text: {
        primary: "rgba(253,170,74,1)",
        secondary: "rgba(0,0,0,1)",
        header: "rgba(0,0,0,1)",
        widgetHeader: "rgba(253,170,74,1)",
        caption: "rgba(160,160,160,1)",
        buttonText: "rgba(244, 121, 51, 1)"
      },
      button: {
        selected: "#FFE1BA",
        hover: "#ffeed6"
      }
    },
  });

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
    border: "1px solid #FDAA4A",
    "&:hover": {
      border: "1px solid #FDAA4A",
      background: "#ffeed6"
    },
    "&.Mui-selected": {
      background: "#FFE1BA",
      border: "1px solid #F47933"
    },
    "&not(.Mui-selected": {
      border: "1px solid #FDAA4A"
    }
  }));

  const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      "&:not(:first-of-type)": {
        borderLeft: "1px solid #F47933"
      }
    }
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
      dataToUse = dataDays;
    } else if (dataType === 'months') {
      dataToUse = dataMonths;
    } else if (dataType === 'hours') {
      dataToUse = dataHours;
    }

    return (
      <div>
        <Paper sx={{
                boxShadow: 4,
                borderRadius: 5,
                backgroundColor: "background.paper",
                width: "100%",
                height: "100%"
                }}>        
        <div>
          <CustomToggleButton type="button" onClick={this.toggleChartType}>Toggle Chart Type</CustomToggleButton>
          <CustomToggleButton type="button" onClick={() => this.toggleDataType('days')}>Days</CustomToggleButton>
          <CustomToggleButton type="button" onClick={() => this.toggleDataType('months')}>Months</CustomToggleButton>
          <CustomToggleButton type="button" onClick={() => this.toggleDataType('hours')}>Hours</CustomToggleButton>
          <CustomToggleButton type="button" onClick={() => this.toggleCurrentPeriod()}>Current Period</CustomToggleButton>
          <CustomToggleButton type="button" onClick={() => this.togglePreviousPeriod()}>Previous Period</CustomToggleButton>
        </div>
        {chartType === 'bar' ? (
          <BarChart width={800} height={400} data={dataToUse}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            {this.state.currentPeriod ? <Bar dataKey="piecesSold" fill="#8884d8" /> : ""}
            {this.state.previousPeriod ? <Bar dataKey="piecesSold2" fill="#2284d8" /> : ""}
          </BarChart>
        ) : (
          <LineChart width={800} height={400} data={dataToUse}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            {this.state.currentPeriod ? <Line type="basisOpen" dataKey="piecesSold" stroke="#8884d8" /> : ""}
            {this.state.previousPeriod ? <Line type="basisOpen" dataKey="piecesSold2" stroke="#3384d8" /> : ""}
          </LineChart>
        )}
        </Paper>
      </div>
    );
  }
}

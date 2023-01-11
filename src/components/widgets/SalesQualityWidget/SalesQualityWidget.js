import React, {useState} from "react";
import "../widgets.css";
import "./SalesQualityWidget.css"
import {
  Paper, Typography,
} from "@mui/material";
import { Box, Card, CardContent, Tab } from "@material-ui/core";
import { useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import {styled} from '@mui/material/styles'
import { Translation } from "react-i18next";

const ocean = [
  {
    size: 100,
    name: 'qualitySales',
    current: 50,
  },
  {
    size: 60,
    name: 'qualityClients',
    current: 20,
  },
  {
    size: 20,
    name: 'qualityReturn',
    current: 16,
  },
  {
    size: 80,
    name: 'qualityService',
    current: 60,
  },
  {
    size: 0,
    name: 'qualityPrices',
    current: 0,
  }
]

const BorderLinearProgress = styled(LinearProgressWithLabel)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{  mr: 1 }}>
        <LinearProgress thickness={4} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const QualityPanel = ({value, o, ln}) => {
  return (
    <TabPanel className="tabpanel" value={value}>
      <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
        {ln('qualityElemMax')}: {o.size}
      </Typography>
      <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
        {ln('qualityElemMin')}: {0}
      </Typography>
      <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
        {ln('qualityElemCurrent')}: {o.current}
      </Typography>
      {
        o.size === 0 
        ? <p>{ln('qualityNotImplemented')}</p>
        : null
      }
      <div className="progres">
        <BorderLinearProgress 
          variant="determinate" 
          value={o.size !== 0 ? o.current / o.size * 100 : 0} 
        />
      </div>
    </TabPanel>
  )
}

export const SalesQualityWidget = () => {
  let [suma, setSuma] = useState(0);
  let [suma1, setSuma1] = useState(0);

  useEffect(() => {
    suma = 0;
    suma1 = 0;
    ocean.map(o => {
      suma += o.current;
      suma1 += o.size;
    })
    setSuma(suma);
    setSuma1(suma1);
  }, [])

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const wynik = (ln) => (<strong>{
    (suma / suma1 * 100) <= 20 ? ln('qualityBad') : 
    (suma / suma1 * 100) <= 40 ? ln('qualiztyNotToBad') : 
    (suma / suma1 * 100) <= 60 ? ln('qualityItsOk') : 
    (suma / suma1 * 100) <= 80 ? ln('qualityNotBad') : 
    (suma / suma1 * 100) <= 100 ? ln('qualityVeryGood') : null}</strong>)

  return (
    <Translation>
    {(ln) => (
    <div className="SalesQualityWidget">
      <Paper
        sx={{
          boxShadow: 4,
          borderRadius: 1,
          bgcolor: "background.paper",
          width: "100%",
          height: "100%"
        }}
      >
        <div className="header">
          <Typography
              variant="widgetHeader"
          >
            {ln('qualityName')}
          </Typography>
        </div>

        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList className="tablist" onChange={handleChange} aria-label="lab API tabs example">
                <Tab label={<Typography variant="tableAndNameHeaders">{ln('qualitySummarise')}</Typography>} value={0} />
                <Tab label={<Typography variant="tableAndNameHeaders">{ln('qualitySales')}</Typography>} value={1} />
                <Tab label={<Typography variant="tableAndNameHeaders">{ln('qualityClients')}</Typography>} value={2} />
                <Tab label={<Typography variant="tableAndNameHeaders">{ln('qualityReturn')}</Typography>} value={3} />
                <Tab label={<Typography variant="tableAndNameHeaders">{ln('qualityService')}</Typography>} value={4} />
                <Tab label={<Typography variant="tableAndNameHeaders">{ln('qualityPrices')}</Typography>} value={5} />
              </TabList>
            </Box>
              <TabPanel className="tabpanel" value={0}>
                <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
                  {ln('qualityMaxMark')}: {suma1}
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
                  {ln('qualityCurrentMark')}: {suma}
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
                  {ln('qualityCategory')}: {wynik(ln)}
                </Typography>

                <div className="basaspects">
                  <Typography variant="h5" align="left" color="text.secondary" gutterBottom>
                    {ln('qualityAspectsBad')}: 
                    <ul>
                      {[...ocean].sort((a, b) => 
                        a.current / a.size > b.current / b.size ? 1 : -1
                      ).filter(a => a.size !== 0).slice(0,3).map(a => 
                        <li>{ln(a.name)}</li>
                      )}
                    </ul>
                  </Typography>
                </div>

              </TabPanel>
              {ocean.map((o, idx) => 
                <QualityPanel value={idx + 1} o={o} ln={ln} />
              )}
          </TabContext>
        </Box>


        {/* <div className="quality"><Typography variant="tableAndNameHeaders">Ocena jakości</Typography></div>
        <div>
        <Typography variant="tableContent">{result}</Typography>
        </div>
        <div className="result">
          <div>
            <span><Typography variant="tableContent">Wynik jakości: </Typography></span>
            <strong><Typography variant="tableAndNameHeaders">{(suma / suma1 * 100).toFixed(2)} %</Typography></strong>
          </div>
          <div>
            <span><Typography variant="tableContent">Kategoria jakości: </Typography></span>
            <Typography variant="tableAndNameHeaders">{wynik}</Typography>
          </div>
          <div>
            <span><Typography variant="tableContent">Popraw się w: </Typography></span>
            <ul>
              {
                list.map(o => <li><strong><Typography variant="tableAndNameHeaders">{o.name}</Typography></strong></li>)
              }
            </ul>
          </div>
        </div> */}
      </Paper>
    </div>
    )}
    </Translation>
    )
}

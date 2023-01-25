import React from "react";

import { TabContext, TabList, TabPanel } from "@material-ui/lab";

import { Paper, Tab} from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { CustomToggleButton } from "../common/commoncomp";
import { Translation, useTranslation } from "react-i18next";

import './css/widgets.css';
import './css/orderWidget.css';

const OrderWidget = () => {
  const [value, setValue] = React.useState('1');
  const [ln, i18n] = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TP = ({value, content, ln}) => {
    return (
      <TabPanel value={value}>
        <div className="tp">
          <span><Typography variant="tableContent">Ilość:</Typography> </span>
          <span>{content}</span>
          <div>
            <CustomToggleButton style={{backgroundColor: "#ce6d1e"}} size="small" variant="outlined"><Typography variant="buttonsAndSelectLabel">
              {ln('seeMore')}</Typography></CustomToggleButton>
            {
              content === 0
              ? <CustomToggleButton style={{backgroundColor: "lightblue"}} className='line' size="small" variant="outlined"><Typography variant="buttonsAndSelectLabel">
                {ln('seeAdvice')}</Typography></CustomToggleButton>
              : null 
            }
          </div>
        </div>
      </TabPanel>
    )
  }
  
  return (
    <div className="orders">
      <Paper className='paper' sx={{
        boxShadow: 4,
        borderRadius: 1,
        backgroundColor: "background.paper",
        }}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={<Typography variant = "tableAndNameHeaders">{ln('unPaid')}</Typography>} value="1" />
              <Tab label={<Typography variant = "tableAndNameHeaders">{ln("notSend")}</Typography>} value="2" />
              <Tab label={<Typography variant = "tableAndNameHeaders">{ln("returned")}</Typography>} value="3" />
            </TabList>
          </Box>
          <TP value={'1'} content={120} ln={ln} />
          <TP value={'2'} content={3} ln={ln}/>
          <TP value={'3'} content={0} ln={ln}/>
        </TabContext>
      </Box>
      </Paper>
    </div>
  );
}
export default OrderWidget;
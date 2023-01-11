import React from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Paper, Tab} from "@mui/material";
import { Typography } from "@mui/material";
import { CustomToggleButton } from "../../common/commoncomp";
import { Box } from "@mui/system";
import '../widgets.css';
import './orderWidget.css';

export const OrderWidget = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TP = ({value, content}) => {
    return (
      <TabPanel value={value}>
        <div className="tp">
          <span><Typography variant="tableContent">Ilość:</Typography> </span>
          <span>{content}</span>
          <div>
            <CustomToggleButton style={{backgroundColor: "#ce6d1e"}} size="small" variant="outlined"><Typography variant="buttonsAndSelectLabel">Zobacz więcej</Typography></CustomToggleButton>
            {
              content === 0
              ? <CustomToggleButton style={{backgroundColor: "lightblue"}} className='line' size="small" variant="outlined"><Typography variant="buttonsAndSelectLabel">Może pomocy</Typography></CustomToggleButton>
              : null 
            }
          </div>
        </div>
      </TabPanel>
    )
  }
  
  return (
    <Paper classes='paper' sx={{
      boxShadow: 4,
      borderRadius: 1,
      margin: '15px',
      marginTop: '60px',
      backgroundColor: "background.paper",
      }}>
    <div className="orders">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
             <Tab label={<Typography variant = "tableAndNameHeaders">"Nieopłacone"</Typography>} value="1" />
             <Tab label={<Typography variant = "tableAndNameHeaders">"Niewysłane"</Typography>} value="2" />
              <Tab label={<Typography variant = "tableAndNameHeaders">"Zwroty"</Typography>} value="3" />
            </TabList>
          </Box>
          <TP value={'1'} content={120} />
          <TP value={'2'} content={3} />
          <TP value={'3'} content={0} />
        </TabContext>
      </Box>
    </div>
    </Paper>
  );
}
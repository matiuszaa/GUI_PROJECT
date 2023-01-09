import React from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Button, Paper, Tab, Tabs } from "@mui/material";
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
          <span>Ilość: </span>
          <span>{content}</span>
          <div>
            <Button size="small" variant="outlined">Zobacz więcej</Button>
            {
              content === 0
              ? <Button className='line' size="small" variant="outlined">Może pomocy</Button>
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
              <Tab label="Nieopłacone" value="1" />
              <Tab label="Niewysłane" value="2" />
              <Tab label="Zwroty" value="3" />
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
import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import "./css/widgets.css";


const SalesAdviceWidget = () => {
  const [list, setList] = useState([
    'advice1',
    'advice2',
    'advice3'
  ]);
  const [ran, setRan] = useState(0);
  const [ln, i18n] = useTranslation();

  const random = () => {
    let t = Math.floor(Math.random() * list.length);
    while(t === ran){
      t = Math.floor(Math.random() * list.length);
    }
    setRan(t);
  }

  return (
    <div className="SalesAdviceWidget">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16, textAlign:'left' }} color="text.first" gutterBottom>
            {ln('adviceTitle')}
          </Typography>

          <Typography sx={{ fontSize: 12, textAlign:'left' }} color="text.secondary" gutterBottom>
            {ln(list[ran])}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={random}>{ln('adviceNext')}</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default SalesAdviceWidget;
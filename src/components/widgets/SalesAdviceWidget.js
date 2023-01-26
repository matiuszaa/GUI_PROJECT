import React, { useState, useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { ctxTheme } from "../../context/ctxTheme";

import "./css/widgets.css";


const SalesAdviceWidget = () => {
  const [adviceList, setList] = useState([
    'advice1',
    'advice2',
    'advice3'
  ]);
  const [ran, setRan] = useState(0);
  const [ln, i18n] = useTranslation();
  const {theme} = useContext(ctxTheme);

  const random = () => {
    let t = Math.floor(Math.random() * adviceList.length);
    while(t === ran){
      t = Math.floor(Math.random() * adviceList.length);
    }
    setRan(t);
  }

  return (
    <div className={`SalesAdviceWidget ${theme}`}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography className="title" sx={{ fontSize: 16, textAlign:'left' }} color="text.first" gutterBottom>
            {ln('adviceTitle')}
          </Typography>

          <Typography className="bodyAdvice" sx={{ fontSize: 12, textAlign:'left' }} color="text.secondary" gutterBottom>
            {ln(adviceList[ran])}
          </Typography>
        </CardContent>
        <CardActions className="algin-right">
          <Button size="medium" onClick={random}>{ln('adviceNext')}</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default SalesAdviceWidget;
import React from "react";
import "./widgets.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Translation } from "react-i18next";

const P = () => {

}

export const SalesAdviceWidget = () => {
  const [list, setList] = useState([
    'advice1',
    'advice2',
    'advice3'
  ]);
  const [ran, setRan] = useState(0);

  const random = () => {
    let t = Math.floor(Math.random() * list.length);
    while(t === ran){
      t = Math.floor(Math.random() * list.length);
    }
    setRan(t);
  }

  return (
    <Translation>
    {(ln) => (
    <div className="SalesAdviceWidget">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16, textAlign:'left' }} color="text.first" gutterBottom>
            {ln('adviceTitle')}
          </Typography>

          <Typography sx={{ fontSize: 12, textAlign:'left' }} color="text.secondary" gutterBottom>
            <p>{ln(list[ran])}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={random}>{ln('adviceNext')}</Button>
        </CardActions>
      </Card>
    </div>
    )}
    </Translation>
  )
}
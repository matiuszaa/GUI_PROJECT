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

const P = () => {

}

export const SalesAdviceWidget = () => {
  const [list, setList] = useState([
    'To jest najlepsza porada',
    'to nie jest najlepsza porada',
    'lorem impsum',
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
    <div className="SalesAdviceWidget">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16, textAlign:'left' }} color="text.first" gutterBottom>
            Some advices
          </Typography>

          <Typography sx={{ fontSize: 12, textAlign:'left' }} color="text.secondary" gutterBottom>
            <p>{list[ran]}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={random}>Another</Button>
        </CardActions>
      </Card>
    </div>
  )
}
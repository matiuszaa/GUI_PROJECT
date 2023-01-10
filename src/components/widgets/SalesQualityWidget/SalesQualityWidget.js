import React, {useState} from "react";
import "../widgets.css";
import "./SalesQualityWidget.css"
import {
  Paper,
} from "@mui/material";
import { Box, LinearProgress } from "@material-ui/core";
import { useEffect } from "react";

const Bar = ({name, size, current}) => {
  const [progress, setProgress] = useState(current / size * 100);
  const px = 300;

  const left = () => {
    if (size === 0) {
      return 0.5 * px + 'px';
    } else {
      return (current/size < 0.032 ? 0.032 : current/size > 0.94 ? 0.94 : current/size) * px + 'px'
    } 

  }

  return (
    <div className="box">
      <span className="name">{name}</span>
      <span className="zero">0</span>
      <span className="size">{size}</span>
      <span className="current" style={{left: left()}}>{size === 0 ? "Brak danych" : current}</span>
      <Box className="bar" sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </div>
  )
}

const ocean = [
  {
    size: 100,
    name: 'Sprzedaż',
    current: 50,
  },
  {
    size: 60,
    name: 'Ocena klientów',
    current: 20,
  },
  {
    size: 20,
    name: 'Zwroty',
    current: 16,
  },
  {
    size: 80,
    name: 'Szybkość obsługi',
    current: 60,
  },
  {
    size: 0,
    name: 'Ceny',
    current: 0,
  }
]

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

  const result = ocean.map((o, idx) => {
    return (
      <Bar key={idx} name={o.name} size={o.size} current={o.current} />
    )
  })

  const list = [...ocean].sort((a, b) => a.current / a.size > b.current / b.size ? 1 : -1).slice(0,3)

  const wynik = <strong>{
    (suma / suma1 * 100) <= 20 ? "Jest źle" : 
    (suma / suma1 * 100) <= 40 ? "Tragedi nie ma" : 
    (suma / suma1 * 100) <= 60 ? "Może być" : 
    (suma / suma1 * 100) <= 80 ? "Jest nieźle" : 
    (suma / suma1 * 100) <= 100 ? "Genialnie" : null}</strong>

  return (
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
        <div className="quality">Ocena jakości</div>
        <div>
          {result}
        </div>
        <div className="result">
          <div>
            <span>Wynik jakości: </span>
            <strong>{(suma / suma1 * 100).toFixed(2)} %</strong>
          </div>
          <div>
            <span>Kategoria jakości: </span>{wynik}
          </div>
          <div>
            <span>Popraw się w: </span>
            <ul>
              {
                list.map(o => <li><strong>{o.name}</strong></li>)
              }
            </ul>
          </div>
        </div>
      </Paper>
    </div>
    )
}

import React from "react";
import "./widgets.css";
import {
  Paper,
} from "@mui/material";

export class SalesChartWidget extends React.Component {
  
  render() {
    return (
          <div className="SalesChartWidget">
            <Paper
              sx={{
                boxShadow: 4,
                borderRadius: 5,
                bgcolor: "background.paper",
                width: "100%",
                height: "100%"
              }}
            >
            </Paper>
          </div>
        )}
  }
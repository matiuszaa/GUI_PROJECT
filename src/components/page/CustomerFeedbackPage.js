import { Typography } from "@mui/material";
import React from "react";
import { Translation } from "react-i18next";
import { AppHeader } from "../AppHeader";
import "./pages.css"
import { Link } from "react-router-dom";

export default class CustomerPage extends React.Component {
  render() {
    return <>
        <div className="PageSize">
            <AppHeader></AppHeader>
            <Translation>{(ln) => <Typography variant="widgetHeader">{ln("customerFeedback")}</Typography>}</Translation>
            <div className="Span">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Translation>{(ln) => <Typography variant="widgetHeader">{ln("back")}</Typography>}</Translation>
                </Link>
            </div>
        </div>
    </>
  }
}

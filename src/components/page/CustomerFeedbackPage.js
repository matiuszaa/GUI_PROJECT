import { Typography } from "@mui/material";
import React from "react";
import { Translation, useTranslation } from "react-i18next";
import { AppHeader } from "../AppHeader";
import "./pages.css"
import { Link } from "react-router-dom";

const CustomerPage = () => {
  const [ln, i18n] = useTranslation();

  return <div className="PageSize">
    <AppHeader></AppHeader>
    <Typography variant="widgetHeader">{ln("customerFeedback")}</Typography>
    <div className="Span">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography variant="widgetHeader">{ln("back")}</Typography>
      </Link>
    </div>
  </div>
}
export default CustomerPage;
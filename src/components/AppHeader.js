import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
    Avatar, Typography
} from "@mui/material";

import light from "./../data/photos/sun.jpg"
import plPicture from "./../data/photos/polska.png"
import enPicture from "./../data/photos/british.png"

import { useTranslation } from "react-i18next";

import "./AppHeader.css"

import Logout from "./auth/Logout";
import { ctxTheme } from "../context/ctxTheme";


export const AppHeader = ({login, setLogin}) => {
    const [langImage, setLangImage] = useState(enPicture);
    const [ln, i18n] = useTranslation();
    const { theme, setTheme } = useContext(ctxTheme);

    const handleLanguageChange = () => {
        i18n.changeLanguage(langImage === plPicture ? "en" : "pl");
        setLangImage(langImage === enPicture ? plPicture : enPicture);
    }

    const handleThemeChange = () => {
        setTheme(theme === '' ? 'dark' : '');
    }
    
    return(
        <div className={`AppHeader ${theme}`}>
            <Link to="/" className="titleHeader" style={{ textDecoration: 'none'}}>
                <Typography variant="titleHeader">
                    Dashboard
                </Typography>
            </Link>
            <div className="theme" onClick={handleThemeChange}>
                <Avatar src={light}/>
            </div>
            <Avatar 
                id="avatar" 
                src={langImage === enPicture ? enPicture : plPicture}  
                onClick={handleLanguageChange}
            />
            <Logout />
        </div>
    )
}
export default AppHeader;
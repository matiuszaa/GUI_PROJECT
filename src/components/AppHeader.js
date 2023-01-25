import React, { useState } from "react";
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


export const AppHeader = ({login, setLogin}) => {
    const [langImage, setLangImage] = useState(enPicture);
    const [ln, i18n] = useTranslation();

    const handleLanguageChange = () => {
        i18n.changeLanguage(langImage === plPicture ? "en" : "pl");
        setLangImage(langImage === enPicture ? plPicture : enPicture);
    }
    
    return(
        <div className="AppHeader">
            <Link to="/" className="title" style={{ textDecoration: 'none', color: 'black' }}>
                <Typography variant="titleHeader">
                    Dashboard
                </Typography>
            </Link>
            <div className="theme">
                <Avatar src={light}/>
            </div>
            <Avatar 
                id="avatar" 
                src={langImage === enPicture ? enPicture : plPicture}  
                onClick={handleLanguageChange}
            />
            <Logout setLogin={setLogin} ln={ln} />
        </div>
    )
}
export default AppHeader;
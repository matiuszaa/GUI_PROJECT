import "./AppHeader.css"
import i18n from './../trans/i18n';
import plPicture from "./../data/photos/polska.png"
import enPicture from "./../data/photos/british.png"
import React from "react";
import {
    Avatar, Typography
  } from "@mui/material";
import { Translation } from "react-i18next";

export class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          langImage: enPicture,
        };
      }

    handleLanguageChange = () => {
        i18n.changeLanguage(this.state.langImage === plPicture ? "en" : "pl")
        this.setState({
            langImage: this.state.langImage === enPicture ? plPicture : enPicture
        })
    }
    
    render() {
        return(
        <Translation>
            {(ln) => (
            <div className="AppHeader">
                <div className="ItemsPaddingMargin">
                    <Typography variant="titleHeader">
                        Dashboard
                    </Typography>
                </div>
                <div>
                    <Avatar src={this.state.langImage === enPicture ? enPicture : plPicture} style={{width: 40, height: 40, borderRadius: 0, paddingTop: 25, paddingRight: 40, }} onClick={this.handleLanguageChange}/>
                </div>
            </div>
        )}
        </Translation>
        )
    }
}
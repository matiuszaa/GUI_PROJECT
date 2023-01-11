import "./AppHeader.css"
import i18n from './../trans/i18n';
import plPicture from "./../data/photos/polska.png"
import enPicture from "./../data/photos/british.png"
import React from "react";
import {
    Avatar, Typography
  } from "@mui/material";
import { Translation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Logout = ({setLogin, ln}) => {
    const navigate = useNavigate();
    
    const logout = () => {
        setLogin('');
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="logout" onClick={logout}>{ln('logout')}</div>
    )
}

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
                <Typography className="title" variant="titleHeader">
                    Dashboard
                </Typography>
                <div className="theme">
                </div>
                <Avatar 
                    id="avatar" 
                    src={this.state.langImage === enPicture ? plPicture : enPicture}  
                    onClick={this.handleLanguageChange}
                />
                <Logout setLogin={this.props.setLogin} ln={ln} />
            </div>
        )}
        </Translation>
        )
    }
}
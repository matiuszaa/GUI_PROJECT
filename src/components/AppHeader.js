import "./AppHeader.css"
import i18n from './../trans/i18n';
import plPicture from "./../data/photos/polska.png"
import enPicture from "./../data/photos/british.png"
import light from "./../data/photos/sun.jpg"
import React from "react";
import {
    Avatar, Typography
  } from "@mui/material";
import { Translation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

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
                    src={this.state.langImage === enPicture ? enPicture : plPicture}  
                    onClick={this.handleLanguageChange}
                />
                <Logout setLogin={this.props.setLogin} ln={ln} />
            </div>
        )}
        </Translation>
        )
    }
}
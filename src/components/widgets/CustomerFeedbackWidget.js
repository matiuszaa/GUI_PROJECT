import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Rating from '@material-ui/lab/Rating';
import {
    Paper, FormControl
  } from "@mui/material";
  import { Select, MenuItem } from "@mui/material";
import "./widgets.css"
import Avatar from '@material-ui/core/Avatar';
import "./CustomerFeedbackWidget.css"
import { Translation } from 'react-i18next'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1500,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  colors: {
    color: '#ce6d1e',
  },
  h1: {
    fontWeight: 800,
    fontSize: "2.5em",
    fontFamily: "Montserrat",
  },
  h2: {
    fontWeight: 800,
    fontSize: "1.35em",
    fontFamily: "Montserrat",
    paddingBottom: 0,
    color: '#ce6d1e'
  },
  h3: {
    fontWeight: 800,
    fontSize: "0.9em",
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0,
    paddingBottom: 0
  },
  h4: {
    fontWeight: 700,
    fontSize: "0.75em",
    fontFamily: "Montserrat",
    paddingTop: 3,
    paddingBottom: 3
  },
  textArea: {
    fontWeight: 500,
    fontSize: "0.68em",
    fontFamily: "Montserrat"
  },
  orderNumber: {
    fontWeight: 700,
    fontSize: "2.75em",
    fontFamily: "Montserrat",
    margin: 0,
    padding: 0
  },
  offerLabel: {
    fontWeight: 400,
    fontSize: "0.8em",
    fontFamily: "Montserrat"
  },
  offerLabelTitle: {
    fontWeight: 700,
    fontSize: "0.8em",
    fontFamily: "Montserrat"
  },
  buttonLabel: {
    fontWeight: 700,
    fontSize: "1em",
    fontFamily: "Montserrat"
  },
  noData: {
    fontWeight: 400,
    fontSize: "1.25em",
    fontFamily: "Montserrat"
  },
  account: {
    fontWeight: 600,
    fontSize: "1em",
    fontFamily: "Montserrat"
  }
}));

export const CustomMenuItem = styled(MenuItem)(({  }) => ({
    color: "#009933",
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "Montserrat"
  }));
  
  export const CustomSelect = styled(Select)(({  }) => ({
    backgroundColor: "#FFE4B5",
    color: "#009933",
    fontSize: 13,
    fontFamily: "Montserrat",
    fontWeight: 800,
    height: 30,
    width: 160,
    "& .MuiSelect-icon": {
      color: "#009933"
    },
    "&& fieldset": {
      border: "1px solid #FDAA4A"
    },
    "&:hover": {
      "&& fieldset": {
        border: "1px solid #F47933"
      }
    }
  }));


export class CustomerFeedbackWidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            feedbackData: this.props.data.best,
        };
        this.changeHandler = this.changeHandler.bind(this);
      }
    changeHandler(event){
        event.target.value === "pozytywne" ? this.setState
        ({feedbackData : this.props.data.best}) : this.setState({ feedbackData: this.props.data.worst})
      };
    render() {
    return (
    <Translation>
    {(ln) => (
    <div className="CustomerFeedbackWidget">
        <Paper sx={{
                boxShadow: 4,
                borderRadius: 5,
                backgroundColor: "background.paper",
                width: "100%",
                height: "100%"
                }}>
            <div
              className="WidgetsPadding"
            >
            <div className="customerFeedbackHeader">
              <div>
                <Typography
                    className={useStyles.h2}
                >
                    {ln("customerFeedback")}
                </Typography>
              </div>
              <div>
                <CustomSelect value={this.state.feedbackData} onChange={this.changeHandler}>
                        <CustomMenuItem value="pozytywne">{ln("positiveOpinion")}</CustomMenuItem>
                        <CustomMenuItem value="negatywne">{ln("negativeOpinion")}</CustomMenuItem>
                    </CustomSelect>
                </div>
            </div>
            <List className={useStyles.root}>
                {this.state.feedbackData.map((feed) => (
                <ListItem key={feed.author} alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={
                        <div>
                            <Typography
                                className={useStyles.h3}>
                                {feed.author}
                            </Typography>
                            <Typography
                                id="feedbackDateClientName"
                                className={useStyles.h4}
                                color="textSecondary">
                                {Math.floor((new Date() - feed.date) / (1000 * 60 * 60 * 24))} {ln("ago")}
                            </Typography>
                            <Rating name="half-rating" precision={0.5} value={feed.rating} size="small" readOnly="true" />
                        </div>
                        
                    }
                    secondary= {
                        <Typography
                        component="span"
                        className={useStyles.h4}
                        color="textSecondary"
                    >
                    {feed.text}
                    </Typography>
                    }
                    style={{ wordBreak: 'break-all' }}
                    />
                </ListItem>
                ))}
            </List>
        </div>
        </Paper>
        </div>
    )}
    </Translation>
  );
}
}

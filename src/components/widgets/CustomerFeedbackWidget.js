import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Rating from '@material-ui/lab/Rating';
import {
    Paper
  } from "@mui/material";
import { CustomMenuItem, CustomSelect } from '../common/commoncomp';
import "./widgets.css"
import Avatar from '@material-ui/core/Avatar';
import "./CustomerFeedbackWidget.css"
import { Translation } from 'react-i18next'
import { Typography } from '@mui/material';

export class CustomerFeedbackWidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            feedbackData: this.props.data.best,
            sort: 'positiveOpinion'
        };
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(event){
        event.target.value === "pozytywne" ? this.setState
        ({feedbackData : this.props.data.best, sort: 'positiveOpinion'}) : 
        this.setState({ feedbackData: this.props.data.worst, sort: 'negativeOpinion'})
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
                    variant="widgetHeader"
                >
                    {ln("customerFeedback")}
                </Typography>
              </div>
              <div>
                <CustomSelect defaultValue="pozytywne" onChange={this.changeHandler}>
                    <CustomMenuItem value="pozytywne">{ln("positiveOpinion")}</CustomMenuItem>
                    <CustomMenuItem value="negatywne">{ln("negativeOpinion")}</CustomMenuItem>
                </CustomSelect>
            </div>
            </div>
            <List >
                {this.state.feedbackData.map((feed) => (
                <ListItem key={feed.author} alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={
                        <div>
                            <Typography variant = "tableAndNameHeaders">
                                {feed.author}
                            </Typography>
                            <Typography
                                id="feedbackDateClientName"
                                color="textSecondary">
                                {Math.floor((new Date() - feed.date) / (1000 * 60 * 60 * 24))} {ln("ago")}
                            </Typography>
                            <Rating name="half-rating" precision={0.5} value={feed.rating} size="small" readOnly="true" />
                        </div>
                        
                    }
                    secondary= {
                        <Typography
                        component="span"
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

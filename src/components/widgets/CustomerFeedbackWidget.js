import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Rating from '@material-ui/lab/Rating';
import Avatar from '@material-ui/core/Avatar';

import { Paper } from "@mui/material";
import { Typography } from '@mui/material';

import { CustomMenuItem, CustomSelect } from '../common/commoncomp';
import { useTranslation } from 'react-i18next'

import "./css/widgets.css"
import "./css/CustomerFeedbackWidget.css"
import { ctxTheme } from '../../context/ctxTheme';


const CustomerFeedbackWidget = ({data}) => {
    const [feedbackData, setFeedBackData] = useState(data.best);
    const [sort, setSort] = useState('positiveOpinion');
    const {theme} = useContext(ctxTheme);
    const [ln, i18n] = useTranslation();

    const changeHandler = (event) => {
        if(event.target.value === 'pozytywne'){
            setFeedBackData(data.best);
            setSort('positiveOpinion');
        } else {
            setFeedBackData(data.worst);
            setSort('negativeOpinion');
        }
    };


    return (
    <div className={`CustomerFeedbackWidget ${theme}`}>
        <Paper sx={{
            boxShadow: 4,
            borderRadius: 5,
            backgroundColor: "background.paper",
            width: "100%",
            height: "100%"
        }}>
        <div className="">
            <div className="customerFeedbackHeader title">
                <Link to="/feedback" style={{ textDecoration: 'none' }}>
                    <Typography variant="widgetHeader">
                        {ln("customerFeedback")}
                    </Typography>
                </Link>
            </div>
            <div className='customerWidgetPadding'>
                <CustomSelect className={`selectValue ${theme}`} defaultValue="pozytywne" onChange={changeHandler}>
                    <CustomMenuItem className={`selectValueli ${theme}`} value="pozytywne">{ln("positiveOpinion")}</CustomMenuItem>
                    <CustomMenuItem className={`selectValueli ${theme}`} value="wszystkie">{ln("all")}</CustomMenuItem>
                    <CustomMenuItem className={`selectValueli ${theme}`} value="negatywne">{ln("negativeOpinion")}</CustomMenuItem>
                </CustomSelect>
            </div>
        </div>
        <List >
            {feedbackData.map((feed) => (
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
                        <Rating name="half-rating" precision={0.5} value={feed.rating} size="small" readOnly={true} />
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
        </Paper>
    </div>
  );
}

export default CustomerFeedbackWidget;

import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Rating from '@material-ui/lab/Rating';
import { Select } from '@material-ui/core'
import {
    Paper, FormControl
  } from "@mui/material";
import Avatar from '@material-ui/core/Avatar';
import "./CustomerFeedbackWidget.css"
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
  select: {
    '& .MuiSelect-root': {
        display: 'inline',
        width: '100%',
        backgroundColor: 'orange',
        color: 'white',
        '& .MuiSelect-icon': {
          color: 'white',
        },
      },
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

export function CustomerFeedbackWidget() {
  const classes = useStyles();

  const feedbackData = [
    {
      rating: 4.5,
      text: 'This product is great! akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolis akonstantyopolisakonstantyopolisakonstantyopolis',
      author: 'John Smith',
      date: new Date('2022-01-01')
    },
    {
      rating: 3,
      text: 'It works as expectedsssssssssssssssssssssssssssssssssssssssssssssssssss s.lfasfsa',
      author: 'Jane Doe',
      date: new Date('2022-07-31')
    },
    {
      rating: 5,
      text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
      author: 'Robert Johnson',
      date: new Date('2022-12-17')
    },
        {
        rating: 0.5,
        text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
        author: 'Robert Johnson',
        date: new Date('2022-12-17')
      },
      {
        rating: 0.5,
        text: 'I am very happy with my purchase. Extraordinary Extraordinary Extraordinary Extraordinary Extraoardinary',
        author: 'Robert Johnson',
        date: new Date('2022-12-17')
      },
    ]

  return (
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
                    className={classes.h2}
                >
                    Opinia klientów
                </Typography>
              </div>
              <div className={classes.select}>
                <Select>
                        <option value="pozytywne">pozytywne</option>
                        <option value="neutralne">neutralne</option>
                        <option value="negatywne">negatywne</option>
                    </Select>
                </div>
            </div>
            <List className={classes.root}>
                {feedbackData.map((feedback) => (
                <ListItem key={feedback.author} alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={
                        <div>
                            <Typography
                                className={classes.h3}>
                                {feedback.author}
                            </Typography>
                            <Typography
                                id="feedbackDateClientName"
                                className={classes.h4}
                                color="textSecondary">
                                {Math.floor((new Date() - feedback.date) / (1000 * 60 * 60 * 24))} days ago
                            </Typography>
                            <Rating name="half-rating" precision={0.5} value={feedback.rating} size="small" readOnly="true" />
                        </div>
                        
                    }
                    secondary= {
                        <Typography
                        component="span"
                        className={classes.h4}
                        color="textSecondary"
                    >
                    {feedback.text}
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
  );
}


import React from 'react';
import { makeStyles, createTheme, styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const CustomMenuItem = styled(MenuItem)({
    color: "#f47933",
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "Montserrat"
  });
  
const CustomSelect = styled(Select)({
    backgroundColor: "#fff8ef",
    color: "#f47933",
    fontSize: 13,
    fontFamily: "Montserrat",
    fontWeight: 500,
    height: 30,
    width: 160,
    "& .MuiSelect-icon": {
      color: "#f47933"
    },
    "&& fieldset": {
      border: "1px solid #FDAA4A"
    },
    "&:hover": {
      "&& fieldset": {
        border: "1px solid #f47933"
      }
    }
  });
  


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    border: 0,
    borderCollapse: "collapse"
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  title: {
    color: '#ffd700', // golden color
  },
  formControl: {
    minWidth: 120,
    marginLeft: theme.spacing(2),
    color: '#ffc0cb', // light pink color
  },
}
));

const Header = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          Offer Ranking
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <CustomSelect value='lalala'
                      displayEmpty
                      inputProps={{
                        "aria-label": "Without label"
                      }}>
            <CustomMenuItem value={10}>Ten</CustomMenuItem>
            <CustomMenuItem value={20}>Twenty</CustomMenuItem>
            <CustomMenuItem value={30}>Thirty</CustomMenuItem>
          </CustomSelect>
        </FormControl>
      </div>
    );
  };

const OfferRanking = () => {
  const classes = useStyles();

  // Mocked data for offers
  const offers = [
    {
      id: 1,
      name: 'Offer 1',
      image: '/path/to/image1.jpg',
      piecesSold: 100,
      moneyGained: 1000,
    },
    {
      id: 2,
      name: 'Offer 2',
      image: '/path/to/image2.jpg',
      piecesSold: 50,
      moneyGained: 500,
    },
    {
      id: 3,
      name: 'Offer 3',
      image: '/path/to/image3.jpg',
      piecesSold: 25,
      moneyGained: 250,
    },
  ];

  return (    
<div className='OfferRankingWidget'>
<Paper sx={{
                boxShadow: 4,
                borderRadius: 5,
                backgroundColor: "background.paper",
                width: "100%",
                height: "100%"
                }}>
<div
className="WidgetsPadding"
style={{
display: "flex",
flexDirection: "column",
justifyContent: "flex-start"
}}
>
  <Header></Header>
    <TableContainer>
      <Table className={classes.table} aria-label="custom table"
        sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none"
            }
          }}>
        <TableHead>
          <TableRow className={classes.row} sx={{ "& td": { border: 0 } }}>
            <TableCell>Rank</TableCell>
            <TableCell>Offer</TableCell>
            <TableCell align="right">Pieces Sold</TableCell>
            <TableCell align="right">Money Gained</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers.map((offer, index) => (
            <TableRow key={offer.id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>
                <Avatar src={offer.image} alt={offer.name} /> {offer.name}
              </TableCell>
              <TableCell align="right">{offer.piecesSold}</TableCell>
              <TableCell align="right">{offer.moneyGained}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Paper>
    </div>
  );
};

export default OfferRanking;
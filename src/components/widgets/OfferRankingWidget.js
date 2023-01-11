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
import { Translation } from 'react-i18next'
import { Select, MenuItem } from "@mui/material";


const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    color: "#009933",
    fontSize: 13,
    fontWeight: 800,
    fontFamily: "Montserrat"
  }));
  
const CustomSelect = styled(Select)(({ theme }) => ({
    backgroundColor: "#FFE4B5",
    color: "#009933",
    fontSize: 13,
    fontFamily: "Montserrat",
    fontWeight: 800,
    height: 30,
    width: 120,
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
  },
  h2: {
    fontWeight: 800,
    fontSize: "1.35em",
    fontFamily: "Montserrat",
    paddingBottom: 0,
    color: '#ce6d1e'
  },

}
));

export class OfferRankingWidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "najlepsze",
            offerData: this.props.data.bestOffers,
        };
        this.changeHandler = this.changeHandler.bind(this);
      }

  changeHandler = (event) => {
    event.target.value === "najlepsze" ? this.setState
    ({selectedValue: "najlepsze", offerData : this.props.data.bestOffers}) : 
    this.setState({ selectedValue: "najgorsze", offerData: this.props.data.worstOffers})
  };

render(){
  return (    
<Translation>
{(ln) => (

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
    <div style={{    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'}}>
    <Typography className={useStyles.h2}>
        {ln("offerRanking")}
    </Typography>
    <CustomSelect onChange={this.changeHandler}>
            <CustomMenuItem value={"najlepsze"}>
            najlepsze
            </CustomMenuItem>
            <CustomMenuItem value={"najgorsze"}>
            najgorsze
            </CustomMenuItem>
        </CustomSelect>
    </div>
    <TableContainer>
      <Table className={useStyles.table} aria-label="custom table"
        sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none"
            }
          }}>
        <TableHead>
          <TableRow className={useStyles.row} sx={{ "& td": { border: 0 } }}>
            <TableCell>{ln("rank")}</TableCell>
            <TableCell>{ln("offer")}</TableCell>
            <TableCell align="right">{ln("piecesTitle")}</TableCell>
            <TableCell align="right">{this.state.selectedValue === "najlepsze" ? ln("moneyGained") : ln("viewTimes")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.offerData.map((offer, index) => (
            <TableRow key={offer.id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>
                <Avatar src={offer.image} alt={offer.name} /> {offer.name}
              </TableCell>
              <TableCell align="right">{offer.piecesSold}</TableCell>
              <TableCell align="right">{this.state.selectedValue === "najlepsze" ? offer.moneyGained : offer.viewTimes} zl</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Paper>
    </div>
)}
</Translation>
  );
};
}


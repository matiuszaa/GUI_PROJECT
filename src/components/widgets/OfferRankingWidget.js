import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { CustomMenuItem, CustomSelect } from '../common/commoncomp';
import { Typography } from '@mui/material';
import { Translation } from 'react-i18next'
import "./widgets.css"
import "./OfferRankingWidget.css"

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
            <div style={{display:'flex',
            justifyContent: 'space-between'}}>
            <div>
                <Typography variant="widgetHeader">
                    {ln("offerRanking")}
                </Typography>
            </div>
            <div>
            <CustomSelect defaultValue="najlepsze" onChange={this.changeHandler}>
                    <CustomMenuItem value="najlepsze">
                        {ln("best")}
                    </CustomMenuItem>
                    <CustomMenuItem value={"najgorsze"}>
                        {ln("worst")}
                    </CustomMenuItem>
            </CustomSelect>
            </div>
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
                            <TableCell><Typography variant="tableAndNameHeaders">{ln("rank")}</Typography></TableCell>
                            <TableCell><Typography variant="tableAndNameHeaders">{ln("offer")}</Typography></TableCell>
                            <TableCell><Typography variant="tableAndNameHeaders">{ln("piecesTitle")}</Typography></TableCell>
                            <TableCell><Typography variant="tableAndNameHeaders">{this.state.selectedValue === "najlepsze" ? ln("moneyGained") : ln("viewTimes")}</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.offerData.map((offer, index) => (
                            <TableRow key={offer.id}>
                            <TableCell component="th" scope="row">
                            <Typography variant="tableContent"> {index + 1} </Typography>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{ border: 'solid 2px black' }} src={offer.image} alt={offer.name} /> <Typography variant="tableContent">{offer.name}</Typography>
                            </TableCell>
                            <TableCell><Typography variant="tableContent">{offer.piecesSold}</Typography></TableCell>
                            <TableCell><Typography variant="tableContent"> {this.state.selectedValue === "najlepsze" ? offer.moneyGained : offer.viewTimes}</Typography></TableCell>
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


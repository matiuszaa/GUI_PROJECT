import React, { useContext, useState } from 'react';

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

import { Typography } from '@mui/material';

import { CustomMenuItem, CustomSelect } from '../common/commoncomp';
import { Translation, useTranslation } from 'react-i18next'

import "./css/widgets.css"
import "./css/OfferRankingWidget.css"
import { ctxTheme } from '../../context/ctxTheme';

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

const OfferRankingWidget = ({data}) => {
    const [selectedValue, setSelectedValue] = useState('najlepsze');
    const [offerData, setOfferData] = useState(data.bestOffers);
    const {theme} = useContext(ctxTheme);
    const [ln, i18n] = useTranslation();

    const changeHandler = (event) => {
        if (event.target.value === "najlepsze") {
            setSelectedValue('najlepsze'); 
            setOfferData(data.bestOffers);
        } else {
            setSelectedValue('najgorsze'); 
            setOfferData(data.worstOffers);
        }
    };

    return (    
    <div className={`OfferRankingWidget ${theme}`}>
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
                <div className='title' style={{display:'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <Typography variant="widgetHeader">
                        {ln("offerRanking")}
                    </Typography>
                </div>
                <CustomSelect className={`selectValue ${theme}`} defaultValue="najlepsze" onChange={changeHandler}>
                    <CustomMenuItem className={`selectValueli ${theme}`} value="najlepsze">
                        {ln("best")}
                    </CustomMenuItem>
                    <CustomMenuItem className={`selectValueli ${theme}`} value={"najgorsze"}>
                        {ln("worst")}
                    </CustomMenuItem>
                </CustomSelect>
                <TableContainer className={`table ${theme}`}>
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
                                <TableCell><Typography variant="tableAndNameHeaders">{selectedValue === "najlepsze" ? ln("moneyGained") : ln("viewTimes")}</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {offerData.map((offer, index) => (
                                <TableRow key={offer.id}>
                                <TableCell component="th" scope="row">
                                <Typography variant="tableContent"> {index + 1} </Typography>
                                </TableCell>
                                <TableCell>
                                    <Avatar style={{ border: 'solid 2px black' }} src={offer.image} alt={offer.name} /> <Typography variant="tableContent">{offer.name}</Typography>
                                </TableCell>
                                <TableCell><Typography variant="tableContent">{offer.piecesSold}</Typography></TableCell>
                                <TableCell><Typography variant="tableContent"> {selectedValue === "najlepsze" ? offer.moneyGained : offer.viewTimes}</Typography></TableCell>
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

export default OfferRankingWidget;

import { ToggleButton } from '@material-ui/lab';
import { Select, MenuItem, ToggleButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme} from '@mui/material';


export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    color: "#009933",
    fontWeight: 500,
    fontFamily: "Verdana"
  }));
  
export const CustomSelect = styled(Select)(({ theme }) => ({
    backgroundColor: "#FFFDD0",
    color: "#009933",
    fontFamily: "Verdana",
    fontSize: 15,
    fontWeight: 500,
    height: 30,
    width: 150,
    "& .MuiSelect-icon": {
      color: "#009933"
    },
    "&.Mui-selected": {
        backgroundColor: "red",
      },
    "&& fieldset": {
      border: "1px solid #000099."
    },
    "&:hover": {
      "&& fieldset": {
        border: "1px solid #F47933"
      }
    }
  }));


export const CustomToggleButton = styled(ToggleButton)(props => ({
    border: "1px solid #FDAA4A",
    "&:hover": {
      border: "1px solid #FDAA4A",
      backgroundColor: props.selected ? '#FFFFFF' : props.color
    },
    "&.Mui-selected": {
        backgroundColor: props.selected ? props.color : '#FFFFFF'
    },

  }));

export const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
    "& .MuiToggleButtonGroup-grouped": {
      "&:not(:first-of-type)": {
        borderLeft: "1px solid #FDAA4A"
      }
    },
  }));


export const theme = createTheme({
    typography: {
        titleHeader: {
            fontWeight: 700,
            fontSize: "2.70em",
            fontFamily: "Verdana",
        },
        widgetHeader: {
            fontWeight: 800,
            fontSize: "1.45em",
            fontFamily: "Verdana",
            color: "#ce6d1e"
        },
        tableAndNameHeaders: {
            fontWeight: 900,
            fontSize: "1em",
            fontFamily: "Verdana"
        },
        buttonsAndSelectLabel: {
            fontWeight: 400,
            fontSize: "1.10em",
            fontFamily: "Verdana"
        },
        tableContent: {
            fontWeight: 500,
            fontSize: "0.9em",
            fontFamily: "Verdana",
        }
}});

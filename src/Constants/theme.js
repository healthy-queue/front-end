import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(40,164,64,0.82)',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: 25,
    width: 11,
    borderRadius: 10,
    boxShadow: '1px 1px 1px 1px rgba(30, 203, 243, .3)',
    '&:hover':{
      backgroundColor: '#f50057'
    },
    marginTop: '10px', 
  },
  card: {
    borderBottom: '10px',
    borderRadius: '5px',
    margin: '10px 10px 10px 10px',
  },
  icon: {
    fontSize: 50
  },
  modalButton: {
    fontSize: 25,
    width: 11,
    borderRadius: '90%',
    boxShadow: '1px 1px 1px 1px rgba(30, 203, 243, .3)',
    '&:hover':{
      backgroundColor: '#f50057'
    },
    marginTop: '10px', 
  },
  dataTable: {
    marginBottom: '15px' ,
  },
  unorderedLists:{
    listStyle:'none',
    listStyleType:'none'
  }
}));

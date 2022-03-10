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
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  button: {
    fontSize: 15,
    borderRadius: 10,
    boxShadow: '1px 1px 1px 1px rgba(30, 203, 243, .3)',
    '&:hover':{
      backgroundColor: '#f50057'
    },
    marginTop: '10px', 
  },
}));

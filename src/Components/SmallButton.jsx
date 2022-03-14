import * as React from 'react';
import Button from '@mui/material/Button';
import { useStyles } from "../Constants/theme";

function SmallButton() {
  const classes = useStyles()
  return (
    <Button 
      onClick={()=> console.log('button clicked') }
      variant="contained" 
      size="small"
      href="#text-buttons"
      color="info"
      classes={classes.Button}
    > assign
    </Button>
  );
}
export default SmallButton

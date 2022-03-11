import * as React from 'react';
import Button from '@mui/material/Button';
import { useStyles } from "../Constants/theme";

function SmallButton() {
  const classes = useStyles()
  return (
        <Button 
          variant="contained" 
          size="small"
          href="#text-buttons"
          color="info"
          classes={classes.Button}
        > EDIT
        </Button>
  );
}
export default SmallButton

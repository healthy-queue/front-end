import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function smallButton() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>

    
      <div>
        <Button variant="contained" size="small" color="info">
         EDIT
        </Button>
        
      </div>
    </Box>
  );
}

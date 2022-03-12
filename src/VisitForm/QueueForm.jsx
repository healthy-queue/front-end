import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const QueueForm = () => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Select Queue</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="red" control={<Radio />} label="red" />
        <FormControlLabel value="yellow" control={<Radio />} label="yellow" />
        <FormControlLabel value="green" control={<Radio />} label="green" />
      </RadioGroup>
    </FormControl>
  );
}

export default QueueForm

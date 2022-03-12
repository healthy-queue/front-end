import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const QueueForm = ({setPriority}) => {
  const handleRadioChange = (e) => {
    setPriority(e.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleRadioChange}
      >
        <FormControlLabel value="red" control={<Radio />} label="red" />
        <FormControlLabel value="yellow" control={<Radio />} label="yellow" />
        <FormControlLabel value="green" control={<Radio />} label="green" />
      </RadioGroup>
    </FormControl>
  );
}

export default QueueForm

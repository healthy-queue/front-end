import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useStyles } from "../Constants/theme";
import CreatePatient from './CreatePatient';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  maxHeight: 450,
  minWidth: 200,
  minHeight: 250,
  borderRadius: 5,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreatePatientModal = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

return(
  <>
    <Box>
      <AddCircleIcon 
        className={classes.icon}
        color="000000"
        onClick={ handleOpen }
      />
    </Box>
    <Modal
      open={ open }
      onClose={ handleClose }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CreatePatient handleClose={handleClose} />
      </Box>
    </Modal>
  </>
)

}
export default CreatePatientModal;

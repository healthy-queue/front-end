import { useState } from 'react';
import { useStyles } from "../Constants/theme";
import Box from '@mui/material/Box';
import CreatePatient from '../CreatePatient/CreatePatient';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 450,
  borderRadius: 5,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddPatientModal = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

return(
  <>
    <AddCircleIcon 
      className={classes.icon}
      color="primary"
      onClick={ handleOpen }
    />
    <Modal
      open={ open }
      onClose={ handleClose }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CreatePatient />
      </Box>
    </Modal>
  </>
)

}
export default AddPatientModal;

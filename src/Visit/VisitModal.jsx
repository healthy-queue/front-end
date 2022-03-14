import { useState } from 'react';
import Box from '@mui/material/Box';
import AddVisitForm from "./AddVisitForm"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  maxHeight: 450,
  borderRadius: 5,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const VisitsModal = ({enqueued}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

return(
  <>
    <Button
      disabled={enqueued}
      color="primary"
      onClick={ handleOpen }
      size="small"
      variant="contained"
    >assign
    </Button>
    <Modal
      open={ open }
      onClose={ handleClose }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddVisitForm handleClose={handleClose}/>
      </Box>
    </Modal>
  </>
)
}
export default VisitsModal;

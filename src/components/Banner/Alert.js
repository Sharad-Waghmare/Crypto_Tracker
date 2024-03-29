import React, { useState } from 'react'
import { CryptoState } from '../../CryptoContext'
import { Snackbar } from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";

const Alert = () => {

    const { alert, setAlert} = CryptoState();
    const [open, setOpen] = useState(false);

;
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setAlert({ open: false })
    };

    const handleCloseAlert = () =>{
      
    }
  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  )
}

export default Alert
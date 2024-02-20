import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React, { useState } from 'react'
// import "../../../assets/css/style.css"
 import "../../../assets/css/style.css"
import { addComment } from '../../../data/apiComment';
import { addUser } from '../../../data/apiUser';

function AddUser({ closeEvent, handleFlagChange ,data}) {
  const [flag, setFlag] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [userNameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [idError, setIdError] = useState(null);
console.log(data);
  const userData = {    
   username:username,
   password:password,
   id:"",
  };

  const addUserId = () => {
    setUserNameError(null);
    setPasswordError(null);
    setIdError(null);
console.log(userData);
    let hasError = false;

    if (!username) {
      setUserNameError("UserName is required");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }
    // if (!id) {
    //   setIdError("ID is required");
    //   hasError = true;
    // }

    if (hasError) {
        Swal.fire("Error", "Please fill in all the required fields.", "error");
      } else {
        const idExists = data.some(item => item.id === id);
        
        if (idExists) {
          setIdError("ID already exists");
          hasError = true;
        }
    
        if (hasError) {
          // Display an error message if the ID already exists in the data array
          Swal.fire("Error", "ID already exists.", "error");
        } else {
          Swal.fire({
            title: "Are you sure?",
            text: "You are want to add a new comment!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "blue",
            cancelButtonColor: "red",
            confirmButtonText: "Yes, add it!",
          }).then((result) => {
            if (result.value) {
            addUser(userData)
                .then(() => {
                  handleFlagChange();
                  Swal.fire("Added!", "Your user has been added.", "success");
                })
                .catch((error) => {
                  console.error("Error adding a user:", error);
                  Swal.fire("Error", "An error occurred while adding the user.", "error");
                });
            }
          });
        }
      }
  };
  return (
    <div>
      <h1>Add new user</h1>
      <Box sx={{ m: 2 }}></Box>
      <Typography variant='h5' align='center'></Typography>
      <IconButton
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        {/* <Grid item xs={6} md={3}>
          <TextField
            required
            id="outlined-required"
            label="ID"  sx={{minWidth:"100%"}}
            onChange={(e) => {
              setId(e.target.value);
              setIdError(null);
            }}
            error={idError ? true : false}
            helperText={idError}
          />
        
        </Grid> */}
        <Grid item xs={6} >
        <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="USERNAME"
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameError(null);
            }}
            error={userNameError ? true : false}
            helperText={userNameError}
          />
        </Grid>
        
        <Grid item xs={9}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="PASSWORD"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(null);
            }}
            error={passwordError ? true : false}
            helperText={passwordError}
          />
        </Grid>
        
      </Grid>
      <div style={{ marginTop: 10 }}>
        <Button variant="contained" onClick={addUserId}>Add New</Button>
      </div>
    </div>
  )
}

export default AddUser;

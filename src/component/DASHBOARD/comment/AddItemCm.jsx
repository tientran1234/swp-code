import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React, { useState } from 'react'
// import "../../../assets/css/style.css"
 import "../../../assets/css/style.css"
import { addComment } from '../../../data/apiComment';

function AddItemCm({ closeEvent, handleFlagChange ,data}) {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [comment, setComment] = useState('');
  const [id, setId] = useState('');
  const [nameError, setNameError] = useState(null);
  const [imgError, setImgError] = useState(null);
  const [commentError, setCommentError] = useState(null);
  const [idError, setIdError] = useState(null);
console.log(data);
  const homeData = {    
   name:name,
   img:img,
   comment:comment,
   id:id
  };

  const addCommentId = () => {
    setNameError(null);
    setImgError(null);
    setCommentError(null);
    setIdError(null);
console.log(homeData);
    let hasError = false;

    if (!name) {
      setNameError("Name is required");
      hasError = true;
    }
    if (!comment) {
      setCommentError("Comment is required");
      hasError = true;
    }
    if (!img) {
      setImgError("Image is required");
      hasError = true;
    }
    if (!id) {
      setIdError("ID is required");
      hasError = true;
    }

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
              addComment(homeData)
                .then(() => {
                  handleFlagChange();
                  Swal.fire("Added!", "Your comment has been added.", "success");
                })
                .catch((error) => {
                  console.error("Error adding a comment:", error);
                  Swal.fire("Error", "An error occurred while adding the comment.", "error");
                });
            }
          });
        }
      }
  };
  return (
    <div>
      <h1>Add new comment</h1>
      <Box sx={{ m: 2 }}></Box>
      <Typography variant='h5' align='center'></Typography>
      <IconButton
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
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
        
        </Grid>
        <Grid item xs={6} >
        <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="NAME"
            onChange={(e) => {
              setName(e.target.value);
              setNameError(null);
            }}
            error={nameError ? true : false}
            helperText={nameError}
          />
        </Grid>
        
        <Grid item xs={9}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="IMAGE"
            onChange={(e) => {
              setImg(e.target.value);
              setImgError(null);
            }}
            error={imgError ? true : false}
            helperText={imgError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="COMMENT"
            onChange={(e) => {
              setComment(e.target.value);
              setCommentError(null);
            }}
            error={commentError ? true : false}
            helperText={commentError}
          />
        </Grid>
        
      </Grid>
      <div style={{ marginTop: 10 }}>
        <Button variant="contained" onClick={addCommentId}>Add New</Button>
      </div>
    </div>
  )
}

export default AddItemCm;

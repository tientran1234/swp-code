import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React, { useState } from 'react'
// import "../../../assets/css/style.css"
import { addNewHome } from '../../data/apiHome';
import "../../assets/css/style.css"

function AddItem({ closeEvent, handleFlagChange ,data}) {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [createAt, setCreateAt] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');
  const [nameError, setNameError] = useState(null);
  const [imgError, setImgError] = useState(null);
  const [createAtError, setCreateAtError] = useState(null);
  const [descriptionsError, setDescriptionsError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [idError, setIdError] = useState(null);
console.log(data);
  const homeData = {    
   name:name,
   img:img,
   createAt:createAt,
   descriptions:descriptions,
   category:category,
   id:id
  };

  const addHome = () => {
    setNameError(null);
    setCategoryError(null);
    setImgError(null);
    setCreateAtError(null);
    setDescriptionsError(null);
    setIdError(null);
console.log(homeData);
    let hasError = false;

    if (!name) {
      setNameError("Name is required");
      hasError = true;
    }
    if (!category) {
      setCategoryError("Category is required");
      hasError = true;
    }
    if (!createAt) {
      setCreateAtError("Create At is required");
      hasError = true;
    }
    if (!descriptions) {
      setDescriptionsError("Descriptions is required");
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
            text: "You are want to add a new home!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "blue",
            cancelButtonColor: "red",
            confirmButtonText: "Yes, add it!",
          }).then((result) => {
            if (result.value) {
              addNewHome(homeData)
                .then(() => {
                  handleFlagChange();
                  Swal.fire("Added!", "Your home has been added.", "success");
                })
                .catch((error) => {
                  console.error("Error adding a home:", error);
                  Swal.fire("Error", "An error occurred while adding the home.", "error");
                });
            }
          });
        }
      }
  };

  return (
    <div>
      <h1>Add new home
      </h1>
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
        <Grid item xs={3}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="DESCRIPTIONS"
            onChange={(e) => {
              setDescriptions(e.target.value);
              setDescriptionsError(null);
            }}
            error={descriptionsError ? true : false}
            helperText={descriptionsError}
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
        <Grid item xs={3}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="CATEGORY"
            onChange={(e) => {
              setCategory(e.target.value);
              setCategoryError(null);
            }}
            error={categoryError ? true : false}
            helperText={categoryError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required"  sx={{minWidth:"100%"}}
            label="CREATE AT"
            onChange={(e) => {
              setCreateAt(e.target.value);
              setCreateAtError(null);
            }}
            error={createAtError ? true : false}
            helperText={createAtError}
          />
        </Grid>
        
      </Grid>
      <div style={{ marginTop: 10 }}>
        <Button variant="contained" onClick={addHome}>Add New</Button>
      </div>
    </div>
  )
}

export default AddItem;

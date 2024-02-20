import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React,{useState,useEffect} from 'react'
 import "../../../assets/css/style.css"
import { updateUser } from '../../../data/apiUser';


function EditUser({closeEventEdit, handleFlagChange,data}) {
    const [flag, setFlag] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    console.log(username,password);
  useEffect(() => {
   setUserName(data.username)
   setPassword(data.password)
   setId(data.id)
  }, []);
  const userData = {    
    username:username,
    password:password,
    id:id
   };
      const editUser= (user) => {
       console.log("user",user);
        Swal.fire({
          title: "Are you sure?",
          text: "You are about to edit a user!",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "blue",
          cancelButtonColor: "red",
          confirmButtonText: "Yes, add it!",
        }).then((result) => {
          if (result.value) {
            updateUser(user.id,user)
              .then(() => {
                handleFlagChange();
                Swal.fire("Added!", "Your user has been edit.", "success");
              })
              .catch((error) => {
                console.error("Error adding a user:", error);
                Swal.fire("Error", "An error occurred while adding the user.", "error");
              });
          }
        });
      };
      
    const handleUserNameChange = (event) => {
      setUserName(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

    }
    const handleIdChange = (event) => {
        setId(event.target.value);
      };
  
  return (
   
    <div>
         <h1>Edit user</h1>
        <Box sx={{m:2}}>
        </Box>
        <Typography variant='h5' align='center'>
        </Typography>
        <IconButton style={{position:"absolute",top:0,right:0}}
        onClick={closeEventEdit}
        >
            <CloseIcon/>
        </IconButton>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField
          required
          onlyy
          id="outlined-required"
          label="ID" onChange={handleIdChange}
          defaultValue={data.id} sx={{minWidth:"100%"}}
          disabled
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="USERNAME"
          defaultValue={data.username} sx={{minWidth:"100%"}}
          onChange={handleUserNameChange}
        />
        </Grid>
       
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="PASSWORD" onChange={handlePasswordChange}
          defaultValue={data.password} sx={{minWidth:"100%"}}
        />
        </Grid>
    
      
        </Grid>
        <div style={{marginTop:10}}>
        <Button variant="contained" onClick={()=>editUser(userData)}>Edit</Button>
        </div>
       
</div>
  )
}
export default EditUser
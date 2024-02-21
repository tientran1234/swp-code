import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import React,{useState,useEffect} from 'react'
 import "../../../assets/css/style.css"
import { updateComment } from '../../../data/apiComment';


function EditItemCm({closeEventEdit, handleFlagChange,data}) {
    const [flag, setFlag] = useState(false);
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [comment, setComment] = useState('');
    const [id, setId] = useState('');
  useEffect(() => {
   setName(data.name)
   setImg(data.img)
   setComment(data.comment)
   setId(data.id)
  }, []);
  const commentData = {    
    username:name,
    img:img,
    comment:comment,
    id:id
   };
      console.log("HOME",commentData);
      const editComment = (comment) => {
       
        Swal.fire({
          title: "Are you sure?",
          text: "You are about to edit a film!",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "blue",
          cancelButtonColor: "red",
          confirmButtonText: "Yes, add it!",
        }).then((result) => {
          if (result.value) {
            updateComment(comment.id,comment)
              .then(() => {
                handleFlagChange();
                Swal.fire("Added!", "Your film has been edit.", "success");
              })
              .catch((error) => {
                console.error("Error adding a film:", error);
                Swal.fire("Error", "An error occurred while adding the film.", "error");
              });
          }
        });
      };
      
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    const handleIdChange = (event) => {
        setId(event.target.value);
      };
      const handleImgChange = (event) => {
        setImg(event.target.value);
      };
      const handleCommentChange= (event) => {
        setComment(event.target.value);
      };
    
  
  
  return (
   
    <div>
         <h1>Edit new film</h1>
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
          label="NAME"
          defaultValue={data.name} sx={{minWidth:"100%"}}
          onChange={handleNameChange}
        />
        </Grid>
       
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="IMAGE" onChange={handleImgChange}
          defaultValue={data.img} sx={{minWidth:"100%"}}
        />
        </Grid>
    
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="COMMENT"
          defaultValue={data.comment} sx={{minWidth:"100%"}} onChange={handleCommentChange}
        />
        </Grid>
      
        </Grid>
        <div style={{marginTop:10}}>
        <Button variant="contained" onClick={()=>editComment(commentData)}>Edit</Button>
        </div>
       
</div>
  )
}

export default EditItemCm
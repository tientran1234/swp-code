import { Box } from '@mui/material'
import React from 'react'
import SliderNav from '../SliderNav'
import Navbar from '../Navbar';
import ProductListUser from './ProductListUser';

function DBUser() {
  return (
    <div>
        <Navbar/>
        <Box height={100}/>
        <Box sx={{display:"flex"}}>
            
        <SliderNav/>
       <Box component="main" sx={{flexGrow:1,p:3}}>

      
        <ProductListUser/>
        
        </Box>
        </Box>
  
    </div>
  )
}

export default DBUser
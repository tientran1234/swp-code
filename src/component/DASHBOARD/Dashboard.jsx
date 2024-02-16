import { Box } from '@mui/material'
import React from 'react'
import SliderNav from './SliderNav'
import Navbar from './Navbar';
import ProductList from './ProductList';
// import ProductList2 from './product/ProductList2';

function Dashboard() {
  return (
    <div>
        <Navbar/>
        <Box height={100}/>
        <Box sx={{display:"flex"}}>
            
        <SliderNav/>
       <Box component="main" sx={{flexGrow:1,p:3}}>

      
        <ProductList/>
        
        </Box>
        </Box>
  
    </div>
  )
}

export default Dashboard
import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{fontFamily:'cursive'}} variant='h3'>You can see available books in the store</Typography>
      </Box>
    </div>
  )
}

export default About
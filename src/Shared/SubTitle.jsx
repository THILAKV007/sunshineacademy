import { Box } from '@mui/material'
import React from 'react'

const SubTitle = ({ children }) => {
  return (
    <Box
      sx={{
        color: '#6c6565',
        marginTop: '2px',
        fontFamily: 'Mitr, sans-serif',
        fontSize: { xs: '15px', md: '20px' },
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: 'normal',
        mx: { xs: 2, sm: 'auto' },
        maxWidth: '600px',
      }}
    >
      {children}
    </Box>
  )
}

export default SubTitle

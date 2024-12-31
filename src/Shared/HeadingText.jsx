import { Box } from '@mui/material'
import React from 'react'

const HeadingText = ({ children }) => {
  return (
    <Box
      sx={{
        color: '#000',
        fontFamily: 'Mitr',
        fontSize: { xs: '30px', md: '50px' },
        marginTop: '32px',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: { xs: '35px', md: '73px' },
        marginX: 2,
      }}
    >
      {children}
    </Box>
  )
}

export default HeadingText

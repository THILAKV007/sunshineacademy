import { Box } from '@mui/material'
import '../dashboard/dashboard.css'
import '../home/home.css'
import { React, forwardRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Dashboard = forwardRef((props, ref) => {
  const navigate = useNavigate()
  return (
    <Box className='home-bg' sx={{ maxHeight: { md: '95vh' } }} ref={ref}>
      <Box
        sx={{
          height: { md: '90vh' },
          width: 'fit-content',
          marginLeft: '4%',
          marginRight: '4%',
          display: { md: 'flex' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className='header-content'
      >
        <div>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '10px', md: '28px' },
              color: '#f43e04',
              fontFamily: 'Michroma, sans-serif',
              fontSize: { xs: '16px', md: '20px' },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            <div>#Medical coder</div>
            <div>#HealthCare</div>
          </Box>
          <Box
            sx={{
              color: '#000',
              fontFamily: 'Mitr, sans-serif',
              marginTop: '34px',
              fontSize: { xs: '25px', md: '40px' },
              fontStyle: 'normal',
              textAlign: 'start',
              fontWeight: 400,
              lineHeight: { xs: '37px', md: '73px' },
            }}
          >
            BECOME A MEDICAL CODING SPECIALIST ENJOY A REWARDING CAREER!
          </Box>
          <Box
            sx={{
              color: '#6c6565',
              marginTop: '2px',
              fontFamily: 'Mitr, sans-serif',
              fontSize: { xs: '15px', md: '20px' },
              textAlign: 'start',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
          >
            Provides training and equips them with sound knowledgein all domain
            and does its best to create job opportunities.
          </Box>
          <Box
            sx={{
              marginRight: { md: '70%' },
              marginTop: '23px',
              height: 'auto',
              width: 'auto',
              textAlign: 'center',
              padding: { xs: 0.7, md: '20px' },
              backgroundColor: '#f43e04',
              color: '#fff',
              fontFamily: 'Michroma, sans-serif',
              fontSize: { xs: '10px', md: '14px' },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              maxWidth: '120px',
              borderRadius: '10px',
            }}
          >
            Apply Online
          </Box>
        </div>
        <div>
          <img
            style={{ maxHeight: '90%', maxWidth: '90%' }}
            src='/assets/main-banner-bg.png'
          ></img>
        </div>
      </Box>
    </Box>
  )
})
export default Dashboard

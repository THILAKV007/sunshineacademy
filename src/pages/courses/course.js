import { useNavigate } from 'react-router-dom'
import '../courses/course.css'
import { motion } from 'framer-motion'
import { React, forwardRef, useState } from 'react'
import HeadingText from '../../Shared/HeadingText'
import { Box } from '@mui/material'
import SubTitle from '../../Shared/SubTitle'
const Course = forwardRef((props, ref) => {
  const navigate = useNavigate()
  const [selectedCource, setCourse] = useState(0)
  function couseSelected(index) {
    setCourse(index)
  }
  return (
    <section className='courses-bg' ref={ref}>
      <HeadingText>Course offered</HeadingText>
      <SubTitle>
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </SubTitle>
      <Box
        sx={{
          height: { xs: '40px', md: '60px' },
          width: 'auto',
          marginTop: '16px',
          marginX: { xs: '4%', md: '32%' },
          borderRadius: '45px',
          backgroundColor: '#f43e04',
        }}
      >
        <Box
          sx={{
            height: { xs: '30px', md: '50px' },
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {(() => {
            let contents = []
            for (let i = 0; i < 5; i++) {
              contents.push(
                <Box
                  sx={{
                    color: selectedCource == i ? 'black' : 'white',
                    fontSize: { xs: '14px', md: '20px' },
                    fontStyle: 'normal',
                    fontWeight: '300px',
                    marginTop: '7px',
                    backgroundColor:
                      selectedCource == i ? 'white' : 'transparent',
                    borderRadius: selectedCource == i ? '50px' : 0,
                    paddingY: '5px',

                    paddingX: { xs: '8px', md: ' 20px' },
                  }}
                  onClick={() => couseSelected(i)}
                >
                  {i == 0
                    ? 'CMC'
                    : i == 1
                    ? 'ACMC'
                    : i == 2
                    ? 'COC'
                    : i == 3
                    ? 'CIC'
                    : 'CPC'}
                </Box>
              )
            }
            return contents
          })()}
        </Box>
      </Box>

      <Box
        sx={{
          display: { md: 'flex' },
          marginTop: '53px',
          gap: '30px',
          justifyContent: 'center',
          marginBottom: '83px',
          mx: 3,
        }}
        className=' work-list'
      >
        <div className='work'>
          <motion.img
            src='/assets/doctor.png'
            alt='Doctor'
            onClick={() => navigate('/course-detail', { state: { type: 1 } })}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              type: 'spring',
            }}
            whileHover={{ scale: 1.1 }}
            style={{ cursor: 'pointer' }}
          />
          <div className='layer'></div>
        </div>

        <div className='work'>
          <motion.img
            alt='Doctor'
            src='/assets/stethes.png'
            onClick={() => navigate('/course-detail', { state: { type: 2 } })}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5, // Matches the AOS duration
              delay: 0.1, // Matches the AOS delay
              type: 'spring',
            }}
            whileHover={{ scale: 1.1 }}
            style={{ cursor: 'pointer' }}
          />
          <div className='layer'></div>
        </div>

        <div className='work'>
          <motion.img
            alt='Doctor'
            src='/assets/medical-book.png'
            onClick={() => navigate('/course-detail', { state: { type: 3 } })}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5, // Matches the AOS duration
              delay: 0.1, // Matches the AOS delay
              type: 'spring',
            }}
            whileHover={{ scale: 1.1 }}
            style={{ cursor: 'pointer' }}
          />
          <div className='layer'></div>
        </div>
      </Box>
    </section>
  )
})
export default Course

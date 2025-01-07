import { forwardRef, useState } from 'react'
import '../about_us/about_us.css'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'
import HeadingText from '../../Shared/HeadingText'
import SubTitle from '../../Shared/SubTitle'

const AboutUs = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className='about-us-bg' ref={ref}>
      <HeadingText>About Us</HeadingText>
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
        We offered industries leading course for medical
        <br /> coding & Medical billing course for medical coding & Medical
        billing
      </Box>

      <motion.div
        className='about-us-content'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{
            marginTop: { sm: 4, md: '-100px' },
            display: { sm: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            marginX: '4%',
          }}
        >
          <Box
            sx={{
              maxWidth: { sm: '50%', md: '60%' },
              fontFamily: 'Mitr',
              fontSize: { xs: '13px', md: '20px' },
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
              textAlign: 'justify',
              // my: { xs: 2, md: 0 },
            }}
          >
            “The right skill-set is critical for today’s high-quality job
            market”. At SSA (Sun Shine Academy) you will receive up-to-date
            career skills and the knowledge needed to succeed in the job market
            of today and tomorrow. Sunshine Academy is a leading organization in
            Chennai aiming to serve the society through Coaching
          </Box>
          <Box
            sx={{
              marginRight: { xs: '0px', md: '30px' },
              mt: { xs: '20px', md: 0 },
              width: { xs: '100%', sm: '50%', md: '100%' },
              display: { xs: '', sm: 'flex', md: '' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.img
              src='/assets/about-us-ref.png'
              alt='About Us'
              className='about-us-image'
              style={{ height: '80%', width: '80%' }}
              animate={
                isHovered ? { rotate: 360, x: -50 } : { rotate: 0, x: 0 }
              }
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </Box>
        </Box>
      </motion.div>
    </section>
  )
})

export default AboutUs

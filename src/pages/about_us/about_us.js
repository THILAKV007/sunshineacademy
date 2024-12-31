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
      <SubTitle>
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </SubTitle>
      <motion.div
        className='about-us-content'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{
            marginTop: { md: '-100px' },
            display: { md: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '4%',
            marginRight: '4%',
          }}
        >
          <Box
            sx={{
              maxWidth: { md: '60%' },
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

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import '../Contact_us/contact_us.css'
import { Box } from '@mui/material'
import HeadingText from '../../Shared/HeadingText'
import SubTitle from '../../Shared/SubTitle'

const ContactUs = forwardRef((props, ref) => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const childVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const imageVariant = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1 } },
  }

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  return (
    <motion.Box
      className='about-us-bg'
      ref={ref}
      initial='hidden'
      animate='visible'
      variants={containerVariant}
    >
      <motion.div className='heading-text-style' variants={childVariant}>
        <HeadingText>Contact Us</HeadingText>
      </motion.div>

      <motion.div variants={childVariant}>
        <SubTitle>
          We offered industries leading course for medical coding & Medical
          billing course for medical coding & Medical billing at
        </SubTitle>
      </motion.div>

      <Box
        sx={{
          marginTop: '61px',
          display: { sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '4%',
          marginRight: ' 5%',
          gap: '80px',
          marginBottom: '142px',
        }}
      >
        <Box
          sx={{ maxWidth: { xs: '100%', sm: '55%' }, maxHeight: { sm: 430 } }}
        >
          <motion.img
            src='/assets/contact_us_bg.jpg'
            height={'100%'}
            style={{ maxWidth: '100%' }}
            alt='Contact Background'
            variants={imageVariant}
          />
        </Box>

        <motion.div
          className='contact-form'
          variants={childVariant}
          initial='hidden'
          animate='visible'
        >
          <form>
            <motion.label className='form-title-style' variants={childVariant}>
              First Name
            </motion.label>
            <motion.input type='text' name='name' variants={childVariant} />
          </form>

          <form style={{ marginTop: 40 }}>
            <motion.label className='form-title-style' variants={childVariant}>
              Mail-id
            </motion.label>
            <motion.input type='text' name='name' variants={childVariant} />
          </form>

          <form style={{ marginTop: 40 }}>
            <motion.label className='form-title-style' variants={childVariant}>
              Phone Number
            </motion.label>
            <motion.input type='text' name='name' variants={childVariant} />
          </form>

          <form style={{ marginTop: 40 }}>
            <motion.label className='form-title-style' variants={childVariant}>
              Message
            </motion.label>
            <motion.input type='text' name='name' variants={childVariant} />
          </form>

          <motion.div variants={buttonVariant}>
            <Box
              sx={{
                width: 'auto',
                marginLeft: '20%',
                marginRight: '20%',
                marginTop: '30px',
                backgroundColor: '#f43e04',
                color: '#fff',
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Michroma',
                fontSize: { xs: '13px', md: '20px' },
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                padding: '8px',
                borderRadius: '10px',
              }}
            >
              Contact Us
            </Box>
          </motion.div>
        </motion.div>
      </Box>
    </motion.Box>
  )
})

export default ContactUs

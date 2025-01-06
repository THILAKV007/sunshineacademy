import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import '../Contact_us/contact_us.css'
import { Box } from '@mui/material'
import HeadingText from '../../Shared/HeadingText'
import SubTitle from '../../Shared/SubTitle'
import emailjs from 'emailjs-com'

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

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_5cm2gee', // Replace with your EmailJS Service ID
        'template_5srdmck', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        '5yOlJnUaxafy8kYWO' // [clint] Replace with your EmailJS PUBLIC KEY
        // '1lHbCLQCKlHz-12AD' // [taha]  Replace with your EmailJS PUBLIC KEY
      )
      .then(
        (result) => {
          alert('Message sent successfully!')
        },
        (error) => {
          console.error(error.text)
          alert('Failed to send the message. Please try again.')
        }
      )
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
          We offer industry-leading courses for medical coding & medical
          billing.
        </SubTitle>
      </motion.div>

      <Box
        sx={{
          marginTop: '61px',
          display: { sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '4%',
          marginRight: '5%',
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
          <form onSubmit={handleSubmit}>
            <motion.label className='form-title-style' variants={childVariant}>
              First Name
            </motion.label>
            <motion.input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              variants={childVariant}
              required
            />
            <Box sx={{ mt: 5 }} />
            <motion.label
              className='form-title-style'
              variants={childVariant}
              style={{ marginTop: 40 }}
            >
              Mail-id
            </motion.label>
            <motion.input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              variants={childVariant}
              required
            />
            <Box sx={{ mt: 5 }} />
            <motion.label
              className='form-title-style'
              variants={childVariant}
              style={{ marginTop: 40 }}
            >
              Phone Number
            </motion.label>
            <motion.input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              variants={childVariant}
              required
            />
            <Box sx={{ mt: 5 }} />
            <motion.label
              className='form-title-style'
              variants={childVariant}
              style={{ marginTop: '40px' }}
            >
              Message
            </motion.label>
            <br />
            <motion.textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              variants={childVariant}
              required
              style={{ border: 'none', opacity: 0, width: '100%' }}
            />
            <motion.div
              style={{ display: 'flex', justifyContent: 'center' }}
              variants={buttonVariant}
            >
              <button
                type='submit'
                style={{
                  marginTop: '30px',
                  backgroundColor: '#f43e04',
                  color: '#fff',
                  textAlign: 'center',
                  // display: 'block',
                  fontFamily: 'Michroma',
                  fontSize: '16px',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Contact Us
              </button>
            </motion.div>
          </form>
        </motion.div>
      </Box>
    </motion.Box>
  )
})

export default ContactUs

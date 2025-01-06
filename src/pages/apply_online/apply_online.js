import React, { useState } from 'react'
import '../apply_online/apply_online.css'
import NavBar from '../../Shared/navbar'
import emailjs from 'emailjs-com'
import { Box } from '@mui/material'

const ApplyOnline = ({ innerRefs }) => {
  const dashboardRef = innerRefs.dashboardRef
  const servicesRef = innerRefs.servicesRef
  const coursesRef = innerRefs.coursesRef
  const aboutUsRef = innerRefs.aboutUsRef
  const contactUsRef = innerRefs.contactUsRef

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_5cm2gee', // Replace with your EmailJS Service ID
        'template_xfb4eol', // Replace with your EmailJS Template ID
        formData,
        '5yOlJnUaxafy8kYWO' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result)
          alert('Message sent successfully!')
        },
        (error) => {
          console.error(error.text)
          alert('Failed to send the message. Please try again.')
        }
      )
  }

  return (
    <section className='apply-online-bg'>
      <div>
        <NavBar
          innerRefs={{
            dashboardRef,
            servicesRef,
            coursesRef,
            aboutUsRef,
            contactUsRef,
          }}
        />
        <Box
          sx={{
            backgroundColor: 'white',
            height: 'auto',
            width: 'auto',
            padding: '40px',
            marginTop: '63px',
            marginLeft: { xs: '3%', md: '30%' },
            marginRight: { xs: '3%', md: '30%' },
            marginBottom: '100px',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div>
              <label className='form-title-style'>Your Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginTop: 40 }}>
              <label className='form-title-style'>Your Email-id</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginTop: 40 }}>
              <label className='form-title-style'>Your Phone Number</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginTop: 40 }}>
              <label className='form-title-style'>Location</label>
              <input
                type='text'
                name='location'
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginTop: 40 }}>
              <label className='form-title-style'>Message</label>
              <input
                type='text'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Box
              type='submit'
              sx={{
                mx: 'auto',
                marginTop: { xs: 5, md: 8 },
                cursor: 'pointer',
                border: 'none',
                height: '58px',
                width: 'auto',
                backgroundColor: '#f43e04',
                color: '#fff',
                textAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Michroma',
                fontSize: { xs: '14px', md: '18px' },
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                maxWidth: '250px',
              }}
            >
              Submit Message
            </Box>
          </form>
        </Box>
      </div>
    </section>
  )
}

export default ApplyOnline

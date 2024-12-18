import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import '../Contact_us/contact_us.css'

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
    <motion.section
      className='about-us-bg'
      ref={ref}
      initial='hidden'
      animate='visible'
      variants={containerVariant}
    >
      <motion.div className='heading-text-style' variants={childVariant}>
        Contact Us
      </motion.div>

      <motion.div className='sub-heading-style' variants={childVariant}>
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing at
      </motion.div>

      <div className='contact-content'>
        <motion.img
          src='/assets/contact_us_bg.jpg'
          height={630}
          style={{ maxWidth: '55%' }}
          alt='Contact Background'
          variants={imageVariant}
        />

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

          <form style={{ marginTop: 50 }}>
            <motion.label className='form-title-style' variants={childVariant}>
              Mail-id
            </motion.label>
            <motion.input type='text' name='name' variants={childVariant} />
          </form>

          <form style={{ marginTop: 50 }}>
            <motion.label className='form-title-style' variants={childVariant}>
              Phone Number
            </motion.label>
            <motion.input type='text' name='name' variants={childVariant} />
          </form>

          <form style={{ marginTop: 50 }}>
            <motion.label className='form-title-style' variants={childVariant}>
              Message
            </motion.label>
            <motion.input type='text' name='name' variants={childVariant} />
          </form>

          <motion.div className='contact-us-btn' variants={buttonVariant}>
            Contact Us
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
})

export default ContactUs

import { forwardRef, useState } from 'react'
import '../about_us/about_us.css'
import { motion } from 'framer-motion'

const AboutUs = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className='about-us-bg' ref={ref}>
      <div className='heading-text-style'>About Us</div>
      <div className='sub-heading-style'>
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </div>
      <motion.div
        className='about-us-content'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='about-us-style'>
          “The right skill-set is critical for today’s high-quality job market”.
          At SSA (Sun Shine Academy) you will receive up-to-date career skills
          and the knowledge needed to succeed in the job market of today and
          tomorrow. Sunshine Academy is a leading organization in Chennai aiming
          to serve the society through Coaching
        </div>
        <div>
          <motion.img
            src='/assets/about-us-ref.png'
            alt='About Us'
            className='about-us-image'
            animate={isHovered ? { rotate: 360, x: -50 } : { rotate: 0, x: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
})

export default AboutUs

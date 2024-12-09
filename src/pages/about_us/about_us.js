import { forwardRef } from 'react'
import '../about_us/about_us.css'

const AboutUs = forwardRef((props, ref) => {
  return (
    <section className='about-us-bg' ref={ref}>
      <div className='heading-text-style'>About Us</div>
      <div className='sub-heading-style'>
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </div>
      <div className='about-us-content'>
        <div className='about-us-style'>
          “The right skill-set is critical for today’s high-quality job market”.
          At SSA (Sun Shine Academy) you will receive up-to-date career skills
          and the knowledge needed to succeed in the job market of today and
          tomorrow. Sunshine Academy is a leading organization in Chennai aiming
          to serve the society through Coaching
        </div>
        <div>
          <img
            // style={{ height: '100%', width: '100%' }}
            src='/assets/about-us-ref.png'
          />
        </div>
      </div>
    </section>
  )
})
export default AboutUs

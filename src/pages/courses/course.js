import { useNavigate } from 'react-router-dom'
import '../courses/course.css'
import { motion } from 'framer-motion'
import { React, forwardRef, useState } from 'react'
const Course = forwardRef((props, ref) => {
  const navigate = useNavigate()
  const [selectedCource, setCourse] = useState(0)
  function couseSelected(index) {
    setCourse(index)
  }
  return (
    <section className='courses-bg' ref={ref}>
      <div className='heading-text-style'>Course offered</div>
      <div className='sub-heading-style'>
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </div>
      <div className='course-list-tile'>
        <div className='course-lists'>
          {(() => {
            let contents = []
            for (let i = 0; i < 5; i++) {
              contents.push(
                <div
                  style={{
                    color: selectedCource == i ? 'black' : 'white',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 300,
                    marginTop: 7,
                    backgroundColor:
                      selectedCource == i ? 'white' : 'transparent',
                    borderRadius: selectedCource == i ? '50px' : 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
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
                </div>
              )
            }
            return contents
          })()}
        </div>
      </div>

      <div className='courses-examples work-list'>
        <div className='work'>
          <motion.img
            src='/assets/doctor.png'
            alt='Doctor'
            onClick={() => navigate('/course-detail', { state: { type: 1 } })}
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
      </div>
    </section>
  )
})
export default Course

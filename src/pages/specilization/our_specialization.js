import { Box } from '@mui/material'
import '../specilization/specialization.css'
import { motion } from 'framer-motion'
import HeadingText from '../../Shared/HeadingText'

function OurSpecialization() {
  return (
    <Box sx={{ maxWidth: '1350px', mx: 'auto' }} className='about-us-bg'>
      <HeadingText>Our Specialization</HeadingText>

      <Box
        sx={{
          display: { sm: 'flex' },
          marginTop: '24px',
          marginX: { xs: '10%', md: '15%' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Medical Coding */}
        <motion.div
          className='types-bg'
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <span className='set-bg-circle'>
            <img
              src='/assets/medical-coding.png'
              style={{ padding: 16 }}
              alt='Medical Coding'
            />
          </span>
          <span className='specialization-types-style'>Medical Coding</span>
        </motion.div>

        {/* Medical Billing */}
        <Box
          sx={{
            my: { xs: 3, sm: 0 },
          }}
        >
          <motion.div
            className='types-bg'
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <span className='set-bg-circle'>
              <img
                src='/assets/medical-billing.png'
                style={{ padding: 16 }}
                alt='Medical Billing'
              />
            </span>
            <span className='specialization-types-style'>Medical Billing</span>
          </motion.div>
        </Box>

        {/* Healthcare Training */}
        <motion.div
          className='types-bg'
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <span className='set-bg-circle'>
            <img
              src='/assets/health-insurance.png'
              style={{ padding: 16 }}
              alt='Healthcare Training'
            />
          </span>
          <span className='specialization-types-style'>
            Healthcare Training
          </span>
        </motion.div>
      </Box>
      <div className='explanation'>
        <ul>
          {[
            'Faculties are having 20+ years of real-time coding experience in multi-specialty coding with multiple certification',
            'Individual attention to all the students',
            ' All trained students shall be placed in reputed companies',
            'Not only we will teach you the skills and knowledge, but we will also provide you tips and guidance for achieving your career goals',
          ].map((i) => {
            return (
              <li>
                <Box
                  sx={{
                    textAlign: 'start',
                    color: '#000',
                    fontFamily: ' Mitr',
                    fontSize: { xs: '14px', md: '20px' },
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: ' normal',
                  }}
                >
                  {i}
                </Box>
              </li>
            )
          })}
        </ul>
      </div>
      <Box
        sx={{
          color: '#6C6565',
          fontSize: { xs: 18, md: 24 },
          fontWeight: 300,
          textAlign: 'center',
          marginTop: 7,
          mx: 3,
        }}
      >
        All of us at SSA (Sun Shine Academy), look forward to helping you get
        the career training you need to get ahead in life.
        <br />
        <br />
        Enroll today – and take the next step toward a brighter tomorrow.
      </Box>
      <Box
        sx={{
          width: 'auto',
          marginX: { xs: '10%', md: '42%' },
          marginTop: '30px',
          backgroundColor: '#f43e04',
          color: '#fff',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'Michroma',
          fontSize: { xs: '15px', md: '20px' },
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          padding: { sx: '6px', md: '8px 5px' },
          borderRadius: '10px',
        }}
      >
        Enroll Now
      </Box>
    </Box>
  )
}
export default OurSpecialization

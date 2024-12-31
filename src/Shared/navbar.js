import '../Shared/shared.css'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { React, useState, useRef, useEffect } from 'react'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
function NavBar({ innerRefs }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedSection, setSelectedSection] = useState(0)

  function gotoSection(value) {
    setSelectedSection(value)
  }
  useEffect(() => {
    console.log('reffs', innerRefs)
    setSelectedSection(selectedSection)
    switch (selectedSection) {
      case 0:
        scrollSmoothHandler(innerRefs.dashboardRef)
        break
      case 1:
        scrollSmoothHandler(innerRefs.servicesRef)
        break
      case 2:
        scrollSmoothHandler(innerRefs.coursesRef)
        break
      case 3:
        scrollSmoothHandler(innerRefs.aboutUsRef)
        break
      case 4:
        scrollSmoothHandler(innerRefs.contactUsRef)
        break
      default:
        scrollSmoothHandler(innerRefs.dashboardRef)
        break
    }
  }, [location, innerRefs, selectedSection])
  const scrollSmoothHandler = (innerRefs) => {
    console.log('Triggered.')
    console.log(innerRefs.current)
    innerRefs.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box sx={{ position: 'relative' }} className='header-style'>
      <div className='top-flag-style'></div>

      <Box
        sx={{
          position: 'absolute',
          height: '100vh',
          width: '50%',
          background: '#fff',
          right: isOpen ? 0 : -500,
          display: isOpen ? 'block' : 'none',
        }}
      >
        <Box
          onClick={() => setIsOpen(false)}
          sx={{
            padding: '5px 10px',
            border: '2px solid #f43e04',
            borderRadius: '100%',
            display: 'inline',
            fontWeight: 'bold',
            position: 'absolute',
            right: 1,
          }}
          variant='span'
        >
          X
        </Box>
        <Box
          sx={{
            marginLeft: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 4,
          }}
        >
          <div onClick={() => gotoSection(0)}>
            <div className='app-services-style'>Home</div>
            {selectedSection == 0 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(1)
            }}
          >
            <div className='app-services-style'>Service</div>
            {selectedSection == 1 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(2)
            }}
          >
            <div className='app-services-style'>Course</div>
            {selectedSection == 2 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(3)
            }}
          >
            <div className='app-services-style'>About Us</div>
            {selectedSection == 3 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(4)
            }}
          >
            <div className='app-services-style'>Contact</div>
            {selectedSection == 4 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
        </Box>
        <Box
          sx={{
            marginRight: { md: '70%' },
            marginTop: '23px',
            height: 'auto',
            width: 'auto',
            textAlign: 'center',
            padding: { xs: 0.7, md: '20px' },
            backgroundColor: '#f43e04',
            color: '#fff',
            fontFamily: 'Michroma, sans-serif',
            fontSize: { xs: '10px', md: '14px' },
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            maxWidth: '120px',
            borderRadius: '10px',
            mx: 2,
          }}
        >
          Apply Online
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'space-between',
          alignItems: 'center',
          m: 2,
        }}
      >
        <Box sx={{}} onClick={() => navigate('/home')}>
          <img src='/assets/app-logo.png'></img>
        </Box>
        <Box onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </Box>
      </Box>

      {/* PC  */}
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        className='set-components'
      >
        <div className='app-logo' onClick={() => navigate('/home')}>
          <img src='/assets/app-logo.png'></img>
        </div>
        <div className='header-contents'>
          <div onClick={() => gotoSection(0)}>
            <div className='app-services-style'>Home</div>
            {selectedSection == 0 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(1)
            }}
          >
            <div className='app-services-style'>Service</div>
            {selectedSection == 1 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(2)
            }}
          >
            <div className='app-services-style'>Course</div>
            {selectedSection == 2 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(3)
            }}
          >
            <div className='app-services-style'>About Us</div>
            {selectedSection == 3 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div
            onClick={() => {
              navigate('/home')
              gotoSection(4)
            }}
          >
            <div className='app-services-style'>Contact</div>
            {selectedSection == 4 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
        </div>
        <div className='apply-btn' onClick={() => navigate('/apply-online')}>
          Apply Online
        </div>
      </Box>
    </Box>
  )
}
export default NavBar

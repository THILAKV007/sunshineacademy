import '../Shared/shared.css'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { React, useState, useRef, useEffect } from 'react'
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
  return (
    <div className='header-style'>
      <div className='top-flag-style'></div>
      <div className='set-components'>
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
          <div onClick={() => gotoSection(1)}>
            <div className='app-services-style'>Service</div>
            {selectedSection == 1 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div onClick={() => gotoSection(2)}>
            <div className='app-services-style'>Course</div>
            {selectedSection == 2 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div onClick={() => gotoSection(3)}>
            <div className='app-services-style'>About Us</div>
            {selectedSection == 3 ? (
              <div className='selected-section'></div>
            ) : (
              <div />
            )}
          </div>
          <div onClick={() => gotoSection(4)}>
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
      </div>
    </div>
  )
}
export default NavBar

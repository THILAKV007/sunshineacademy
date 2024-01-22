import '../home/home.css'
import { React, useRef } from 'react'
import NavBar from '../../Shared/navbar'
import Dashboard from '../dashboard/dashboard'
import Services from '../services/services'
import Courses from '../courses/course'
import AboutUs from '../about_us/about_us'
import OurSpecialization from '../specilization/our_specialization'
import Clients from '../Our_Clients/our_clients'
import ContactUs from '../Contact_us/contact_us'
import Footer from '../footer/footer'

function Home({ innerRefs }) {
  const dashboardRef = innerRefs.dashboardRef
  const servicesRef = innerRefs.servicesRef
  const coursesRef = innerRefs.coursesRef
  const aboutUsRef = innerRefs.aboutUsRef
  const contactUsRef = innerRefs.contactUsRef
  console.log('thereee', innerRefs)
  return (
    <>
      {/* <NavBar
        innerRefs={{
          dashboardRef,
          servicesRef,
          coursesRef,
          aboutUsRef,
          contactUsRef,
        }}
      /> */}
      {/* <Dashboard ref={dashboardRef}/> 
      <Services ref={servicesRef}/>
      <Courses ref={coursesRef} />  */}
      <AboutUs ref={aboutUsRef} />
      <OurSpecialization />
      <Clients />
      <ContactUs ref={contactUsRef} />
      <Footer />
    </>
  )
}
export default Home

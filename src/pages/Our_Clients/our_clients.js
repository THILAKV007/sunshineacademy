import { Box } from '@mui/material'
import '../Our_Clients/our_clients.css'
import HeadingText from '../../Shared/HeadingText'
import SubTitle from '../../Shared/SubTitle'

function Clients() {
  return (
    <section className='about-us-bg'>
      <HeadingText>Our Clients</HeadingText>
      <SubTitle>
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </SubTitle>
      <div className='client-list-bg'>
        {/* <img src="/assets/client-1.png"></img>
        <img src="/assets/client-2.png" style={{marginTop:30}}></img>
        <img src="/assets/client-3.png"></img> */}
      </div>
    </section>
  )
}
export default Clients

import { Box } from '@mui/material'
import '../footer/footer.css'
function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f43e04' }}>
      {' '}
      <Box
        sx={{
          display: { sm: 'flex' },
          justifyContent: 'space-between',
          paddingTop: '18px',
          marginLeft: '4%',
          marginRight: '5%',
          alignItems: 'center',
        }}
      >
        <img src='/assets/footer-logo.png'></img>
        <div>
          <Box
            sx={{
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: { xs: '25px', md: '35px' },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Quick Links
          </Box>
          <div className='quick-sub-heading-style'>Course</div>
          <div className='quick-sub-heading-style'>Training</div>
          <div className='quick-sub-heading-style'>About Us</div>
          <div className='quick-sub-heading-style'>Blog</div>
          <div className='quick-sub-heading-style'>Contact Us</div>
        </div>
        <Box sx={{ mt: { xs: 5, md: 0 } }}>
          <Box
            sx={{
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: { xs: '25px', md: '35px' },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Follow Us On
          </Box>
          <Box
            sx={{
              marginTop: '16px',
              display: 'flex',
              gap: '14px',
              justifyContent: { sm: 'center' },
              alignItems: 'center',
            }}
          >
            <img src='/assets/Facebook.png'></img>
            <img src='/assets/Twitter.png'></img>
          </Box>
          <div className='terms-policy'>Terms and condition</div>
        </Box>
      </Box>
    </Box>
  )
}
export default Footer

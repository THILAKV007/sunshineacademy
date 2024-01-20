import Box from '@mui/material/Box'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#f43e04',
        height: 'auto',
        width: 'auto',
      }}
      className='footer-bg'
    >
      <Box
        sx={{
          display: 'flex',
          gap:2,
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          paddingTop: '18px',
          marginLeft: '4%',
          marginRight: '5%',
          alignItems: 'center',
        }}
        className='footer-contents'
      >
        <img src='/assets/footer-logo.png' alt='Footer Logo' />
        <Box>
          <Box
            sx={{
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
            className='main-heading-style'
          >
            Quick Links
          </Box>
          <Box
            sx={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
            className='quick-sub-heading-style'
          >
            Course
          </Box>
          <Box
            sx={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
            className='quick-sub-heading-style'
          >
            Training
          </Box>
          <Box
            sx={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
            className='quick-sub-heading-style'
          >
            About Us
          </Box>
          <Box
            sx={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
            className='quick-sub-heading-style'
          >
            Blog
          </Box>
          <Box
            sx={{
              marginTop: '8px',
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
            className='quick-sub-heading-style'
          >
            Contact Us
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
            className='main-heading-style'
          >
            Follow Us On
          </Box>
          <Box
            sx={{
              marginTop: '16px',
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className='follow-links'
          >
            <img src='/assets/Facebook.png' alt='Facebook' />
            <img src='/assets/Twitter.png' alt='Twitter' />
          </Box>
          <Box
            sx={{
              marginTop: '18px',
              color: '#000',
              fontFamily: 'Mitr',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
            className='terms-policy'
          >
            Terms and condition
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer

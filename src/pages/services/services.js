import { forwardRef, useState } from 'react'
import '../services/services.css'
import { Box } from '@mui/material'
import HeadingText from '../../Shared/HeadingText'
import SubTitle from '../../Shared/SubTitle'

const data = [
  {
    id: 1,
    title: 'Healthcare',
    url: 'Sunshine-Academy-Empowering-Healthcare-Careers.pdf',
    download: 'Sunshine-Academy-Empowering-Healthcare-Careers.pdf',
  },
  {
    id: 2,
    title: ' US Healthcare',
    url: 'Launch-Your-Career-in-US-Healthcare-With-Sunshine-Academy.pdf',
    download: 'Launch-Your-Career-in-US-Healthcare-With-Sunshine-Academy.pdf',
  },
  {
    id: 3,
    title: '  BPO Healthcare',
    url: 'Training-Program-Outline-US-Healthcare-BPO-Industry-Readiness.pdf',
    download: 'Launch-Your-Career-in-US-Healthcare-With-Sunshine-Academy.pdf',
  },
]

const data2 = [
  {
    id: 1,
    name: 'Online Training',
    heading: 'Is for those who are at remote',
    subText: (
      <>
        {' '}
        locations ,with an intention to <br />
        provide services for all those <br />
        aspirants who want to be part <br />
        of the core department.
      </>
    ),
    img: `url('/assets/pc-image.png')`,
  },
  {
    id: 2,
    name: 'Job Training',
    heading: 'Is for those who are at remote',
    subText: (
      <>
        {' '}
        locations ,with an intention to <br />
        provide services for all those <br />
        aspirants who want to be part <br />
        of the core department.
      </>
    ),
    img: `url('/assets/pc-with-location.png')`,
  },
  {
    id: 3,
    name: 'Placements',
    heading: 'Is for those who are at remote',
    subText: (
      <>
        {' '}
        locations ,with an intention to <br />
        provide services for all those <br />
        aspirants who want to be part <br />
        of the core department.
      </>
    ),
    img: `url('/assets/job-icon.png')`,
  },
]

const Services = forwardRef((props, ref) => {
  const [isHover, setIsHover] = useState(0)

  return (
    <Box
      sx={{
        maxWidth: '1300px',
        mx: 'auto',
      }}
      className='services-bg'
      ref={ref}
    >
      <HeadingText>Our Featured Service</HeadingText>
      <SubTitle>
        Provides training and equips them with sound knowledgein all domain and
        does its best to create job opportunities.
      </SubTitle>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, md: 3 },
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 3,
        }}
      >
        {data.map((item) => {
          return (
            <a
              key={item.id}
              style={{ textDecoration: 'none' }}
              href={item.url}
              download={item.download}
            >
              <Box
                sx={{
                  width: '115px',
                  bgcolor: 'orange',
                  paddingY: { xs: 0.8, md: 2 },
                  paddingX: { xs: 0.8, md: 2 },
                  color: '#fff',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                {item.title}{' '}
              </Box>
            </a>
          )
        })}
      </Box>

      <Box
        sx={{
          marginTop: '80px',
          display: { md: 'flex' },
          justifyContent: 'center',
          gap: '31px',
          marginBottom: '50px',
        }}
      >
        {data2.map((item) => {
          return (
            <Box
              onMouseEnter={() => setIsHover(item.id)}
              onMouseOut={() => setIsHover(0)}
              className='Component1'
              sx={{
                width: { xs: '100%' },
                height: { xs: 300, md: 404 },
                position: 'relative',
              }}
            >
              <Box
                className='Subtract1'
                sx={{
                  width: 218,
                  height: 379,
                  left: 0,
                  top: 25,
                  position: 'absolute',
                }}
              />
              <Box
                sx={{
                  left: 10,
                  top: { xs: 140, md: 178 },
                  position: 'absolute',
                  color: 'black',
                  fontSize: { xs: 15, md: 20 },
                  fontFamily: 'Mitr',
                  fontWeight: '300',
                  wordWrap: 'break-word',
                }}
              >
                {item.heading}
                <br />
                {item.subText}
              </Box>
              <Box
                className='OnlineTraining'
                sx={{
                  left: 20,
                  top: 76,
                  position: 'absolute',
                  color: 'black',
                  fontSize: { xs: 28, md: 32 },
                  fontFamily: 'Mitr',
                  fontWeight: '500',
                  wordWrap: 'break-word',
                }}
              >
                {item.name}
              </Box>
              <Box
                sx={{
                  right: { xs: 0, md: 7 },
                  height: { xs: '110px', md: '154px' },
                  width: { xs: '110px', md: '154px' },
                  top: 0,
                  position: 'absolute',
                }}
              >
                <Box
                  sx={{
                    height: { xs: '100px', md: '144px' },
                    width: { xs: '100px', md: '144px' },
                    borderRadius: '100%',
                    backgroundColor:
                      isHover === item.id ? '#F43E04' : '#e6e6e6',
                    border: '4px solid white',
                  }}
                />

                <Box
                  sx={{
                    width: { xs: 60, md: 72 },
                    height: { xs: 60, md: 72 },
                    left: 25,
                    top: 36,
                    position: 'absolute',
                    backgroundImage: item.img,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
})
export default Services

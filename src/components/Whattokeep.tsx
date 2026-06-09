'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
} from '@mui/material';

const requirements = [ 
  {
    title: 'Two Directors Required',
    icon: '/images/guide.webp',
    desc: 'Your company needs at least two directors. One must be an Indian resident to meet regulatory standards.',
  },
  {
    title: 'Unique Company Name',
    icon: '/images/guide.webp',
    desc: 'Choose a distinctive name that does not conflict with existing companies or trademarks in India.',
  },
  {
    title: 'Office Address',
    icon: '/images/guide.webp',
    desc: 'Provide a valid registered office address for official government communications and legal notices.',
  },
  {
    title: 'Capital Structure',
    icon: '/images/guide.webp',
    desc: 'Determine your authorized capital based on business goals and future expansion plans.',
  },
];

export default function CompanyRegistrationRequirements() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8fbfd',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 3,
            md: '10%',
          },
        }}
      >
        {/* Heading */}

        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              fontSize: {
                xs: '2rem',
                md: '3.2rem',
              },
              lineHeight: 1.2,
            }}
          >
            Key Requirements Before
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              color: '#ed3c0a',
              fontSize: {
                xs: '2rem',
                md: '3.2rem',
              },
              mb: 2,
            }}
          >
            Company Registration
          </Typography>

          <Typography
            sx={{
              color: '#555',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            Make sure you have everything ready before starting your registration journey.
          </Typography>
        </Box>

        {/* Timeline Section */}

        <Box
          sx={{
            position: 'relative',
            maxWidth: '1300px',
            mx: 'auto',
          }}
        >
          {/* Center Line */}

          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '8px',
              bgcolor: '#ed3c0a',
              transform: 'translateX(-50%)',
              borderRadius: '50px',
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          />

          {requirements.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: {
                  xs: 'column',
                  md:
                    index % 2 === 0
                      ? 'row'
                      : 'row-reverse',
                },
                mb: 10,
                gap: 4,
              }}
            >
              {/* Content */}

              <Paper
                elevation={0}
                sx={{
                  width: {
                    xs: '100%',
                    md: '40%',
                  },
                  p: 4,
                  borderRadius: '24px',
                  backgroundColor: '#fff',
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,.08)',
                  transition: '.3s',

                  '&:hover': {
                    transform: 'translateY(-6px)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#0f4c81',
                    fontSize: {
                      xs: '1.5rem',
                      md: '2rem',
                    },
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: '#444',
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>

              {/* Circle */}

              <Box
                sx={{
                  width: {
                    xs: 120,
                    md: 150,
                  },
                  height: {
                    xs: 120,
                    md: 150,
                  },
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  border: '10px solid #ed3c0a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,.12)',
                  zIndex: 2,
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: {
                      xs: 60,
                      md: 80,
                    },
                    height: {
                      xs: 60,
                      md: 80,
                    },
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Empty Space */}

              <Box
                sx={{
                  width: {
                    xs: '100%',
                    md: '40%',
                  },
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
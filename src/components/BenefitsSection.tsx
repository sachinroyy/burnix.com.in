
'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

const benefits = [
  {
    title: 'Protect Your Personal Assets',
    image: '/images/P1.webp',
  },
  {
    title: 'Build Trust & Credibility',
    image: '/images/P2.webp',
  },
  {
    title: 'Easy Access to Funding',
    image: '/images/P3.webp',
  },
  {
    title: 'Attract Top Investors',
    image: '/images/P4.webp',
  },
  {
    title: 'Hire & Retain Talent',
    image: '/images/P5.webp',
  },
  {
    title: 'Smooth Business Transfer',
    image: '/images/P6.webp',
  },
];

export default function BenefitsSection() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#f7f7f7',
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

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 800,
              fontSize: {

                xs: '2rem',
                md: '2rem',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                color: '#ed3c0a',
                
              }}
            >
              Benefits
            </Box>{' '}
            of Company Registration
          </Typography>
        </Box>

        {/* Cards */}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2,1fr)',
              lg: 'repeat(3,1fr)',
            },
            gap: 5,
            justifyItems: 'center',
          }}
        >
          {benefits.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: '100%',
                maxWidth: 320,
                minHeight: 280,
                borderRadius: '40px',
                background: '#fff',
                boxShadow:
                  '0 8px 25px rgba(0,0,0,0.08)',
                transition: '.3s',

                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow:
                    '0 15px 35px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 4,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 140,
                    height: 140,
                    objectFit: 'contain',
                    mb: 3,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    lineHeight: 1.5,
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
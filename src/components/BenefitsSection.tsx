
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
    title: 'Limited Liability Protection to Directors personal assets',
    image: '/images/liability.webp',
  },
  {
    title: 'Better image and credibility in Market',
    image: '/images/businessman.webp',
  },
  {
    title: 'Easy to raise fund, capital and loans',
    image: '/images/funding.webp',
  },
  {
    title: 'Favorite Business structure for Investors',
    image: '/images/favo.webp',
  },
  {
    title: 'Easy to attract Employees and workers',
    image: '/images/easytoattract.webp',
  },
  {
    title: 'Quite easy to sell and deal with',
    image: '/images/sell.webp',
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

        <Box textAlign="center"   mb={8}>
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
                color: '#e85d18',
                
              }}
            >
              Benefits
            </Box>{' '}
            of Private Limited Company Registration
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
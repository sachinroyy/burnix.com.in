'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const steps = [
  {
    number: '01',
    image: '/images/c1.webp',
    title: 'Complete Application',
  },
  {
    number: '02',
    image: '/images/c2.webp',
    title: 'Upload Documents',
  },
  {
    number: '03',
    image: '/images/c3.webp',
    title: 'Make Payment',
  },
  {
    number: '04',
    image: '/images/c4.webp',
    title: 'Receive Certificate',
  },
];

export default function RegistrationSteps() {
  return (
    <Box
      sx={{
        py: 10,
        background: '#f5f8fb',
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

       <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    mb: 10,
    width: '100%',
  }}
>
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: {
        xs: '2rem',
        md: '3.2rem',
      },
      lineHeight: 1.2,
    }}
  >
    Register Your Company In
  </Typography>

  <Typography
    sx={{
      fontWeight: 800,
      color: '#ed3c0a',
      fontSize: {
        xs: '2rem',
        md: '3.8rem',
      },
    }}
  >
    4 Simple Steps
  </Typography>
</Box>

        {/* Desktop Layout */}

        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 3,
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Box sx={{ textAlign: 'center' }}>
                {/* Number Circle */}

                <Box
                  sx={{
                    
                    alignItems: 'center', 
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    background: '#ed3c0a',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                   
                    mx: 'auto',
                    mb: 4,
                  }}
                >
                  {step.number}
                </Box>

                {/* Card */}

                <Card
                  sx={{
                    width: 220,
                    minHeight: 260,
                    borderRadius: 4,
                    boxShadow:
                      '0 12px 25px rgba(0,0,0,.15)',
                    transition: '.3s',
                    '&:hover': {
                      transform:
                        'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={step.image}
                      alt={step.title}
                      sx={{
                        
                        width: 100,
                        height: 100,
                        objectFit: 'contain',
                        mb: 2,
                        display: 'block',
                        mx: 'auto',
                      }}
                    />

                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '1.3rem',
                      }}
                    >
                      {step.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              {/* Arrow */}

              {index !== steps.length - 1 && (
                <Box
                  sx={{
                    mt: 3,
                    color: '#ed3c0a',
                    fontSize: '4rem',
                    fontWeight: 700,
                  }}
                >
                  →
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* Mobile Layout */}

        <Grid
          container
          spacing={4}
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
          }}
        >
          {steps.map((step) => (
            <Grid
              key={step.number}
              size={{ xs: 12 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: '#0f4c81',
                    color: '#fff',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {step.number}
                </Box>

                <Card
                  sx={{
                    maxWidth: 300,
                    mx: 'auto',
                    borderRadius: 4,
                    boxShadow:
                      '0 12px 25px rgba(0,0,0,.15)',
                  }}
                >
                  <CardContent>
                    <Box
                      component="img"
                      src={step.image}
                      alt={step.title}
                      sx={{
                        width: 90,
                        height: 90,
                        objectFit: 'contain',
                        mb: 2,
                      }}
                    />

                    <Typography
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {step.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Feature Bar */}

        <Box
          sx={{
            mt: 10,
            p: 4,
            borderRadius: 4,
            background: '#fff',
            boxShadow:
              '0 10px 30px rgba(0,0,0,.08)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            ✅ 100% Legal & Compliant
          </Typography>

          <Typography sx={{ fontWeight: 600 }}>
            ⚡ Quick & Hassle-Free Process  
          </Typography>

          <Typography sx={{ fontWeight: 600 }}>
            🎧 Expert Guidance at Every Step
          </Typography>

          <Typography sx={{ fontWeight: 600 }}>
            🔒 Secure & Confidential
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
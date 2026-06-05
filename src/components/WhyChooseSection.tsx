'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

const features = [
  {
    title: '5 STAR RATING',
    image: '/images/star.webp',
  },
  {
    title: '300+ SERVICES',
    image: '/images/services.webp',
  },
  {
    title: 'REASONABLE PRICE',
    image: '/images/reasonable.webp',
  },
  {
    title: 'TURN AROUND TIME',
    image: '/images/time.webp',
  },
];

const partners = [
  {
    name: 'Adobe',
    logo: '/images/adobe.webp',
  },
  {
    name: 'Freshworks',
    logo: '/images/freshworks.webp',
  },
  {
    name: 'GreytHR',
    logo: '/images/grey.webp',
  },
  {
    name: 'Zoho',
    logo: '/images/zoho.webp',
  },
  {
    name: 'WeWork',
    logo: '/images/wework.webp',
  },
];

export default function WhyChooseBurnix() {
  return (
    <Box
      sx={{
        backgroundColor: '#f7f8fa',
        py: { xs: 6, md: 10 },
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
        {/* ================= HEADING ================= */}

        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: '2rem',
                md: '3rem',
              },
              color: '#0f4c81',
            }}
          >
            Why To Choose{' '}
            <Box
              component="span"
              sx={{
                color: '#e85d18',
              }}
            >
              Burnix?
            </Box>
          </Typography>
        </Box>

        {/* ================= FEATURE CARDS ================= */}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2,1fr)',
              lg: 'repeat(4,1fr)',
            },
            gap: 4,
            justifyItems: 'center',
            mb: 10,
          }}
        >
          {features.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: '100%',
                maxWidth: 270,
                height: 250,
                borderRadius: '28px',
                backgroundColor: '#fff',
                border: '1px solid #ececec',
                boxShadow:
                  '0 8px 25px rgba(0,0,0,0.10)',
                transition: 'all .3s ease',

                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow:
                    '0 18px 35px rgba(0,0,0,0.15)',
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
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 140,
                    height: 120,
                    objectFit: 'contain',
                    mb: 2,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 800,
                    color: '#111',
                    fontSize: {
                      xs: '1rem',
                      md: '1.15rem',
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* ================= DIVIDER ================= */}

        <Box
          sx={{
            width: '100%',
            height: '2px',
            background:
              'linear-gradient(to right,#d8d8ff,#cfcfff,#d8d8ff)',
            mb: 8,
          }}
        />

        {/* ================= PARTNERS HEADING ================= */}

        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: '2rem',
                md: '3rem',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                color: 'black',
              }}
            >
              Our Trusted
            </Box>{' '}
            <Box
              component="span"
              sx={{
                color: '#e85d18',
              }}
            >
              Partners
            </Box>
          </Typography>
        </Box>

        {/* ================= PARTNER LOGOS ================= */}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2,1fr)',
              sm: 'repeat(3,1fr)',
              md: 'repeat(5,1fr)',
            },
            gap: 4,
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                transition: '.3s',

                '&:hover': {
                  transform: 'scale(1.08)',
                },
              }}
            >
              <Box
                component="img"
                src={partner.logo}
                alt={partner.name}
                sx={{
                  maxWidth: 160,
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(10%)',
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
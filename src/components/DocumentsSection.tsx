'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

const documents = [
  {
    title: 'PAN CARD',
    image: '/images/b1.webp',
  },
  {
    title: 'PHOTOGRAPH',
    image: '/images/b2.webp',
  },
  {
    title: 'IDENTITY PROOF',
    image: '/images/b3.webp',
  },
  {
    title: "DIRECTOR'S ADDRESS PROOF",
    image: '/images/b4.webp',
  },
  {
    title: 'BUSINESS ADDRESS PROOF',
    image: '/images/b5.webp',
  },
  {
    title: 'NOTE',
    image: '/images/b6.webp',
  },
];

export default function DocumentsRequired() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#f8f9fb',
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
            textAlign: 'center',
            mb: { xs: 6, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1.2,
              fontSize: {
                xs: '2rem',
                md: '3rem',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                color: '#ed3c0a',
              }}
            >
              Documents
            </Box>{' '}
            <Box
              component="span"
              sx={{
                color: '#051932',
              }}
            >
              Required for Registration
            </Box>
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
            gap: {
              xs: 3,
              md: 5,
            },
            justifyItems: 'center',
          }}
        >
          {documents.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: '100%',
                maxWidth: '320px',
                height: {
                  xs: 260,
                  md: 290,
                },
                borderRadius: '40px',
                backgroundColor: '#fff',
                boxShadow:
                  '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #eeeeee',
                transition: 'all .3s ease',

                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow:
                    '0 20px 40px rgba(0,0,0,0.15)',
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
                    width: {
                      xs: 120,
                      md: 160,
                    },
                    height: {
                      xs: 100,
                      md: 130,
                    },
                    objectFit: 'contain',
                    mb: 3,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 800,
                    color: '#111',
                    textTransform: 'uppercase',
                    lineHeight: 1.4,
                    fontSize: {
                      xs: '1rem',
                      md: '1.35rem',
                    },
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
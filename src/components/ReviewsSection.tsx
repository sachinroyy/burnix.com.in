'use client';

import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
  {
    name: 'Elrafact Technology Solutions',
    review:
      'Team burnix helped our company incorporated into MCA. The team was very professional and cooperative.',
    logo: 'E',
  },
  {
    name: 'TechNova Pvt Ltd',
    review:
      'Amazing experience. Fast registration process and excellent support team.',
    logo: 'T',
  },
  {
    name: 'Growify Solutions',
    review:
      'Very smooth incorporation process. Highly recommended for startups.',
    logo: 'G',
  },
  {
    name: 'NextGen Labs',
    review:
      'Professional service and timely response throughout the registration journey.',
    logo: 'N',
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: 10,
        background:
          'linear-gradient(180deg,#f7fbff 0%,#edf6ff 100%)',
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '40% 60%',
            },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left Side */}

          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1.4,
                fontSize: {
                  xs: '2rem',
                  md: '3rem',
                },
              }}
            >
              
              <Box
                component="span"
                sx={{
                  color: '#e85d18',
                }}
              >
                Burnix
              </Box>{' '}
              is used by tens of thousands of
              founders to start, manage and grow
              their business
            </Typography>

          <Typography
  sx={{
    mt: 3,
    fontWeight: 700,
    color: '#0f4c81',
    fontSize: {
      xs: '1.8rem',
      md: '2.5rem',
    },
  }}
>
  50,000+
  <Box
    component="span"
    sx={{
      color: '#e85d18',
      ml: 1,
    }}
  >
    Happy Customers
  </Box>
</Typography>

            <Typography
              sx={{
                mt: 4,
                color: '#555',
                lineHeight: 1.8,
              }}
            >
              We are one of India's highest-rated
              service providers helping founders
              launch and scale businesses.
            </Typography>
          </Box>

          {/* Right Side */}

          <Box
            sx={{
              position: 'relative',
            }}
          >
            {/* Floating Avatars */}

            <Avatar
              src="/images/user1.jpg"
              sx={{
                position: 'absolute',
                top: -40,
                right: 180,
                width: 70,
                height: 70,
                border: '3px solid #f59e0b',
                zIndex: 2,
              }}
            />

            <Avatar
              src="/images/user2.jpg"
              sx={{
                position: 'absolute',
                top: 80,
                right: -30,
                width: 70,
                height: 70,
                border: '3px solid #f59e0b',
                zIndex: 2,
              }}
            />

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: '.prev-btn',
                nextEl: '.next-btn',
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      p: 5,
                      borderRadius: '30px',

                      background:
                        'rgba(255,255,255,0.35)',

                      backdropFilter:
                        'blur(25px)',

                      border:
                        '1px solid rgba(255,255,255,0.5)',

                      boxShadow:
                        '0 10px 40px rgba(0,0,0,.08)',

                      minHeight: 420,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#999',
                        mb: 2,
                      }}
                    >
                      Posted on
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '3rem',
                        fontWeight: 700,
                        color: '#4285F4',
                        mb: 4,
                      }}
                    >
                      Google
                    </Typography>

                    <Typography
                      sx={{
                        color: '#444',
                        lineHeight: 2,
                        fontSize: '1.05rem',
                      }}
                    >
                      {item.review}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mt: 5,
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: '#5C6BC0',
                          width: 60,
                          height: 60,
                        }}
                      >
                        {item.logo}
                      </Avatar>

                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.6rem',
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 2,
                mt: 3,
              }}
            >
              <IconButton
                className="prev-btn"
                sx={{
                  bgcolor: '#f59e0b',
                  color: '#fff',
                }}
              >
                <ChevronLeft />
              </IconButton>

              <IconButton
                className="next-btn"
                sx={{
                  bgcolor: '#f59e0b',
                  color: '#fff',
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
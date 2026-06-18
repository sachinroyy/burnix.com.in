
'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
  Skeleton,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import 'swiper/css';
import 'swiper/css/navigation';

interface Review {
  _id?: string;
  name: string;
  review: string;
  content?: string;
  logo?: string;
  imageUrl?: string;
  designation?: string;
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        console.log('Testimonials API:', data);
        if (Array.isArray(data)) {
          setReviews(data);
        } else if (Array.isArray(data?.data)) {
          setReviews(data.data);
        } else {
          setReviews([]);
        }
      })
      .catch((err) => {
        console.error('Testimonials Error:', err);
        setReviews([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        background: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: '8%',
            xl: '10%',
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr',
              lg: '40% 60%',
            },
            gap: { xs: 4, sm: 5, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* ── Left Side ── */}
          <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 1.4,
                fontSize: {
                  xs: '1.6rem',
                  sm: '2rem',
                  md: '2.4rem',
                  lg: '2.8rem',
                  xl: '3rem',
                },
              }}
            >
              <Box component="span" sx={{ color: '#ed3c0a' }}>
                Burnix
              </Box>{' '}
              is used by tens of thousands of founders to start, manage and
              grow their business
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2, md: 3 },
                fontWeight: 700,
                color: '#0f4c81',
                fontSize: {
                  xs: '1.5rem',
                  sm: '1.8rem',
                  md: '2rem',
                  lg: '2.5rem',
                },
              }}
            >
              50,000+
              <Box component="span" sx={{ color: '#ed3c0a', ml: 1 }}>
                Happy Customers
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2, md: 4 },
                color: '#555',
                lineHeight: 1.8,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                maxWidth: { xs: '100%', md: '480px' },
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              We are one of India highest-rated service providers helping
              founders launch and scale businesses.
            </Typography>
          </Box>

          {/* ── Right Side ── */}
          <Box
            sx={{
              position: 'relative',
              /* extra top padding on desktop so the floating avatars don't clip */
              pt: { xs: 0, lg: 6 },
            }}
          >
            {/* Decorative floating avatars – hidden on small screens to avoid overflow */}
            <Avatar
              sx={{
                display: { xs: 'none', lg: 'flex' },
                position: 'absolute',
                top: -20,
                right: { lg: 160, xl: 180 },
                width: 70,
                height: 70,
                border: '3px solid #f59e0b',
                zIndex: 2,
              }}
            />
            <Avatar
              sx={{
                display: { xs: 'none', lg: 'flex' },
                position: 'absolute',
                top: 80,
                right: { lg: -20, xl: -30 },
                width: 70,
                height: 70,
                border: '3px solid #f59e0b',
                zIndex: 2,
              }}
            />

            {/* ── Slider ── */}
            {loading ? (
              <Box
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  borderRadius: '24px',
                  background: 'rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(25px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 10px 40px rgba(0,0,0,.08)',
                  minHeight: { xs: 280, sm: 340, md: 380, lg: 420 },
                }}
              >
                <Skeleton width="40%" height={24} />
                <Skeleton width="30%" height={56} sx={{ mt: 1 }} />
                <Skeleton width="100%" height={20} sx={{ mt: 3 }} />
                <Skeleton width="95%" height={20} />
                <Skeleton width="80%" height={20} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4 }}>
                  <Skeleton variant="circular" width={60} height={60} />
                  <Box>
                    <Skeleton width={120} height={28} />
                    <Skeleton width={80} height={18} />
                  </Box>
                </Box>
              </Box>
            ) : (
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: '.prev-btn',
                  nextEl: '.next-btn',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={reviews.length > 1}
              >
                {reviews.map((item, index) => (
                  <SwiperSlide key={item._id || index}>
                    <Box
                      sx={{
                        p: { xs: 3, sm: 4, md: 5 },
                        borderRadius: { xs: '20px', md: '30px' },
                        background: item.imageUrl
                          ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.imageUrl})`
                          : 'rgba(255,255,255,0.35)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backdropFilter: item.imageUrl ? 'none' : 'blur(25px)',
                        border: item.imageUrl
                          ? '1px solid rgba(255,255,255,0.3)'
                          : '1px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 10px 40px rgba(0,0,0,.08)',
                        minHeight: { xs: 280, sm: 340, md: 380, lg: 420 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: item.imageUrl ? '#fff' : '#999',
                            mb: 1,
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                          }}
                        >
                          Posted on
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: {
                              xs: '2rem',
                              sm: '2.4rem',
                              md: '3rem',
                            },
                            fontWeight: 700,
                            color: item.imageUrl ? '#fff' : '#4285F4',
                            mb: { xs: 2, md: 4 },
                          }}
                        >
                          Google
                        </Typography>

                        <Typography
                          sx={{
                            color: item.imageUrl ? '#fff' : '#444',
                            lineHeight: { xs: 1.7, md: 2 },
                            fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1.05rem' },
                            display: '-webkit-box',
                            WebkitLineClamp: { xs: 5, sm: 6, md: 'unset' },
                            WebkitBoxOrient: 'vertical',
                            overflow: { xs: 'hidden', md: 'visible' },
                          }}
                        >
                          {item.review || item.content}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mt: { xs: 3, md: 5 },
                        }}
                      >
                        <Avatar
                          src={item.imageUrl}
                          sx={{
                            bgcolor: '#5C6BC0',
                            width: { xs: 48, sm: 56, md: 60 },
                            height: { xs: 48, sm: 56, md: 60 },
                            border: item.imageUrl ? '2px solid #fff' : 'none',
                            flexShrink: 0,
                          }}
                        >
                          {!item.imageUrl &&
                            (item.logo || item.name?.charAt(0)?.toUpperCase())}
                        </Avatar>

                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.6rem' },
                              color: item.imageUrl ? '#fff' : 'inherit',
                            }}
                          >
                            {item.name}
                          </Typography>
                          {item.designation && (
                            <Typography
                              sx={{
                                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                                color: item.imageUrl ? '#ddd' : '#666',
                              }}
                            >
                              {item.designation}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {/* Navigation buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                gap: 2,
                mt: { xs: 2, md: 3 },
              }}
            >
              <IconButton
                className="prev-btn"
                aria-label="Previous testimonial"
                sx={{
                  bgcolor: '#f59e0b',
                  color: '#fff',
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 },
                  '&:hover': { bgcolor: '#d97706' },
                  '&:focus-visible': {
                    outline: '2px solid #0f4c81',
                    outlineOffset: 2,
                  },
                }}
              >
                <ChevronLeft sx={{ fontSize: { xs: 22, md: 28 } }} />
              </IconButton>

              <IconButton
                className="next-btn"
                aria-label="Next testimonial"
                sx={{
                  bgcolor: '#f59e0b',
                  color: '#fff',
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 },
                  '&:hover': { bgcolor: '#d97706' },
                  '&:focus-visible': {
                    outline: '2px solid #0f4c81',
                    outlineOffset: 2,
                  },
                }}
              >
                <ChevronRight sx={{ fontSize: { xs: 22, md: 28 } }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
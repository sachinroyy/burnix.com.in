'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `New Consultation Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
    const whatsappNumber = '9105907227';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      sx={{
        px: { xs: '4%', sm: '6%', md: '10%' },
        minHeight: '100vh',
        backgroundImage: 'url("/images/herosection.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        pt: { xs: '100px', sm: '102px', md: 4, lg: 6 },
        pb: { xs: 6, md: 0 },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid2
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ minHeight: '100vh', alignItems: 'center' }}
        >
          {/* ── LEFT: Heading + CTA ── */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                position: 'relative',
                zIndex: 3,
                mr: { md: '-15%' },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: '2rem',
                    sm: '2.6rem',
                    md: '3.2rem',
                    lg: '4rem',
                    xl: '5rem',
                  },
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                Elevate
                <br />
                Your Business
                <br />
                Growth
              </Typography>

              <Typography
                sx={{
                  mt: { xs: 2, md: 3 },
                  color: '#666',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  maxWidth: '500px',
                  mx: { xs: 'auto', md: 0 },
                  lineHeight: 1.7,
                }}
              >
                We build Websites, Mobile Apps, ERP Systems, CRM Solutions,
                E-Commerce Platforms and complete Digital Transformation
                services for modern businesses.
              </Typography>

              <Box
                sx={{
                  mt: { xs: 3, md: 4 },
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#ed3c0a',
                    color: '#051932',
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: 3,
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '&:hover': { bgcolor: '#c9330a' },
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    borderRadius: 3,
                    fontSize: { xs: '0.85rem', md: '1rem' },
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Box>
          </Grid2>

          {/* ── CENTER: Hero Image ── hidden on mobile to avoid clutter ── */}
          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/images/hero.webp"
                alt="Hero illustration"
                sx={{
                  width: { md: '110%', lg: '290%' },
                  maxWidth: '1250px',
                  height: 'auto',
                  objectFit: 'contain',
                  pr: { md: '25%' },
                }}
              />
            </Box>
          </Grid2>

          {/* ── RIGHT: Consultation Form ── */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                position: 'relative',
                zIndex: 3,
                p: { xs: 3, sm: 4 },
                maxWidth: { xs: '100%', sm: 430 },
                mx: 'auto',
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  textAlign: 'center',
                  fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
                }}
              >
                Free Consultation
              </Typography>

              <Typography
                sx={{
                  textAlign: 'center',
                  color: '#666',
                  mb: 3,
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                }}
              >
                Let&apos;s discuss your project
              </Typography>

              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                size="small"
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                size="small"
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                size="small"
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  py: { xs: 1.4, md: 1.7 },
                  bgcolor: '#ed3c0a',
                  color: '#051932',
                  fontWeight: 700,
                  borderRadius: 3,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': { bgcolor: '#c9330a' },
                }}
              >
                Submit
              </Button>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
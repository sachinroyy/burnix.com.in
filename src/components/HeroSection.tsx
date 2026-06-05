
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
import Grid from '@mui/material/Grid';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
  <Box
  sx={{
    px: '10%',
    minHeight: '100vh',
    backgroundImage: 'url("/images/herosection.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    pt: { xs: 8, md: 12 },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      
    },
  }}
>
    
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: '100vh',
          }}
        >
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 3,
                mr: { md: '-15%' },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3rem',
                    md: '4rem',
                    lg: '5rem',
                  },
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Transform
                <br />
                Your Digital
                <br />
                Presence
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  color: '#666',
                  fontSize: '1rem',
                  maxWidth: '500px',
                  mx: {
                    xs: 'auto',
                    md: 0,
                  },
                }}
              >
                We build Websites, Mobile Apps,
                ERP Systems, CRM Solutions,
                E-Commerce Platforms and
                complete Digital Transformation
                services for modern businesses.
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#e85d18',
                    color: '#000',
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: 3,
                    '&:hover': {
                      bgcolor: '#e85d18',
                    },
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* CENTER IMAGE */}
          <Grid size={{ xs: 12, md: 4 }}>
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
                alt="Hero"
                
                sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '120%',
                    lg: '290%',
                  },
                  maxWidth: '1250px',
                  height: 'auto',
                  objectFit: 'contain',
                  pr: { md: '25%' },
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT FORM */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                position: 'relative',
                zIndex: 3,
                p: 4,
                maxWidth: 430,
                mx: 'auto',
                borderRadius: '24px',
                background:
                  'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(20px)',
                border:
                  '1px solid rgba(0,0,0,0.08)',
                boxShadow:
                  '0 20px 60px rgba(0,0,0,0.08)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  textAlign: 'center',
                }}
              >
                Free Consultation
              </Typography>

              <Typography
                sx={{
                  textAlign: 'center',
                  color: '#666',
                  mb: 3,
                }}
              >
                Let's discuss your project
              </Typography>

              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.7,
                  bgcolor: '#e85d18',
                  color: '#000',
                  fontWeight: 700,
                  borderRadius: 3,
                  '&:hover': {
                    bgcolor: '#e85d18',
                  },
                }}
              >
                Submit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
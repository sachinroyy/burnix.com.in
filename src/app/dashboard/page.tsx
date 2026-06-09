'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';
import ArticleIcon from '@mui/icons-material/Article';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 6,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#051932' }}>
            Dashboard
          </Typography>
          <Button
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              borderColor: '#e85d18',
              color: '#e85d18',
              '&:hover': {
                borderColor: '#d44d0f',
                backgroundColor: 'rgba(232, 93, 24, 0.1)',
              },
            }}
          >
            Logout
          </Button>
        </Box>

        {/* Welcome Message */}
        <Card sx={{ mb: 6, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#051932', mb: 2 }}>
              Welcome back!
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Manage your blogs and testimonials from here. Click on the buttons below to get started.
            </Typography>
          </CardContent>
        </Card>

        {/* Action Cards */}
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(232, 93, 24, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <ArticleIcon sx={{ fontSize: 40, color: '#e85d18' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#051932', mb: 2 }}>
                  Blog Management
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                  Create, edit, update, and delete blog posts with image support via Cloudinary.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => router.push('/dashboard/blog')}
                  sx={{
                    backgroundColor: '#e85d18',
                    color: 'white',
                    fontWeight: 600,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#d44d0f',
                    },
                  }}
                >
                  Manage Blogs
                </Button>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(232, 93, 24, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <RateReviewIcon sx={{ fontSize: 40, color: '#e85d18' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#051932', mb: 2 }}>
                  Testimonial Management
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                  Create, edit, update, and delete testimonials with image support via Cloudinary.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => router.push('/dashboard/testimonial')}
                  sx={{
                    backgroundColor: '#e85d18',
                    color: 'white',
                    fontWeight: 600,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#d44d0f',
                    },
                  }}
                >
                  Manage Testimonials
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

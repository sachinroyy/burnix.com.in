'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Alert,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Hardcoded credentials
    if (formData.email === 'sachincy8899@gmail.com' && formData.password === '11111111') {
      // Store authentication in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', formData.email);
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 200px)',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        py: 6,
      }}
    >
      <Container>
        <Grid2 container spacing={4} sx={{ justifyContent: 'center' }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
            <Card sx={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
              <CardContent sx={{ p: 4 }}>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: '#f5a623',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <LockIcon sx={{ color: 'white', fontSize: 32 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a3c5e', mb: 1 }}>
                    Login
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Sign in to your account to access your dashboard
                  </Typography>
                </Box>

                {/* Error Alert */}
                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}

                {/* Form */}
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="you@example.com"
                    />

                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Enter your password"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: '#f5a623',
                        color: '#1a3c5e',
                        fontWeight: 700,
                        py: 1.5,
                        fontSize: '1rem',
                        '&:hover': {
                          backgroundColor: '#e09515',
                        },
                      }}
                    >
                      Sign In
                    </Button>
                  </Stack>
                </Box>

                {/* Footer Links */}
                <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, color: '#666' }}>
                  Dont have an account?{' '}
                  <Box
                    component="a"
                    href="#"
                    sx={{
                      color: '#f5a623',
                      textDecoration: 'none',
                      fontWeight: 600,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Sign up here
                  </Box>
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, color: '#666' }}>
                  <Box
                    component="a"
                    href="#"
                    sx={{
                      color: '#1a3c5e',
                      textDecoration: 'none',
                      '&:hover': { color: '#f5a623' },
                    }}
                  >
                    Forgot your password?
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

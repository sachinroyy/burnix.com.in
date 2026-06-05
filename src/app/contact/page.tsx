'use client';

import React, { useState } from 'react';
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
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a3c5e 0%, #2c5aa0 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Typography variant="h1" sx={{ mb: 2, fontWeight: 700 }}>
            Get in Touch
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300, fontSize: '1.1rem' }}>
            We're here to help and answer any questions you might have
          </Typography>
        </Container>
      </Box>

      {/* Contact Information Cards */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ h: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ mb: 2, color: '#f5a623' }}>
                    <PhoneIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Phone
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    +91 (XXX) XXX-XXXX
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ h: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ mb: 2, color: '#f5a623' }}>
                    <EmailIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    contact@legalservices.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ h: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ mb: 2, color: '#f5a623' }}>
                    <LocationOnIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Office
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    123 Business Street, City, Country 00000
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 8 }} offset={{ xs: 0, md: 2 }}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: '#1a3c5e' }}>
                    Send us a Message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />

                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />

                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />

                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />

                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                      />

                      <Button
                        type="submit"
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
                        Send Message
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
}

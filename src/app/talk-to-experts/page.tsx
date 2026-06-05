'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

export default function TalkToExpertsPage() {
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
            Talk to Our Experts
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300, fontSize: '1.1rem' }}>
            Get professional legal advice from our experienced team
          </Typography>
        </Container>
      </Box>

      {/* Expert Cards */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography
            variant="h3"
            sx={{ mb: 4, fontWeight: 700, color: '#1a3c5e', textAlign: 'center' }}
          >
            Our Legal Experts
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ mb: 2, color: '#f5a623' }}>
                    <PersonIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Corporate Law
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Expert guidance on company formation, compliance, and corporate governance
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ mb: 2, color: '#f5a623' }}>
                    <PersonIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    Taxation
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Comprehensive tax planning, filing, and advisory services
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ mb: 2, color: '#f5a623' }}>
                    <PersonIcon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    IPR Services
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Protect your intellectual property with trademark and patent registration
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* Contact Options */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Typography
            variant="h3"
            sx={{ mb: 4, fontWeight: 700, color: '#1a3c5e', textAlign: 'center' }}
          >
            Get in Touch
          </Typography>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 8 }} offset={{ xs: 0, md: 2 }}>
              <Stack spacing={4}>
                <Card>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ color: '#f5a623' }}>
                      <PhoneIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Call Us
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        +91 (XXX) XXX-XXXX
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ color: '#f5a623' }}>
                      <EmailIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Email Us
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        experts@legalservices.com
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ color: '#f5a623' }}>
                      <AccessTimeIcon sx={{ fontSize: 40 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Working Hours
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    sx={{
                      backgroundColor: '#f5a623',
                      color: 'white',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#e0951c',
                      },
                    }}
                  >
                    Schedule a Consultation
                  </Button>
                </Box>
              </Stack>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
}

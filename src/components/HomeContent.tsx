'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Rating,
  Stack,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const services = [
  {
    icon: BusinessIcon,
    title: 'Company Registration',
    description: 'Register your business legally and efficiently with our expert guidance.',
  },
  {
    icon: GavelIcon,
    title: 'Legal Compliance',
    description: 'Stay compliant with all regulatory requirements and statutory filings.',
  },
  {
    icon: AccountBalanceIcon,
    title: 'Taxation Services',
    description: 'Optimize your tax strategy and ensure timely filing of all returns.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Annual Audit',
    description: 'Get comprehensive audit services for your financial statements.',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Initial Consultation',
    description: 'We analyze your business needs and provide tailored solutions.',
  },
  {
    number: '2',
    title: 'Documentation',
    description: 'Prepare all necessary documents and paperwork.',
  },
  {
    number: '3',
    title: 'Filing & Processing',
    description: 'Submit applications and manage the entire process.',
  },
  {
    number: '4',
    title: 'Follow-up',
    description: 'Ensure completion and provide ongoing support.',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Tech Innovations Ltd',
    text: 'Excellent service and professional approach. They made company registration seamless.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Creative Solutions',
    text: 'Highly knowledgeable team. Great support throughout the compliance process.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Trade Ventures',
    text: 'Best value for money. Recommended to all my business friends.',
    rating: 5,
  },
];

export default function HomeContent() {
  return (
    <>
      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: '#1a3c5e',
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Comprehensive solutions for all your business needs
          </Typography>

          <Grid2 container spacing={3}>
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Card sx={{ h: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Icon sx={{ fontSize: 48, color: '#f5a623' }} />
                      </Box>
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              );
            })}
          </Grid2>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: '#1a3c5e',
            }}
          >
            Our Process
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Simple and transparent process from start to finish
          </Typography>

          <Grid2 container spacing={3}>
            {processSteps.map((step, idx) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    border: '2px solid #f5a623',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: '#f5a623',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {step.number}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: '#1a3c5e',
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#666',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Real feedback from satisfied customers
          </Typography>

          <Grid2 container spacing={3}>
            {testimonials.map((testimonial, idx) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={idx}>
                <Card>
                  <CardContent>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                      {testimonial.text}
                    </Typography>
                    <Stack sx={{ direction: 'row', spacing: 2, alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: '#f5a623' }}>
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: 'linear-gradient(135deg, #1a3c5e 0%, #2c5aa0 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Ready to Transform Your Business?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Let our experts guide you through every step of your business journey
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f5a623',
              color: '#1a3c5e',
              fontWeight: 700,
              py: 1.5,
              px: 4,
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#e09515',
              },
            }}
          >
            Get Started Today
          </Button>
        </Container>
      </Box>
    </>
  );
}

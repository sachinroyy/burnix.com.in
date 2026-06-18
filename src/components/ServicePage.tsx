'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';

interface ServicePageProps {
  title?: string;
  description?: string;
  sections?: Array<{
    title: string;
    content: string;
  }>;
}

interface Service {
  title: string;
  subtitle?: string;
  description?: string;
  content?: string;
}

const defaultServices: Service[] = [
  {
    title: 'LLP',
    subtitle: 'Registration',
    description: 'Register your LLP easily with us at an affordable cost',
  },
  {
    title: 'OPC',
    subtitle: 'Registration',
    description: 'Take the first step towards entrepreneurial success with OPC registration',
  },
  {
    title: 'GST Registration',
    subtitle: 'Registration',
    description: 'Stay tax compliant and boost your business with GST registration',
  },
  {
    title: 'Trademark',
    subtitle: 'Registration',
    description: 'Get your brand registered as a Trademark with IPIndia.',
  },
  {
    title: 'Annual Compliance',
    subtitle: 'For Private Company',
    description: 'Protect your company with our reliable annual compliance services at a budget-friendly cost',
  },
  {
    title: 'FSSAI',
    subtitle: 'Registration',
    description: 'Secure your food business future with our comprehensive FSSAI registration solutions',
  },
];

export default function ServicesSection({ title, description, sections }: ServicePageProps) {
  const services: Service[] = sections || defaultServices;

  return (
    <Box
      sx={{
        px: { xs: '4%', sm: '6%', md: '8%' },
        py: { xs: 6, md: 8 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            <Box component="span" sx={{ color: '#051932' }}>
              {title ? title.split(' ').slice(0, -1).join(' ') : 'Our'}
            </Box>{' '}
            <Box component="span" sx={{ color: '#ed3c0a' }}>
              {title ? title.split(' ').slice(-1) : 'Services'}
            </Box>
          </Typography>
          {description && (
            <Typography
              sx={{
                mt: 2,
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {/* Cards Grid */}
        <Grid2
          container
          spacing={4}
          sx={{ justifyContent: 'center' }}
        >
          {services.map((service, index) => (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '360px',
                  minHeight: '340px',
                  borderRadius: 3,
                  boxShadow: '0px 8px 25px rgba(0,0,0,0.12)',
                  transition: '0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 15px 35px rgba(0,0,0,0.18)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        mb: 1,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {service.subtitle && (
                      <Typography
                        sx={{
                          textAlign: 'center',
                          fontWeight: 600,
                          color: 'text.secondary',
                          mb: 2,
                        }}
                      >
                        {service.subtitle}
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.9rem', md: '0.95rem' },
                      }}
                    >
                      {service.content || service.description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: '#ed3c0a',
                        borderRadius: 2,
                        fontWeight: 700,
                        py: 1.4,
                        textTransform: 'uppercase',
                        '&:hover': {
                          backgroundColor: '#c9330a',
                        },
                      }}
                    >
                      More Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
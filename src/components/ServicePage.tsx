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
    description:
      'Register your LLP easily with us at an affordable cost',
  },
  {
    title: 'OPC',
    subtitle: 'Registration',
    description:
      'Take the first step towards entrepreneurial success with OPC registration',
  },
  {
    title: 'GST Registration',
    subtitle: 'Registration',
    description:
      'Stay tax compliant and boost your business with GST registration',
  },
  {
    title: 'Trademark',
    subtitle: 'Registration',
    description:
      'Get your brand registered as a Trademark with IPIndia.',
  },
  {
    title: 'Annual Compliance',
    subtitle: 'For Private Company',
    description:
      'Protect your company with our reliable annual compliance services at a budget-friendly cost',
  },
  {
    title: 'FSSAI',
    subtitle: 'Registration',
    description:
      'Secure your food business future with our comprehensive FSSAI registration solutions',
  },
];

export default function ServicesSection({ title, description, sections }: ServicePageProps) {
  const services: Service[] = sections || defaultServices;
  return (
    <Box
      sx={{
        px: '8%',
       
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        <Box
                 sx={{
                   textAlign: 'center',
                   mb: 8,
                 }}
               >
                 <Typography
                   sx={{
                     fontWeight: 800,
                     fontSize: {
                       xs: '2rem',
                       md: '3rem',
                     },
                   }}
                 >
                   <Box
                     component="span"
                     sx={{
                       color: '#051932',
                     }}
                   >
                     Our    
                   </Box>{' '}
                   <Box
                     component="span"
                     sx={{
                       color: '#ed3c0a',
                     }}
                   >
                     Services
                   </Box>
                 </Typography>
               </Box>

        <Grid2 container spacing={4}>
          {services.map((service, index) => (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ display: 'flex' }}
            >
              <Card
                sx={{
                  width: '270px',
                  height: '300px',
                  borderRadius: 3,
                  boxShadow:
                    '0px 8px 25px rgba(0,0,0,0.12)',
                  transition: '0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow:
                      '0px 15px 35px rgba(0,0,0,0.18)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        mb: 2,
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
                          mb: 3,
                        }}
                      >
                        {service.subtitle}
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        minHeight: 90,
                        lineHeight: 1.8,
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
                        py: 1.2,
                        textTransform: 'uppercase',
                        '&:hover': {
                          backgroundColor: '#ed3c0a',
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
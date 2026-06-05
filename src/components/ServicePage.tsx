'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';

const services = [
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

export default function ServicesSection() {
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
                       color: 'black',
                     }}
                   >
                     Our    
                   </Box>{' '}
                   <Box
                     component="span"
                     sx={{
                       color: '#e85d18',
                     }}
                   >
                     Services
                   </Box>
                 </Typography>
               </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              display="flex"
            >
              <Card
                sx={{
                  width: '350px',
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
                      variant="h5"
                      align="center"
                      fontWeight={700}
                      gutterBottom
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      align="center"
                      fontWeight={600}
                      color="text.secondary"
                      mb={3}
                    >
                      {service.subtitle}
                    </Typography>

                    <Typography
                      align="center"
                      color="text.secondary"
                      sx={{
                        minHeight: 90,
                        lineHeight: 1.8,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>

                  <Box mt={3}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: '#e85d18',
                        borderRadius: 2,
                        fontWeight: 700,
                        py: 1.2,
                        textTransform: 'uppercase',
                        '&:hover': {
                          backgroundColor: '#e85d18',
                        },
                      }}
                    >
                      More Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
import { Box, Container, Typography, Button } from '@mui/material';

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        About Us
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        We are a leading legal and business services provider dedicated to helping businesses navigate the complex regulatory landscape. Our mission is to simplify compliance and empower growth.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          To provide comprehensive, reliable, and affordable legal and business services that enable entrepreneurs and businesses to focus on what they do best - growing their business.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          To be the most trusted partner for businesses across India, providing end-to-end solutions for registration, compliance, taxation, and legal matters with excellence and integrity.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
          Why Choose Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          With years of experience and a team of dedicated professionals, we deliver personalized solutions tailored to your unique business needs. Our commitment to quality and customer satisfaction sets us apart.
        </Typography>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            bgcolor: '#f5a623', 
            '&:hover': { bgcolor: '#e0941f' },
            px: 4,
            py: 1.5,
            fontSize: '1.1rem'
          }}
          href="/contact"
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

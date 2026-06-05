import { Box, Container, Typography, Button } from '@mui/material';

export default function TradeLicensePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Trade License Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Trade License is a mandatory certificate that grants permission to carry out a particular trade or business at a particular location. It ensures that business activities comply with local safety standards.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Who Needs Trade License
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          All businesses operating within municipal limits including shops, restaurants, offices, factories, and service providers. Different categories exist based on business type and size.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Documents Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Proof of business ownership/rent agreement, identity proof of owner, PAN card, property tax receipt, NOC from property owner (if rented), and building completion certificate.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes document verification, application submission to local municipality, site inspection, fee payment, and issuance of trade license valid for 1-5 years.
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
          Get Started Today
        </Button>
      </Box>
    </Container>
  );
}

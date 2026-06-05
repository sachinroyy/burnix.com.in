import { Box, Container, Typography, Button } from '@mui/material';

export default function MSMEPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        MSME Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        MSME Registration provides official recognition to micro, small, and medium enterprises, enabling them to access various government benefits, subsidies, and priority sector lending.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          MSME Classification
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Micro: Investment up to ₹1 crore, turnover up to ₹5 crore. Small: Investment up to ₹10 crore, turnover up to ₹50 crore. Medium: Investment up to ₹50 crore, turnover up to ₹250 crore.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Benefits of Registration
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Access to low-interest loans, government tender preferences, subsidy on patent registration, protection against delayed payments, and various tax benefits.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes business classification, document preparation, online application on Udyam portal, verification, and issuance of MSME certificate with unique Udyam number.
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

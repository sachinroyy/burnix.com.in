import { Box, Container, Typography, Button } from '@mui/material';

export default function TrademarkPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Trademark Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Trademark registration protects your brand identity, logo, and business name from unauthorized use. It provides exclusive rights to use your trademark in commerce.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          What Can Be Trademarked
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Brand names, logos, slogans, product names, domain names, and distinctive packaging. Any unique identifier that distinguishes your goods or services from others can be registered as a trademark.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Benefits of Registration
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Exclusive rights to use the trademark, legal protection against infringement, ability to license or sell the trademark, enhanced brand value, and deterrent against copycats.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes trademark search, classification, application filing, examination response handling, registration certificate issuance, and post-registration maintenance.
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

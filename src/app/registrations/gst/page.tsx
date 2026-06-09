import { Box, Container, Typography, Button } from '@mui/material';

export default function GSTPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        GST Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        GST Registration is mandatory for businesses with annual turnover exceeding ₹40 lakhs. It a comprehensive indirect tax on manufacture, sale, and consumption of goods and services.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Who Needs GST Registration
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Businesses with turnover above threshold, inter-state suppliers, e-commerce operators, and those liable to pay tax under reverse charge. Voluntary registration is also available for smaller businesses.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Documents Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          PAN card of business/proprietor, Aadhaar card, business address proof, bank account details, photograph of proprietor/partners/directors, and digital signature for companies.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes document verification, online application submission, Aadhaar authentication, GSTIN generation, and assistance with post-registration compliance and return filing.
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

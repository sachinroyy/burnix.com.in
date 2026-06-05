import { Box, Container, Typography, Button } from '@mui/material';

export default function Form15CAPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Form 15CA/15CB Filing
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Form 15CA and 15CB are required for remittances outside India. These forms ensure tax compliance on foreign payments and prevent tax evasion through overseas transactions.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          When Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Required for any remittance to non-residents exceeding prescribed limits, except for specific exempted categories. Form 15CA is a declaration by remitter, while Form 15CB is a certificate from a chartered accountant.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Documents Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Remittance details, purpose of payment, recipient information, PAN of remitter and recipient, relevant agreements/contracts, and supporting documents for tax rate determination.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Filing Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes tax rate determination, documentation review, Form 15CB certification, Form 15CA preparation, online filing with income tax department, and coordination with banks for remittance.
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

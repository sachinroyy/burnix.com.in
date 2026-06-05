import { Box, Container, Typography, Button } from '@mui/material';

export default function MonthlyFilingsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Monthly Compliance Filings
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Monthly compliance filings are essential for businesses to maintain regulatory compliance. We handle all monthly statutory requirements to ensure your business stays compliant.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Monthly Filings Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          GST returns, TDS returns, PF/ESI contributions, professional tax, payroll tax, and other industry-specific monthly filings. We maintain a comprehensive compliance calendar.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Importance of Timely Filing
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Avoids penalties and interest, maintains good standing with authorities, ensures smooth business operations, and builds credibility with stakeholders. Non-compliance can lead to legal consequences.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Compliance Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes compliance calendar maintenance, data collection, computation and verification, timely filing, payment of dues, and maintaining records for audit and inspection purposes.
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

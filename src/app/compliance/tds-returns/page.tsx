import { Box, Container, Typography, Button } from '@mui/material';

export default function TDSReturnsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        TDS Returns Filing
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Tax Deducted at Source (TDS) returns must be filed quarterly by all deductors. We ensure accurate TDS computation, deduction, and timely return filing to avoid penalties.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          TDS Return Types
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Form 24Q (salary TDS), Form 26Q (non-salary TDS), Form 27Q (NRI TDS), Form 27EQ (TCS), and various other forms based on transaction types. We handle all TDS return filings.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Compliance Requirements
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Quarterly TDS return filing, TDS payment by 7th of following month, TDS certificate issuance within specified timelines, and annual TDS return filing. We ensure complete compliance.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Filing Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes TDS rate determination, deduction verification, challan payment, return preparation, filing with NSDL, TDS certificate generation, and handling of TDS demands and refunds.
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

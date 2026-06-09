import { Box, Container, Typography, Button } from '@mui/material';

export default function TransferPricingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Transfer Pricing Services
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Transfer pricing services for multinational companies with cross-border transactions. We ensure compliance with arm length principle and documentation requirements.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Transfer pricing study, benchmarking analysis, documentation preparation, audit support, APA assistance, and representation before tax authorities on transfer pricing matters.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Compliance Requirements
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Annual transfer pricing documentation, master file and local file preparation, country-by-country reporting, and compliance with BEPS action items. We ensure full regulatory compliance.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Methodology
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our methodology includes functional analysis, selection of appropriate transfer pricing methods, benchmarking studies, documentation preparation, and ongoing support for audits and disputes.
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

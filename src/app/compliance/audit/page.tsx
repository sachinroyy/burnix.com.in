import { Box, Container, Typography, Button } from '@mui/material';

export default function AuditPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Audit & Accounts
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Statutory audit is mandatory for companies meeting certain thresholds. It ensures financial statements present a true and fair view of the company financial position.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Audit Requirements
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Mandatory for companies with paid-up capital exceeding ₹1 crore, turnover exceeding ₹2 crore, or receiving foreign investment. Also required for LLPs with contribution exceeding ₹25 lakh or turnover exceeding ₹40 lakh.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Our Audit Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Statutory audit, internal audit, tax audit, GST audit, forensic audit, and management audit. We ensure compliance with all applicable accounting standards and regulatory requirements.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Audit Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes planning, risk assessment, internal control evaluation, substantive testing, report preparation, and management recommendations for process improvements.
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

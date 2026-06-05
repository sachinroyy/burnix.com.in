import { Box, Container, Typography, Button } from '@mui/material';

export default function IncomeTaxPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Income Tax Services
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Comprehensive income tax services for individuals and businesses. We ensure compliance, optimize tax liability, and handle all tax-related matters efficiently.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Income tax return filing, tax planning, tax audit assistance, refund claims, tax notices handling, and representation before tax authorities. We cover all aspects of income tax compliance.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Tax Planning
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Strategic tax planning to minimize liability while staying compliant. We help you utilize available deductions, exemptions, and rebates effectively to optimize your tax position.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes financial data collection, income computation, deduction verification, tax calculation, return preparation, filing, and post-filing support for queries and assessments.
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

import { Box, Container, Typography, Button } from '@mui/material';

export default function TaxPlanningPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Tax Planning Services
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Strategic tax planning to minimize your tax liability legally. We help individuals and businesses optimize their tax position through proper planning and compliance.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Planning Strategies
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Investment planning, deduction optimization, exemption utilization, income restructuring, and timing of income and expenses. We create customized tax strategies for your specific situation.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Benefits of Planning
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Reduced tax liability, improved cash flow, better investment decisions, compliance assurance, and peace of mind. Good tax planning is essential for financial success.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Planning Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes financial assessment, goal identification, strategy development, implementation assistance, regular reviews, and adjustments based on changing circumstances and regulations.
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

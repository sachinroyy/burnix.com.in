import { Box, Container, Typography, Button } from '@mui/material';

export default function CorporateTaxPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Corporate Tax Services
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Specialized corporate tax services for companies of all sizes. We handle complex tax matters, ensure compliance, and help optimize your corporate tax structure.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Corporate Tax Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Corporate tax return filing, MAT credit computation, tax audit, advance tax planning, tax litigation support, and assistance with tax notices and assessments.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Tax Optimization
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We help optimize corporate tax through proper structuring, utilizing available incentives, managing tax credits, and ensuring compliance with all corporate tax regulations.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Approach
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our approach includes understanding your business model, identifying tax optimization opportunities, ensuring compliance with changing regulations, and providing proactive tax advisory services.
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

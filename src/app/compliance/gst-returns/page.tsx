import { Box, Container, Typography, Button } from '@mui/material';

export default function GSTReturnsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        GST Returns Filing
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        GST returns must be filed regularly by all registered businesses. We ensure accurate and timely filing of all GST returns to maintain compliance and avoid penalties.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Types of GST Returns
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          GSTR-1 (monthly/quarterly outward supplies), GSTR-3B (monthly summary), GSTR-9 (annual return), and various other returns based on business type and turnover. We handle all return types efficiently.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Filing Frequency
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Monthly for regular businesses with turnover above ₹5 crore, quarterly for small businesses (QRMP scheme), and annual returns for all registered taxpayers. We track and file on appropriate schedules.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Filing Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes data reconciliation, input tax credit verification, return preparation, error resolution, timely filing, and post-filing support for queries and assessments.
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

import { Box, Container, Typography, Button } from '@mui/material';

export default function BusinessConsultationPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Business Consultation
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Strategic business consultation services to help your business grow and succeed. Our experts provide actionable insights and practical solutions.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Business strategy development, market analysis, financial planning, operational optimization, growth planning, and turnaround strategies for struggling businesses.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Consultation Approach
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We take a data-driven approach to understand your business challenges, identify opportunities, develop customized strategies, and support implementation for measurable results.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Expert Team
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our consultants bring decades of experience across various industries. We combine deep industry knowledge with analytical expertise to deliver practical, actionable advice.
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
          Schedule Consultation
        </Button>
      </Box>
    </Container>
  );
}

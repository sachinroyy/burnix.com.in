import { Box, Container, Typography, Button } from '@mui/material';

export default function TeamPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Our Team
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Meet our team of experienced professionals dedicated to providing exceptional legal and business services. Our experts bring diverse expertise and a commitment to excellence.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Leadership Team
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our leadership team brings decades of combined experience in law, taxation, and business consulting. They guide our strategic direction and ensure we deliver the highest quality services.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Expert Professionals
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our team includes chartered accountants, company secretaries, lawyers, tax consultants, and business advisors. Each member is selected for their expertise and dedication to client success.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Join Our Team
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We are always looking for talented individuals who share our passion for excellence. If you're interested in joining our team, explore our career opportunities.
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
          href="/more/careers"
        >
          View Careers
        </Button>
      </Box>
    </Container>
  );
}

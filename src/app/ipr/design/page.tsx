import { Box, Container, Typography, Button } from '@mui/material';

export default function DesignPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Design Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Design registration protects the aesthetic appearance of products. It covers shape, configuration, pattern, ornament, or composition of colors applied to an article.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          What Can Be Registered
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Product shapes, packaging designs, textile patterns, furniture designs, jewelry designs, automotive designs, and any aesthetic features that appeal to the eye.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Protection Benefits
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Exclusive rights to use the design, protection against imitation, ability to license the design, enhanced product value, and legal recourse against infringers.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes design classification, representation preparation, application filing, examination, and registration certificate valid for 10 years, renewable for further 10-year periods.
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

import { Box, Container, Typography, Button } from '@mui/material';

export default function VisitPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Visit Our Office
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
          We welcome you to visit our office for in-person consultations. Our team is ready to discuss your legal and business service requirements face-to-face.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Office Location
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our office is conveniently located in the heart of the city with easy access to public transportation and parking facilities. Visit us for a personalized consultation experience.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Office Hours
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Monday to Saturday: 9:00 AM - 6:00 PM. Sunday: Closed. We recommend scheduling an appointment in advance to ensure our team is available to assist you.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
          Schedule a Visit
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
          To ensure we can give you the attention you deserve, please schedule an appointment before visiting. You can call us or use our online booking system.
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
          Schedule Appointment
        </Button>
      </Box>
    </Container>
  );
}

import { Box, Container, Typography, Button } from '@mui/material';

export default function CallbackPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Request a Callback
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Fill out the form below and our team will call you back at your convenience. We&apos;re here to help with all your legal and business service needs.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          What to Expect
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our team will review your request and call you back within 24 hours. We&apos;ll discuss your requirements and provide expert guidance on the best solutions for your needs.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Information Needed
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please provide your name, phone number, preferred callback time, and a brief description of your inquiry. This helps us prepare for our conversation and serve you better.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Alternative Contact Methods
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        If you prefer, you can also reach us via email or visit our office. We&apos;re available Monday through Saturday during business hours for all your inquiries.
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
          Fill Callback Form
        </Button>
      </Box>
    </Container>
  );
}

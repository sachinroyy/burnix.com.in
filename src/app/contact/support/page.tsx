import { Box, Container, Typography, Button } from '@mui/material';

export default function SupportPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Customer Support
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Our dedicated customer support team is here to assist you with any questions or concerns. We're committed to providing excellent service and ensuring your satisfaction.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Support Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          General inquiries, service-related questions, document status updates, payment assistance, and technical support for our online services. We're here to help at every step.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Response Time
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Email inquiries: Within 24 hours. Phone support: Available during business hours. Live chat: Available on our website during business hours. Urgent matters: Call our helpline.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
          Contact Support
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
          Reach out to us through phone, email, or live chat. Our support team is trained to handle all types of inquiries and will work diligently to resolve your concerns.
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
          Contact Support
        </Button>
      </Box>
    </Container>
  );
}

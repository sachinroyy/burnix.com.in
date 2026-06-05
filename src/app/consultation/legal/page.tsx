import { Box, Container, Typography, Button } from '@mui/material';

export default function LegalConsultationPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Legal Consultation
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Expert legal consultation services for individuals and businesses. Our experienced lawyers provide comprehensive legal advice on various matters.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Our Legal Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Corporate law, contract drafting and review, dispute resolution, legal compliance, regulatory matters, and representation before courts and tribunals.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Consultation Process
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Initial consultation to understand your legal needs, thorough analysis of the situation, legal opinion and advice, strategy development, and ongoing support throughout the legal process.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Why Choose Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our team of experienced lawyers provides practical, cost-effective legal solutions. We focus on understanding your unique situation and delivering results that align with your objectives.
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

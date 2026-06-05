import { Box, Container, Typography, Button } from '@mui/material';

export default function ComplianceConsultationPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Compliance Consultation
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Comprehensive compliance consultation to ensure your business meets all regulatory requirements. We help you navigate complex compliance landscapes.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Compliance Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Regulatory compliance assessment, compliance program development, policy drafting, compliance training, audit support, and remediation assistance.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Regulatory Areas
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Corporate compliance, tax compliance, labor laws, environmental regulations, data protection, industry-specific regulations, and international compliance standards.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Proactive Approach
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We take a proactive approach to compliance, helping you identify risks before they become issues. Our goal is to build robust compliance frameworks that protect your business.
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

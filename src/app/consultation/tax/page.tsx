import { Box, Container, Typography, Button } from '@mui/material';

export default function TaxConsultationPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Tax Consultation
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Expert tax consultation services to help you navigate complex tax laws and optimize your tax position. We provide comprehensive tax advice for individuals and businesses.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Tax Advisory Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Tax planning, tax optimization, cross-border taxation, tax dispute resolution, tax audit support, and assistance with tax notices and assessments.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Specialized Areas
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          International taxation, transfer pricing, GST advisory, corporate tax planning, personal tax structuring, and tax-efficient investment strategies.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Expertise
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our tax consultants stay updated with the latest tax laws and regulations. We provide proactive advice to help you minimize tax liability while ensuring full compliance.
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

import { Box, Container, Typography, Button } from '@mui/material';

export default function PrivateLimitedPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Private Limited Company Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        A Private Limited Company is one of the most popular business structures in India. It offers limited liability to shareholders while providing flexibility in management and operations.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Why Choose Private Limited Company
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Private Limited Companies enjoy several advantages including limited liability protection, access to venture capital, ability to issue shares to employees, and enhanced credibility with customers and suppliers.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Documents Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          You will need PAN and address proof of directors and shareholders, Memorandum and Articles of Association, address proof of the registered office, and DSC (Digital Signature Certificate) for all directors.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our streamlined process includes initial consultation to understand your requirements, preparation of all necessary documents, filing with Ministry of Corporate Affairs, follow-ups with regulatory bodies, and finally obtaining your Certificate of Incorporation.
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

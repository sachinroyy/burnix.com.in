import { Box, Container, Typography, Button } from '@mui/material';

export default function PublicLimitedPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Public Limited Company Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        A Public Limited Company can raise capital from the general public through shares and debentures. It ideal for large-scale businesses looking to expand and list on stock exchanges.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Key Features
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Minimum 7 shareholders and 3 directors, ability to raise funds from public, shares can be freely transferable, strict regulatory compliance requirements, and enhanced credibility in the market.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Documents Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          PAN and address proof of directors, Memorandum and Articles of Association, address proof of registered office, DSC for directors, and compliance with SEBI regulations for public offerings.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes obtaining DIN and DSC, name approval, drafting MOA and AOA, filing incorporation documents, obtaining Certificate of Incorporation, and assistance with initial public offering if required.
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

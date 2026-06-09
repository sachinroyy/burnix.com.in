import { Box, Container, Typography, Button } from '@mui/material';

export default function PartnershipPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Partnership Firm Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        A Partnership Firm is an ideal business structure for professionals and small businesses looking to collaborate with shared ownership, management, and profits.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Types of Partnership
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          General Partnership, Limited Partnership, Limited Liability Partnership (LLP). Each type offers different levels of liability protection and regulatory requirements to suit your business needs.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Documents Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Partnership deed, PAN cards of partners, address proof of partners and firm, photographs of partners, and proof of business address. For LLP, additional DIN and DSC required.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes drafting partnership deed, obtaining PAN for firm, registration with Registrar of Firms (optional but recommended), GST registration, and opening bank account in firm name.
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

import { Box, Container, Typography, Button } from '@mui/material';

export default function OPCPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        One Person Company (OPC) Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        A One Person Company allows a single individual to operate a corporate entity with limited liability protection. It perfect for solo entrepreneurs and small business owners.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Benefits of OPC
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Single person ownership, limited liability protection, corporate identity, easy compliance requirements, ability to convert to private limited later, and separate legal entity status.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Eligibility Criteria
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Must be an Indian citizen, only natural person can be member, paid-up capital not exceeding ₹50 lakhs, turnover not exceeding ₹2 crores, and one nominee must be appointed.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes obtaining DIN and DSC, name reservation, drafting MOA and AOA, filing incorporation with nominee details, obtaining Certificate of Incorporation, and opening bank account.
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

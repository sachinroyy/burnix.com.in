import { Box, Container, Typography, Button } from '@mui/material';

export default function AnnualReturnPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Annual Return Filing
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Annual Return filing is mandatory for all registered companies in India. It provides a comprehensive overview of the company financial and operational activities during the financial year.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          What is Annual Return
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Annual Return is a document containing details of shareholders, directors, meetings, share capital, debt, and other statutory information. It must be filed within 60 days of the Annual General Meeting.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Documents Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Financial statements, auditor report, board of directors&apos; report, list of shareholders and directors, details of changes in shareholding, and compliance certificates.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Filing Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes document collection, preparation of financial statements, auditor coordination, form preparation, filing with MCA, and ensuring timely compliance with all regulatory requirements.
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

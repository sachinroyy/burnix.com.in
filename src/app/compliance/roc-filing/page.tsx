import { Box, Container, Typography, Button } from '@mui/material';

export default function ROCFilingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        ROC Filing Services
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Registrar of Companies (ROC) filing is mandatory for all registered companies. We ensure timely compliance with all ROC requirements to avoid penalties and maintain good standing.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          ROC Filings Required
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Annual returns, financial statements, changes in directors/shareholders, share allotment, charge creation/modification/satisfaction, and various event-based filings as per Companies Act.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Compliance Timeline
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Annual return within 60 days of AGM, financial statements within 30 days of AGM, event-based filings within 30 days of occurrence, and other periodic filings as per statutory requirements.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Our Filing Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes compliance calendar maintenance, document preparation, board meeting coordination, form filing with MCA, payment of government fees, and maintaining complete records for audit purposes.
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

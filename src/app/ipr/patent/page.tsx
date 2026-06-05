import { Box, Container, Typography, Button } from '@mui/material';

export default function PatentPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Patent Filing
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Patent registration protects your inventions and technological innovations. It grants exclusive rights to prevent others from making, using, or selling your invention.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Patentable Inventions
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          New and useful inventions, processes, machines, manufactures, or compositions of matter. The invention must be novel, non-obvious, and have industrial applicability.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Types of Patents
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Ordinary patent for standard inventions, provisional patent for early filing, international patents through PCT, and design patents for aesthetic designs. Each type serves different protection needs.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Filing Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes patentability assessment, prior art search, patent drafting, application filing, examination response handling, and grant of patent with 20-year protection.
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

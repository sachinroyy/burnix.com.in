import { Box, Container, Typography, Button } from '@mui/material';

export default function CareersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Careers
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Join our dynamic team and build a rewarding career in legal and business services. We offer competitive compensation, growth opportunities, and a supportive work environment.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Why Work With Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Competitive salary and benefits, professional development opportunities, collaborative work culture, exposure to diverse projects, and the chance to make a real impact on our clients success.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Open Positions
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We are always looking for talented professionals in areas such as company law, taxation, legal advisory, business consulting, and compliance. Check our current openings and apply today.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        How to Apply
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Send your resume and cover letter to our HR team. We review all applications and will contact shortlisted candidates for interviews. We look forward to hearing from you!
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
          Apply Now
        </Button>
      </Box>
    </Container>
  );
}

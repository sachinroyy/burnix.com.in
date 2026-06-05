import { Box, Container, Typography, Button } from '@mui/material';

export default function CopyrightPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Copyright Registration
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Copyright registration protects original literary, artistic, musical, and dramatic works. It provides exclusive rights to reproduce, distribute, and display your creative works.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          What Can Be Copyrighted
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Books, articles, software code, music, films, photographs, paintings, sculptures, architectural designs, and other original works of authorship fixed in tangible form.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Protection Duration
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Copyright protection lasts for the lifetime of the author plus 60 years after their death. For works owned by companies, protection lasts 60 years from publication.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Registration Process
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our process includes work classification, application preparation, filing with copyright office, examination, and issuance of registration certificate with legal presumption of ownership.
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

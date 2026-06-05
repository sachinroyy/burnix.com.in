import { Box, Container, Typography, Button } from '@mui/material';

export default function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c' }}>
        Blog
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#4a5568', mb: 4 }}>
        Stay updated with the latest news, insights, and updates on legal and business matters. Our blog features expert articles on registration, compliance, taxation, and more.
      </Typography>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Latest Articles
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Our experts regularly publish articles on topics such as company registration, GST compliance, tax planning, IPR protection, and business strategy. Stay informed with our latest insights.
        </Typography>
      </Box>

      <Box sx={{ mb: 4, p: 3, bgcolor: '#f7fafc', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#f5a623', fontWeight: 'bold' }}>
          Topics Covered
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Business registration, regulatory compliance, taxation updates, legal reforms, industry trends, case studies, and practical tips for entrepreneurs and business owners.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c', mb: 3 }}>
        Subscribe to Our Newsletter
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
          Get the latest articles and updates delivered directly to your inbox. Subscribe to our newsletter and never miss important legal and business news.
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
          Subscribe Now
        </Button>
      </Box>
    </Container>
  );
}

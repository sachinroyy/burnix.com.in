'use client';

import { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';

interface Blog {
  _id: string;
  title: string;
  description?: string;
  content?: string;
  imageUrl?: string;
  image?: string;
  thumbnail?: string;
  slug?: string;
  createdAt?: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data);

        const blogData = Array.isArray(data)
          ? data
          : data.data || [];

        setBlogs(blogData);
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
       <Typography
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              fontSize: {
                xs: '2rem',
                md: '3rem',
              },
            }}
          >
              Our  {' '}
            <Box
              component="span"
              sx={{
                color: '#ed3c0a',
              }}
            >
              Blogs
            </Box>
          </Typography>

      <Grid2 container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ justifyContent: 'center' }}>
        {blogs.map((blog) => (
          <Grid2
            size={{ xs: 12, md: 6 }}
            key={blog._id}
          >
         <Card
  sx={{
    width: { xs: '100%', md: 500 },
    height: { xs: 450, sm: 500, md: 500 },
    borderRadius: 4,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: 10,
    },
  }}
>
              {/* Blog Image */}
              <CardMedia
                component="img"
                image={
                  blog.imageUrl ||
                  blog.image ||
                  blog.thumbnail ||
                  '/images/blog-placeholder.jpg'
                }
                alt={blog.title}
                sx={{
                  objectFit: 'cover',
                  height: { xs: 200, sm: 220, md: 250 },
                }}
              />

              {/* Content */}
             <CardContent
  sx={{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    p: { xs: 2, sm: 3 },
  }}
>
  <Box>
    <Typography
      variant="h6"
      sx={{
        fontSize: { xs: '1.25rem', sm: '1.5rem' },
        fontWeight: 700,
        mb: 2,
        color: '#051932',
        minHeight: { xs: 50, sm: 70 },
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}
    >
      {blog.title}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: '#333',
        display: '-webkit-box',
        WebkitLineClamp: { xs: 3, sm: 4 },
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        lineHeight: 1.6,
        fontSize: { xs: '0.875rem', sm: '1rem' },
      }}
    >
      {blog.description ||
        blog.content ||
        'No description available'}
    </Typography>
  </Box>

  <Box sx={{ mt: 2 }}>
    {blog.createdAt && (
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
      >
        {new Date(blog.createdAt).toLocaleDateString()}
      </Typography>
    )}
  </Box>
</CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {blogs.length === 0 && (
        <Typography
          sx={{
            textAlign: 'center',
            mt: 5,
            color: 'text.secondary',
          }}
        >
          No Blogs Found
        </Typography>
      )}
    </Container>
  );
}
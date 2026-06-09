'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Alert,
} from '@mui/material';
import { Grid as Grid2 } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Blog {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogManagementPage() {
  const router = useRouter();
  const [isAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
    return false;
  });
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [open, setOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    author: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      router.push('/login');
    }
  }, [router]);

  // useEffect(() => {

  //   if (isAuthenticated) {
  //     fetchBlogs();
  //   }
  // }, [isAuthenticated, fetchBlogs]);
  useEffect(() => {
  if (!isAuthenticated) return;

  const loadBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  void loadBlogs();
}, [isAuthenticated]);

  const handleOpen = (blog?: Blog) => {
    if (blog) {
      setEditingBlog(blog);
      setFormData({
        title: blog.title,
        content: blog.content,
        imageUrl: blog.imageUrl,
        author: blog.author,
      });
    } else {
      setEditingBlog(null);
      setFormData({ title: '', content: '', imageUrl: '', author: '' });
    }
    setImageFile(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingBlog(null);
    setFormData({ title: '', content: '', imageUrl: '', author: '' });
    setImageFile(null);
    setError('');
  };

  const handleImageUpload = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let imageUrl = formData.imageUrl;

      if (imageFile) {
        imageUrl = await handleImageUpload(imageFile);
      }

      const payload = {
        ...formData,
        imageUrl,
      };

      if (editingBlog) {
        await fetch(`/api/blogs/${editingBlog._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      handleClose();
      fetchBlogs();
    } catch (error) {
      console.error('Failed to save blog:', error);
      setError('Failed to save blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      fetchBlogs();
    } catch (error) {
      console.error('Failed to delete blog:', error);
      setError('Failed to delete blog. Please try again.');
    }
  };

  if (!isAuthenticated) return null;

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 16 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={() => router.push('/dashboard')}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#051932' }}>
              Blog Management
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpen()}
            sx={{
              backgroundColor: '#e85d18',
              color: 'white',
              '&:hover': { backgroundColor: '#d44d0f' },
            }}
          >
            Add Blog
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Blog List */}
        <Grid2 container spacing={3}>
          {blogs.map((blog) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={blog._id}>
              <Card sx={{ height: '100%', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                {blog.imageUrl && (
                  <Box
                    component="img"
                    src={blog.imageUrl}
                    alt={blog.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                )}
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#051932', mb: 1 }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {blog.content.substring(0, 150)}...
                  </Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ mb: 2, display: 'block' }}>
                    By {blog.author}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => handleOpen(blog)}
                      sx={{ flex: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(blog._id)}
                      color="error"
                      sx={{ flex: 1 }}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>

        {/* Add/Edit Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>{editingBlog ? 'Edit Blog' : 'Add New Blog'}</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Content"
                multiline
                rows={6}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Image URL"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                sx={{ mb: 2 }}
              />
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Or upload new image:
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" disabled={loading}>
              {loading ? 'Saving...' : editingBlog ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

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

interface Testimonial {
  _id: string;
  name: string;
  content: string;
  imageUrl: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
}

export default function TestimonialManagementPage() {
  const router = useRouter();
  const [isAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
    return false;
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [open, setOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    imageUrl: '',
    designation: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = useCallback(async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      if (Array.isArray(data)) {
        setTestimonials(data);
      } else {
        console.error('API returned non-array data:', data);
        setTestimonials([]);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
      setTestimonials([]);
    }
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      router.push('/login');
    }
  }, [router]);

 useEffect(() => {
  if (!isAuthenticated) return;

  const loadTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();

      if (Array.isArray(data)) {
        setTestimonials(data);
      } else {
        setTestimonials([]);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
      setTestimonials([]);
    }
  };

  void loadTestimonials();
}, [isAuthenticated]);

  const handleOpen = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({
        name: testimonial.name,
        content: testimonial.content,
        imageUrl: testimonial.imageUrl,
        designation: testimonial.designation,
      });
    } else {
      setEditingTestimonial(null);
      setFormData({ name: '', content: '', imageUrl: '', designation: '' });
    }
    setImageFile(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingTestimonial(null);
    setFormData({ name: '', content: '', imageUrl: '', designation: '' });
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

      if (editingTestimonial) {
        await fetch(`/api/testimonials/${editingTestimonial._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch('/api/testimonials', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      handleClose();
      fetchTestimonials();
    } catch (error) {
      console.error('Failed to save testimonial:', error);
      setError('Failed to save testimonial. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
      fetchTestimonials();
    } catch (error) {
      console.error('Failed to delete testimonial:', error);
      setError('Failed to delete testimonial. Please try again.');
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
              Testimonial Management
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
            Add Testimonial
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Testimonial List */}
        <Grid2 container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={testimonial._id}>
              <Card sx={{ height: '100%', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  {testimonial.imageUrl && (
                    <Box
                      component="img"
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mb: 2,
                      }}
                    />
                  )}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#051932', mb: 0.5 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {testimonial.designation}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, flexGrow: 1 }}>
                    &ldquo;{testimonial.content.substring(0, 150)}...&rdquo;
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => handleOpen(testimonial)}
                      sx={{ flex: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(testimonial._id)}
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
          <DialogTitle>{editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Designation"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
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
              {loading ? 'Saving...' : editingTestimonial ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

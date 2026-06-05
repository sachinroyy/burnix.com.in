'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Menu,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import { borderBottom, Grid as Grid2 } from '@mui/system';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';  
import SearchIcon from '@mui/icons-material/Search';
import { navData } from '@/data/navData';

export default function Navbar() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [megaMenuAnchor, setMegaMenuAnchor] = useState<{ [key: string]: HTMLElement | null }>({});

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleMegaMenuOpen = (label: string, event: React.MouseEvent<HTMLElement>) => {
    setMegaMenuAnchor({ ...megaMenuAnchor, [label]: event.currentTarget });
  };

  const handleMegaMenuClose = (label: string) => {
    setMegaMenuAnchor({ ...megaMenuAnchor, [label]: null });
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        px: '8%',
      }}
    >
      <Container maxWidth={false}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, cursor: 'pointer' }}>
              <img src="/images/logo.webp" alt="Legal Services" style={{ height: 40 }} />
             
            </Typography>
          </Link>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navData.map((item) => (
              <Box
                key={item.label}
                onMouseEnter={(e) => {
                  if (item.megaMenu) {
                    handleMegaMenuOpen(item.label, e as any);
                  }
                }}
                onMouseLeave={() => {
                  if (item.megaMenu) {
                    handleMegaMenuClose(item.label);
                  }
                }}
              >
                <Link href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Button sx={{ textTransform: 'none', color: 'black' }}>
                    {item.label}
                  </Button>
                </Link>

                {item.megaMenu && (
                  <Menu
                    anchorEl={megaMenuAnchor[item.label]}
                    open={Boolean(megaMenuAnchor[item.label])}
                    onClose={() => handleMegaMenuClose(item.label)}
                    onMouseLeave={() => handleMegaMenuClose(item.label)}
                    PaperProps={{
                      sx: {
                        mt: 1,
                        minWidth: '600px',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      },
                    }}
                    MenuListProps={{
                      sx: {
                        py: 0,
                      },
                    }}
                  >
                    <Box sx={{ p: 3, backgroundColor: 'white' }}>
                      <Grid2 container spacing={4}>
                        {item.megaMenu.map((column, idx) => (
                          <Grid2 size={{ xs: 12, md: 6 }} key={idx}>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                mb: 2,
                                color: '#1a3c5e',
                                fontSize: '1rem',
                                borderBottom: '2px solid #f5a623',
                                pb: 1,
                                display: 'inline-block',
                              }}
                            >
                              {column.title}
                            </Typography>
                            {column.items.map((subItem) => (
                              <MuiLink
                                key={subItem.href}
                                component={Link}
                                href={subItem.href}
                                sx={{
                                  display: 'block',
                                  py: 1,
                                  color: '#4a5568',
                                  textDecoration: 'none',
                                  fontSize: '0.9rem',
                                  transition: 'all 0.2s ease',
                                  '&:hover': {
                                    color: '#f5a623',
                                    pl: 1,
                                    fontWeight: 200,
                                  },
                                }}
                              >
                                {subItem.label}
                              </MuiLink>
                            ))}
                          </Grid2>
                        ))}
                      </Grid2>
                    </Box>
                  </Menu>
                )}
              </Box>
            ))}

            <Button
              sx={{ color: 'black', minWidth: 'auto' }}
              onClick={() => console.log('Search clicked')}
            >
              <SearchIcon />
            </Button>

            <Link href="/login" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  color: 'black',
                  borderColor: 'black',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2,
                  py: 1,
                  '&:hover': {
                    borderColor: '#f5a623',
                    color: '#f5a623',
                  },
                }}
              >
                Login
              </Button>
            </Link>

            <Link href="/talk-to-experts" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  backgroundColor: '#e85d18',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2,
                  py: 1,
                 
                }}
              >
                Talk to Experts
              </Button>
            </Link>
          </Box>

          <Button
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'black' }}
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </Button>

          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMobileMenuClose}
          >
            {navData.map((item) => (
              <Link key={item.label} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem onClick={handleMobileMenuClose}>{item.label}</MenuItem>
              </Link>
            ))}
            <MenuItem onClick={() => { console.log('Search clicked'); handleMobileMenuClose(); }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SearchIcon sx={{ fontSize: 18 }} />
                Search
              </Box>
            </MenuItem>
            <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMobileMenuClose}>Login</MenuItem>
            </Link>
            <Link href="/talk-to-experts" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMobileMenuClose}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ fontSize: 18 }} />
                  Talk to Experts
                </Box>
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

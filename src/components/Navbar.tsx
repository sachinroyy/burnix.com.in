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
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';  
import SearchIcon from '@mui/icons-material/Search';
import { navData } from '@/data/navData';

export default function Navbar() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [megaMenuAnchor, setMegaMenuAnchor] = useState<{ [key: string]: HTMLElement | null }>({});
  const [hoveredCategory, setHoveredCategory] = useState<{ [key: string]: string }>({});
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleMegaMenuOpen = (label: string, event: React.MouseEvent<HTMLElement>) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setMegaMenuAnchor({ ...megaMenuAnchor, [label]: event.currentTarget });
  };

  const handleMegaMenuClose = (label: string) => {
    const timeout = setTimeout(() => {
      setMegaMenuAnchor({ ...megaMenuAnchor, [label]: null });
      setHoveredCategory({ ...hoveredCategory, [label]: '' });
    }, 200);
    setMenuTimeout(timeout);
  };

  return (
    <Box sx={{ backgroundColor: '#f0f4f8' }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          width: '85%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '300px',
          mt: 0.1,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        <Container maxWidth={false}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/images/logo.webp" alt="Legal Services" width={40} height={40} />
              </Box>
            </Link>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navData.map((item) => (
              <Box
                key={item.label}
                onMouseEnter={(e) => {
                  if (item.megaMenu) {
                    handleMegaMenuOpen(item.label, e as React.MouseEvent<HTMLElement>);
                  }
                }}
                onMouseLeave={() => {
                  if (item.megaMenu) {
                    handleMegaMenuClose(item.label);
                  }
                }}
              >
                <Box sx={{ cursor: 'default' }}>
                  <Button sx={{ textTransform: 'none', color: '#051932', cursor: 'default' }}>
                    {item.label}
                  </Button>
                </Box>

                {item.megaMenu && (
                  <Menu
                    anchorEl={megaMenuAnchor[item.label]}
                    open={Boolean(megaMenuAnchor[item.label])}
                    onClose={() => handleMegaMenuClose(item.label)}
                    onMouseEnter={() => {
                      if (menuTimeout) {
                        clearTimeout(menuTimeout);
                        setMenuTimeout(null);
                      }
                    }}
                    onMouseLeave={() => handleMegaMenuClose(item.label)}
                    slotProps={{
                      paper: {
                        sx: {
                          mt: 1,
                          minWidth: '700px',
                          borderRadius: '20px',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        },
                      },
                      list: {
                        sx: {
                          py: 0,
                        },
                      },
                    }}
                  >
                    <Box sx={{ p: 0, backgroundColor: 'white', display: 'flex' }}>
                      {/* Left Column - Categories */}
                      <Box sx={{ width: '40%', backgroundColor: '#f8f9fa', p: 3, borderRight: '1px solid #e0e0e0' }}>
                        {item.megaMenu.map((column, idx) => (
                          <Box
                            key={idx}
                            onMouseEnter={() => setHoveredCategory({ ...hoveredCategory, [item.label]: column.title })}
                            sx={{
                              p: 2,
                              cursor: 'pointer',
                              borderRadius: '12px',
                              backgroundColor: hoveredCategory[item.label] === column.title ? '#e85d18' : 'transparent',
                              color: hoveredCategory[item.label] === column.title ? 'white' : '#1a3c5e',
                              transition: 'all 0.2s ease',
                              mb: 1,
                              '&:hover': {
                                backgroundColor: hoveredCategory[item.label] === column.title ? '#e85d18' : '#f0f0f0',
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight: 400,
                                fontSize: '0.85rem',
                              }}
                            >
                              {column.title}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      {/* Right Column - Items */}
                      <Box sx={{ width: '60%', p: 3 }}>
                        {item.megaMenu.map((column) => (
                          hoveredCategory[item.label] === column.title && (
                            <Box key={column.title}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 400,
                                  mb: 3,
                                  color: '#1a3c5e',
                                  fontSize: '0.9rem',
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
                                    py: 1.5,
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                      color: '#e85d18',
                                      pl: 1,
                                      fontWeight: 400,
                                    },
                                  }}
                                >
                                  {subItem.label}
                                </MuiLink>
                              ))}
                            </Box>
                          )
                        ))}
                        {!hoveredCategory[item.label] && item.megaMenu[0] && (
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 400,
                                mb: 3,
                                color: '#1a3c5e',
                                fontSize: '0.9rem',
                                borderBottom: '2px solid #f5a623',
                                pb: 1,
                                display: 'inline-block',
                              }}
                            >
                              {item.megaMenu[0].title}
                            </Typography>
                            {item.megaMenu[0].items.map((subItem) => (
                              <MuiLink
                                key={subItem.href}
                                component={Link}
                                href={subItem.href}
                                sx={{
                                  display: 'block',
                                  py: 1.5,
                                  color: '#4a5568',
                                  textDecoration: 'none',
                                  fontSize: '0.85rem',
                                  transition: 'all 0.2s ease',
                                  '&:hover': {
                                    color: '#e85d18',
                                    pl: 1,
                                    fontWeight: 400,
                                  },
                                }}
                              >
                                {subItem.label}
                              </MuiLink>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Menu>
                )}
              </Box>
            ))}

            <Button
              sx={{ color: '#1a3c5e', minWidth: 'auto' }}
              onClick={() => console.log('Search clicked')}
            >
              <SearchIcon />
            </Button>

            <Link href="/login" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  color: '#1a3c5e',
                  borderColor: '#1a3c5e',
                  textTransform: 'none',
                  borderRadius: '24px',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#e85d18',
                    color: '#e85d18',
                  },
                }}
              >
                Login
              </Button>
            </Link>

            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  backgroundColor: '#ed3c0a',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '24px',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#ed3c0a',
                  },
                }}
              >
                Talk to Experts
              </Button>
            </Link>
          </Box>

          <Button
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#051932' }}
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
              <Link key={item.label} href={item.href || '/'} style={{ textDecoration: 'none', color: 'inherit' }}>
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
    </Box>
  );
}

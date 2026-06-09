"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Stack,
  Divider,
} from "@mui/material";
import { Grid as Grid2 } from "@mui/system";
import Link from "next/link";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      sx={{
       
       
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
          
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "30px",
            p: { xs: 3, md: 5 },
            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          }}
        >
          <Grid2 container spacing={5}>
            {/* Logo Section */}
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                <Image
                  src="/images/logo.webp"
                  alt="Burnix"
                  width={220}
                  height={60}
                  style={{
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#051932",
                  lineHeight: 1.8,
                  fontSize: "15px",
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Burnix helps startups, entrepreneurs and businesses with
                company registration, GST registration, trademark registration,
                annual compliance and legal solutions across India.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {[
                  <FacebookIcon key="fb" />,
                  <XIcon key="x" />,
                  <LinkedInIcon key="ln" />,
                  <InstagramIcon key="ig" />,
                ].map((icon, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 45,
                      height: 45,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                     
                      color: "#051932",
                      cursor: "pointer",
                      transition: ".3s",
                      "&:hover": {
                        background: "#ff7a1a",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    {icon}
                  </Box>
                ))}
              </Stack>
            </Grid2>

            {/* Quick Links */}
            <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <FooterHeading title="Quick Links" />

                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </Box>
            </Grid2>

            {/* Services */}
            <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <FooterHeading title="Services" />

                <FooterLink href="/private-limited-company">
                  Pvt Ltd Registration
                </FooterLink>

                <FooterLink href="/gst-registration">
                  GST Registration
                </FooterLink>

                <FooterLink href="/trademark-registration">
                  Trademark Registration
                </FooterLink>

                <FooterLink href="/annual-compliance">
                  Annual Compliance
                </FooterLink>
              </Box>
            </Grid2>

            {/* Contact */}
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <FooterHeading title="Contact Info" />

              <Typography
                sx={{
                  color: "#051932",
                  mb: 2,
                }}
              >
                📧 info@burnix.in
              </Typography>

              <Typography
                sx={{
                  color: "#051932",
                  mb: 2,
                }}
              >
                📞 +91 9876543210
              </Typography>

              <Typography
                sx={{
                  color: "#051932",
                  lineHeight: 1.8,
                }}
              >
                India’s trusted platform for business registration and legal
                compliance services.
              </Typography>
              </Box>
            </Grid2>
          </Grid2>

          <Divider
            sx={{
              borderColor: "rgba(255,255,255,0.08)",
              my: 4,
            }}
          />

          {/* Bottom Bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              flexDirection: { xs: 'column', md: 'row' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              sx={{
                color: "#051932",
              }}
            >
              © {new Date().getFullYear()} Burnix. All Rights Reserved.
            </Typography>

            <Stack direction="row" spacing={3}>
              <MuiLink
                href="/privacy-policy"
                underline="none"
                sx={{
                  color: "#051932",
                  "&:hover": {
                    color: "#ff7a1a",
                  },
                }}
              >
                Privacy Policy
              </MuiLink>

              <MuiLink
                href="/terms-condition"
                underline="none"
                sx={{
                  color: "#051932",
                  "&:hover": {
                    color: "#ff7a1a",
                  },
                }}
              >
                Terms & Conditions
              </MuiLink>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------------- Components ---------------- */

function FooterHeading({ title }: { title: string }) {
  return (
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: 700,
        color: "#051932",
        mb: 3,
        position: "relative",
        textAlign: { xs: 'center', md: 'left' },

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -8,
          left: { xs: '50%', md: 0 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          width: 40,
          height: 3,
          borderRadius: "20px",
          background: "#ff7a1a",
        },
      }}
    >
      {title}
    </Typography>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <MuiLink
      component={Link}
      href={href}
      underline="none"
      sx={{
        display: "block",
        mb: 1.5,
        color: "#051932",
        transition: ".3s",
        "&:hover": {
          color: "#ff7a1a",
          transform: "translateX(5px)",
        },
      }}
    >
      {children}
    </MuiLink>
  );
}
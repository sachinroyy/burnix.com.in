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
              <Box mb={2}>
                <img
                  src="/images/logo.webp"
                  alt="Burnix"
                  style={{
                    width: "220px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "black",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                Burnix helps startups, entrepreneurs and businesses with
                company registration, GST registration, trademark registration,
                annual compliance and legal solutions across India.
              </Typography>

              <Stack direction="row" spacing={2} mt={4}>
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
                     
                      color: "black",
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
              <FooterHeading title="Quick Links" />

              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </Grid2>

            {/* Services */}
            <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }}>
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
            </Grid2>

            {/* Contact */}
            <Grid2 size={{ xs: 12, md: 3 }}>
              <FooterHeading title="Contact Info" />

              <Typography
                sx={{
                  color: "black",
                  mb: 2,
                }}
              >
                📧 info@burnix.in
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  mb: 2,
                }}
              >
                📞 +91 9876543210
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  lineHeight: 1.8,
                }}
              >
                India’s trusted platform for business registration and legal
                compliance services.
              </Typography>
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
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                color: "black",
              }}
            >
              © {new Date().getFullYear()} Burnix. All Rights Reserved.
            </Typography>

            <Stack direction="row" spacing={3}>
              <MuiLink
                href="/privacy-policy"
                underline="none"
                sx={{
                  color: "black",
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
                  color: "black",
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
        color: "black",
        mb: 3,
        position: "relative",

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -8,
          left: 0,
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
        color: "black",
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
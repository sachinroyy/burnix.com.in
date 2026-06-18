// // "use client";

// // import React from "react";
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Link as MuiLink,
// //   Stack,
// //   Divider,
// // } from "@mui/material";
// // import { Grid as Grid2 } from "@mui/system";
// // import Link from "next/link";
// // import Image from "next/image";

// // import FacebookIcon from "@mui/icons-material/Facebook";
// // import XIcon from "@mui/icons-material/X";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import InstagramIcon from "@mui/icons-material/Instagram";

// // export default function Footer() {
// //   return (
// //     <Box
// //       sx={{
       
       
// //         py: { xs: 6, md: 10 },
// //         position: "relative",
// //         overflow: "hidden",
// //       }}
// //     >
// //       <Container maxWidth="xl">
// //         <Box
// //           sx={{
          
// //             backdropFilter: "blur(20px)",
// //             background: "rgba(255,255,255,0.03)",
// //             border: "1px solid rgba(255,255,255,0.08)",
// //             borderRadius: "30px",
// //             p: { xs: 3, md: 5 },
// //             boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
// //           }}
// //         >
// //           <Grid2 container spacing={5}>
// //             {/* Logo Section */}
// //             <Grid2 size={{ xs: 12, md: 4 }}>
// //               <Box sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
// //                 <Image
// //                   src="/images/logo.webp"
// //                   alt="Burnix"
// //                   width={220}
// //                   height={60}
// //                   style={{
// //                     maxWidth: "100%",
// //                     objectFit: "contain",
// //                   }}
// //                 />
// //               </Box>

// //               <Typography
// //                 sx={{
// //                   color: "#051932",
// //                   lineHeight: 1.8,
// //                   fontSize: "15px",
// //                   textAlign: { xs: 'center', md: 'left' },
// //                 }}
// //               >
// //                 Burnix helps startups, entrepreneurs and businesses with
// //                 company registration, GST registration, trademark registration,
// //                 annual compliance and legal solutions across India.
// //               </Typography>

// //               <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
// //                 {[
// //                   <FacebookIcon key="fb" />,
// //                   <XIcon key="x" />,
// //                   <LinkedInIcon key="ln" />,
// //                   <InstagramIcon key="ig" />,
// //                 ].map((icon, index) => (
// //                   <Box
// //                     key={index}
// //                     sx={{
// //                       width: 45,
// //                       height: 45,
// //                       borderRadius: "50%",
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
                     
// //                       color: "#051932",
// //                       cursor: "pointer",
// //                       transition: ".3s",
// //                       "&:hover": {
// //                         background: "#ff7a1a",
// //                         transform: "translateY(-4px)",
// //                       },
// //                     }}
// //                   >
// //                     {icon}
// //                   </Box>
// //                 ))}
// //               </Stack>
// //             </Grid2>

// //             {/* Quick Links */}
// //             <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }}>
// //               <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
// //                 <FooterHeading title="Quick Links" />

// //                 <FooterLink href="/">Home</FooterLink>
// //                 <FooterLink href="/about">About Us</FooterLink>
// //                 <FooterLink href="/services">Services</FooterLink>
// //                 <FooterLink href="/contact">Contact Us</FooterLink>
// //               </Box>
// //             </Grid2>

// //             {/* Services */}
// //             <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }}>
// //               <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
// //                 <FooterHeading title="Services" />

// //                 <FooterLink href="/private-limited-company">
// //                   Pvt Ltd Registration
// //                 </FooterLink>

// //                 <FooterLink href="/gst-registration">
// //                   GST Registration
// //                 </FooterLink>

// //                 <FooterLink href="/trademark-registration">
// //                   Trademark Registration
// //                 </FooterLink>

// //                 <FooterLink href="/annual-compliance">
// //                   Annual Compliance
// //                 </FooterLink>
// //               </Box>
// //             </Grid2>

// //             {/* Contact */}
// //             <Grid2 size={{ xs: 12, md: 3 }}>
// //               <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
// //                 <FooterHeading title="Contact Info" />

// //               <Typography
// //                 sx={{
// //                   color: "#051932",
// //                   mb: 2,
// //                 }}
// //               >
// //                 📧 info@burnix.in
// //               </Typography>

// //               <Typography
// //                 sx={{
// //                   color: "#051932",
// //                   mb: 2,
// //                 }}
// //               >
// //                 📞 +91 9876543210
// //               </Typography>

// //               <Typography
// //                 sx={{
// //                   color: "#051932",
// //                   lineHeight: 1.8,
// //                 }}
// //               >
// //                 India’s trusted platform for business registration and legal
// //                 compliance services.
// //               </Typography>
// //               </Box>
// //             </Grid2>
// //           </Grid2>

// //           <Divider
// //             sx={{
// //               borderColor: "rgba(255,255,255,0.08)",
// //               my: 4,
// //             }}
// //           />

// //           {/* Bottom Bar */}
// //           <Box
// //             sx={{
// //               display: "flex",
// //               justifyContent: { xs: 'center', md: 'space-between' },
// //               alignItems: "center",
// //               flexWrap: "wrap",
// //               gap: 2,
// //               flexDirection: { xs: 'column', md: 'row' },
// //               textAlign: { xs: 'center', md: 'left' },
// //             }}
// //           >
// //             <Typography
// //               sx={{
// //                 color: "#051932",
// //               }}
// //             >
// //               © {new Date().getFullYear()} Burnix. All Rights Reserved.
// //             </Typography>

// //             <Stack direction="row" spacing={3}>
// //               <MuiLink
// //                 href="/privacy-policy"
// //                 underline="none"
// //                 sx={{
// //                   color: "#051932",
// //                   "&:hover": {
// //                     color: "#ff7a1a",
// //                   },
// //                 }}
// //               >
// //                 Privacy Policy
// //               </MuiLink>

// //               <MuiLink
// //                 href="/terms-condition"
// //                 underline="none"
// //                 sx={{
// //                   color: "#051932",
// //                   "&:hover": {
// //                     color: "#ff7a1a",
// //                   },
// //                 }}
// //               >
// //                 Terms & Conditions
// //               </MuiLink>
// //             </Stack>
// //           </Box>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // }

// // /* ---------------- Components ---------------- */

// // function FooterHeading({ title }: { title: string }) {
// //   return (
// //     <Typography
// //       sx={{
// //         fontSize: "20px",
// //         fontWeight: 700,
// //         color: "#051932",
// //         mb: 3,
// //         position: "relative",
// //         textAlign: { xs: 'center', md: 'left' },

// //         "&::after": {
// //           content: '""',
// //           position: "absolute",
// //           bottom: -8,
// //           left: { xs: '50%', md: 0 },
// //           transform: { xs: 'translateX(-50%)', md: 'none' },
// //           width: 40,
// //           height: 3,
// //           borderRadius: "20px",
// //           background: "#ff7a1a",
// //         },
// //       }}
// //     >
// //       {title}
// //     </Typography>
// //   );
// // }

// // function FooterLink({
// //   href,
// //   children,
// // }: {
// //   href: string;
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <MuiLink
// //       component={Link}
// //       href={href}
// //       underline="none"
// //       sx={{
// //         display: "block",
// //         mb: 1.5,
// //         color: "#051932",
// //         transition: ".3s",
// //         "&:hover": {
// //           color: "#ff7a1a",
// //           transform: "translateX(5px)",
// //         },
// //       }}
// //     >
// //       {children}
// //     </MuiLink>
// //   );
// // }
// "use client";

// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Link as MuiLink,
//   Stack,
//   Divider,
// } from "@mui/material";
// import { Grid as Grid2 } from "@mui/system";
// import Link from "next/link";
// import Image from "next/image";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";

// // ── Nav data (all categories + links) ──────────────────────────────────────
// const navData = [
//   {
//     label: "Registrations",
//     megaMenu: [
//       {
//         title: "Company Registration",
//         items: [
//           { label: "Private Limited Company", href: "/registrations/private-limited" },
//           { label: "Public Limited Company", href: "/registrations/public-limited" },
//           { label: "One Person Company", href: "/registrations/opc" },
//           { label: "Partnership Firm", href: "/registrations/partnership" },
//         ],
//       },
//       {
//         title: "Other Registrations",
//         items: [
//           { label: "GST Registration", href: "/registrations/gst" },
//           { label: "FSSAI License", href: "/registrations/fssai" },
//           { label: "MSME Registration", href: "/registrations/msme" },
//           { label: "Trade License", href: "/registrations/trade" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Compliance",
//     href: "/compliance",
//     megaMenu: [
//       {
//         title: "Annual Compliance",
//         items: [
//           { label: "Annual Return Filing", href: "/compliance/annual-return" },
//           { label: "Audit & Accounts", href: "/compliance/audit" },
//           { label: "Tax Filing", href: "/compliance/tax-filing" },
//           { label: "ROC Filing", href: "/compliance/roc-filing" },
//         ],
//       },
//       {
//         title: "Quarterly Compliance",
//         items: [
//           { label: "GST Returns", href: "/compliance/gst-returns" },
//           { label: "TDS Returns", href: "/compliance/tds-returns" },
//           { label: "Form 15CA/15CB", href: "/compliance/form-15ca" },
//           { label: "Monthly Filings", href: "/compliance/monthly" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "IPR",
//     href: "/ipr",
//     megaMenu: [
//       {
//         title: "Intellectual Property",
//         items: [
//           { label: "Trademark Registration", href: "/ipr/trademark" },
//           { label: "Patent Filing", href: "/ipr/patent" },
//           { label: "Copyright Registration", href: "/ipr/copyright" },
//           { label: "Design Registration", href: "/ipr/design" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Taxation",
//     href: "/taxation",
//     megaMenu: [
//       {
//         title: "Tax Services",
//         items: [
//           { label: "Income Tax Filing", href: "/taxation/income-tax" },
//           { label: "Corporate Tax", href: "/taxation/corporate-tax" },
//           { label: "Tax Planning", href: "/taxation/tax-planning" },
//           { label: "Transfer Pricing", href: "/taxation/transfer-pricing" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Consultation",
//     href: "/consultation",
//     megaMenu: [
//       {
//         title: "Consultation Services",
//         items: [
//           { label: "Business Consultation", href: "/consultation/business" },
//           { label: "Tax Consultation", href: "/consultation/tax" },
//           { label: "Compliance Consultation", href: "/consultation/compliance" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "More",
//     href: "/more",
//     megaMenu: [
//       {
//         title: "Additional Services",
//         items: [
//           { label: "About Us", href: "/more/about" },
//           { label: "Our Team", href: "/more/team" },
//           { label: "Careers", href: "/more/careers" },
//           { label: "Blog", href: "/more/blog" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Contact Us",
//     href: "/contact",
//     megaMenu: [
//       {
//         title: "Contact Options",
//         items: [
//           { label: "Get in Touch", href: "/contact" },
//           { label: "Request Callback", href: "/contact/callback" },
//           { label: "Visit Office", href: "/contact/visit" },
//           { label: "Support", href: "/contact/support" },
//         ],
//       },
//     ],
//   },
// ];

// // ── Helper: flatten all megaMenu groups for a nav item ─────────────────────
// function getAllGroups() {
//   return navData.flatMap((nav) => nav.megaMenu);
// }

// export default function Footer() {
//   const allGroups = getAllGroups();

//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 10 },
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Box
//           sx={{
//             backdropFilter: "blur(20px)",
//             background: "rgba(255,255,255,0.03)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: "30px",
//             p: { xs: 3, md: 5 },
//             boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
//           }}
//         >
//           {/* ── TOP ROW: Logo + all nav categories ─────────────────────── */}
//           <Grid2 container spacing={{ xs: 4, md: 5 }}>

//             {/* Logo + About */}
//             <Grid2 size={{ xs: 12, md: 3 }}>
//               <Box sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>
//                 <Image
//                   src="/images/logo.webp"
//                   alt="Burnix"
//                   width={220}
//                   height={60}
//                   style={{ maxWidth: "100%", objectFit: "contain" }}
//                 />
//               </Box>

//               <Typography
//                 sx={{
//                   color: "#051932",
//                   lineHeight: 1.8,
//                   fontSize: "15px",
//                   textAlign: { xs: "center", md: "left" },
//                 }}
//               >
//                 Burnix helps startups, entrepreneurs and businesses with
//                 company registration, GST registration, trademark registration,
//                 annual compliance and legal solutions across India.
//               </Typography>

//               <Stack
//                 direction="row"
//                 spacing={2}
//                 sx={{ mt: 4, justifyContent: { xs: "center", md: "flex-start" } }}
//               >
//                 {[
//                   <FacebookIcon key="fb" />,
//                   <XIcon key="x" />,
//                   <LinkedInIcon key="ln" />,
//                   <InstagramIcon key="ig" />,
//                 ].map((icon, i) => (
//                   <Box
//                     key={i}
//                     sx={{
//                       width: 45,
//                       height: 45,
//                       borderRadius: "50%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#051932",
//                       cursor: "pointer",
//                       transition: ".3s",
//                       "&:hover": {
//                         background: "#ff7a1a",
//                         transform: "translateY(-4px)",
//                       },
//                     }}
//                   >
//                     {icon}
//                   </Box>
//                 ))}
//               </Stack>
//             </Grid2>

//             {/* Nav category columns — each navData item gets its own column */}
//             {navData.map((nav) => (
//               <Grid2
//                 key={nav.label}
//                 size={{ xs: 6, sm: 4, md: "auto" }}
//                 sx={{ flexGrow: 1 }}
//               >
//                 <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
//                   {/* Category heading — links to top-level href if available */}
//                   <FooterHeading
//                     title={nav.label}
//                     href={nav.href}
//                   />

//                   {/* All sub-items from every megaMenu group under this category */}
//                   {nav.megaMenu.map((group) => (
//                     <Box key={group.title} sx={{ mb: 2 }}>
//                       {/* Group subtitle */}
//                       <Typography
//                         sx={{
//                           fontSize: "11px",
//                           fontWeight: 700,
//                           textTransform: "uppercase",
//                           letterSpacing: "0.08em",
//                           color: "#ff7a1a",
//                           mb: 1,
//                           textAlign: { xs: "center", md: "left" },
//                         }}
//                       >
//                         {group.title}
//                       </Typography>

//                       {group.items.map((item) => (
//                         <FooterLink key={item.href} href={item.href}>
//                           {item.label}
//                         </FooterLink>
//                       ))}
//                     </Box>
//                   ))}
//                 </Box>
//               </Grid2>
//             ))}

//           </Grid2>

//           {/* ── CONTACT ROW ─────────────────────────────────────────────── */}
//           <Box
//             sx={{
//               mt: 5,
//               pt: 4,
//               borderTop: "1px solid rgba(0,0,0,0.07)",
//               display: "flex",
//               flexWrap: "wrap",
//               gap: { xs: 2, md: 6 },
//               justifyContent: { xs: "center", md: "flex-start" },
//             }}
//           >
//             <Typography sx={{ color: "#051932" }}>📧 info@burnix.in</Typography>
//             <Typography sx={{ color: "#051932" }}>📞 +91 9876543210</Typography>
//             <Typography sx={{ color: "#051932", maxWidth: 380, textAlign: { xs: "center", md: "left" } }}>
//               India's trusted platform for business registration and legal compliance services.
//             </Typography>
//           </Box>

//           <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 4 }} />

//           {/* ── BOTTOM BAR ──────────────────────────────────────────────── */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: { xs: "center", md: "space-between" },
//               alignItems: "center",
//               flexWrap: "wrap",
//               gap: 2,
//               flexDirection: { xs: "column", md: "row" },
//               textAlign: { xs: "center", md: "left" },
//             }}
//           >
//             <Typography sx={{ color: "#051932" }}>
//               © {new Date().getFullYear()} Burnix. All Rights Reserved.
//             </Typography>

//             <Stack direction="row" spacing={3}>
//               <MuiLink
//                 href="/privacy-policy"
//                 underline="none"
//                 sx={{ color: "#051932", "&:hover": { color: "#ff7a1a" } }}
//               >
//                 Privacy Policy
//               </MuiLink>
//               <MuiLink
//                 href="/terms-condition"
//                 underline="none"
//                 sx={{ color: "#051932", "&:hover": { color: "#ff7a1a" } }}
//               >
//                 Terms & Conditions
//               </MuiLink>
//             </Stack>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// /* ── Sub-components ─────────────────────────────────────────────────────── */

// function FooterHeading({ title, href }: { title: string; href?: string }) {
//   const inner = (
//     <Typography
//       sx={{
//         fontSize: "18px",
//         fontWeight: 700,
//         color: "#051932",
//         mb: 3,
//         position: "relative",
//         textAlign: { xs: "center", md: "left" },
//         cursor: href ? "pointer" : "default",
//         "&:hover": href ? { color: "#ff7a1a" } : {},
//         "&::after": {
//           content: '""',
//           position: "absolute",
//           bottom: -8,
//           left: { xs: "50%", md: 0 },
//           transform: { xs: "translateX(-50%)", md: "none" },
//           width: 40,
//           height: 3,
//           borderRadius: "20px",
//           background: "#ff7a1a",
//         },
//       }}
//     >
//       {title}
//     </Typography>
//   );

//   if (href) {
//     return (
//       <MuiLink component={Link} href={href} underline="none">
//         {inner}
//       </MuiLink>
//     );
//   }
//   return inner;
// }

// function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <MuiLink
//       component={Link}
//       href={href}
//       underline="none"
//       sx={{
//         display: "block",
//         mb: 1,
//         color: "#051932",
//         fontSize: "13px",
//         transition: ".3s",
//         textAlign: { xs: "center", md: "left" },
//         "&:hover": {
//           color: "#ff7a1a",
//           transform: "translateX(5px)",
//         },
//       }}
//     >
//       {children}
//     </MuiLink>
//   );
// }
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
import Link from "next/link";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// ── Nav data ────────────────────────────────────────────────────────────────
const navData = [
  {
    label: "REGISTRATIONS",
    href: "/registrations",
    items: [
      { label: "Private Limited Company", href: "/registrations/private-limited" },
      { label: "Public Limited Company", href: "/registrations/public-limited" },
      { label: "One Person Company", href: "/registrations/opc" },
      { label: "Partnership Firm", href: "/registrations/partnership" },
      { label: "GST Registration", href: "/registrations/gst" },
      { label: "FSSAI License", href: "/registrations/fssai" },
      { label: "MSME Registration", href: "/registrations/msme" },
      { label: "Trade License", href: "/registrations/trade" },
    ],
  },
  {
    label: "COMPLIANCE",
    href: "/compliance",
    items: [
      { label: "Annual Return Filing", href: "/compliance/annual-return" },
      { label: "Audit & Accounts", href: "/compliance/audit" },
      { label: "Tax Filing", href: "/compliance/tax-filing" },
      { label: "ROC Filing", href: "/compliance/roc-filing" },
      { label: "GST Returns", href: "/compliance/gst-returns" },
      { label: "TDS Returns", href: "/compliance/tds-returns" },
      { label: "Form 15CA/15CB", href: "/compliance/form-15ca" },
      { label: "Monthly Filings", href: "/compliance/monthly" },
    ],
  },
  {
    label: "IPR",
    href: "/ipr",
    items: [
      { label: "Trademark Registration", href: "/ipr/trademark" },
      { label: "Patent Filing", href: "/ipr/patent" },
      { label: "Copyright Registration", href: "/ipr/copyright" },
      { label: "Design Registration", href: "/ipr/design" },
    ],
  },
  {
    label: "TAXATION",
    href: "/taxation",
    items: [
      { label: "Income Tax Filing", href: "/taxation/income-tax" },
      { label: "Corporate Tax", href: "/taxation/corporate-tax" },
      { label: "Tax Planning", href: "/taxation/tax-planning" },
      { label: "Transfer Pricing", href: "/taxation/transfer-pricing" },
    ],
  },
  {
    label: "CONSULTATION",
    href: "/consultation",
    items: [
      { label: "Business Consultation", href: "/consultation/business" },
      { label: "Tax Consultation", href: "/consultation/tax" },
      { label: "Compliance Consultation", href: "/consultation/compliance" },
    ],
  },
  {
    label: "MORE",
    href: "/more",
    items: [
      { label: "About Us", href: "/more/about" },
      { label: "Our Team", href: "/more/team" },
      { label: "Careers", href: "/more/careers" },
      { label: "Blog", href: "/more/blog" },
    ],
  },
  {
    label: "CONTACT US",
    href: "/contact",
    items: [
      { label: "Get in Touch", href: "/contact" },
      { label: "Request Callback", href: "/contact/callback" },
      { label: "Visit Office", href: "/contact/visit" },
      { label: "Support", href: "/contact/support" },
    ],
  },
];

const socialIcons = [
  { icon: <FacebookIcon />, href: "#" },
  { icon: <XIcon />, href: "#" },
  { icon: <LinkedInIcon />, href: "#" },
  { icon: <InstagramIcon />, href: "#" },
    ];

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        color: "black",
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: "5%" } }}>

        {/* ── Main body: sidebar + categories ─────────────────────────── */}
        <Box
          sx={{
            
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 0 },
          }}
        >

          {/* ── LEFT SIDEBAR ─────────────────────────────────────────── */}
          <Box
            sx={{
              width: { xs: "100%", md: "220px" },
              flexShrink: 0,
              pr: { md: 4 },
              textAlign: { xs: "center", md: "left" },
              borderRight: { md: "1px solid rgba(255,255,255,0.08)" },
            }}
          >
            {/* Logo */}
            <Box sx={{ mb: 3 }}>
              <Image
                src="/images/logo.webp"
                alt="Burnix"
                width={180}
                height={50}
                style={{ maxWidth: "100%", objectFit: "contain" }}
              />
            </Box>

            {/* About text */}
            <Typography
              sx={{
                fontSize: "13px",
                lineHeight: 1.8,
                color: "black",
                mb: 3,
              }}
            >
              Burnix helps startups, entrepreneurs and businesses with company
              registration, GST, trademark, annual compliance and legal
              solutions across India.
            </Typography>

            {/* Contact info */}
            <Typography sx={{ fontSize: "13px", color: "black", mb: 1 }}>
              📧 info@burnix.in
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "black", mb: 3 }}>
              📞 +91 9876543210
            </Typography>

            {/* Quick links */}
            {["About Us", "Blog", "Guides", "Contact Us"].map((label) => (
              <MuiLink
                key={label}
                component={Link}
                href={`/${label.toLowerCase().replace(" ", "-")}`}
                underline="none"
                sx={{
                  display: "block",
                  color: "black",
                  fontSize: "13px",
                  mb: 1,
                  textAlign: { xs: "center", md: "left" },
                  "&:hover": { color: "#ff7a1a" },
                }}
              >
                {label}
              </MuiLink>
            ))}

            {/* Social icons */}
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                mt: 3,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {socialIcons.map(({ icon, href }, i) => (
                <MuiLink
                  key={i}
                  href={href}
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    transition: ".3s",
                    "&:hover": {
                      background: "#ff7a1a",
                      borderColor: "#ff7a1a",
                      color: "#fff",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {React.cloneElement(icon as React.ReactElement, )}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* ── RIGHT: Categories stacked ────────────────────────────── */}
          <Box sx={{ flex: 1, pl: { md: 5 } }}>
            {navData.map((section, si) => (
              <Box key={section.label} sx={{ mb: si < navData.length - 1 ? 5 : 0 }}>

                {/* Category heading + full-width divider */}
                <MuiLink
                  component={Link}
                  href={section.href}
                  underline="none"
                  sx={{
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em", 
                    color: "#ed3c0a",
                    mb: 1.5,
                    "&:hover": { color: "#ff7a1a" },
                  }}
                >
                  {section.label}
                </MuiLink>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", mb: 2.5 }} />

                {/* Links grid — 4 columns on desktop, 2 on mobile */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr 1fr",
                      sm: "repeat(3, 1fr)",
                      md: "repeat(4, 1fr)",
                    },
                    gap: { xs: "8px 12px", md: "10px 16px" },
                  }}
                >
                  {section.items.map((item) => (
                    <MuiLink
                      key={item.href}
                      component={Link}
                      href={item.href}
                      underline="none"
                      sx={{
                        color: "black",
                        fontSize: "13px",
                        lineHeight: 1.5,
                        transition: ".2s",
                        "&:hover": { color: "#ff7a1a" },
                      }}
                    >
                      {item.label}
                    </MuiLink>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mt: 6, mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "black", fontSize: "13px" }}>
            © {new Date().getFullYear()} Burnix. All Rights Reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-condition" },
            ].map(({ label, href }) => (
              <MuiLink
                key={href}
                href={href}
                underline="none"
                sx={{
                  color: "black",
                  fontSize: "13px",
                  "&:hover": { color: "#ff7a1a" },
                }}
              >
                {label}
              </MuiLink>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
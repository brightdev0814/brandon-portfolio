"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
  Grid,
  Divider,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

const Footer = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      href: "https://github.com/bleeclark",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/brandonclarkswift",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      href: "https://x.com/theamazingclark",
      label: "Twitter",
    },
  ];

  const contactInfo = [
    { icon: <EmailIcon />, text: "brandonclarktech@gmail.com" },
    { icon: <PhoneIcon />, text: "+1 (917)-733-7651" },
    { icon: <LocationIcon />, text: "New York, NY" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        borderTop: "1px solid rgba(99, 102, 241, 0.1)",
        mt: "auto",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6, lg: 8, xl: 9 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              Brandon L. Clark
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Seasoned Software Engineer with 8+ years of experience in
              developing scalable enterprise integrations and cloud-based
              solutions.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component={Link}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Information
            </Typography>
            {contactInfo.map((info, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                {info.icon}
                <Typography variant="body2" color="text.secondary">
                  {info.text}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(99, 102, 241, 0.1)" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Brandon L. Clark. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

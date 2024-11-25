import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        About Geek Central
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Who We Are
        </Typography>
        <Typography paragraph>
          Geek Central is your ultimate destination for all things tech, gaming,
          and pop culture. Founded by passionate geeks for geeks, we strive to
          create a vibrant community where enthusiasts can discover, discuss,
          and celebrate their favorite fandoms.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              To create an inclusive space where geek culture thrives,
              connecting people through their shared passions and providing
              access to the latest in tech, gaming, and entertainment.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Our Values
            </Typography>
            <Typography component="ul">
              <Box component="li">Community First</Box>
              <Box component="li">Passion for Innovation</Box>
              <Box component="li">Inclusivity & Diversity</Box>
              <Box component="li">Quality Content</Box>
              <Box component="li">Authentic Engagement</Box>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          What We Offer
        </Typography>
        <Typography paragraph>
          From the latest tech reviews and gaming news to in-depth discussions
          about your favorite sci-fi series, Geek Central is your one-stop
          destination. We host events, maintain an active community forum, and
          provide expert insights into the world of geek culture.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutPage;

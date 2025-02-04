<template>
    <v-container>
      <!-- Hero Section -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <v-img src="https://source.unsplash.com/1600x900/?earth,humanity" class="hero-image"></v-img>
          <h1 class="hero-title">About People Are Awesome</h1>
          <p class="hero-subtitle">
            Celebrating human achievements that inspire the world.
          </p>
        </v-col>
      </v-row>
  
      <!-- Mission Statement -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-4">
            <v-card-title>Our Mission</v-card-title>
            <v-card-text>
              "People Are Awesome" is dedicated to showcasing incredible feats of **human endurance, creativity, and determination**.
              From **ultra-endurance athletes** to **scientific pioneers**, we celebrate those who push the limits of what’s possible.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Meet the Team (Optional) -->
      <v-row justify="center" class="mt-4">
        <v-col cols="12" md="8">
          <v-card class="pa-4">
            <v-card-title>Meet the Team</v-card-title>
            <v-card-text>
              This project is powered by a global community of enthusiasts who believe in the **power of human achievement**.
              Join us in sharing stories that inspire!
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Contact & Social Media -->
      <v-row justify="center" class="mt-4">
        <v-col cols="12" md="8" class="text-center">
          <h2>Get in Touch</h2>
          <p>Follow us on social media or contribute to the project.</p>
          <v-btn icon href="https://twitter.com/" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon href="https://linkedin.com/" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "AboutPage"
  };
  </script>
  
  <style scoped>
  .hero-image {
    border-radius: 10px;
    max-height: 300px;
    object-fit: cover;
  }
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 10px;
  }
  .hero-subtitle {
    font-size: 1.2rem;
    color: #777;
    margin-bottom: 20px;
  }
  </style>
  
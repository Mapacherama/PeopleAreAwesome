<template>
    <v-app>
      <!-- Navbar -->
      <v-app-bar app color="grey-darken-4" dense dark>
        <v-toolbar-title>People Are Awesome</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/achievements">Explore</v-btn>
        <v-btn text to="/about">About</v-btn>
      </v-app-bar>
  
      <!-- Hero Section -->
      <v-container fluid class="hero-section">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="hero-title">Celebrating the Greatest Achievements of Humanity</h1>
            <p class="hero-subtitle">
              Discover the moments that changed the world, the people who inspired generations, and the incredible feats of human history.
            </p>
            <v-btn color="red-darken-4" x-large class="mt-4" to="/achievements">Get Inspired</v-btn>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Featured Achievements -->
      <v-container>
        <v-row>
          <v-col v-for="achievement in featuredAchievements" :key="achievement.id" cols="12" md="4">
            <v-card>
              <v-img :src="achievement.image" height="200px" cover></v-img>
              <v-card-title>{{ achievement.name }}</v-card-title>
              <v-card-subtitle>{{ achievement.category }} | {{ achievement.date }}</v-card-subtitle>
              <v-card-text>{{ achievement.description }}</v-card-text>
              <v-card-actions>
                <v-btn :href="achievement.source" target="_blank" color="red-darken-4">Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Footer -->
      <v-footer color="grey-darken-4" dark class="text-center pa-4">
        <v-container>
          <p>© 2025 People Are Awesome. Made with ❤️ for humanity.</p>
          <v-btn icon href="https://twitter.com/" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </v-container>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        featuredAchievements: [
          {
            id: 1,
            name: "Moon Landing",
            description: "First humans on the Moon - July 20, 1969.",
            category: "Science",
            date: "1969",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Apollo_11_Launch_-_GPN-2000-000630.jpg",
            source: "https://www.nasa.gov/mission_pages/apollo/apollo11.html"
          },
          {
            id: 2,
            name: "Mona Lisa Painted",
            description: "Leonardo da Vinci’s iconic painting.",
            category: "Art",
            date: "1503",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
            source: "https://en.wikipedia.org/wiki/Mona_Lisa"
          },
          {
            id: 3,
            name: "Internet Revolution",
            description: "The birth of the internet changed the world.",
            category: "Technology",
            date: "1983",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Internet_map_1024.jpg",
            source: "https://en.wikipedia.org/wiki/History_of_the_Internet"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Hero Section */
  .hero-section {
    background: url('https://source.unsplash.com/1600x900/?universe,stars') center/cover no-repeat;
    color: white;
    text-align: center;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-title {
    font-size: 2.5
  }
</style>
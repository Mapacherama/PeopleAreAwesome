<template>
    <v-container>
      <v-row>
        <v-col v-for="achievement in achievements" :key="achievement.id" cols="12" md="4">
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        achievements: [
          {
            id: 1,
            name: "Moon Landing",
            description: "The first humans landed on the Moon on July 20, 1969.",
            category: "Science",
            date: "1969-07-20",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Apollo_11_Launch_-_GPN-2000-000630.jpg",
            source: "https://www.nasa.gov/mission_pages/apollo/apollo11.html"
          },
          {
            id: 2,
            name: "Mona Lisa Painted",
            description: "Leonardo da Vinci completed the Mona Lisa, a masterpiece of the Renaissance.",
            category: "Art",
            date: "1503",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
            source: "https://en.wikipedia.org/wiki/Mona_Lisa"
          }
        ]
      };
    }
  };
  </script>
  
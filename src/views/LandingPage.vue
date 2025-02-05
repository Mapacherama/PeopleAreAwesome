<template>
  <v-app> 
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

    <!-- Featured Achievements Section (Fixed Padding) -->
    <v-container class="featured-section">
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
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      featuredAchievements: [
        {
          id: 1,
          name: "Pete Kostelnick – Fastest Run Across the USA",
          description: "🏁 Distance: 5,000 km (3,100 miles)\n⏳ Time: 42 days, 6 hours, 30 minutes\n🔥 Feat: Averaged 70+ miles per day (over two marathons daily).",
          category: "Ultra Running",
          date: "2016",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Ultrarunner_Pete_Kostelnick.jpg",
          source: "https://www.petekostelnick.com/"
        },
        {
          id: 2,
          name: "Mark Beaumont – Fastest Circumnavigation by Bicycle",
          description: "📍 Route: Around the world\n🏁 Distance: 29,000 km (18,000 miles)\n⏳ Time: 78 days, 14 hours, 40 minutes\n🔥 Feat: Averaged 370 km per day.",
          category: "Ultra Cycling",
          date: "2017",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Mark_Beaumont.jpg",
          source: "https://en.wikipedia.org/wiki/Mark_Beaumont_(cyclist)"
        },
        {
          id: 3,
          name: "Ross Edgley – First Person to Swim Around Great Britain",
          description: "📍 Route: Swam around the coast of Great Britain\n🏁 Distance: 3,218 km (2,000 miles)\n⏳ Time: 157 days\n🔥 Feat: Swam 6 hours on, 6 hours off every day.",
          category: "Extreme Swimming",
          date: "2018",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ross_Edgley.jpg",
          source: "https://www.redbull.com/gb-en/ross-edgley-great-british-swim"
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

/* Fixed Padding for Featured Section */
.featured-section {
  padding: 40px 0; /* Adjust spacing to prevent overlap */
}

.hero-title {
  font-size: 2.5rem;
}
</style>

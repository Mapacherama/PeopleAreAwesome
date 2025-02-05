<template>
  <v-container>
    <v-row>
      <v-col v-for="achievement in achievements" :key="achievement.id" cols="12" md="4">
        <v-card 
          class="achievement-card"
          :class="{ 'hovered': hoveredAchievement === achievement.id }"
          @mouseover="hoveredAchievement = achievement.id"
          @mouseleave="hoveredAchievement = null"
        >
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
      hoveredAchievement: null, // Track hovered card
      achievements: [
        {
          id: 1,
          name: "Dave Mackey – Ultra Champion Who Continued Running After Losing a Leg",
          description: "🏁 Races Completed: Leadville 100, Western States 100, Ultra-Trail du Mont-Blanc (UTMB)\n🔥 Feat: After a mountain running accident crushed his leg, he chose amputation over reconstruction to continue competing.\n✨ Remarkable Achievement: Became the first amputee to finish Leadman (Leadville 100 + multiple ultras & bike races in one season).",
          category: "Ultra Running",
          date: "2017",
          image: "https://trailrunnermag.com/wp-content/uploads/2021/10/Dave-Mackey-by-Andy-Wickstrom-1.jpg",
          source: "https://www.trailrunnermag.com/people/dave-mackey-ultrarunning-amputee-comeback/"
        },
        {
          id: 2,
          name: "Juliana Buhring – First Woman to Circumnavigate the World by Bike",
          description: "🏁 Distance: 29,000 km (18,000 miles)\n⏳ Time: 152 days\n🔥 Feat: Had no prior cycling experience before setting the world record.",
          category: "Ultra Cycling",
          date: "2012",
          image: "https://www.julianabuhring.com/wp-content/uploads/2016/12/Juliana-Buhring.jpg",
          source: "https://www.julianabuhring.com/books/"
        },
        {
          id: 3,
          name: "Justin Gallegos – First Pro Nike Runner with Cerebral Palsy",
          description: "🏁 Feat: Completed multiple half marathons & marathons despite muscle coordination challenges from cerebral palsy.\n🔥 First-ever Nike athlete with CP, proving that ultra-endurance is a mindset, not just a physical ability.",
          category: "Ultra Running",
          date: "2018",
          image: "https://www.runnersworld.com/wp-content/uploads/2018/10/justin-gallegos-nike.jpg",
          source: "https://www.runnersworld.com/news/a23699817/justin-gallegos-nike-professional-runner/"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Base card style */
.achievement-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
}

/* Hover effects */
.achievement-card:hover {
  transform: scale(1.05); /* Slight enlargement */
  box-shadow: 0px 10px 20px rgba(255, 0, 0, 0.5); /* Red glow effect */
}
</style>

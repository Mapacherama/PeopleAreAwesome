<template>
  <v-container>
    <h1 class="text-center mb-4">🏆 People Are Awesome - Leaderboard</h1>

    <!-- Search & Sort Controls -->
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field v-model="search" label="Search Achievements" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-select v-model="sortBy" :items="sortOptions" item-title="title" item-value="value" label="Sort By"
          @update:modelValue="sortBy = $event[0]"></v-select>

      </v-col>
    </v-row>

    <!-- Leaderboard Table -->
    <v-data-table :items="filteredAchievements" :headers="headers" :sort-by="sortBy"
      class="elevation-2 leaderboard-table">
      <template v-slot:item.rank="{ item }">
        <strong>#{{ item.rank }}</strong>
      </template>

      <template v-slot:item.image="{ item }">
        <v-avatar size="50" class="mx-auto">
          <img :src="item.image" alt="Achievement" class="leaderboard-image">
        </v-avatar>
      </template>

      <template v-slot:item.name="{ item }">
        <strong class="truncate-text">{{ item.name }}</strong>
      </template>

      <template v-slot:item.distance="{ item }">
        {{ item.distance }} km
      </template>

      <template v-slot:item.date="{ item }">
        {{ item.date }}
      </template>

      <template v-slot:item.link="{ item }">
        <v-btn icon :href="item.link" target="_blank">
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      sortBy: [{ key: "distance", order: "asc" }], // ✅ Vuetify expects an array
      sortOptions: [
        { title: "Rank", value: [{ key: "rank", order: "asc" }] },
        { title: "Name", value: [{ key: "name", order: "asc" }] },
        { title: "Distance", value: [{ key: "distance", order: "asc" }] },
        { title: "Date", value: [{ key: "date", order: "asc" }] }
      ],
      headers: [
        { text: "#", value: "rank", width: "60px" },
        { text: "Image", value: "image", sortable: false, width: "80px" },
        { text: "Achievement", value: "name", width: "300px" },
        { text: "Category", value: "category", width: "150px" },
        { text: "Distance (km)", value: "distance", width: "120px" },
        { text: "Date", value: "date", width: "120px" },
        { text: "More Info", value: "link", sortable: false, width: "80px" }
      ],
      achievements: [
        {
          rank: 1,
          name: "Nedd Brockmann - Ran Across Australia",
          category: "Ultra Running",
          distance: 3953,
          date: "2022",
          image: "https://i.imgur.com/zvXb5LK.jpg",
          link: "https://www.neddbrockmann.com/"
        },
        {
          rank: 2,
          name: "Pete Kostelnick - Fastest USA Run",
          category: "Ultra Running",
          distance: 5000,
          date: "2016",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Ultrarunner_Pete_Kostelnick.jpg",
          link: "https://www.runnersworld.com/news/a20828478/ultrarunner-pete-kostelnick-smashes-record-for-run-across-u-s/"
        },
        {
          rank: 3,
          name: "Mark Beaumont - Fastest Bike Around World",
          category: "Cycling",
          distance: 29000,
          date: "2017",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Mark_Beaumont.jpg",
          link: "https://en.wikipedia.org/wiki/Mark_Beaumont_(cyclist)"
        },
        {
          rank: 4,
          name: "Ross Edgley - Swam Around Great Britain",
          category: "Swimming",
          distance: 3218,
          date: "2018",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ross_Edgley.jpg",
          link: "https://www.redbull.com/gb-en/ross-edgley-great-british-swim"
        },
        {
          rank: 5,
          name: "Jesper Olsen - Ran Around the World",
          category: "Ultra Running",
          distance: 26000,
          date: "2004-2005",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Jesper_Olsen.jpg",
          link: "https://www.worldrun.org/"
        }
      ]
    };
  },
  computed: {
    filteredAchievements() {
      return this.achievements.filter(achievement =>
        achievement.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
/* Ensure images align properly */
.leaderboard-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Ensure text doesn’t overflow */
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 280px;
  /* Adjust based on layout */
}

/* Ensure table row alignment */
.v-data-table>>>tr {
  height: 64px;
  /* Set row height */
  vertical-align: middle;
}

/* Improve leaderboard styling */
.leaderboard-table {
  background-color: #1e1e1e;
  /* Dark theme */
  border-radius: 10px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-align: center;
}
</style>
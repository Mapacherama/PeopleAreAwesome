<template>
  <v-app-bar app color="grey-darken-4" dense dark elevate-on-scroll>
    <!-- Clickable Title -->
    <router-link to="/" class="title-link">
      <v-toolbar-title class="title">People Are Awesome</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <v-btn text to="/achievements" class="nav-button d-none d-md-flex">Explore</v-btn>
    <v-btn text to="/about" class="nav-button d-none d-md-flex">About</v-btn>

    <!-- Mobile Menu -->
    <v-app-bar-nav-icon class="menu-icon d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item to="/achievements">
          <v-list-item-title>Explore</v-list-item-title>
        </v-list-item>
        <v-list-item to="/leaderboard">
          <v-list-item-title>Leaderboard</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      drawer: false, // Controls the mobile menu
    };
  },
};
</script>

<style scoped>
/* Clickable Title */
.title-link {
  text-decoration: none;
  color: white;
  transition: opacity 0.3s ease-in-out;
}

.title-link:hover {
  opacity: 0.9;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  cursor: pointer;
}

/* Navigation Buttons */
.nav-button {
  font-size: 1rem;
  text-transform: none;
  padding: 0 16px;
  transition: all 0.3s ease-in-out;
}

.nav-button:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

/* Mobile Menu Icon */
.menu-icon {
  transition: transform 0.3s ease-in-out;
}

.menu-icon:hover {
  transform: rotate(90deg);
}
</style>

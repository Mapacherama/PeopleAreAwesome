<template>
    <v-app-bar app color="grey-darken-4" dense dark>
      <!-- Clickable Title Linking to Home -->
      <router-link to="/" class="title-link">
        <v-toolbar-title class="title">People Are Awesome</v-toolbar-title>
      </router-link>
  
      <v-spacer></v-spacer>
  
      <!-- Desktop Navigation -->
      <v-btn text to="/achievements" class="d-none d-md-flex">Explore</v-btn>
      <v-btn text to="/about" class="d-none d-md-flex">About</v-btn>
  
      <!-- Mobile Menu -->
      <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
      <!-- Mobile Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" temporary right>
        <v-list>
          <v-list-item to="/achievements">
            <v-list-item-title>Explore</v-list-item-title>
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
        drawer: false // Controls the mobile menu
      };
    }
  };
  </script>
  
  <style scoped>
  /* Styling the Clickable Title */
  .title-link {
    text-decoration: none;
    color: white; /* Ensures color consistency */
  }
  
  .title-link:hover {
    opacity: 0.8;
  }
  
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  
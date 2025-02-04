<template>
    <v-app-bar app color="grey-darken-4" dense dark>
      <!-- Logo / Title -->
      <v-toolbar-title class="title">People Are Awesome</v-toolbar-title>
  
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
  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>
  
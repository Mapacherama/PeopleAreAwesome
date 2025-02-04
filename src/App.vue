<template>
  <v-app>
    <AppHeader />
    <router-view />
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import AppFooter from '@/components/AppFooter.vue';
  import AppHeader from '@/components/AppHeader.vue';
</script>

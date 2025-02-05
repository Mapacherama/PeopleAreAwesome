<template>
  <v-footer color="grey-darken-4" dark class="footer">
    <v-container class="text-center">
      <p class="footer-text">
        © 2025 People Are Awesome. Made with ❤️ for humanity.
      </p>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
/* Reduced Footer Height */
.footer {
  height: 40px; /* Reduced from 80px */
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 6px 0; /* Reduced padding */
}

/* Ensure page structure works properly */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Pushes main content up to allow footer to stay at bottom */
.v-main {
  flex: 1;
}

/* Footer text styling */
.footer-text {
  font-size: 12px; /* Slightly smaller font */
  margin-bottom: 4px;
}
</style>

<template>
  <v-footer color="grey-darken-4" dark class="footer">
    <v-container class="text-center">
      <p class="footer-text">
        © 2025 People Are Awesome. Made with ❤️ for humanity.
      </p>
      <v-row justify="center" align="center" class="social-icons">
        <v-btn icon href="https://twitter.com/" target="_blank">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon href="https://linkedin.com/" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
/* Make sure the footer stays at the bottom */
.footer {
  position: relative;
  width: 100%;
  bottom: 0;
  padding: 20px 0;
}

/* Ensure the page takes at least full height */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Push the footer to the bottom */
.v-main {
  flex: 1;
}

/* Styling for text */
.footer-text {
  margin-bottom: 12px;
  font-size: 14px;
}

/* Social media icons styling */
.social-icons .v-btn {
  margin: 0 8px; /* Adds spacing between social media icons */
}
</style>

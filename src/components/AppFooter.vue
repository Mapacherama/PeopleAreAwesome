<template>
  <v-footer color="grey-darken-4" dark class="footer">
    <v-container class="text-center">
      <p class="footer-text">
        © 2025 People Are Awesome. Made with ❤️ for humanity.
      </p>
      <v-row justify="center" align="center" class="social-icons">
        <v-col cols="auto">
          <v-btn icon href="https://twitter.com/" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn icon href="https://github.com/" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn icon href="https://linkedin.com/" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-col>
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
/* Footer Styling */
.footer {
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px 0;
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
  font-size: 14px;
  margin-bottom: 8px;
}

/* Ensure proper spacing between icons */
.social-icons {
  margin-top: 4px;
}

.social-icons .v-btn {
  margin: 0 6px;
  min-width: 40px; /* Ensures buttons are not too small */
}

@media (max-width: 600px) {
  /* Smaller spacing for mobile */
  .social-icons .v-btn {
    margin: 0 4px;
  }
  .footer {
    height: auto;
    padding: 16px 0;
  }
}
</style>

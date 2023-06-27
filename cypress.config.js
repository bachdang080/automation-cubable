const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  
    // // kiểm tra có cần đăng nhập không
      // "env": {
      //   "loggedIn": "true"
      //  }
});

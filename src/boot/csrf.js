// src/boot/csrf.js

export default ({ app }) => {
    // Retrieve CSRF token from the meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
    // Make the token globally available (e.g., through Axios or app.config.globalProperties)
    app.config.globalProperties.$csrfToken = csrfToken;
  
    // Set it as the default header for Axios
    app.config.globalProperties.$axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
  };
  
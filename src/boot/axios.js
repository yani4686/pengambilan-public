import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = axios.create({
  // baseURL: "https://portal.unisza.edu.my/api-aims/",
  baseURL: "http://localhost:9000/api",
});

// const api = axios.create({
//   baseURL: 'http://localhost/pascav2/public',
//   timeout: 10000, // 10 seconds
//   });

  axios.defaults.headers.common['Content-Type'] = 'application/json';

// api.get("/retpermohonan")
//   .then((response) => {
//     console.log("API Response dr AXIOS:", response.data);
//   })
//   .catch((error) => {
//     console.error("API Error:", error);
//   });

// const api = axios.create({ baseURL: "http://localhost/aims/public" });
// const api = axios.create({
//   baseURL: 'http://localhost/pascav2/public',
//   timeout: 10000, // 10 seconds
//   });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  // Retrieve CSRF token from the meta tag
  //const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
  // Make the token globally available (e.g., through Axios or app.config.globalProperties)
  //app.config.globalProperties.$csrfToken = csrfToken;

  // Set it as the default header for Axios
  //app.config.globalProperties.$axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
  //console.log(axios.defaults.headers.common);

  
  
});

api.interceptors.request.use(function (config) {
  // console.log("request");
  let token = sessionStorage.getItem("token");
  config.headers["Authorization"] = "bearer " + token;
  return config;
});

// Retrieve CSRF token from meta tag
//const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// Set CSRF token as default header
//api.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

export { api };

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Default route will point to LoginPagePublic.vue
      { path: 'login', component: () => import('pages/login/LoginPagePublic.vue') },
      
      // Route for Sign Up page
      { path: '/signup', component: () => import('pages/login/SignUp.vue') },

      // Route for Main page
      { path: '/dashboard', component: () => import('pages/dashboardpublic/DashboardPublic.vue') },

      // Route for Main page
      { path: '/apply', component: () => import('pages/form/ApplyForm.vue') },

       // Route for Main page
       { path: '/accept', component: () => import('pages/form/AcceptForm.vue') },

        // Route for Main page
        { path: '/summary', component: () => import('pages/form/SummaryForm.vue') },
      
      
      // Optionally, you can include Forgot Password route if needed
      // { path: '/forgot-password', component: () => import('pages/ForgotPassword.vue') },
    ],
  },

  // You can define a route for any 404 pages if needed
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

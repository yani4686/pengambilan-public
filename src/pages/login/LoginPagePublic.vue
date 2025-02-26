<template>
  <q-page class="flex flex-center">
    <!-- Login Card with Background Image -->
    <q-card class="login-card" style="width: 400px; max-width: 100%; margin: 10px;">
      <!-- Background Image -->
      <q-card-section
        class="d-flex flex-center flex-column"
        style="background-image: url('http://localhost/pascav2/assets/media/bg/bg-3.jpg'); background-size: cover; height: 100%;"
      >
        <img src="http://localhost/pascav2/assets/images/logounisza.png" alt="Logo" class="logo-image mb-4" />
        <div class="text-h6 mb-2">Welcome! Please Login Here</div>
        <div class="text-muted font-weight-bold mb-4">Enter your details to login to your account</div>

        <!-- Login Form -->
        <q-form @submit.prevent="handleLogin" ref="loginForm">
          <q-input
            v-model="username"
            filled
            label="Username"
            :rules="[val => !!val || 'Username is required']"
            class="q-mb-md"
          />
          <q-input
            v-model="password"
            filled
            type="password"
            label="Password"
            :rules="[val => !!val || 'Password is required']"
            class="q-mb-md"
          />
          <q-btn
            label="Log In"
            color="primary"
            type="submit"
            class="full-width q-mt-md"
          />
        </q-form>

        <!-- Forgot Password Link -->
        <q-btn flat label="Forgot Password?" @click="goToForgotPassword" class="q-mt-md" />
        <div class="q-mt-md">
          <span>New here? </span>
          <q-btn flat label="Create New Account" @click="goToSignUp" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'LoginPage',
  setup() {
    const username = ref('');
    const password = ref('');

    // Handle login form submission
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost/pascav2/public/regnewloginq', {
          username: username.value,
          password: password.value
        });

        // Check the response and show alert accordingly
        if (response.data.success === 'ok') {
          Swal.fire('Success', 'Login successful!', 'success').then(() => {
            window.location = '/dashboard'; // Redirect to dashboard after success
          });
        } else if (response.data.success === 'ko') {
          Swal.fire('Error', 'Invalid credentials, please try again.', 'error');
        } else {
          Swal.fire('Error', 'Something went wrong, please try again later.', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'Unable to connect to the server.', 'error');
      }
    };

    // Go to forgot password page
    const goToForgotPassword = () => {
      window.location = '/forgot-password';
    };

    // Go to sign-up page
    const goToSignUp = () => {
      window.location = '/signup';
    };

    return {
      username,
      password,
      handleLogin,
      goToForgotPassword,
      goToSignUp
    };
  }
};
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 500px;
}

.logo-image {
  max-height: 75px;
  max-width: 100%;
  object-fit: contain;
}
</style>

<template>
    <q-page class="flex flex-center">
      <!-- Sign Up Card -->
      <q-card class="signup-card" style="width: 400px; max-width: 100%; margin: 10px;">
        <!-- Background Image or Color -->
        <q-card-section class="d-flex flex-center flex-column">
          <img src="pascav2/assets/images/logounisza.png" alt="Logo" class="max-h-75px mb-4" />
          <div class="text-h6 mb-2">Create Your Account</div>
          <div class="text-muted font-weight-bold mb-4">Enter your details to sign up</div>
  
          <!-- Sign Up Form -->
          <q-form @submit.prevent="handleSignUp" ref="signUpForm">
            <!-- Nationality Radio Buttons -->
            <div class="q-mb-md">
              <q-radio
                v-model="nationality"
                label="Malaysian"
                val="1"
                color="primary"
                class="q-mb-md"
              />
              <q-radio
                v-model="nationality"
                label="Non Malaysian"
                val="2"
                color="primary"
                class="q-mb-md"
              />
            </div>
  
            <!-- IC No / Passport No Input -->
            <q-input
              v-if="nationality === '1'"
              v-model="icNo"
              label="IC No"
              filled
              :rules="[val => !!val || 'IC No is required']"
              class="q-mb-md"
            />
            <q-input
              v-if="nationality === '2'"
              v-model="passportNo"
              label="Passport No"
              filled
              :rules="[val => !!val || 'Passport No is required']"
              class="q-mb-md"
            />
  
            <!-- Username Input -->
            <q-input
              v-model="username"
              label="Username"
              filled
              :rules="[val => !!val || 'Username is required']"
              class="q-mb-md"
            />
  
            <!-- Email Input -->
            <q-input
              v-model="email"
              label="Email"
              type="email"
              filled
              :rules="[val => !!val || 'Email is required']"
              class="q-mb-md"
            />
  
            <!-- Password Input -->
            <q-input
              v-model="password"
              label="Password"
              type="password"
              filled
              :rules="[val => !!val || 'Password is required']"
              class="q-mb-md"
            />
  
            <!-- Confirm Password Input -->
            <q-input
              v-model="confirmPassword"
              label="Confirm Password"
              type="password"
              filled
              :rules="[val => !!val || 'Confirm Password is required']"
              class="q-mb-md"
            />
  
            <!-- Sign Up and Cancel Buttons -->
            <q-btn label="Sign Up" color="primary" type="submit" class="full-width q-mt-md" />
            <q-btn flat label="Cancel" @click="cancelSignUp" class="full-width q-mt-md" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'SignUpPage',
    setup() {
      // Form state
      const nationality = ref('1'); // Default is Malaysian
      const icNo = ref('');
      const passportNo = ref('');
      const username = ref('');
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
  
      // Handle sign up form submission
      const handleSignUp = async () => {
        if (password.value !== confirmPassword.value) {
          Swal.fire('Error', 'Passwords do not match', 'error');
          return;
        }
  
        try {
          const response = await axios.post('http://localhost/pascav2/public/regnewsignup', {
            nationality: nationality.value,
            icNo: icNo.value,
            passportNo: passportNo.value,
            username: username.value,
            email: email.value,
            password: password.value
          });
  
          if (response.data.success === 'ok') {
            Swal.fire('Success', 'Account created successfully!', 'success').then(() => {
              window.location = '/login'; // Redirect to login page after successful sign-up
            });
          } else {
            Swal.fire('Error', 'There was an issue creating your account. Please try again.', 'error');
          }
        } catch (error) {
          Swal.fire('Error', 'Unable to connect to the server.', 'error');
        }
      };
  
      // Cancel sign up (navigate back to login page)
      const cancelSignUp = () => {
        window.location = '/login';
      };
  
      return {
        nationality,
        icNo,
        passportNo,
        username,
        email,
        password,
        confirmPassword,
        handleSignUp,
        cancelSignUp
      };
    }
  };
  </script>
  
  <style scoped>
  .signup-card {
    width: 100%;
    max-width: 500px;
    padding: 20px;
  }
  </style>
  
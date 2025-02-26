<template>
  <q-layout>
    <q-page-container>
      <q-page class="custom-background">
        <div class="login-card-wrapper">
          <q-card class="login-card">
            <div class="row">
              <!-- First q-card-section with black background -->
              <q-card-section class="col-6 black-background">
                <!-- <div class="q-pa-md"> -->
                <img src="images/unisza_logo.png" class="adjusted-image" />
                <!-- <hr /> -->
                <!-- </div> -->
                <div class="line-container">
                  <div class="text-white" style="text-align: center">
                    SYSTEM
                    <!-- <q-icon name="check_circle" />
                    <span>Cookies must be enabled in your browser</span>
                    <q-icon name="help" />-->
                  </div>
                  <br />
                  <div style="text-align: center">
                    <span>OBE</span>
                  </div>
                  <div style="text-align: center">
                    <span>SPB</span>
                  </div>
                  <div style="text-align: center">
                    <span>U-Time</span>
                  </div>
                  <!-- <br />
                  <span class="text-white">Log in using your account on:</span>
                  <br />
                  <br /> -->
                </div>
                <br />
              </q-card-section>

              <!-- Second q-card-section -->
              <q-card-section class="col-6">
                <div class="q-pa-md">
                  <br />
                  <div>
                    <q-input
                      v-model="username"
                      label="Username"
                      outlined
                      dense
                      class="q-mb-md"
                      required
                    />
                    <q-input
                      v-model="password"
                      label="Password"
                      :type="showPassword ? 'text' : 'password'"
                      outlined
                      dense
                      class="q-mb-md"
                      required
                      @update:focused="onPasswordFocus"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="showPassword ? 'visibility' : 'visibility_off'"
                          class="cursor-pointer"
                          size="xs"
                          @click="togglePasswordVisibility"
                        />
                      </template>
                    </q-input>
                    <q-checkbox
                      v-model="rememberMe"
                      label="Remember me"
                      name="remember"
                      size="xs"
                    />
                    <br />

                    <q-btn
                      label="Login"
                      color="primary"
                      class="full-width q-mb-sm"
                      @click="onSubmit"
                    />
                    <div>
                      <span>Already have an account?</span>
                    </div>
                    <q-btn
                      @click="staffLogin"
                      color="primary"
                      class="full-width q-mb-sm"
                    >
                      <img
                        src="images/google-logo.png"
                        style="width: 20px; height: 20px"
                        alt="Google Icon"
                      />
                      <span>Login via UNISZA ID</span>
                    </q-btn>
                    <q-btn
                      flat
                      label="Forgotten your username or password?"
                      class="capitalize-btn"
                      @click="back"
                      to="/forgot-password"
                    />
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();

    const username = ref("");
    const password = ref("");
    const showPassword = ref(false); // Ensure this is reactive
    const rememberMe = ref(true);

    function staffLogin() {
      window.location.href =
        "https://portal.unisza.edu.my/sistem/modules/ssoaccess/postv2.php?link=";
    }

    function togglePasswordVisibility() {
      showPassword.value = !showPassword.value; // Toggle visibility
    }

    function onPasswordFocus(focused) {
      if (!focused) {
        showPassword.value = false;
      }
    }

    function onSubmit() {
      alert("Login submitted");
    }

    return {
      username,
      password,
      showPassword,
      rememberMe,
      staffLogin,
      togglePasswordVisibility, // Return the function from setup
      onPasswordFocus,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.q-pa-md {
  padding: 0px 0px;
}
.full-width {
  width: 100%;
}
.adjusted-image {
  width: 100%;
  height: auto;
  max-width: 400px;
  max-height: 100px;
  object-fit: contain;
  display: inline-block;
}
.custom-background {
  background-image: url("images/tasik-unisza2.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ensure the background takes the full viewport height */
  padding: 0; /* Remove any default padding */
  margin: 0; /* Remove any default margin */
}

.q-page {
  min-height: 100vh; /* Ensure the page takes the full viewport height */
  padding: 0; /* Remove padding from the q-page */
  margin: 0; /* Remove any margin */
}

.login-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* Ensures the card is centered vertically */
}
.vertical-line {
  width: 2px;
  background-color: #000;
  height: 100px;
  margin: 0;
}
.login-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh; /* Centers vertically on large screens */
}

.login-card {
  width: 100%;
  max-width: 900px;
  height: 350px;
  /* box-shadow: 0px 4px 10px rgba(105, 103, 103, 0.1); */
  background-color: rgba(234, 228, 228, 0.738);
}
.black-background {
  background-color: black;
  color: white;
  height: 350px;
}
.capitalize-btn {
  text-transform: capitalize;
}

/* On medium and smaller screens, push the card slightly towards the top */
/* @media (max-width: 1024px) {
  .login-card-wrapper {
    align-items: flex-start;
    padding-top: 20px;
  }
} */
/* .q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 50px;
} */
</style>

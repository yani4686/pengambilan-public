<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center custom-background">
        <q-card
          class="absolute translucent-card"
          style="width: 450px; height: 480px"
        >
          <q-card-section class="text-center card-bg">
            <div class="q-pa-md">
              <div class="q-pa-md">
                <img src="~assets/logo_unisza.png" class="adjusted-image" />
              </div>
              <span class="text-h6"><b>Reset Password</b></span>
            </div>
            <br />
            <!-- <q-form class="q-pa-md" @submit="onSubmit"> -->
            <q-form class="q-pa-none">
              <q-input
                outlined
                dense
                v-model="input.icnumber"
                type="text"
                placeholder="IC Number without -"
                name="ic"
                required
                :rules="[(val) => !!val || 'IC Number is required']"
                @keypress="preventNonNumericInput"
              >
                <!-- Place the icon on the left using the prepend slot -->
                <template v-slot:prepend>
                  <q-icon name="badge" />
                  <div
                    style="
                      border-left: 1px solid #ccc;
                      height: 24px;
                      margin-left: 8px;
                    "
                  ></div>
                </template>
              </q-input>

              <br />
              <q-input
                outlined
                dense
                v-model="input.email"
                placeholder="E-mail"
                name="mail"
                required
              >
                <!-- Place the icon on the left using the prepend slot -->
                <template v-slot:prepend>
                  <q-icon name="mail" />
                  <div
                    style="
                      border-left: 1px solid #ccc;
                      height: 24px;
                      margin-left: 8px;
                    "
                  ></div>
                </template>
              </q-input>
              <br />
              <br />
              <!-- Grouping button and text side by side -->
              <div class="q-gutter-sm row items-center">
                <q-btn
                  type="submit"
                  color="primary"
                  @click="ResetPassword"
                  class="full-width q-mb-sm"
                  label="Reset Password"
                />
              </div>
              <div class="q-mb-sm q-gutter-sm row justify-center items-center">
                <q-btn flat label="Back to Login" @click="back" to="/#" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  setup() {
    const $q = useQuasar();

    var input = ref([]);
    var icnumber = ref([]);
    var email = ref([]);

    function ResetPassword() {}

    return {
      input,
      icnumber,
      email,
      ResetPassword,
    };
  },
  methods: {
    preventNonNumericInput(event) {
      const char = String.fromCharCode(event.which);
      if (!/[0-9]/.test(char)) {
        event.preventDefault();
      }
    },
  },
};
</script>
<style>
.adjusted-image {
  width: 100%;
  height: auto;
  max-width: 200px;
  max-height: 100px;
  object-fit: contain;
}
/* background transparent */
.translucent-card {
  /* background-color: rgb(244, 239, 239);  */
  /* background-image: url("images/soft-bg.jpg"); */
  box-shadow: none; /* Remove default shadow for a lighter look */
  background-color: rgba(234, 228, 228, 0.738);
}
.card-bg {
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent image repetition */
  padding: 20px; /* Optional: Add some padding */
}
.custom-background {
  background-image: url("images/unisza_campus.jpg");
  background-size: cover;
  background-position: center;
}
/* For insert number at column IC */
.q-input__inner[type="number"]::-webkit-inner-spin-button,
.q-input__inner[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

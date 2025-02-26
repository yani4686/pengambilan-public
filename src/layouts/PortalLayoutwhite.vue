<template>
  <div class="q-pa-none">
    <q-layout
      view="lHh Lpr lff"
      container
      style="height: 800px"
      class="rounded-borders"
    >
      <q-header elevated class="bg-white" style="height: 70px">
        <q-toolbar>
          <q-toolbar-title>
            <!-- Logo or Title can be placed here if needed -->
          </q-toolbar-title>
          <!-- <q-btn
            style="color: black"
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
          /> -->

          <!-- Adjusted q-item-section for centered and spaced icons -->
          <q-item-section side class="q-pa-none q-ma-none">
            <div class="row items-center justify-end no-wrap header-icons">
              <q-item>
                <a href="https://portal.unisza.edu.my/sis">
                  <q-icon
                    name="fa fa-home"
                    title="Dashboard Staf UniSZA"
                    class="icon-link"
                  />
                </a>
              </q-item>
              <q-item>
                <a
                  href="#"
                  class="dropdown-toggle nav-link pr-0"
                  aria-expanded="false"
                >
                  <q-icon
                    name="fa fa-th"
                    title="Klik di sini untuk Pautan Pantas"
                    class="icon-link"
                  />
                </a>
              </q-item>
              <q-item>
                <a href="https://portal.unisza.edu.my/aduan" target="_blank">
                  <q-icon
                    name="fas fa-headset"
                    title="Aduan/Helpdesk"
                    class="icon-link"
                  />
                </a>
              </q-item>
            </div>
          </q-item-section>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="240" :breakpoint="400">
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 70px;
            border-right: 1px solid #ddd;
          "
        >
          <!-- Centered 'Good Morning' -->
          <div class="center-content">
            <p>Good Morning,</p>
          </div>

          <!-- Centered Avatar and User Info -->
          <q-item clickable v-ripple>
            <div class="user-info-wrapper">
              <div class="corner-image"></div>
              <q-item-section>
                <q-item-label style="margin-bottom: 12px">
                  <div class="text-weight-bold name">
                    NUR SYAZWANI BINTI MOHD YUSOFF
                  </div>
                </q-item-label>
                <q-item-label caption style="margin-bottom: 12px">
                  Last Login: 02 Jun 2024 09:10:27 AM
                </q-item-label>
              </q-item-section>
            </div>
          </q-item>

          <q-separator style="width: 80%; text-align: center" />

          <!-- Sidebar Menu -->
          <q-list padding class="sidemenu">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section> Dashboard </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="link" />
              </q-item-section>
              <q-item-section> Quick Link </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="calendar_month" />
              </q-item-section>
              <q-item-section> Report </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <!-- Centered Image (logo-unisza) -->
        <q-img
          class="absolute-top adjusted-image"
          src="images/logo-unisza.png"
        ></q-img>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // return {
    //   drawer: ref(false),
    // };
  },
};
</script>

<style scoped>
/* Adjust the overall styling and margins */
body {
  font-family: "Tahoma", sans-serif;
}
.header-icons {
  display: flex;
  align-items: center;
}

/* Style for icons to ensure consistent size and spacing */
.icon-link {
  font-size: 14px; /* Adjust the size as needed */
  color: #ffc000;
  margin: 20px 0px; /* Reduces the spacing between icons */
}
.center-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 8px;
  margin-left: 20px;
}

.adjusted-image {
  margin: 20px;
  margin-left: 60px;
  max-width: 110px;
  max-height: 60px;
}

.sidemenu {
  text-transform: uppercase;
}

.user-info-wrapper {
  position: relative;
  padding: 16px;
  border-radius: 8px;
  color: rgb(94, 97, 89);
  height: 150px;
}

.corner-image {
  background-image: url("/images/iconbcg.png"); /* Change the path if needed */
  background-position: center;
  background-size: contain; /* Ensure the image fits */
  background-repeat: no-repeat;
  position: absolute;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  top: 70px; /* Adjust the distance from the top */
  right: -120px; /* Adjust the distance from the right */
  width: 330px; /* Adjust the size of the image */
  height: 200px; /* Adjust height to ensure the image has space */
}
.name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.user-info {
  display: inline-block;
  margin-left: 8px;
}

.user-info span {
  display: block;
  font-size: 14px;
  font-weight: bold;
}

.user-info small {
  font-size: 12px;
  color: grey;
}
</style>

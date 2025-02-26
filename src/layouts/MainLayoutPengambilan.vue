<template>
    <div class="q-pa-sm">
      <q-layout view="lHh Lpr fFf" class="rounded-borders">

        <q-header elevated style="height: 75px; background-color: #343331">
          <q-toolbar>
            <q-toolbar-title>
              <q-item-label header>
                <q-btn v-if="!$route.meta.hideDrawer" flat @click="drawer = !drawer" round dense icon="menu" style="
                    margin-bottom: 20px;
                    margin-left: -15px;
                    overflow-x: hidden;
                    overflow-y: hidden;
                  " />
                <img src="/images/logo_unisza.png" style="padding-left: 15px" class="adjusted-image" />
                <img src="/images/idfiw.png" style="margin-left: 20px" class="adjusted-image" />
              </q-item-label>
            </q-toolbar-title>

            <q-item-section side class="q-pa-none q-ma-none">
              <div class="row items-center justify-end no-wrap header-icons">
                <q-item>
                  <q-avatar square size="28px">
                    <img src="/images/person.png" />
                  </q-avatar>

                  <div class="user-info">
                    <span>{{ user.username }}</span>
                    <small>{{ user.role }}</small>
                  </div>

                  <q-btn flat icon="arrow_drop_down" size="sm" />
                </q-item>
                <!-- </div> -->
              </div>
            </q-item-section>
          </q-toolbar>
        </q-header>
   <!-------------------------------------- Sidebar (Drawer) ------------------------------------------>
        <q-drawer v-if="!$route.meta.hideDrawer" v-model="drawer" :mini="miniState" mini-to-overlay show-if-above bordered
          style="background: #343331; width: 250px" @mouseover="miniState = false" @mouseout="miniState = true"
          class="full-height-drawer">
          <q-list>
            <!-- Submenu Fakulti -->
            <q-expansion-item style="color: white" icon="school" label="Fakulti" expand-separator :expanded="showSubmenu"
              @mouseover="showSubmenu = true" @mouseleave="showSubmenu = false">

              <!-- page pengesahan pengambilan peringkat fakulti -->
              <q-list class="submenu">
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      <a href="#/landingpgsaringan" style="color: white">Saringan Permohonan</a>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <!-- test -->

              <!-- page pengesahan pengambilan peringkat fakulti -->
              <q-list class="submenu">
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      <a href="#/test" style="color: white">test</a>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

            </q-expansion-item>

            <!-- Submenu Admin PPS -->
            <q-expansion-item style="color: white" icon="group" label="PPS Admin" expand-separator :expanded="showSubmenu"
              @mouseover="showSubmenu = true" @mouseleave="showSubmenu = false">

              <q-list class="submenu">
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      <a href="#/landingpgkelulusan" style="color: white">Kelulusan Permohonan</a>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-list class="submenu">
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      <a href="#/landingpgoffer" style="color: white">Senarai Calon Jaya</a>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <!-- menu konfigurasi akses level -->
            <q-expansion-item style="color: white" icon="settings" label="Konfigurasi Sistem" expand-separator :expanded="showSubmenu"
              @mouseover="showSubmenu = true" @mouseleave="showSubmenu = false">

              <q-list class="submenu">
                <q-item>
                  <q-item-section>
                    <q-item-label>
                      <a href="#/" style="color: white">Akses Level</a>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-list>

          <!-- Dashboard Menu -->
          <!-- <q-item style="color: white" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <a href="#/dashboard/othermenu" style="color: white"
                    >Dashboard</a
                  >
                </q-item-label>
              </q-item-section>
            </q-item> -->

        </q-drawer>

        <q-page-container class="q-mt-none full-height-page-container">
          <!-- Image in the corner corner-image-->
          <div class="corner-image"></div>
          <!------------------------------------------- Breadcrumb -------------------------------------------->
          <div class="q-pa-sm">
            <!-- Flex container for breadcrumbs and role selection -->
            <div class="row items-center justify-between">
              <!-- Breadcrumbs -->
              <q-breadcrumbs v-if="!$route.meta.hideBreadcrumbs">
                <q-breadcrumbs-el label="Dashboard" icon="dashboard" @click="goToHome" />
                <q-breadcrumbs-el v-for="(breadcrumb, index) in breadcrumbs" :key="index" :label="breadcrumb.label"
                  :to="breadcrumb.to" exact clickable />
              </q-breadcrumbs>
            </div>
          </div>
          <!-- <img
            src="/images/logobcg.png"
            class="corner-image"
            alt="Corner Image"
          /> -->
          <router-view />
        </q-page-container>

        <q-footer class="bg-dark text-white">
          <div class="q-pa-md text-center">
            Copyright © 2024 Pusat Pengurusan Infostruktur & Rangkaian (PPIR) |
            UniSZA | All Rights Reserved
          </div>
        </q-footer>
      </q-layout>
    </div>
  </template>

  <script>
  import { useQuasar } from "quasar";
  import { ref, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import NavLink from "../components/NavLink.vue";

  export default {
    components: {},
    setup() {
      const $q = useQuasar();
      const router = useRouter();
      const route = useRoute();

      const drawer = ref(false);
      const miniState = ref(true); // Mini sidebar initially active
      const showSubmenu = ref(false); // Control submenu visibility
      const showQuickmenu = ref(false);
      // const showCalendarmenu = ref(false);
      //const topNavTab = ref("dashboard");
      const componentMenu = ref(false);
      // const calendarMenu = ref(false);
      const hoveredTab = ref(null);
      const goToHome = () => {
        router.push("/");
      };
      //-------------------------------------------------------- Breadcrumb ----------------------------------------------------------
      // Breadcrumbs calculation
      const breadcrumbs = computed(() => {
        const paths = route.path.split("/").filter(Boolean);
        return paths.map((path, index) => {
          const to = "/" + paths.slice(0, index + 1).join("/");
          return {
            label: path.charAt(0).toUpperCase() + path.slice(1),
            to,
          };
        });
      });

      //------------------------------------------------- Sidebar Menu ---------------------------------------------

      return {
        user: {
          username: "alifamiry",
          role: "Admin",
          // avatar: require('@/assets/user-avatar.png'), // Replace with the actual path to the avatar image
        },
        // Role selection properties
        selectedRole: null,
        roles: [
          { label: "Academic Administrator", value: "admin" },
          { label: "Faculty", value: "fakulti" },
          { label: "Teknikal PPIR", value: "teknikal" },
        ],
        drawer,
        miniState,
        showSubmenu,
        showQuickmenu,
        componentMenu,
        hoveredTab,
        breadcrumbs,
        goToHome() {
          router.push("/");
        },
      };
    },
    methods: {
      onRoleChange(newRole) {
        this.selectedRole = newRole; // Update the selected role
        console.log("Selected Role:", newRole);
      },
    },
  };
  </script>

  <style scoped>
  .full-height-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* Take up full viewport height */
    overflow: hidden;
    /* Prevent scrolling */
  }

  .q-page-container {
    flex-grow: 1;
    /* Take remaining space */
    overflow-y: auto;
    /* Enable scrolling only when content exceeds height */
    overflow-x: hidden;
    /* Disable horizontal scrolling */
    max-width: 100vw;
    /* Ensure no content exceeds viewport width */
  }

  .q-drawer {
    height: 100%;
  }

  .q-header {
    flex-shrink: 0;
  }

  .q-footer {
    flex-shrink: 0;
    /* Ensures footer stays at the bottom */
    margin-top: auto;
    /* Push footer to the bottom */
  }

  .submenu {
    margin-left: 40px;
  }

  .adjusted-image {
    /* width: 100%;
    height: auto; */

    max-width: 110px;
    max-height: 80px;
    object-fit: contain;
  }

  .corner-image {
    background-image: url("/images/iconbcg.png");
    /* Change the path if needed */
    background-position: center;
    background-size: contain;
    /* Ensure the image fits */
    background-repeat: no-repeat;
    position: absolute;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    top: 70px;
    /* Adjust the distance from the top */
    right: -12px;
    /* Adjust the distance from the right */
    width: 250px;
    /* Adjust the size of the image */
    height: 300px;
    /* Adjust height to ensure the image has space */
  }

  .sidemenu {
    font-size: 5px;
  }

  /* Style for icons to ensure consistent size and spacing */
  .icon-link {
    font-size: 14px;
    /* Adjust the size as needed */
    color: #ffc000;
    margin: 0px -10px;
    /* Reduces the spacing between icons */
  }

  .user-info {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }

  .user-info span {
    /* font-weight: bold; */
    color: white;
  }

  .user-info small {
    color: gray;
    font-size: 12px;
  }
  </style>

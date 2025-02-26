<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr fFf" class="layout-no-scroll">
      <!------------------------------------------- Top Header ---------------------------------------->
      <q-header elevated style="background: #343331; height: 75px">
        <q-toolbar>
          <q-toolbar-title>
            <q-item-label header>
              <q-btn
                v-if="!$route.meta.hideDrawer"
                flat
                @click="drawer = !drawer"
                round
                dense
                icon="menu"
                style="margin-bottom: 20px; margin-left: -15px"
              />
              <img
                src="images/unisza_logo.png"
                style="padding-left: 15px"
                class="adjusted-image"
              />
              <img
                src="~/assets/idfiw.png"
                style="margin-left: 20px"
                class="adjusted-image"
              />
            </q-item-label>
          </q-toolbar-title>

          <!-- Add the following section for the icons on the right -->
          <q-item-section side class="q-pa-none q-ma-none">
            <div class="row items-center justify-end no-wrap">
              <q-item>
                <a href="https://portal.unisza.edu.my/sis">
                  <q-icon
                    name="fa fa-home"
                    title="Dashboard Staf UniSZA"
                    style="font-size: 14px; color: #ffc000; margin: 0"
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
                    style="font-size: 14px; color: #ffc000; margin: 0"
                  />
                </a>
              </q-item>
              <q-item>
                <a href="https://portal.unisza.edu.my/aduan" target="_blank">
                  <q-icon
                    name="fas fa-headset"
                    title="Aduan/Helpdesk"
                    style="font-size: 14px; color: #ffc000; margin: 0"
                  />
                </a>
              </q-item>

              <q-item>
                <q-avatar square size="32px">
                  <img
                    src="https://portal.unisza.edu.my/modules/Staff_Info/images/photos/SKP003.jpg"
                  />
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
      <!-------------------------------------- Sidebar (Drawer) ---------------------------------------------->
      <q-drawer
        v-if="!$route.meta.hideDrawer"
        v-model="drawer"
        :mini="miniState"
        mini-to-overlay
        show-if-above
        bordered
        style="background: #343331; width: 250px"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
      >
        <q-list>
          <!-- Dashboard Menu -->
          <q-item
            style="color: white"
            clickable
            v-ripple
            @click="router.push('/#/landingpage/dashboard')"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <a href="#/landingpage/dashboard" style="color: white"
                  >Dashboard</a
                ></q-item-label
              >
            </q-item-section>
          </q-item>

          <!-- Quick Links Menu with Submenu -->
          <q-expansion-item
            style="color: white"
            icon="badge"
            label="Academic Affairs"
            expand-separator
          >
            <q-list class="submenu">
              <!-- Submenu for Program Management -->
              <Submenu
                label="Program Management"
                :items="['Program Structure', 'Open Elective Course']"
              />
              <!-- Submenu for Course Management -->
              <Submenu
                label="Course Management"
                :items="[
                  'Prerequisite Courses',
                  'Course Info',
                  'Course Offered',
                  'Course Registration Analysis',
                  'Course Registration Approval',
                ]"
              />

              <!-- Submenu for Assessment and Graduation -->
              <Submenu
                label="Assessment and Graduation"
                :items="['Assessment Management', 'Graduation Audit']"
              />

              <!-- Submenu for Report Directory -->
              <Submenu
                label="Report Directory"
                :items="[
                  'Course Registration and Records',
                  'Examination and Graduation',
                ]"
              />
            </q-list>
          </q-expansion-item>

          <!-- Quick Links Menu with Submenu -->
          <q-expansion-item
            style="color: white"
            icon="local_library"
            label="Student Affairs"
            expand-separator
            :expanded="isQuickLinksExpanded"
          >
            <q-list class="submenu">
              <q-item
                v-for="studentAffair in studentAffairs"
                :key="studentAffair.link"
              >
                <q-item-section>
                  <q-item-label>
                    <a :href="studentAffair.link" style="color: white">
                      {{ studentAffair.title }}
                    </a>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <!-- Other Menus -->
          <NavLink
            style="color: white"
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>

      <!-- Page Content -->
      <q-page-container class="q-mt-none">
        <!-- Image in the corner corner-image-->
        <div class="corner-image"></div>
        <!------------------------------------------- Breadcrumb -------------------------------------------->
        <div class="q-pa-md q-gutter-md">
          <!-- Flex container for breadcrumbs and role selection -->
          <div class="row items-center justify-between">
            <!-- Breadcrumbs -->
            <q-breadcrumbs v-if="!$route.meta.hideBreadcrumbs">
              <q-breadcrumbs-el
                label="Dashboard"
                icon="dashboard"
                @click="goToHome"
              />
              <q-breadcrumbs-el
                v-for="(breadcrumb, index) in breadcrumbs"
                :key="index"
                :label="breadcrumb.label"
                :to="breadcrumb.to"
                exact
                clickable
              />
            </q-breadcrumbs>

            <!-- Role Selection Dropdown -->
            <q-select
              v-if="!$route.meta.hideRoleSelection"
              v-model="selectedRole"
              :options="roles"
              label="Select Role"
              outlined
              dense
              style="min-width: 300px"
            />
          </div>
        </div>

        <div
          v-if="showProgramCard"
          class="program-card-wrapper"
          @mouseover="showProgramCard = true"
          @mouseleave="hideProgramCard"
        >
          <q-card class="program-card" style="min-width: 280px">
            <q-card-section>
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label>Program Structure</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label>Open Elective Course</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <!-- <img
          src="/images/logobcg.png"
          class="corner-image"
          alt="Corner Image"
        /> -->
        <router-view />
      </q-page-container>
      <!-- Footer -->
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
import Submenu from "../components/SubMenu.vue";

export default {
  components: {
    NavLink,
    Submenu,
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();

    const drawer = ref(false);
    const miniState = ref(true); // Mini sidebar initially active
    const showSubmenu = ref(false); // Control submenu visibility
    const showQuickmenu = ref(false);
    const showProgramCard = ref(false); // Controls visibility of the child card
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
    // ------------------------------------------------- Sidebar Menu ---------------------------------------------

    // Check if the current route matches the Component submenu path
    const isComponentMenuExpanded = computed(() =>
      route.path.includes("/landingpage/component")
    );

    // Check if the current route matches the Calendar submenu path
    const isCalendarMenuExpanded = computed(() =>
      route.path.includes("/landingpage/calendar")
    );

    // Dynamic quick links for specific paths
    const isQuickLinksExpanded = computed(() => {
      return (
        route.path.includes("/PortalPensyarah") ||
        route.path.includes("/PortalFakulti")
      );
    });

    // Dynamically control the academicAffair links submenu based on route
    const academicAffair = computed(() => {
      if (route.path.includes("/PortalPensyarah")) {
        return [
          // { title: "Program Management", link: "#/landingpage/assessment" },
          { title: "Course Management", link: "#/landingpage/dci" },
          {
            title: "Assessment and Graduation",
            link: "#/landingpage/supervision",
          },
          { title: "Flexible Learning", link: "#/landingpage/supervision" },
          { title: "Acadamic Advisor", link: "#/landingpage/attandance" },
          { title: "Report Directory", link: "#/landingpage/ecofi" },
          { title: "Admission", link: "#/landingpage/elearning" },
        ];
      } else if (route.path.includes("/PortalFakulti")) {
        return [
          { title: "Program Management", link: "#/landingpage/assessment" },
          { title: "Course Management", link: "#/landingpage/dci" },
          {
            title: "Assessment and Graduation",
            link: "#/landingpage/supervision",
          },
          { title: "Flexible Learning", link: "#/landingpage/supervision" },
          { title: "Acadamic Advisor", link: "#/landingpage/attandance" },
          { title: "Report Directory", link: "#/landingpage/ecofi" },
          { title: "Admission", link: "#/landingpage/elearning" },
        ];
      } else {
        return [];
      }
    });

    // Hide card with a slight delay to prevent flickering when moving the mouse
    const hideProgramCard = () => {
      setTimeout(() => {
        showProgramCard.value = false;
      }, 300); // Delay of 200ms
    };

    const studentAffairs = computed(() => {
      if (route.path.includes("/PortalPensyarah")) {
        return [
          { title: "Student Info", link: "#/landingpage/assessment" },
          { title: "Fee Deferral", link: "#/landingpage/dci" },
          {
            title: "External Lecturer Report",
            link: "#/landingpage/supervision",
          },
          { title: "Report Directory", link: "#/landingpage/supervision" },
        ];
      } else if (route.path.includes("/PortalFakulti")) {
        return [
          { title: "Student Info", link: "#/landingpage/assessment" },
          { title: "Fee Deferral", link: "#/landingpage/dci" },
          {
            title: "External Lecturer Report",
            link: "#/landingpage/supervision",
          },
          { title: "Report Directory", link: "#/landingpage/supervision" },
        ];
      } else {
        return [];
      }
    });
    //------------------------------------------------- Sidebar Menu ---------------------------------------------

    const linksList = [
      {
        title: "Report",
        icon: "bar_chart",
        link: "#/form",
      },
    ];

    return {
      user: {
        username: "nsyazwanimyusoff",
        role: "Admin",
        // avatar: require('@/assets/user-avatar.png'), // Replace with the actual path to the avatar image
      },
      // Role selection properties
      selectedRole: null,
      roles: [
        { label: "Academic Administrator", value: "admin" },
        { label: "Faculty", value: "fakulti" },
      ],
      drawer,
      miniState,
      linksList,
      showSubmenu,
      showQuickmenu,
      componentMenu,
      showProgramCard,
      hideProgramCard,
      hoveredTab,
      breadcrumbs,
      goToHome() {
        router.push("/");
      },

      isQuickLinksExpanded,
      academicAffair,
      studentAffairs,
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
.program-card-wrapper {
  position: absolute;
  top: 140px; /* Adjust this value to match the placement of the drawer */
  left: 280px; /* Position it next to the drawer */
  z-index: 10;
}

.program-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background-color: #343331;
  color: white;
}

.submenu {
  margin-left: 40px;
}

.q-page-container {
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
}
.adjusted-image {
  /* width: 100%;
  height: auto; */

  max-width: 110px;
  max-height: 80px;
  object-fit: contain;
}

.corner-image {
  background-image: url("/images/iconbcg.png"); /* Change the path if needed */
  background-position: center;
  background-size: contain; /* Ensure the image fits */
  background-repeat: no-repeat;
  position: absolute;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  top: 140px; /* Adjust the distance from the top */
  right: -12px; /* Adjust the distance from the right */
  width: 300px; /* Adjust the size of the image */
  height: 300px; /* Adjust height to ensure the image has space */
}
.sidemenu {
  font-size: 5px;
}
.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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

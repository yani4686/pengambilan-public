<template>
  <div class="page-title text-center">
    <h1>PORTAL</h1>
  </div>

  <!-- Cards Section -->
  {{ users.username }}
  <div class="cards-container">
    <q-card
      v-for="main in mainportal"
      :key="main.title"
      class="feature-card"
      :class="{ disabled: main.disabled }"
      @click="!main.disabled && navigateToPage(main.title)"
      @mouseover="hoveredCard = main.title"
      @mouseleave="hoveredCard = null"
      :style="{
        backgroundColor: hoveredCard === main.title ? '#f7ebb3' : 'white',
      }"
    >
      <q-tooltip v-if="main.disabled"> Not available </q-tooltip>
      <q-card-section class="q-pa-none">
        <div class="image-container">
          <img :src="main.image" :alt="main.title" class="card-image" />
          <div class="overlay-text">{{ main.title.toUpperCase() }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import staffImage from "/images/staff-unisza.jpg";
import fpImage from "/images/FP-unisza.jpg";
import bendahariImage from "/images/bendahari-unisza.jpg";
import canseloriImage from "/images/portal-dashboard.png";
import PpengambilanImage from "/images/portal-pengambilan.png";
import kolejKediaman from "/images/kolejkediaman.png";
import Hepa from "/images/hepa.png";
import ELearning from "/images/elearning.png";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "FeaturePage",
  data() {
    var $q = useQuasar();
    var token = $q.sessionStorage.getItem("token");
    var users = ref({});

    whois();

    function whois() {
      api.get("/validateToken/" + token).then((res) => {
        users.value.username = res.data.data.name;
        console.log(res.data.data.name);
      });
    }

    return {
      users,
      hoveredCard: null,
      mainportal: [
        { title: "Menu 1", image: staffImage, disabled: false },
        { title: "Menu 2", image: fpImage, disabled: false },
        { title: "Menu 3", image: bendahariImage, disabled: false },
        // { title: "Menu 4", image: canseloriImage, disabled: true }, // Disabled
        // { title: "Menu 5", image: PpengambilanImage, disabled: true }, // Disabled
        // { title: "Menu 6", image: Hepa, disabled: true }, // Disabled
        // { title: "Menu 7", image: kolejKediaman, disabled: true }, // Disabled
        // { title: "Menu 8", image: ELearning, disabled: true }, // Disabled
      ],
    };
  },
  methods: {
    navigateToPage(title) {
      const formattedTitle = title.replace(/\s+/g, "").toLowerCase();
      this.$router.push(`dashboard/${formattedTitle}`);
    },
  },
};
</script>

<style scoped>
.page-title h1 {
  font-size: 20px;
  font-family: "Tahoma", sans-serif;
  color: #41403b;
  text-transform: uppercase;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-gap: 0px; */
  justify-items: center;
  padding-top: 40px;
  padding-inline: 160px;
}

.feature-card {
  width: 300px;
  height: 240px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  /* width: 300px;
  height: 200px; */
  object-fit: cover;
  filter: blur(0.1px);
}

.feature-card:hover .card-image {
  transform: scale(1.05); /* Slight zoom on hover */
}

.overlay-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.628);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

.centered-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Viewport height */
  background-color: #f8f9fa; /* Optional background color */
}
</style>

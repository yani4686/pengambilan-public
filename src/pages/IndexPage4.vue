<template>
  <!-- <div class="q-pa-sm"> -->
  <!-- Page Title -->
  <div class="page-title text-center">
    <h1>APLIKASI AKADEMIK</h1>
  </div>

  <!-- Cards Section -->
  <div class="cards-container q-pa-none">
    <q-card
      v-for="main in mainportal"
      :key="main.title"
      class="feature-card"
      @click="navigateToPage(main.title)"
      :style="{
        backgroundColor: hoveredCard === main.title ? '#f7ebb3' : 'white',
      }"
      @mouseover="hoveredCard = main.title"
      @mouseleave="hoveredCard = null"
    >
      <q-card-section class="q-pa-none text-center">
        <div class="image-container">
          <img :src="main.image" :alt="main.title" class="blur-image" />
          <div class="overlay-text">{{ main.title.toUpperCase() }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>

  <!-- Icon Menu Section -->
  <!-- <div class="cards-container q-pa-md">
      <q-card v-for="icon in iconmenu" :key="icon.title" class="icon-card">
        <q-card-section class="q-pa-lg text-center">
          <q-icon :name="icon.iconName" size="50px" color="primary" />
          <div class="textdiv q-mt-md">
            <strong>{{ icon.title }}</strong>
          </div>
        </q-card-section>
      </q-card>
    </div> -->

  <!-- </div> -->
</template>

<script>
import staffImage from "/images/staff-unisza.jpg"; // import images
import fpImage from "/images/FP-unisza.jpg";
import bendahariImage from "/images/bendahari-unisza.jpg";
import canseloriImage from "/images/portal-dashboard.png";
import PpengambilanImage from "/images/portal-pengambilan.png";
import kolejKediaman from "/images/kolejkediaman.png";
import Hepa from "/images/hepa.png";
import ELearning from "/images/elearning.png";

export default {
  name: "FeaturePage", // component name
  components: {},
  data() {
    return {
      hoveredCard: null, // Keeps track of which card is hovered
      // main portal section
      mainportal: [
        {
          title: "Portal Pensyarah",
          image: staffImage, // use imported images
        },
        { title: "Portal Fakulti", image: fpImage },
        { title: "Portal Akademik", image: bendahariImage },
        { title: "Portal Dashboard", image: canseloriImage },
        { title: "Portal Pengambilan", image: PpengambilanImage },
        { title: "Portal Hepa", image: Hepa },
        { title: "Portal Kewangan Pelajar", image: kolejKediaman },
        { title: "Portal E-Learning", image: ELearning },
      ],
    };
  },
  methods: {
    navigateToPage(title) {
      const formattedTitle = title.replace(/\s+/g, ""); // Remove spaces entirely
      this.$router.push(`/${formattedTitle}`);
    },
  },
};
</script>

<style scoped>
/* Page Title Styling */
.page-title h1 {
  font-size: 20px;
  font-family: "Tahoma", sans-serif;
  color: #41403b;
  text-transform: uppercase;
}

/* Cards Container Styling */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  animation-name: bounceInLeft;
  animation-duration: 3s;
}

/* Feature Card Styling */
.feature-card,
.icon-card {
  width: 300px;
  height: 195px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s ease-in-out;
}

/* Text Styling */
.textdiv {
  color: rgb(65, 64, 59);
  font-size: 12px;
  font-family: Tahoma, sans-serif;
  margin: 10px 0 20px;
  text-transform: uppercase;
}

/* Subtitle Text Styling */
.text-subtitle2 {
  font-size: 12px;
  color: grey;
}

/* Image Container for Blurred Images */
.image-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.blur-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  filter: blur(2.8px);
}

/* Overlay Text Styling */
.overlay-text {
  border-radius: 12px;
  position: absolute;
  top: 70%;
  left: 80%;
  transform: translate(-7%, -1%); /* Center the text */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  color: rgb(247, 245, 245);
  font-size: 14px;
  font-weight: bold;
  padding: 2px 40px; /* Add padding around text */
  background-color: rgb(
    0 0 0 / 75%
  ); /* Semi-transparent background for contrast */
  /* border: 2px solid rgba(255, 252, 252, 0.945); Border around the text */
  text-align: center; /* Center the text within its box */
  text-transform: uppercase;
  font-family: "Tahoma", sans-serif;
  height: 70px;
  width: 170px;
}

.feature-card:hover,
.icon-card:hover {
  transform: scale(1.06); /* Slight zoom-in on hover */
}
</style>

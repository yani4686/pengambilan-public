<template>
  <div class="pricing-section q-pa-md">
    <h5 class="text-center">PORTAL AKADEMIK</h5>

    <!-- Carousel -->
    <q-carousel
      animated
      control-color="amber"
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      class="custom-carousel"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <!-- Carousel Slide 1 - First 4 Cards -->
      <q-carousel-slide :name="1">
        <div class="cards-container q-pa-md">
          <q-card
            v-for="main in firstBatch"
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
      </q-carousel-slide>

      <!-- Carousel Slide 2 - Next 4 Cards -->
      <q-carousel-slide :name="2">
        <div class="cards-container q-pa-md">
          <q-card
            v-for="main in secondBatch"
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
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
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
  setup() {
    // Split the mainportal array into two batches
    const mainportal = [
      {
        title: "Menu 1",
        image: staffImage,
      },
      {
        title: "Menu 2",
        image: fpImage,
      },
      {
        title: "Menu 3",
        image: bendahariImage,
      },
      {
        title: "Portal Dashboard",
        image: canseloriImage,
      },
      {
        title: "Portal Pengambilan",
        image: PpengambilanImage,
      },
      {
        title: "Portal Hepa",
        image: Hepa,
      },
      {
        title: "Portal Kewangan Pelajar",
        image: kolejKediaman,
      },
      {
        title: "Portal E-Learning",
        image: ELearning,
      },
    ];

    const firstBatch = mainportal.slice(0, 4); // First 4 cards
    const secondBatch = mainportal.slice(4, 8); // Next 4 cards

    return {
      hoveredCard: null, // Keeps track of which card is hovered
      firstBatch, // First 4 cards
      secondBatch, // Next 4 cards
      slide: ref(1),
      autoplay: ref(true),
    };
  },
  methods: {
    navigateToPage(title) {
      const formattedTitle = title.replace(/\s+/g, "").toLowerCase();
      this.$router.push(`${formattedTitle}`);
    },
  },
};
</script>

<style scoped>
/* .custom-carousel {
  background-color: transparent !important;
}*/
/* Cards Container Styling */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  animation-name: bounceInLeft;
  animation-duration: 3s;
}

/* Text Styling */
.textdiv {
  color: rgb(65, 64, 59);
  font-size: 14px;
  font-family: Tahoma, sans-serif;
  margin: 10px 0 20px;
  text-transform: uppercase;
}

/* Feature Card Styling */
.feature-card {
  width: 300px; /* Set fixed width */
  height: 100px; /* Set fixed height */
  margin: 5px;
  align-items: center;
  /* transition: background-color 0.3s ease; */
  cursor: pointer;
  display: flex;
  /* flex-direction: column; Ensure content inside the card is stacked vertically */
  justify-content: space-between; /* Distribute space inside the card */
  text-align: center; /* Center text and content */
  box-sizing: border-box; /* Ensure padding doesn't increase card size */
  transition: background-color 0.3s ease-in-out;
}

.same-height {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.card-wrapper {
  display: flex;
  flex-grow: 1;
}

.pricing-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  background-color: rgb(249, 249, 249);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 6px;
}

.same-size {
  width: 100%;
  height: 230px; /* Set a fixed height */
}

.pricing-icon {
  color: #2d2e2b;
}

.price-btn {
  background-color: #3c85ff;
  color: white;
  border-radius: 30%;
  width: 90px;
  height: 40px;
}

.text-center {
  text-align: center;
}

h5 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
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
  position: absolute;
  top: 70%;
  left: 80%;
  transform: translate(-7%, -1%); /* Center the text */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  color: rgb(247, 245, 245);
  font-size: 15px;
  font-weight: bold;
  padding: 2px 40px; /* Add padding around text */
  background-color: rgba(
    15,
    14,
    14,
    0.656
  ); /* Semi-transparent background for contrast */
  border: 2px solid rgba(255, 252, 252, 0.945); /* Border around the text */
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

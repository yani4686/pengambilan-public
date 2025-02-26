<template>
  <!-- <div class="q-pa-sm"> -->
  <!-- Page Title -->
  <div class="page-title text-center">
    <h1>APLIKASI AKADEMIK</h1>
  </div>

  <!-- Feature Section -->
  <div class="cards-container q-pa-md">
    <q-card
      v-for="feature in features"
      :key="feature.title"
      class="feature-card"
    >
      <q-card-section class="q-pa-lg text-center">
        <div class="animation-wrapper">
          <LottieIcon :animationPath="feature.animationPath" />
        </div>
        <div class="textdiv q-mt-md">{{ feature.title }}</div>
        <div class="text-subtitle2 q-mt-xs">{{ feature.description }}</div>
      </q-card-section>
    </q-card>
  </div>
  <!-- </div> -->
</template>

<script>
import LottieIcon from "../components/LottieIcon.vue"; // for animation icon
export default {
  name: "FeaturePage", // component name
  components: {
    LottieIcon,
  },
  data() {
    return {
      hoveredCard: null, // Keeps track of which card is hovered
      // features section
      features: [
        { title: "Markah Online", animationPath: "animations/plant.json" },
        {
          title: "Portal Pengurusan Pelajar",
          animationPath: "animations/computer.json",
        },
        {
          title: "Sistem Pengurusan Maklumat Siswazah",
          animationPath: "animations/medal.json",
        },
        {
          title: "Sistem Penilaian Kursus dan Pengajaran",
          animationPath: "animations/booksearch.json",
        },
        {
          title: "Sistem Pengurusan Kokurikulum",
          animationPath: "animations/book.json",
        },
        {
          title: "Sistem Maklumat Akademik Program Asasi dan Perubatan UniSZA",
          animationPath: "animations/testtube.json",
        },
        { title: "Examinations", animationPath: "animations/computer2.json" },
        { title: "Classwork", animationPath: "animations/gear.json" },
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
.animation-wrapper {
  text-align: center;
}
/* Feature Card Styling */
.feature-card,
.icon-card {
  width: 250px;
  height: 195px;
  margin: 5px;
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
  font-size: 14px;
  font-family: Tahoma, sans-serif;
  margin: 10px 0 20px;
  text-transform: uppercase;
}

/* Subtitle Text Styling */
.text-subtitle2 {
  font-size: 12px;
  color: grey;
}

/* Overlay Text Styling */
.overlay-text {
  position: absolute;
  top: 70%;
  left: 50%;
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

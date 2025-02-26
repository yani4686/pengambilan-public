<template>
  <div class="q-pa-none q-ml-xl" style="width: 90%; height: 60%">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        :name="1"
        img-src="/images/PortalAkademik.png"
        style="width: 100%; height: 150px; object-fit: cover"
      />
      <q-carousel-slide
        :name="2"
        img-src="/images/konvo2024.png"
        style="width: 100%; height: 100px"
      />
      <q-carousel-slide
        :name="3"
        img-src="/images/bulatan_ilmu.png"
        style="width: 100%; height: 60%; object-fit: cover"
      />
      <!-- <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      /> -->
    </q-carousel>
  </div>

  <div class="q-pa-sm">
    <!-- Cards Container -->
    <div class="row justify-center q-pa-lg q-ma-lg">
      <q-card class="feature-card col-12 col-sm-3 orange-card">
        <q-card-section class="card-content">
          <q-icon name="library_add" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">New Programmes</div>
            <div class="text-h5">100</div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="feature-card col-12 col-sm-3 purple-card">
        <q-card-section class="card-content">
          <q-icon name="assignment_turned_in" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">Programmes approved by Faculty</div>
            <div class="text-h5">294</div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="feature-card col-12 col-sm-3 blue-card">
        <q-card-section class="card-content">
          <q-icon name="add_task" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">Unverified Programmes</div>
            <div class="text-h5">92%</div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="feature-card col-12 col-sm-3 green-card">
        <q-card-section class="card-content">
          <q-icon name="done_all" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">Approval Programmes</div>
            <div class="text-h5">80%</div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="row justify-center q-pa-lg q-ma-lg">
      <!-- First Chart -->
      <div class="col-12 col-md-6 q-mb-lg">
        <q-card class="chart" flat bordered>
          <chart
            type="donut"
            :options="donutChartOption"
            :series="donutSeries"
          />
        </q-card>
      </div>

      <!-- Second Chart -->
      <div class="col-12 col-md-6 q-mb-lg">
        <q-card class="chart" flat bordered>
          <chart
            type="donut"
            :options="donutChartOption"
            :series="donutSeries"
          />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import chart from "vue3-apexcharts";

export default {
  components: {
    chart,
  },
  data() {
    const donutChartOption = ref({
      chart: {
        type: "donut",
      },
      labels: ["Diploma", "Degree", "Asasi", "Postgraduate"], // Categories
      colors: ["#f78659", "#33FF57", "#f7599c", "#b659f7"], // Custom colors for each section
      title: {
        text: "Education Levels Distribution",
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    });

    const donutSeries = ref([30, 40, 15, 25]); // Values for Diploma, Degree, Asasi, Postgraduate
    return {
      donutChartOption,
      donutSeries,
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
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
.feature-card {
  width: 300px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  transition: background-color 0.3s ease-in-out;
  height: 110px;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* Icon Styling */
.icon-left {
  margin-right: 15px;
  flex-shrink: 0;
}

/* Text Styling */
.card-text {
  text-align: left;
}

/* Left border color for each card */
.purple-card {
  border-left: 8px solid #ab9dd5;
}
.blue-card {
  border-left: 8px solid #6395ff;
}
.green-card {
  border-left: 8px solid #99e76c;
}
.orange-card {
  border-left: 8px solid #e78e6c;
}

/* Hover effects */
.purple-card:hover {
  background-color: rgba(171, 157, 213, 0.2); /* Light purple background */
}

.blue-card:hover {
  background-color: rgba(99, 149, 255, 0.2); /* Light blue background */
}

.green-card:hover {
  background-color: rgba(153, 231, 108, 0.2); /* Light green background */
}

.orange-card:hover {
  color: black;
  background-color: rgba(222, 182, 173, 0.979); /* Light orange background */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .feature-card {
    width: 100%; /* Make cards full width on smaller screens */
  }
}
</style>

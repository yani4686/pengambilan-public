<template>
  <q-page padding>
    <!-- <h2 class="text-h4 q-mb-md">Dashboard</h2> -->
    <q-card>
      <div class="cards-container q-pa-sm">
        <q-card class="feature-card">
          <q-card-section class="card-content">
            <img
              src="~/assets/program.png"
              class="icon-left"
              style="width: 30px; height: 30px"
            />
            <div class="card-text">
              <div class="text-subtitle2">Total Program</div>
              <div class="text-h5">100</div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="feature-card">
          <q-card-section class="card-content">
            <img
              src="~/assets/student.png"
              class="icon-left"
              style="width: 30px; height: 30px"
            />
            <div class="card-text">
              <div class="text-subtitle2">Total Active Student</div>
              <div class="text-h5">1,294</div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="feature-card">
          <q-card-section class="card-content">
            <img
              src="~/assets/visitors.png"
              class="icon-left"
              style="width: 30px; height: 30px"
            />
            <div class="card-text">
              <div class="text-subtitle2">Visitors</div>
              <div class="text-h5">1,294</div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="feature-card">
          <q-card-section class="card-content">
            <img
              src="~/assets/visitors.png"
              class="icon-left"
              style="width: 30px; height: 30px"
            />
            <div class="card-text">
              <div class="text-subtitle2">Total Visitors</div>
              <div class="text-h5">1,294</div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- First Card: PENCAPAIAN KESELURUHAN SUKU PERTAMA 2024 -->
      <!-- <div class="row">
      <div class="col-md-12"> -->
      <q-card class="q-pa-md">
        <div class="text-center text-bold q-mb-md">
          ACADEMIC CALENDAR SESSION 2023/2024
        </div>
        <div class="row q-gutter-x">
          <div class="col-12 col-md-6">
            <q-card class="q-pa-md q-mx-sm">
              <div class="text-center text-bold">
                SEMESTER I SESSION 2023/2024
              </div>
              <q-table
                flat
                class="q-mt-md"
                :rows="academicCalendarData"
                :columns="columns"
              >
                <!-- allow to read HTML rendering inside cells (for row: activity) -->
                <template v-slot:body-cell-activity="props">
                  <q-td :props="props">
                    <div v-html="props.row.activity"></div>
                  </q-td>
                </template>
              </q-table>
            </q-card>
          </div>

          <!-- Second Card: ACADEMIC CALENDAR SESSION 2023/2024 -->
          <div class="col-12 col-md-6">
            <q-card class="q-pa-md q-mx-sm">
              <div class="text-center text-bold">
                SEMESTER II SESSION 2023/2024
              </div>
              <q-table
                flat
                class="q-mt-md"
                :rows="academicCalendarData2"
                :columns="columns"
              >
                <!--  allow rendering HMTL code for activity column -->
                <template v-slot:body-cell-activity="props">
                  <q-td :props="props">
                    <div v-html="props.row.activity"></div>
                  </q-td>
                </template>

                <!-- Slot for 'duration' column with button -->
                <!-- <template v-slot:body-cell-duration="props">
                <q-td :props="props">
                  <q-btn class="buttonintable" :label="props.row.duration" />
                </q-td>
              </template> -->
              </q-table>
            </q-card>
          </div>
        </div>
      </q-card>
      <!-- </div>
    </div> -->
      <!-- Chart Section -->
      <div class="row justify-center q-pa-lg q-ma-lg">
        <!-- Bar chart -->
        <div class="col-12 col-md-6 q-mb-lg">
          <q-card class="chart" flat bordered>
            <chart type="bar" :options="barChartOption" :series="barSeries" />
          </q-card>
        </div>

        <!-- Line chart -->
        <div class="col-12 col-md-6">
          <q-card class="chart" flat bordered>
            <chart
              type="line"
              :options="lineChartOption"
              :series="lineSeries"
            />
          </q-card>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import chart from "vue3-apexcharts";

export default {
  components: {
    chart,
  },
  setup() {
    // Bar chart options and series
    const barChartOption = ref({
      chart: {
        type: "bar",
        events: {}, // Empty events object to avoid error
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5],
      },
      colors: ["#FF5733"], // Change bar chart color
      title: {
        text: "Bar Chart",
      },
    });

    const barSeries = ref([{ name: "Bar Data", data: [10, 20, 30, 40, 50] }]);

    // Line chart options and series
    const lineChartOption = ref({
      chart: {
        type: "line",
      },
      stroke: {
        curve: "smooth", // Smooth lines for the line chart
      },
      colors: ["#33AFFF"], // Change line chart color
      xaxis: {
        categories: [1, 2, 3, 4, 5],
      },
      title: {
        text: "Line Chart",
      },
    });

    const lineSeries = ref([{ name: "Line Data", data: [15, 25, 35, 45, 55] }]);

    // Example data for the academic calendar table
    const academicCalendarData = ref([
      {
        activity: "Registration<br><small>(1 – 5 October 2023)</small>",
        duration: "5 days",
        remark: "For all new students",
      },
      {
        activity: "Lecture<br><small>(8 October – 23 November 2023)</small>",
        duration: "35 days",
        remark: "12 November 2023 (Deepavali Day)",
      },
      {
        activity:
          "Mid Semester Break<br><small>(26 – 30 November 2023)</small>",
        duration: "5 days",
        remark: "-",
      },
      {
        activity: "Lecture<br><small>(3 December – 18 January 2024)</small>",
        duration: "35 days",
        remark: "25 December 2023 (Christmas Day)",
      },
      {
        activity: "Revision Week<br><small>(21 – 25 January 2024)</small>",
        duration: "5 days",
        remark: "-",
      },
      {
        activity:
          "Final Examination<br><small>(28 January – 8 February 2024)</small>",
        duration: "10 days",
        remark: "8 February 2024 (Israk Mikraj)",
      },
      {
        activity: "Semester Break<br><small>(11 - 22 February 2024)</small>",
        duration: "10 days",
        remark: "11 February 2024 (Chinese New Year)",
      },
      // Add more rows as needed
    ]);
    const academicCalendarData2 = ref([
      {
        activity: "Lecture<br><small>(25 – 11 April 2024)</small>",
        duration: "35 days",
        remark:
          "4 March 2024 (Anniversary of the Coronation of the Sultan of Terengganu)28 March 2024 (Nuzul Al – Quran)10 & 11 April 2024 (Eid Fitr)",
      },
      {
        activity:
          "Mid Semester Break<br><small>(14 October – 18 April 2024)</small>",
        duration: "5 days",
        remark: "-",
      },
      {
        activity: "Lecture<br><small>(21 April – 6 June 2024)</small>",
        duration: "35 days",
        remark:
          "1 May 2024 (Labour Day)22 May 2024 (Wesak Day) 3 June 2024 (The Yang di-Pertuan Agong's Birthday)",
      },
      {
        activity: "Revision Week<br><small>(9 – 13 June 2024)</small>",
        duration: "5 days",
        remark: "-",
      },
      {
        activity: "Final Examination<br><small>(16 June – 4 July 2024)</small>",
        duration: "15 days",
        remark:
          "16 June 2024 (Day of Arafah) 17 & 18 June 2024 (Hari Raya Haji Holiday)",
      },
      {
        activity: "Semester Break<br><small>(7 - 18 July 2024)</small>",
        duration: "10 days",
        remark: "7 July 2024 (New Year Muharram)",
      },
    ]);
    // Define the table columns
    const columns = ref([
      {
        name: "activity",
        label: "ACTIVITY",
        align: "center",
        align: "left", // Change this to "left"
        field: "activity",
      },
      // {
      //   name: "date",
      //   label: "DATE",
      //   align: "center",
      //   align: "left",
      //   field: "date",
      // },
      {
        name: "duration",
        label: "DURATION",
        align: "center",
        align: "left",
        field: "duration",
      },
      {
        name: "remark",
        label: "REMARK",
        align: "center",
        align: "left",
        field: "remark",
      },
    ]);
    console.log(academicCalendarData.value);

    return {
      barChartOption,
      barSeries,
      lineChartOption,
      lineSeries,
      academicCalendarData,
      academicCalendarData2,
      columns,
    };
  },
};
</script>

<style>
.col-12.col-md-6 {
  margin-bottom: 5px; /* Adjust this value for the vertical gap between the columns */
  padding-left: 5px; /* Adjust this to control space between cards */
  padding-right: 5px; /* Adjust this to control space between cards */
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
.feature-card {
  width: 300px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background-color 0.3s ease-in-out;
}

/* Card Content Layout */
.card-content {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align content to the left */
}

/* Icon Styling */
.icon-left {
  margin-right: 15px; /* Add spacing between icon and text */
  flex-shrink: 0; /* Prevent icon from shrinking */
}

/* Text Styling */
.card-text {
  text-align: left; /* Align text to the left */
}
</style>

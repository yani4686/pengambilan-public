<template>
  <q-card>
    <q-page>
      <!-- Mega Menu -->
      <!-- <q-card-section>
        <div class="row responsive-layout">
          <div class="col">
            <div class="icon-menu">
              <q-card-section>
                <q-avatar size="md">
                  <img src="images/assesment.png" alt="icon" />
                  <q-tooltip> Assesment </q-tooltip>
                </q-avatar>

                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/dci.png" alt="icon" />
                  <q-tooltip>DCI</q-tooltip>
                </q-avatar>

                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/supervision.png" alt="icon" />
                  <q-tooltip> Supervision</q-tooltip>
                </q-avatar>

                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/intern.png" alt="icon" />
                  <q-tooltip> LI </q-tooltip>
                </q-avatar>

                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/course-structure.png" alt="icon" />
                  <q-tooltip> Course Structure </q-tooltip>
                </q-avatar>

                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/u-time.png" alt="icon" />
                  <q-tooltip> U-Time </q-tooltip>
                </q-avatar>

                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/OBE-icon.png" alt="icon" />
                  <q-tooltip> OBE </q-tooltip>
                </q-avatar>

                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/SPB-icon.png" alt="icon" />
                  <q-tooltip> SPB </q-tooltip>
                </q-avatar>
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/muet-and-cefr.png" alt="icon" />
                  <q-tooltip>MUET & CEFR </q-tooltip>
                </q-avatar>
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/lecturer-info.png" alt="icon" />
                  <q-tooltip> Lecturer Info </q-tooltip>
                </q-avatar>
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/program-info.png" alt="icon" />
                  <q-tooltip> Program Info </q-tooltip>
                </q-avatar>
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/kalendar-akademik.png" alt="icon" />
                  <q-tooltip> Kalendar Akademik </q-tooltip>
                </q-avatar>
              </q-card-section>
            </div>
          </div>
        </div>
      </q-card-section> -->

      <!-- <q-card class="main-card"> -->
      <div class="row responsive-layout">
        <div class="col">
          <!-- Icon Cards -->
          <div class="icon-cards q-gutter-xs flex-center">
            <q-card-section
              style="background-color: indigo; width: 220px; height: 70px"
              class="q-mt-sm fourcard"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="30px"
                    class="q-mb-sm q-ml-none"
                    color="white"
                  />
                </div>
                <div class="col text-center" style="color: white">
                  Teaching Course 2024 <br />
                  <strong>12</strong>
                </div>
              </div>
            </q-card-section>

            <q-card-section
              style="background-color: slateblue; width: 220px; height: 70px"
              class="q-mt-sm fourcard"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="cast_for_education"
                    size="30px"
                    class="q-mb-sm q-ml-none"
                    color="white"
                  />
                </div>
                <div class="col text-center" style="color: white">
                  Total Lecturer <br />
                  <strong>1000</strong>
                </div>
              </div>
            </q-card-section>

            <q-card-section
              style="background-color: purple; width: 220px; height: 70px"
              class="q-mt-sm fourcard"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="business"
                    size="30px"
                    class="q-mb-sm q-ml-none"
                    color="white"
                  />
                </div>
                <div class="col text-center" style="color: white">
                  Total Program <br />
                  <strong>134</strong>
                </div>
              </div>
            </q-card-section>

            <q-card-section
              style="background-color: seagreen; width: 220px; height: 70px"
              class="q-mt-sm fourcard"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="download"
                    size="30px"
                    class="q-mb-sm q-ml-none"
                    color="white"
                  />
                </div>
                <div class="col text-center" style="color: white">
                  Full Accreditation <br />
                  <strong>100%</strong>
                </div>
              </div>
            </q-card-section>
          </div>
          <br />
          <!------------------------------------------------------------ TABLE HIGHLIGHT DATES ------------------------------------------------------>

          <!------------------------------------------------- Bar chart ------------------------------------------------------>
          <div class="row">
            <!-- First Section (Upcoming Course) -->
            <div class="col-12 col-sm-6">
              <q-card class="q-ma-sm">
                <q-card-section class="" style="border-radius: 5px">
                  <div id="chart">
                    <apexchart
                      type="bar"
                      height="350"
                      :options="chartVerticalBar"
                      :series="series"
                    ></apexchart>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6">
              <q-card class="q-ma-sm">
                <q-card-section class="" style="border-radius: 5px">
                  <div id="chart">
                    <apexchart
                      type="bar"
                      height="350"
                      :options="chartHorizontalBar"
                      :series="series"
                    ></apexchart>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

        <!--------------------------------------------- NOTICE BOARD --------------------------------------------------------------->
        <q-card-section
          class="right-card border border-1 q-mr-lg q-mt-md"
          style="border-radius: 5px; border: 1px solid grey"
        >
          <!-------------------- HIGHLIGHT DATE ------------------------------>
          <div class="col justify-center">
            <!-- <q-btn label="HIGHLIGHT DATE" color="lime-8" @click="icon = true" /> -->
            <q-btn
              label="HIGHLIGHT DATE"
              color="lime-8"
              @click="gotoHighlightDate()"
            />
          </div>
          <br />
          <hr />
          <br />
          <div style="text-align: center">
            <span>NEWS & ACTIVITIES</span>
          </div>
          <div class="news-container">
            <div class="news-content">
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>
                <!------------------------------------------------------------------->
                <div class="col text-left q-ml-sm q-mt-md">
                  Undergraduate Program
                </div>
              </div>
              <div class="q-mt-sm">DEGREE</div>
              <hr />
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=57&Itemid=720&lang=en"
                    target="_blank"
                    style="text-decoration: none; color: white"
                  >
                    Bachelor of Computer Science (Hons) Software Development
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=65&Itemid=721&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Bachelor of Computer Science (Hons) Computer Network
                    Security
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=66&Itemid=722&lang=en"
                    target="_blank"
                    style="text-decoration: none; color: white"
                  >
                    Bachelor of Computer Science (Hons) Internet Computing
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=67&Itemid=723&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Bachelor of Information Technology (Hons) Informatics Media
                  </a>
                </div>
              </div>
              <br />
              <!------------------------------------------------------------------->
              <div class="q-mt-sm">DIPLOMA</div>
              <!------------------------------------------------------------------->
              <hr />
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=62&Itemid=717&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Diploma In Computer Science
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                    color="white"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=63&Itemid=718&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Diploma In Information Technology
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="col text-left q-ml-sm q-mt-md">
                Postgraduate Program
              </div>
              <hr />
              <!------------------------------------------------------------------->
              <div class="col text-left q-ml-sm q-mt-md">
                <b> MIXED-MODE PROGRAM (FULL TIME AND PART TIME)</b>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=70&Itemid=727&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Master of Information Technology ( Management Informatics)
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <!-- <div class="col-auto">
              <q-icon
                name="school"
                size="20px"
                class="q-mb-sm q-ml-none q-mt-md"
                color="white"
              />
            </div> -->

                <div class="col text-left q-ml-sm q-mt-md">
                  <b>RESEARCH PROGRAM ( FULL TIME)</b>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=68&Itemid=725&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Master of Science ( Computer Science)
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=69&Itemid=726&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Master of Science ( Matematics)
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=71&Itemid=729&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Doctor of Philosophy (Computer Science)
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                    color="white"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=72&Itemid=730&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Doctor of Philosophy (Matematics)
                  </a>
                </div>
              </div>
              <!------------------------------------------------------------------->
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="20px"
                    class="q-mb-sm q-ml-none q-mt-md"
                  />
                </div>

                <div class="col text-left q-ml-sm q-mt-md">
                  <a
                    href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=73&Itemid=731&lang=en"
                    target="_blank"
                    style="text-decoration: none"
                  >
                    Doctor of Philosophy (Statistics)
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!------------------------------------------------------------------->
        </q-card-section>
      </div>
      <q-dialog v-model="showHighlightsDateModal"
        ><showHighlightsDate
      /></q-dialog>
    </q-page>
  </q-card>
</template>

<script>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import Chart from "chart.js/auto";
import chart from "vue3-apexcharts";
import showHighlightsDate from "./HighlightDate.vue";

export default {
  name: "LandingPage2",
  components: {
    showHighlightsDate,
    apexchart: chart,
  },

  setup() {
    const $q = useQuasar();
    const rightDrawerOpen = ref(false);
    const date = ref("");
    const showHighlightsDateModal = ref(false);

    //Bar Chart (Horizontal)
    const chartHorizontalBar = {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%", // Adjust the height of the bars
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      title: {
        text: "Horizontal Bar", // You can customize the chart title
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
      yaxis: {
        title: {
          text: undefined, // Remove or customize y-axis title
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val + "students"; // Format the tooltip value
          },
        },
      },
      fill: {
        type: "pattern",
        opacity: 1, // Set opacity to 1 for a fully visible pattern
        pattern: {
          style: [
            "circles",
            "slantedLines",
            "verticalLines",
            "horizontalLines",
          ], // Array of pattern styles you can apply
        },
      },
      states: {
        hover: {
          filter: "none", // Disable hover effect filter
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
    };

    const series = [
      {
        name: "Postgraduate",
        data: [44, 55, 41, 37, 22, 43, 21], // Sample data
      },
      {
        name: "Undergraduate",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
    ];

    // Vertical Bar Chart (Column)
    const chartVerticalBar = {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, // Change to vertical bars
          columnWidth: "60%", // Adjust the column width if needed
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      title: {
        text: " Vertical Bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val + " students";
          },
        },
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      states: {
        hover: {
          filter: "none",
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
    };

    function gotoHighlightDate() {
      showHighlightsDateModal.value = true;
    }
    onMounted(() => {});

    return {
      chartHorizontalBar,
      chartVerticalBar,
      series,
      rightDrawerOpen,
      date,
      task: "",
      tasks: [
        { id: 1, todo: "Course Code registration", status: "In progress" },
        { id: 2, todo: "Examination", status: "In progress" },
        { id: 3, todo: "New Student Intake", status: "In progress" },
      ],
      columns: [
        { name: "id", label: "No.", field: "id", align: "left" },
        { name: "todo", label: "Todo item", field: "todo", align: "left" },
        { name: "status", label: "Status", field: "status", align: "left" },
        { name: "actions", label: "Actions", align: "center" },
      ],
      showHighlightsDateModal,
      gotoHighlightDate,
    };
  },
  methods: {
    goTo(page) {
      // Define your navigation logic here
      if (page === "cuba") {
        console.log("Navigate to Cuba");
      } else if (page === "test") {
        console.log("Navigate to Test");
      } else if (page === "trsk") {
        console.log("Navigate to Trsk");
      } else if (page === "asrama") {
        console.log("Navigate to Asrama");
      }
    },
    saveTask() {
      if (this.task) {
        this.tasks.push({
          id: this.tasks.length + 1,
          todo: this.task,
          status: "In progress",
        });
        this.task = "";
      }
    },
    getTasks() {
      // Function to fetch tasks
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
    markFinished(task) {
      task.status = "Finished";
    },
  },
};
</script>

<style scoped>
/* .fourcard {
  border: 1px solid gainsboro;
  border-radius: 10px;
  box-shadow: 5px 5px rgb(66, 51, 51);
} */
.main-card {
  height: 100vh;
  position: relative;
}

.right-card {
  height: auto;
  width: 350px;

  padding: 20px;
  box-sizing: border-box;
}

.icon-cards {
  display: flex;
  flex-wrap: wrap;
}

.responsive-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .responsive-layout {
    flex-direction: column;
  }

  .icon-cards,
  .right-card,
  .q-card-section {
    width: 100% !important;
    margin: 0 auto !important;
  }
}
canvas {
  max-width: 400px;
  max-height: 350px;
}
.mega-menu {
  /* display: flex; */
  /* justify-content: flex-start; */
  padding: none;
}
.child-menu {
  left: 0; /* Aligns to the left */
  position: fixed; /* Absolute positioning to enable left alignment */
}
.news-container {
  width: 100%;
  height: 400px; /* Adjust based on visible area */
  overflow: hidden;
  position: relative;
}

.news-content {
  /* display: inline-block; */
  animation: scroll-vertical 35s linear infinite;
}

.news-container:hover .news-content {
  animation-play-state: paused;
}

@keyframes scroll-vertical {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>

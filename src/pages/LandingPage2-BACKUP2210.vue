<template>
  <q-card>
    <q-page>
      <!-- Mega Menu -->
      <q-card-section>
        <div class="row responsive-layout">
          <div class="col">
            <div class="icon-menu">
              <q-card-section>
                <q-avatar size="md">
                  <img src="images/e-CoFi.png" alt="icon" />
                  <q-tooltip> e-CoFi </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/course-code.png" alt="icon" />
                  <q-tooltip> Course Code </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/paper.png" alt="icon" />
                  <q-tooltip> APMS </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/intern.png" alt="icon" />
                  <q-tooltip> LI </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/course-structure.png" alt="icon" />
                  <q-tooltip> Course Structure </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/u-time.png" alt="icon" />
                  <q-tooltip> U-Time </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/OBE-icon.png" alt="icon" />
                  <q-tooltip> OBE </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/SPB-icon.png" alt="icon" />
                  <q-tooltip> SPB </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/muet-and-cefr.png" alt="icon" />
                  <q-tooltip>MUET & CEFR </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/lecturer-info.png" alt="icon" />
                  <q-tooltip> Lecturer Info </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/program-info.png" alt="icon" />
                  <q-tooltip> Program Info </q-tooltip>
                </q-avatar>
                <!--------------------->
                <q-avatar size="md" class="q-ml-xl">
                  <img src="images/kalendar-akademik.png" alt="icon" />
                  <q-tooltip> Kalendar Akademik </q-tooltip>
                </q-avatar>
              </q-card-section>
            </div>
          </div>
        </div>
      </q-card-section>

      <!-- <q-card class="main-card"> -->
      <div class="row responsive-layout">
        <div class="col">
          <!-- Icon Cards -->
          <div class="icon-cards">
            <q-card-section
              style="background-color: indigo; width: 220px; height: 70px"
              class="q-ml-lg q-mr-md q-mt-md"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="school"
                    size="40px"
                    class="q-mb-sm q-ml-none"
                    color="white"
                  />
                </div>
                <div class="col text-center" style="color: white">
                  Total Students <br />
                  <strong>2000</strong>
                </div>
              </div>
            </q-card-section>

            <q-card-section
              style="background-color: slateblue; width: 220px; height: 70px"
              class="q-mx-md q-mt-md"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="cast_for_education"
                    size="40px"
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
              class="q-mx-md q-mt-md"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="business"
                    size="40px"
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
              class="q-mx-md q-mt-md"
            >
              <div class="row">
                <div class="col-auto">
                  <q-icon
                    name="download"
                    size="40px"
                    class="q-mb-sm q-ml-none"
                    color="white"
                  />
                </div>
                <div class="col text-center" style="color: white">
                  Full Agretation <br />
                  <strong>100%</strong>
                </div>
              </div>
            </q-card-section>
          </div>
          <br />
          <!------------------------------------------------------------ TABLE HIGHLIGHT DATES ------------------------------------------------------>
          <!-- <q-card-section>
            <q-markup-table
              class="q-mb-sm q-mt-sm q-ml-sm"
              style="width: 96%; border: 1px solid #ccc"
            >
              <caption
                class="text-h6 text-center"
                style="
                  border-bottom: 1px solid #f0edf8;
                  padding-bottom: 10px;
                  font-weight: bold;
                "
              >
                Highlight Dates
              </caption>
              <thead>
                <tr style="background-color: #f0f0f0; color: #333">
                  <th
                    class="text-center"
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      border: 1px solid #ccc;
                    "
                  >
                    Activity
                  </th>
                  <th
                    class="text-center"
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      border: 1px solid #ccc;
                    "
                  >
                    Session
                  </th>
                  <th
                    class="text-center"
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      border: 1px solid #ccc;
                    "
                  >
                    Level
                  </th>
                  <th
                    class="text-center"
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      border: 1px solid #ccc;
                    "
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style="background-color: #e6f7ff">
                  <td class="text-left" style="border: 1px solid #ccc">
                    PENDAFTARAN PELAJAR BARU
                  </td>
                  <td class="text-left" style="border: 1px solid #ccc">
                    SEM 1 2024/2025
                  </td>
                  <td class="text-left" style="border: 1px solid #ccc">
                    IJAZAH SARJANA MUDA
                  </td>
                  <td class="text-left" style="border: 1px solid #ccc">
                    29-09-2024 until 03-10-2024
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-card-section> -->

          <!------------------------------------------------- Bar chart ------------------------------------------------------>
          <q-card-section
            class="q-ml-lg q-mr-sm"
            style="
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: cornflowerblue;
              width: 93%;
            "
          >
            <div class="row q-col-gutter-lg">
              <!-- First Bar Chart -->
              <!-- <div class="col" style="width: 100px; height: 400px"> -->
              <div class="col q-mx-lg">
                <h6><b style="color: white">Undergraduate Student</b></h6>
                <canvas id="bar-chart"></canvas>
              </div>

              <!-- Second Bar Chart -->
              <!-- <div class="col" style="width: 300px; height: 400px"> -->
              <div class="col q-mx-lg">
                <h6><b style="color: white">Postgraduate Student</b></h6>
                <canvas id="bar-chart-2"></canvas>
              </div>
            </div>
            <br />

            <!------------------------------------------------ To Do List -------------------------------------------->
            <div class="q-mt-lg text-h5 text-center">
              <b style="color: white">To Do List</b>
            </div>

            <!-- <q-form class="q-gutter-md q-my-md">
            <q-input
              outlined
              dense
              v-model="task"
              placeholder="Enter a task here"
            />

            <div class="row justify-center q-my-md">
              <q-btn
                color="primary"
                label="SAVE"
                @click="saveTask"
                class="q-mr-sm"
              />
              <q-btn color="warning" label="GET TASKS" @click="getTasks" />
            </div>
          </q-form> -->

            <q-table
              :rows="tasks"
              :columns="columns"
              row-key="id"
              flat
              bordered
              class="q-mt-md"
            >
              <template v-slot:body-cell-actions="props">
                <q-td align="center">
                  <q-btn
                    color="negative"
                    label="DELETE"
                    @click="deleteTask(props.row)"
                    class="q-mr-sm"
                  />
                  <q-btn
                    color="positive"
                    label="FINISHED"
                    @click="markFinished(props.row)"
                  />
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </div>

        <!--------------------------------------------- NOTICE BOARD --------------------------------------------------------------->
        <q-card-section class="right-card q-mr-lg q-mt-md">
          <!-------------------- HIGHLIGHT DATE ------------------------------>
          <div class="row justify-center">
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
            <span style="color: white">NEWS & ACTIVITIES</span>
          </div>
          <div class="row">
            <div class="col-auto">
              <q-icon
                name="school"
                size="20px"
                class="q-mb-sm q-ml-none q-mt-md"
                color="white"
              />
            </div>
            <!------------------------------------------------------------------->
            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              Undergraduate Program
            </div>
          </div>
          <div class="q-mt-sm" style="color: white">DEGREE</div>
          <hr />
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

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
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
                color="white"
              />
            </div>

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=65&Itemid=721&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
              >
                Bachelor of Computer Science (Hons) Computer Network Security
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

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
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
                color="white"
              />
            </div>

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=67&Itemid=723&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
              >
                Bachelor of Information Technology (Hons) Informatics Media
              </a>
            </div>
          </div>
          <br />
          <!------------------------------------------------------------------->
          <div class="q-mt-sm" style="color: white">DIPLOMA</div>
          <!------------------------------------------------------------------->
          <hr />
          <div class="row">
            <div class="col-auto">
              <q-icon
                name="school"
                size="20px"
                class="q-mb-sm q-ml-none q-mt-md"
                color="white"
              />
            </div>

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=62&Itemid=717&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
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

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=63&Itemid=718&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
              >
                Diploma In Information Technology
              </a>
            </div>
          </div>
          <!------------------------------------------------------------------->
          <div class="col text-left q-ml-sm q-mt-md" style="color: white">
            Postgraduate Program
          </div>
          <hr />
          <!------------------------------------------------------------------->
          <div class="col text-left q-ml-sm q-mt-md" style="color: white">
            <b> MIXED-MODE PROGRAM (FULL TIME AND PART TIME)</b>
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

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=70&Itemid=727&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
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

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
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
                color="white"
              />
            </div>

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=68&Itemid=725&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
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
                color="white"
              />
            </div>

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=69&Itemid=726&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
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
                color="white"
              />
            </div>

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=71&Itemid=729&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
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

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=72&Itemid=730&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
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
                color="white"
              />
            </div>

            <div class="col text-left q-ml-sm q-mt-md" style="color: white">
              <a
                href="https://fik.unisza.edu.my/index.php?option=com_sppagebuilder&view=page&id=73&Itemid=731&lang=en"
                target="_blank"
                style="text-decoration: none; color: white"
              >
                Doctor of Philosophy (Statistics)
              </a>
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
import showHighlightsDate from "./HighlightDate.vue";

export default {
  name: "LandingPage2",
  components: {
    showHighlightsDate,
  },

  setup() {
    const $q = useQuasar();
    const rightDrawerOpen = ref(false);
    const date = ref("");
    const showHighlightsDateModal = ref(false);

    function gotoHighlightDate() {
      showHighlightsDateModal.value = true;
    }
    onMounted(() => {
      // First bar chart initialization
      const ctx1 = document.getElementById("bar-chart").getContext("2d");
      new Chart(ctx1, {
        type: "bar",
        data: {
          labels: ["2024", "2023", "2022", "2021", "2020"],
          datasets: [
            {
              label: "Data",
              data: [4000, 5500, 4500, 3500, 2000], // Ensure you have as many data points as labels
              backgroundColor: "#5c8809", // Bar color
              borderWidth: 1,
              borderColor: "white",
            },
          ],
        },
        options: {
          scales: {
            x: {
              beginAtZero: true,
              max: 10000,
              ticks: {
                color: "white", // White font for x-axis labels
              },
              grid: {
                color: "rgba(255, 255, 255, 0.2)", // Light white grid lines
              },
            },
            y: {
              ticks: {
                color: "white", // White font for y-axis labels
              },
              grid: {
                color: "rgba(255, 255, 255, 0.2)", // Light white grid lines
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: "white", // White font for legend labels
              },
            },
          },
        },
      });

      // Second bar chart initialization
      const ctx2 = document.getElementById("bar-chart-2").getContext("2d");
      new Chart(ctx2, {
        type: "bar",
        data: {
          labels: ["2024", "2023", "2022", "2021", "2020"],
          datasets: [
            {
              label: "Data",
              data: [3000, 3500, 4000, 6000, 8000], // Data for the second chart
              backgroundColor: "#270587", // Bar color for second chart
              borderWidth: 1,
              borderColor: "white", // White border for the bars
            },
          ],
        },
        options: {
          scales: {
            x: {
              beginAtZero: true,
              max: 10000,
              ticks: {
                color: "white", // White font for x-axis labels
              },
              grid: {
                color: "rgba(255, 255, 255, 0.2)", // Light white grid lines
              },
            },
            y: {
              ticks: {
                color: "white", // White font for y-axis labels
              },
              grid: {
                color: "rgba(255, 255, 255, 0.2)", // Light white grid lines
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: "white", // White font for legend labels
              },
            },
          },
        },
      });
    });

    return {
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
.main-card {
  height: 100vh;
  position: relative;
}

.right-card {
  height: auto;
  width: 350px;
  background-color: cadetblue;
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
</style>

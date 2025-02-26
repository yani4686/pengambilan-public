<template>
  <q-card>
    <q-page style="background-color: black">
      <q-card-section>
        <div class="row responsive-layout q-gutter-none">
          <!-- First column: wider (8/12 of the width) -->
          <div class="col-12 col-md-8">
            <q-card
              style="height: 400px; width: 100%"
              class="q-mr-md bg-amber-1"
            >
              <q-card-section>
                <div class="row">
                  <div class="col q-mt-none">
                    <h6 class="q-mt-none">
                      Dashboard <br />
                      <p class="text-caption q-mt-none">
                        Overview of latest Visitor
                      </p>
                    </h6>
                    <h5>
                      10000
                      <p class="text-caption q-mt-none">
                        Total current visitor
                      </p>
                    </h5>
                  </div>
                  <div
                    class="col-12 col-sm-6"
                    style="width: 580px; height: 500px"
                  >
                    <apexchart
                      type="line"
                      :options="chartOptions"
                      :series="chartSeries"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Donut Chart Column -->
          <div class="col-12 col-md-4">
            <q-card
              style="width: 100%; height: 400px"
              class="q-mx-sm bg-amber-1"
            >
              <q-card-section>
                <div class="text-center">
                  <q-card class="chart bg-amber-1" flat bordered>
                    <chart
                      type="donut"
                      :options="donutChartOption"
                      :series="donutSeries"
                    />
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <!--------------------------------------------------------------------------------------->

        <!-- Icon Cards below line chart and donut chart -->
        <div class="icon-cards row q-gutter-sm q-mt-sm">
          <q-card-section
            style="background-color: indigo; width: 250px; height: 90px"
          >
            <div class="row">
              <div class="col-auto">
                <q-icon
                  name="school"
                  size="40px"
                  class="q-mb-sm"
                  color="white"
                />
              </div>
              <div class="col text-center" style="color: white">
                Total Students <br />
                <strong style="font-size: 2em">2000</strong>
              </div>
            </div>
          </q-card-section>

          <q-card-section
            style="background-color: slateblue; width: 250px; height: 90px"
          >
            <div class="row">
              <div class="col-auto">
                <q-icon
                  name="cast_for_education"
                  size="40px"
                  class="q-mb-sm"
                  color="white"
                />
              </div>
              <div class="col text-center" style="color: white">
                Total Lecturers <br />
                <strong style="font-size: 2em">1000</strong>
              </div>
            </div>
          </q-card-section>

          <q-card-section
            style="background-color: purple; width: 250px; height: 90px"
          >
            <div class="row">
              <div class="col-auto">
                <q-icon
                  name="business"
                  size="40px"
                  class="q-mb-sm"
                  color="white"
                />
              </div>
              <div class="col text-center" style="color: white">
                Total Programs <br />
                <strong style="font-size: 2em">134</strong>
              </div>
            </div>
          </q-card-section>

          <q-card-section
            style="background-color: seagreen; width: 250px; height: 90px"
          >
            <div class="row">
              <div class="col-auto">
                <q-icon
                  name="download"
                  size="40px"
                  class="q-mb-sm"
                  color="white"
                />
              </div>
              <div class="col text-center" style="color: white">
                Full Aggregation <br />
                <strong style="font-size: 2em">100%</strong>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-card-section>

      <!--------------------------------- Upcoming Courses ------------------------------------------------>
      <q-card-section>
        <div class="row responsive-layout q-gutter-none">
          <!-- First column: wider (8/12 of the width) -->
          <div class="col-12 col-md-4">
            <q-card
              style="height: 400px; width: 100%"
              class="q-mr-md bg-amber-1"
            >
              <q-card-section>
                <p style="font-size: large; color: black">Upcoming Courses</p>
                <q-list bordered separator>
                  <q-item v-for="course in upcomingCourses" :key="course.id">
                    <q-item-section>
                      <div class="text-body text-bold ellipsis">
                        {{ course.name }}
                      </div>
                      <div class="text-caption">
                        {{ course.total }}
                      </div>
                    </q-item-section>
                    <q-item-section side>
                      <q-icon
                        :name="showCourse ? 'visibility' : 'visibility_off'"
                        class="cursor-pointer"
                        size="xs"
                        @click="tooglePasswordVisibility"
                      >
                        <q-tooltip> View Course </q-tooltip>
                      </q-icon>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>

          <!-- Todo List -->
          <div class="col-12 col-md-8">
            <q-card
              style="width: 100%; height: 400px"
              class="q-mx-sm bg-amber-1"
            >
              <q-card-section>
                <div class="row todo-list q-mt-lg text-h5 text-center">
                  <b style="color: black">To Do List</b>
                </div>
                <q-table
                  :rows="tasks"
                  :columns="columns"
                  row-key="id"
                  flat
                  bordered
                  class="q-mt-md bg-amber-1"
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
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-page>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import VueApexCharts from "vue3-apexcharts";
import chart from "vue3-apexcharts";
// import Chart from "chart.js/auto";

export default {
  name: "LandingPage2",
  components: {
    apexchart: VueApexCharts,
    chart,
  },

  setup() {
    const $q = useQuasar();
    const rightDrawerOpen = ref(false);
    const date = ref("");

    //------------------------------------------------------------------------------------------------------------
    const donutChartOption = ref({
      chart: {
        type: "donut",
      },
      labels: ["Diploma", "Degree", "Asasi", "Master", "PhD"],
      colors: ["#4700b3", "#bfff00", "#ff0080", "#bf00ff", "#05a831"],
      title: {
        text: "Education Levels Distribution",
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
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
    //----------------------------------------------- Upcoming Courses --------------------------------------
    const upcomingCourses = ref([
      {
        id: 1,
        name: "UI/ UX Design",
        date: "Oct 20, 2024",
        total: "30+ Courses",
      },
      { id: 2, name: "Web Dev", date: "Oct 25, 2024", total: "30+ Courses" },
      {
        id: 3,
        name: "Mathematics",
        date: "Oct 30, 2024",
        total: "30+ Courses",
      },
    ]);
    //------------------------------------------ function showCourse  --------------------------------------------------
    function tooglePasswordVisibility() {
      showCourse.value = !showCourse.value;
    }

    //-------------------------------------------------------------------------------------------------------

    const donutSeries = ref([30, 40, 15, 25, 20]);
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
      //--------------------- Line Graph -----------------------------
      chartSeries: [
        {
          name: "Undergraduate Student",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
        {
          name: "Postgraduate Student",
          data: [20, 29, 37, 36, 44, 45, 50, 58, 63],
        },
      ],
      //-----------------------------------------------------------------------------------------------------

      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Undergraduate And Postgraduate Student",
          align: "left",
        },
        xaxis: {
          categories: [
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
          ],
          align: "center",
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
      },
      //-----------------------------------------------------------------------------------------------------

      donutChartOption,
      donutSeries,
      upcomingCourses,
    };
  },
  methods: {
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
  margin-top: 40px;
}

.icon-cards {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
  padding: 0;
}

.responsive-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0px;
}
.upcoming-courses {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: 20px;
}
.todo-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-left: 20px;
}

@media (max-width: 800px) {
  .responsive-layout {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    gap: 16px;
  }

  .icon-cards {
    flex-wrap: wrap;
    margin-left: 20px;
    margin-right: 20px;
  }

  .icon-cards q-card-section {
    flex: 1 1 100%;
    margin: 20px 0;
  }

  .responsive-layout .col-12.col-md-8 {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>

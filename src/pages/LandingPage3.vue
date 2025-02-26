<template>
  <div class="q-pa-none q-mx-xl" style="width: 90%; height: 60%">
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
    </q-carousel>
  </div>
  <!----------------------------------------------------------------------------------------------------------------------->
  <div class="q-pa-sm">
    <!-- Cards Container -->
    <div class="row card-layout q-pa-lg q-ma-lg">
      <q-card class="q-mr-lg orange-card" style="width: 310px">
        <q-card-section>
          <q-icon name="library_add" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">New Programmes</div>
            <div class="text-h5">100</div>
          </div>
        </q-card-section>
      </q-card>
      <!---------------------------------------------->
      <q-card class="q-mr-lg purple-card" style="width: 310px">
        <q-card-section>
          <q-icon name="assignment_turned_in" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">Programmes approved by Faculty</div>
            <div class="text-h5">294</div>
          </div>
        </q-card-section>
      </q-card>
      <!---------------------------------------------->
      <q-card class="q-mr-lg blue-card" style="width: 310px">
        <q-card-section>
          <q-icon name="add_task" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">Unverified Programmes</div>
            <div class="text-h5">92%</div>
          </div>
        </q-card-section>
      </q-card>
      <!---------------------------------------------->
      <q-card class="green-card" style="width: 300px">
        <q-card-section>
          <q-icon name="done_all" size="lg" class="icon-left" />
          <div class="card-text">
            <div class="text-subtitle2">Approval Programmes</div>
            <div class="text-h5">80%</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <!-------------------------------------------------- Upcoming Activities ----------------------------------------------------->
    <q-card-section>
      <div class="row responsive-layout q-gutter-none">
        <!-- First column: wider (8/12 of the width) -->
        <div class="col-12 col-md-4">
          <q-card style="height: 400px; width: 100%" class="q-mr-md">
            <q-card-section>
              <p style="font-size: large; color: black">Upcoming Activities</p>
              <q-list bordered separator>
                <q-item v-for="course in upcomingActivities" :key="course.id">
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
                      @click="toggleCourseVisibility"
                    >
                      <q-tooltip> View Activities </q-tooltip>
                    </q-icon>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <!------------------------------------------------- Todo List --------------------------------------------------------->
        <div class="col-12 col-md-8">
          <q-card style="width: 92%; height: 400px" class="q-mx-sm">
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
          </q-card>
        </div>
      </div>
    </q-card-section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();

    //----------------------------------------------- Upcoming Activities --------------------------------------
    const upcomingActivities = ref([
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
    //------------------------------------- Tasks and Columns for To Do List ----------------------------------------
    const tasks = ref([
      { id: 1, todo: "Program Registration", status: "In progress" },
      // { id: 2, todo: "Examination", status: "In progress" },
      // { id: 3, todo: "New Student Intake", status: "In progress" },
    ]);
    const columns = ref([
      { name: "id", label: "No.", field: "id", align: "left" },
      { name: "todo", label: "Todo item", field: "todo", align: "left" },
      { name: "status", label: "Status", field: "status", align: "left" },
      { name: "actions", label: "Actions", align: "center" },
    ]);
    //------------------------------------------ function showCourse  --------------------------------------------------
    function tooglePasswordVisibility() {
      showCourse.value = !showCourse.value;
    }

    return {
      slide: ref(1),
      upcomingActivities,
      tasks,
      columns,
      tooglePasswordVisibility,
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
  margin-left: 0;
}

/* Text Styling */
.card-text {
  text-align: left;
}

.blue-card {
  border-left: 8px solid #6395ff;
  width: 300px;
}
.green-card {
  border-left: 8px solid #99e76c;
  width: 300px;
}
.purple-card {
  border-left: 8px solid #f811f8;
  width: 300px;
}
.orange-card {
  border-left: 8px solid #f4920a;
  width: 300px;
}
/* Hover effects */
.purple-card:hover {
  background-color: rgba(171, 157, 213, 0.2);
}

.blue-card:hover {
  background-color: rgba(99, 149, 255, 0.2);
}

.green-card:hover {
  background-color: rgba(153, 231, 108, 0.2);
}

.orange-card:hover {
  color: black;
  background-color: rgba(222, 182, 173, 0.979);
}
.responsive-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-left: 20px;
}
.card-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 20px;
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

<template>
  <q-layout view="hHh LpR fFf">
    <!-- Main Content -->
    <q-page-container>
      <q-page padding class="q-mt-xl">
        <!-- Toolbar -->
        <q-toolbar>
          <div class="toggle">
            <q-btn flat @click="prevMonth" label="Previous" color="grey" />

            <h6 class="month-year">{{ currentMonth }} {{ currentYear }}</h6>
            <q-btn flat @click="nextMonth" label="Next" color="grey" />
          </div>

          <!-- <div class="q-ml-auto">
            <span>{{ currentMonth }} {{ currentYear }}</span>
          </div> -->
          <div class="input-container">
            <q-input
              outlined
              dense
              v-model="input.search"
              label="What are you looking for?"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </q-toolbar>

        <!-- Calendar and Date Picker -->
        <div class="calendar-container row q-col-gutter-lg">
          <!-- Date Picker on the Left -->
          <div class="col-6">
            <q-card>
              <q-card-section>
                <q-date
                  v-model="selectedDate"
                  mask="YYYY-MM-DD"
                  name="date"
                  label="Choose a Date"
                  default-view="Calendar"
                  today-btn
                  clearable
                  bordered
                  class="q-mt-md"
                />
              </q-card-section>
            </q-card>
          </div>

          <!-- Calendar on the Right -->
          <div class="col-6">
            <q-card>
              <q-card-section>
                <div class="calendar__header row items-center justify-between">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                </div>

                <div
                  v-for="week in calendarWeeks"
                  :key="week"
                  class="calendar__week row"
                >
                  <div
                    v-for="day in week"
                    :key="day"
                    class="calendar__day"
                    @click="openAddEventDialog(day)"
                  >
                    {{ day }}
                    <!-- Display the event for the day -->
                    <div
                      v-if="
                        events[`${currentYear}-${currentMonthIndex + 1}-${day}`]
                      "
                    >
                      {{
                        events[`${currentYear}-${currentMonthIndex + 1}-${day}`]
                      }}
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Add Event Dialog -->
        <q-dialog v-model="menuVisible">
          <q-card>
            <q-card-section>
              <div class="text-h6">Add Event for {{ clickedDate }}</div>
            </q-card-section>
            <q-card-section>
              <!-- Event Form Inputs -->
              <div class="row q-gutter-md">
                <div class="col-11">
                  <q-input
                    v-model="eventTitle"
                    label="Event Title"
                    outlined
                    dense
                  />
                </div>
                <div class="col-11">
                  <q-input
                    v-model="startDate"
                    label="Start Date"
                    type="date"
                    outlined
                    dense
                  />
                </div>
                <div class="col-11">
                  <q-input
                    v-model="endDate"
                    label="End Date"
                    type="date"
                    outlined
                    dense
                  />
                </div>
                <div class="col-11">
                  <q-input
                    v-model="startTime"
                    label="Start Time"
                    type="time"
                    outlined
                    dense
                  />
                </div>
                <div class="col-11">
                  <q-input
                    v-model="endTime"
                    label="End Time"
                    type="time"
                    outlined
                    dense
                  />
                </div>
                <div class="col-11">
                  <q-select
                    v-model="repeat"
                    :options="[
                      {
                        label: 'None',
                        value: '0',
                      },
                      {
                        label: 'Daily',
                        value: '1',
                      },
                      {
                        label: 'Weekly',
                        value: '2',
                      },
                      {
                        label: 'Monthly',
                        value: '3',
                      },
                    ]"
                    outlined
                    dense
                    label="Repeat"
                  />
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Cancel" @click="menuVisible = false" />
              <q-btn flat label="Add Event" @click="addEvent" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ScheduleCalendar",

  setup() {
    const today = new Date();

    const input = ref({ search: "" });
    const selectedDate = ref("");
    const menuVisible = ref(false);
    const clickedDate = ref("");
    const eventTitle = ref("");
    const startDate = ref("");
    const endDate = ref("");
    const startTime = ref("");
    const endTime = ref("");
    const repeat = ref("0");
    const events = ref({});
    const currentYear = ref(today.getFullYear());
    const currentMonth = ref(
      today.toLocaleString("default", { month: "long" })
    );
    const currentMonthIndex = ref(today.getMonth());
    const calendarWeeks = ref([]);

    const generateCalendar = (year, monthIndex) => {
      const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

      let weeks = [];
      let currentWeek = new Array(firstDayOfMonth).fill("");
      for (let day = 1; day <= daysInMonth; day++) {
        currentWeek.push(day);
        if (currentWeek.length === 7 || day === daysInMonth) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      }
      calendarWeeks.value = weeks;
    };

    const openAddEventDialog = (day) => {
      clickedDate.value = `${currentYear.value}-${
        currentMonthIndex.value + 1
      }-${day}`;
      menuVisible.value = true;
    };

    const nextMonth = () => {
      if (currentMonthIndex.value === 11) {
        currentMonthIndex.value = 0;
        currentYear.value += 1;
      } else {
        currentMonthIndex.value += 1;
      }
      currentMonth.value = new Date(
        currentYear.value,
        currentMonthIndex.value
      ).toLocaleString("default", { month: "long" });
      generateCalendar(currentYear.value, currentMonthIndex.value);
    };

    const prevMonth = () => {
      if (currentMonthIndex.value === 0) {
        currentMonthIndex.value = 11;
        currentYear.value -= 1;
      } else {
        currentMonthIndex.value -= 1;
      }
      currentMonth.value = new Date(
        currentYear.value,
        currentMonthIndex.value
      ).toLocaleString("default", { month: "long" });
      generateCalendar(currentYear.value, currentMonthIndex.value);
    };

    const addEvent = () => {
      if (
        !eventTitle.value ||
        !startDate.value ||
        !endDate.value ||
        !startTime.value ||
        !endTime.value
      ) {
        alert("Please fill out all fields.");
        return;
      }
      const formattedDate = `${clickedDate.value} ${startTime.value}`;
      const endFormattedDate = `${clickedDate.value} ${endTime.value}`;
      events.value[clickedDate.value] = eventTitle.value;
      // Handle event addition logic here
      menuVisible.value = false;
    };

    const formatEvent = (event) => {
      const startDate = new Date(event.start);
      const endDate = new Date(event.end);

      // Format date as YYYY-MM-DD
      const formattedStartDate = startDate.toISOString().split("T")[0];
      const formattedEndDate = endDate.toISOString().split("T")[0];

      // Format time as HH:MM AM/PM
      const formattedStartTime = startDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const formattedEndTime = endDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Output the formatted event details
      return `
        Title: ${event.title}
        Start Date: ${formattedStartDate}
        End Date: ${formattedEndDate}
        Start Time: ${formattedStartTime}
        End Time: ${formattedEndTime}
        Repeat: ${event.repeat.label}
      `;
    };

    onMounted(() => {
      generateCalendar(currentYear.value, currentMonthIndex.value);
    });

    return {
      input,
      selectedDate,
      menuVisible,
      clickedDate,
      eventTitle,
      startDate,
      endDate,
      startTime,
      endTime,
      repeat,
      events,
      currentYear,
      currentMonth,
      currentMonthIndex,
      calendarWeeks,
      generateCalendar,
      openAddEventDialog,
      addEvent,
      nextMonth,
      prevMonth,
      formatEvent,
    };
  },
};
</script>

<style scoped>
/* Styling */
.input-container {
  display: flex;
  justify-content: flex-end; /* Aligns the input to the right */
  width: 100%; /* Full width of the parent container */
  margin-right: 1rem; /* Optional: Adds margin to the right */
}
.toggle {
  display: flex;
}
.month-year {
  white-space: nowrap; /* Prevent text from wrapping */
  margin: 0 1rem; /* Optional: Add horizontal spacing */
  font-size: 1.5rem; /* Adjust font size as needed */
}

.calendar__week {
  display: grid;
  grid-template-columns: repeat(7, 2fr);
  text-align: right;
  color: #a8b2b9; /* Grey text */
}

.calendar__header {
  display: grid;
  grid-template-columns: repeat(7, 2fr);
  font-weight: bold;
  text-align: center;
  color: #a8b2b9; /* Grey text */
}

.calendar__day {
  padding: 16px;
  border-right: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;
  text-align: center;
}

.calendar__day:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

.calendar__day:last-child {
  border-right: none;
}
</style>

<template>
  <q-page class="flex flex-center q-mt-xl">
    <div ref="calendarContainer" class="fullcalendar-container"></div>

    <!-- Dialog for adding event details -->
    <q-dialog v-model="dialogVisible">
      <q-card style="width: 400px">
        <q-card-section>
          <div class="text-h6">Add Event</div>
        </q-card-section>

        <q-card-section>
          <div class="row q-gutter-md">
            <div class="col-11">
              <q-input
                v-model="eventTitle"
                label="Event Title"
                outlined
                dense
              />
            </div>
            <!-- Start Date  -->
            <div class="col-11">
              <q-input
                v-model="startDate"
                label="Start Date"
                type="date"
                outlined
                dense
              />
            </div>
            <!-- End Date  -->
            <div class="col-11">
              <q-input
                v-model="endDate"
                label="End Date"
                type="date"
                outlined
                dense
              />
            </div>

            <!-- Start Time  -->
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

            <!-- Repeat options -->
            <div class="col-11">
              <q-select
                v-model="repeat"
                class="q-mb-sm custom-dropdown"
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
          <q-btn label="Add" color="primary" @click="addEvent" />
          <q-btn
            label="Cancel"
            color="negative"
            @click="dialogVisible = false"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Dialog for editing event details -->
    <q-dialog v-model="editDialogVisible">
      <q-card style="width: 400px">
        <q-card-section>
          <div class="text-h6">Edit Event</div>
        </q-card-section>

        <q-card-section>
          <div class="row q-gutter-md">
            <div class="col-11">
              <q-input
                v-model="editEventTitle"
                label="Event Title"
                outlined
                dense
              />
            </div>
            <!-- Start Date  -->
            <div class="col-11">
              <q-input
                v-model="editStartDate"
                label="Start Date"
                type="date"
                outlined
                dense
              />
            </div>
            <!-- End Date  -->
            <div class="col-11">
              <q-input
                v-model="editEndDate"
                label="End Date"
                type="date"
                outlined
                dense
              />
            </div>

            <!-- Start Time  -->
            <div class="col-11">
              <q-input
                v-model="editStartTime"
                label="Start Time"
                type="time"
                outlined
                dense
              />
            </div>
            <div class="col-11">
              <q-input
                v-model="editEndTime"
                label="End Time"
                type="time"
                outlined
                dense
              />
            </div>

            <!-- Repeat options -->
            <div class="col-11">
              <q-select
                v-model="editRepeat"
                class="q-mb-sm custom-dropdown"
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
          <q-btn label="Save" color="primary" @click="saveEvent" />
          <q-btn label="Delete" color="negative" @click="deleteEvent" />
          <q-btn
            label="Cancel"
            color="grey"
            @click="editDialogVisible = false"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "calendarCalendar",
  setup() {
    const calendarContainer = ref(null);
    let calendar = null;

    // Form input state for Add Event
    const dialogVisible = ref(false);
    const eventTitle = ref("");
    const startDate = ref("");
    const startTime = ref("");
    const endDate = ref("");
    const endTime = ref("");
    const repeat = ref("");

    // Form input state for Edit Event
    const editDialogVisible = ref(false);
    const editEventTitle = ref("");
    const editStartDate = ref("");
    const editStartTime = ref("");
    const editEndDate = ref("");
    const editEndTime = ref("");
    const editRepeat = ref("");

    // Store clicked date and event
    let clickedDate = "";
    let currentEvent = null;

    const addEvent = () => {
      if (eventTitle.value && startDate.value && endDate.value) {
        // Create a new event with the input data
        calendar.addEvent({
          title: eventTitle.value,
          start: `${startDate.value}T${startTime.value}`,
          end: `${endDate.value}T${endTime.value}`,
          allDay: false,
          extendedProps: {
            repeat: repeat.value,
          },
        });

        alert(
          `Event "${eventTitle.value}" added from ${startDate.value} to ${endDate.value}`
        );
        dialogVisible.value = false; // Close the dialog after adding
      } else {
        alert("Please fill in all fields.");
      }
    };

    const saveEvent = () => {
      if (editEventTitle.value && editStartDate.value && editEndDate.value) {
        currentEvent.setProp("title", editEventTitle.value);
        currentEvent.setDates(
          `${editStartDate.value}T${editStartTime.value}`,
          `${editEndDate.value}T${editEndTime.value}`
        );
        currentEvent.setExtendedProp("repeat", editRepeat.value);

        alert(
          `Event "${editEventTitle.value}" updated from ${editStartDate.value} to ${editEndDate.value}`
        );
        editDialogVisible.value = false; // Close the dialog after saving
      } else {
        alert("Please fill in all fields.");
      }
    };

    const deleteEvent = () => {
      if (
        confirm(
          `Are you sure you want to delete the event "${currentEvent.title}"?`
        )
      ) {
        currentEvent.remove();
        alert(`Event "${currentEvent.title}" has been deleted.`);
        editDialogVisible.value = false; // Close the dialog after deleting
      }
    };

    onMounted(() => {
      calendar = new Calendar(calendarContainer.value, {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        editable: true,
        events: [
          {
            title: "Event 1",
            start: "2024-09-20T10:00:00",
            end: "2024-09-22T14:00:00",
          },
          {
            title: "Event 2",
            start: "2024-09-25T12:00:00",
          },
        ],
        // Handle date click to open Add Event dialog
        dateClick: function (info) {
          clickedDate = info.dateStr; // Store clicked date
          startDate.value = clickedDate;
          endDate.value = clickedDate;
          dialogVisible.value = true; // Show the Add Event dialog
        },
        // Handle event click to open Edit Event dialog
        eventClick: function (info) {
          currentEvent = info.event;
          editEventTitle.value = currentEvent.title;
          editStartDate.value = currentEvent.startStr.split("T")[0];
          editStartTime.value = currentEvent.startStr.split("T")[1] || "";
          editEndDate.value = currentEvent.endStr.split("T")[0];
          editEndTime.value = currentEvent.endStr.split("T")[1] || "";
          editRepeat.value = currentEvent.extendedProps.repeat || "0";
          editDialogVisible.value = true; // Show the Edit Event dialog
        },
      });
      calendar.render();
    });

    onBeforeUnmount(() => {
      if (calendar) {
        calendar.destroy();
      }
    });

    return {
      calendarContainer,
      dialogVisible,
      eventTitle,
      startDate,
      startTime,
      endDate,
      endTime,
      repeat,
      editDialogVisible,
      editEventTitle,
      editStartDate,
      editStartTime,
      editEndDate,
      editEndTime,
      editRepeat,
      addEvent,
      saveEvent,
      deleteEvent,
    };
  },
};
</script>

<style>
.fullcalendar-container {
  width: 70%;
  height: 100vh; /* Adjust height as needed */
}
.custom-dropdown .q-menu {
  margin-top: 6px; /* Adjust this value for the dropdown margin */
}
</style>

<template>
  <q-card style="width: 400px">
    <q-card-section span class="text-h6">
      Add Event on {{ selectedDate }}
      <hr />
      <div>
        <q-form @submit.prevent="SubmitEvent">
          <!-- Event Title Input -->
          <q-input
            v-model="eventTitle"
            outlined
            dense
            label="Event Title"
            required
          />
          <br />

          <!-- Start Time Input -->
          <q-input
            v-model="eventStartTime"
            type="time"
            outlined
            dense
            label="Start Time"
            required
          />
          <br />

          <!-- End Time Input -->
          <q-input
            v-model="eventEndTime"
            type="time"
            outlined
            dense
            label="End Time"
            required
          />
          <br />

          <!-- Start Date Input with Date Picker -->
          <q-input
            outlined
            dense
            v-model="eventStartDate"
            mask="date"
            :rules="['date']"
            label="Start Date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="eventStartDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <br />

          <!-- End Date Input with Date Picker -->
          <q-input
            outlined
            dense
            v-model="eventEndDate"
            mask="date"
            :rules="['date']"
            label="End Date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="eventEndDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <!-- Repeat Event Dropdown -->
          <q-select
            v-model="eventRepeat"
            class="q-mb-sm custom-dropdown"
            :options="[
              { label: 'Daily', value: '1' },
              { label: 'Weekly', value: '2' },
              { label: 'Monthly', value: '3' },
            ]"
            outlined
            dense
            label="Repeat"
          />
        </q-form>
      </div>
    </q-card-section>

    <q-card-section align="right">
      <q-btn label="Add Event" type="submit" color="primary" class="q-mr-sm" />
      <q-btn label="Close" color="negative" @click="$emit('close')" />
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ScheduleCalendarModal",
  props: {
    selectedDate: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, { emit }) {
    // Initialize reactive variables
    const eventTitle = ref("");
    const eventStartTime = ref("");
    const eventEndTime = ref("");
    const eventStartDate = ref("");
    const eventEndDate = ref("");
    const eventRepeat = ref([]);

    function SubmitEvent() {
      // Check if required fields are filled
      if (
        !eventTitle.value ||
        !eventStartTime.value ||
        !eventEndTime.value ||
        !eventStartDate.value ||
        !eventEndDate.value
      ) {
        console.log("Please fill in all required fields.");
        return;
      }

      // Create a new event object
      const newEvent = {
        title: eventTitle.value,
        startTime: eventStartTime.value,
        endTime: eventEndTime.value,
        startDate: eventStartDate.value,
        endDate: eventEndDate.value,
        repeat: eventRepeat.value,
        date: props.selectedDate, // Add the selected date to the event
      };

      // Emit the event data to the parent component
      emit("event-added", newEvent);

      // Clear form after submission
      eventTitle.value = "";
      eventStartTime.value = "";
      eventEndTime.value = "";
      eventStartDate.value = "";
      eventEndDate.value = "";
      eventRepeat.value = [];
    }

    return {
      eventTitle,
      eventStartTime,
      eventEndTime,
      eventStartDate,
      eventEndDate,
      eventRepeat,
      SubmitEvent,
    };
  },
};
</script>

<style scoped>
.custom-dropdown .q-menu {
  margin-top: 10px; /* Adjust this value for the dropdown margin */
}
</style>

<template>
  <q-page class="q-pa-sm justify-center">
    <div class="row q-ma-xl q-pa-xl q-gutter-sm">
      <div class="col-12 col-sm-5">
        <q-card flat bordered>
          <q-card-section class="q-pa-md q-gutter-sm custom-bg">
            <!-- <p style="color: white">BUTTON TYPE <span style="color: red">timer modal</span></p> -->
            <p>BUTTON TYPE <span style="color: red">timer modal</span></p>

            <div class="row justify-end">
              <q-btn
                color="primary"
                class="q-ma-sm"
                style="color: white"
                @click="timerSubmit"
                >Submit</q-btn
              >
              <q-btn
                color="negative"
                class="q-ma-sm"
                style="color: white"
                @click="timerDelete"
                >Delete</q-btn
              >
              <!-- <q-btn class="bg-yellow" @click="timerClose">Close</q-btn> -->
              <q-btn
                color="positive"
                class="q-ma-sm"
                style="color: white"
                @click="timerInfo"
                >Info</q-btn
              >
            </div>
            <!-- Buttons aligned to the right -->
            <!-- <div class="button-container-right">
              <q-btn class="bg-blue" @click="timerSubmit">Submit</q-btn>
              <q-btn class="bg-red" @click="timerDelete">Delete</q-btn>
              <q-btn class="bg-yellow" @click="timerClose">Close</q-btn>
              <q-btn class="bg-green" @click="timerInfo">Info</q-btn>
            </div> -->
          </q-card-section>
        </q-card>
      </div>
      <!-------------------------------------------------------------------------------------------->
      <div class="col-12 col-sm-5 q-mx-sm">
        <q-card flat bordered>
          <q-card-section class="q-pa-md q-gutter-sm custom-bg">
            <p>BUTTON TYPE <span style="color: red">alert messagge</span></p>
            <div class="row justify-end">
              <q-btn
                color="primary"
                class="q-ma-sm"
                style="color: white"
                @click="handleSubmit"
                >Submit</q-btn
              >
              <q-btn
                color="negative"
                class="q-ma-sm"
                style="color: white"
                @click="handleDelete"
                >Delete</q-btn
              >
              <!-- <q-btn class="bg-yellow" @click="handleClose">Close</q-btn> -->
              <q-btn
                color="positive"
                class="q-ma-sm"
                style="color: white"
                @click="handleInfo"
                >Info</q-btn
              >
            </div>
            <!-- <p>BUTTON TYPE <span class="color-red">alert message</span></p> -->
            <!-- Buttons aligned to the right -->
            <!-- <div class="button-container-right">
              <q-btn class="bg-blue" @click="handleSubmit">Submit</q-btn>
              <q-btn class="bg-red" @click="handleDelete">Delete</q-btn>
              <q-btn class="bg-yellow" @click="handleClose">Close</q-btn>
              <q-btn class="bg-green" @click="handleInfo">Info</q-btn>
            </div> -->
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Timer Modal Submit -->
    <q-dialog v-model="showSubmitDialog" persistent>
      <q-card>
        <q-card-section>
          <!-- Animated Checkmark Icon -->
          <div class="icon-container">
            <q-icon name="check_circle" class="tick-icon" />
          </div>
          <div class="text-h6">
            Your Application has successfully been submitted
          </div>
          <div>Please wait for the approval.</div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Timer Modal Info -->
    <q-dialog v-model="showInfoDialog" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Information</div>
          <div>This is the info message that will close automatically.</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ButtonPage",
  setup() {
    //default false showing timer modal
    const showSubmitDialog = ref(false);
    const showInfoDialog = ref(false);

    const timerSubmit = () => {
      showSubmitDialog.value = true;
      // Automatically close the dialog after 3 seconds (3000 ms)
      setTimeout(() => {
        showSubmitDialog.value = false;
      }, 3000);
    };
    const timerDelete = () => {
      showInfoDialog.value = true;
      // Automatically close the dialog after 3 seconds (3000 ms)
      setTimeout(() => {
        showInfoDialog.value = false;
      }, 3000);
    };
    const timerClose = () => {
      showInfoDialog.value = true;
      // Automatically close the dialog after 3 seconds (3000 ms)
      setTimeout(() => {
        showInfoDialog.value = false;
      }, 3000);
    };
    const timerInfo = () => {
      showInfoDialog.value = true;
      // Automatically close the dialog after 3 seconds (3000 ms)
      setTimeout(() => {
        showInfoDialog.value = false;
      }, 3000);
    };

    //alert message
    const handleSubmit = () => {
      alert("Submit button clicked!");
    };
    const handleDelete = () => {
      alert("Delete button clicked!");
    };
    const handleClose = () => {
      alert("Close button clicked!");
    };
    const handleInfo = () => {
      alert("Info button clicked!");
    };

    // const closeInfoDialog = () => {
    //   showInfoDialog.value = false;
    // };

    return {
      handleSubmit,
      handleDelete,
      handleClose,
      handleInfo,

      //modal timer
      timerSubmit,
      timerDelete,
      timerClose,
      timerInfo,
      showInfoDialog,
      showSubmitDialog,
      // closeInfoDialog,
    };
  },
};
</script>

<style scoped>
/* Flex container to align buttons to the right */
.button-container-right {
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  gap: 0.5rem; /* Space between buttons */
}

/* Container for the checkmark icon */
.icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

/* Styling for the tick icon */
.tick-icon {
  font-size: 3rem;
  color: #4caf50; /* Green color for success */
  animation: pop-in 0.9s ease-in-out;
}

/* Keyframes for the pop-in animation */
@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.custom-bg {
  background-color: #ead952dd; /* Replace with your desired color */
}
</style>

<template>
    <q-page class="q-pa-md">
      <q-card class="q-mb-md">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Checklist</div>
        </q-card-section>
        <q-card-section class="row items-center">
          <q-avatar size="100px" class="q-mr-md">
            <img src="https://via.placeholder.com/100" alt="Profile Picture" />
          </q-avatar>
          <div>
            <q-chip color="green" text-color="white">Profile: Complete</q-chip>
            <q-chip color="red" text-color="white" class="q-ml-sm">Summary & Print: Incomplete</q-chip>
          </div>
        </q-card-section>
      </q-card>
  
      <q-card class="q-mb-md">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Application Processing Tracking</div>
        </q-card-section>
        <q-card-section class="text-center">
          <q-stepper v-model="step" vertical color="primary" animated>
            <q-step :name="1" title="Application" icon="article" done />
            <q-step :name="2" title="Processing" icon="hourglass_empty" done />
            <q-step :name="3" title="Result" icon="check_circle" :done="false" />
          </q-stepper>
        </q-card-section>
      </q-card>
  
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Application Status</div>
        </q-card-section>
        <q-card-section>
          <div class="text-subtitle1">Date: 25/10/2024</div>
          <div class="text-body1">Your application has been approved.</div>
          <div class="q-mt-md">
            <q-btn color="green" label="Accept" class="q-mr-sm" />
            <q-btn color="red" label="Reject" />
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 3
      };
    }
  };
  </script>
  
  <style scoped>
  .q-chip {
    font-size: 1em;
  }
  </style>
  
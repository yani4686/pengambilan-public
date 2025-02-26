<template>
    <div class="q-pa-md">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Acceptance Approval</div>
        </q-card-section>
  
        <q-card-section>
          <h4 class="text-h6">Approval Details</h4>
          <q-list>
            <q-item>
              <q-item-section>Name:</q-item-section>
              <q-item-section side>
                <q-chip>{{ approvalDetails.name }}</q-chip>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>IC/Passport No.:</q-item-section>
              <q-item-section side>
                <q-chip>{{ approvalDetails.ic }}</q-chip>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Programme:</q-item-section>
              <q-item-section side>
                <q-chip>Master of Science</q-chip>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Mode:</q-item-section>
              <q-item-section side>
                <q-chip>Research</q-chip>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Faculty:</q-item-section>
              <q-item-section side>
                <q-chip>FIK</q-chip>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Type of Study:</q-item-section>
              <q-item-section side>
                <q-chip>Full Time</q-chip>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Date of Offer Approval:</q-item-section>
              <q-item-section side>
                <q-chip>18 November 2024</q-chip>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
  
        <q-separator />
  
        <q-card-section>
          <h4 class="text-h6">Update Additional Personal Details</h4>
          <q-form @submit.prevent="updateDetails">
            <q-input filled v-model="details.nationality" label="Nationality" />
            <q-input filled v-model="details.address" label="Corresponding Address" />
            <q-input filled v-model="details.state" label="State" />
            <q-input filled v-model="details.country" label="Country" />
            <q-select filled v-model="details.dun" :options="dunOptions" label="DUN" />
            <q-input filled v-model="details.parliament" label="Parliament" readonly />
            <q-select filled v-model="details.schoolType" :options="schoolOptions" label="Type of Secondary School" />
            <q-input filled v-model="details.bispm" label="BI (SPM)" />
            <q-btn type="submit" label="Update" color="primary" class="q-mt-md" />
          </q-form>
        </q-card-section>
  
        <q-separator />
  
        <q-card-section>
          <q-checkbox v-model="agree" label="I understand and accept the offer from Unisza." />
          <q-btn label="Preview Offer Letter" color="primary" class="q-mt-md" @click="previewOffer" />
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        approvalDetails: {
          name: "John Doe",
          ic: "123456-78-9012",
        },
        details: {
          nationality: "",
          address: "",
          state: "",
          country: "",
          dun: "",
          parliament: "",
          schoolType: "",
          bispm: "",
        },
        dunOptions: ["Option 1", "Option 2"],
        schoolOptions: ["School Type 1", "School Type 2"],
        agree: false,
      };
    },
    methods: {
      updateDetails() {
        alert("Details updated!");
      },
      previewOffer() {
        alert("Preview Offer Letter");
      },
    },
  };
  </script>
  
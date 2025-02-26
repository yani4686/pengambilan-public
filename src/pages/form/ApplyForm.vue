<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Admission Application</div>
      </q-card-section>
      
      <q-stepper v-model="step" color="primary" animated>
        <q-step :name="1" title="Profile" icon="person" :done="step > 1">
          <q-form @submit.prevent="nextStep">
            <q-select v-model="applicationType" :options="applicationTypes" label="Application Type" outlined />
            
            <q-file v-if="applicationType === 'AP'" v-model="apelCertificate" label="APEL.A Certificate" outlined />
            
            <q-btn label="Next" type="submit" color="primary" class="q-mt-md" />
          </q-form>
        </q-step>

        <q-step :name="2" title="Program Detail" icon="school" :done="step > 2">
          <q-input v-model="programDetail" label="Program Detail" outlined />
          <q-btn label="Next" @click="nextStep" color="primary" class="q-mt-md" />
        </q-step>

        <q-step :name="3" title="Upload" icon="cloud_upload" :done="step > 3">
          <q-file v-model="uploadedFile" label="Upload File" outlined />
          <q-btn label="Next" @click="nextStep" color="primary" class="q-mt-md" />
        </q-step>

        <q-step :name="4" title="Additional" icon="info" :done="step > 4">
          <q-input v-model="additionalInfo" label="Additional Information" outlined />
          <q-btn label="Next" @click="nextStep" color="primary" class="q-mt-md" />
        </q-step>

        <q-step :name="5" title="Submission" icon="send">
          <p>Final submission step...</p>
          <q-btn label="Submit" @click="submitForm" color="green" class="q-mt-md" />
        </q-step>
      </q-stepper>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      applicationType: null,
      applicationTypes: [
        { label: 'Normal', value: 'SP' },
        { label: 'APEL.A Qualification', value: 'AP' }
      ],
      apelCertificate: null,
      programDetail: '',
      uploadedFile: null,
      additionalInfo: ''
    };
  },
  methods: {
    nextStep() {
      if (this.step < 5) this.step++;
    },
    submitForm() {
      alert('Form Submitted!');
    }
  }
};
</script>

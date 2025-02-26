<template>
  <q-page padding>
    <!-- Header  -->
    <q-card class="header-tittle-section">
      <q-card-section class="header-section">
        <div class="text-h5 text-center">APPLICATION FORM</div>
      </q-card-section>
    </q-card>
    <!-- Center the Card -->
    <div class="row q-mt-lg">
      <q-card class="col-12">
        <q-card-section class="card-title">
          Application Form
          <!-- <span style="color: crimson; font-size: small">(two-column)</span> -->
        </q-card-section>
        <hr />
        <!-- Input type text -->
        <div class="row q-gutter-none q-mt-lg">
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label
                  class="col-form-label q-mb-none"
                  style="margin-left: 20px"
                  >Input Text 1<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-input
                  color="blue"
                  v-model="form.inputtext1"
                  outlined
                  dense
                  :rules="[(val) => !!val || 'Name is required']"
                  required
                  style="margin: 0 12px"
                />
              </div>
            </div>
          </div>

          <!-- Dropdown Single select -->
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label
                  class="col-form-label q-mb-none"
                  style="margin-left: 20px"
                  >Single Dropdown<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-select
                  color="blue"
                  v-model="form.singleDropdown"
                  :options="singleDropdownOptions"
                  outlined
                  dense
                  :rules="[(val) => !!val || 'Program is required']"
                  required
                  style="margin: 0 12px"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Multiple Dropdown -->
        <div class="row q-gutter-none">
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label class="col-form-label" style="margin-left: 20px"
                  >Multiple Dropdown<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-select
                  color="blue"
                  v-model="form.multiplechoice"
                  :options="multipleDropdownOption"
                  outlined
                  dense
                  multiple
                  :rules="[(val) => !!val || 'Program is required']"
                  required
                  style="margin: 0 12px"
                  clearable
                />
              </div>
            </div>
          </div>

          <!-- Filtering Dropdown (Loading) -->
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label class="col-form-label" style="margin-left: 20px"
                  >Filtering Dropdown<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-select
                  color="blue"
                  outlined
                  dense
                  :rules="[(val) => !!val || 'This is required']"
                  required
                  style="margin: 0 12px"
                  v-model="model"
                  use-input
                  input-debounce="0"
                  label="Filtering Dropdown With Loading"
                  :options="options"
                  @filter="filterFn"
                  clearable
                />
                <!-- Linear Progress -->
                <q-linear-progress
                  v-if="loading"
                  indeterminate
                  color="blue"
                  class="q-mt-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Date -->
        <div class="row q-gutter-none">
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label class="col-form-label" style="margin-left: 20px"
                  >Date<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-input
                  outlined
                  dense
                  v-model="form.date"
                  mask="####/##/##"
                  label="yyyy/mm/dd"
                  :rules="['date']"
                  style="margin: 0 12px"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="form.date" @input="formatDate">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
          </div>

          <!-- Radio Button -->
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label class="col-form-label" style="margin-left: 20px"
                  >Radio Button<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-radio
                  v-model="form.radioButton"
                  label="Option 1"
                  val="opt1"
                  name="radioButton"
                  size="xs"
                  style="margin-left: 5px"
                />
                <q-radio
                  v-model="form.radioButton"
                  label="Option 2"
                  val="opt2"
                  name="radioButton"
                  size="xs"
                  style="margin-left: 20px"
                />
                <q-radio
                  v-model="form.radioButton"
                  label="Option 3"
                  val="opt3"
                  name="radioButton"
                  size="xs"
                  style="margin-left: 20px"
                />
                <q-radio
                  v-model="form.radioButton"
                  label="Option 4"
                  val="opt4"
                  name="radioButton"
                  size="xs"
                  style="margin-left: 20px"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Checkbox Button-->
        <div class="row q-gutter-none">
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label class="col-form-label" style="margin-left: 20px"
                  >Checkbox Button<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-checkbox
                  v-model="form.CheckboxButton"
                  label="Option A"
                  val="optA"
                  name="CheckboxButton"
                  size="xs"
                  style="margin-left: 5px"
                />
                <q-checkbox
                  v-model="form.CheckboxButton"
                  label="Option B"
                  val="optB"
                  name="CheckboxButton"
                  size="xs"
                  style="margin-left: 20px"
                />
                <q-checkbox
                  v-model="form.CheckboxButton"
                  label="Option C"
                  val="optC"
                  name="CheckboxButton"
                  size="xs"
                  style="margin-left: 20px"
                />
                <q-checkbox
                  v-model="form.CheckboxButton"
                  label="Option D"
                  val="optD"
                  name="CheckboxButton"
                  size="xs"
                  style="margin-left: 20px"
                />
              </div>
            </div>
          </div>

          <!-- Upload File -->
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label class="col-form-label" style="margin-left: 20px"
                  >Upload Files<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-file
                  color="blue"
                  v-model="form.files"
                  outlined
                  multiple
                  dense
                  :rules="[(val) => !!val || 'Evidence is required']"
                  required
                  label=" Click to Upload"
                  style="margin: 0 12px"
                />
              </div>
            </div>
          </div>

          <!-- Input type text Textarea -->
          <div class="col-12 col-sm-6">
            <div class="row">
              <div class="col-12 col-sm-3">
                <label
                  class="col-form-label q-mb-none"
                  style="margin-left: 20px"
                  >Textarea<span style="color: red">*</span></label
                >
              </div>
              <div class="col-12 col-sm-9">
                <q-input
                  type="textarea"
                  v-model="form.description"
                  outlined
                  dense
                  :rules="[(val) => !!val || 'Description is required']"
                  style="margin: 0 12px"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Submit Button -->
        <q-card-actions align="right">
          <q-btn
            label="Submit"
            color="primary"
            @click="submitForm"
            :loading="loading"
            :disable="loading"
            dense
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      form: {
        inputtext1: "",
        singleDropdown: "",
        multiplechoice: [],
        date: "",
        radioButton: "",
        CheckboxButton: [],
        files: [],
        description: "",
      },
      singleDropdownOptions: [
        { label: "Option 1", value: "opt1" },
        { label: "Option 2", value: "opt2" },
      ],
      multipleDropdownOption: [
        { label: "Option A", value: "optA" },
        { label: "Option B", value: "optB" },
        { label: "Option C", value: "optC" },
        { label: "Option D", value: "optD" },
      ],
      options: [
        { label: "Filter A", value: "filterA" },
        { label: "Filter B", value: "filterB" },
        { label: "Filter C", value: "filterC" },
        { label: "Filter D", value: "filterD" },
      ],
      model: "",
      loading: false, // For loading state of the filter dropdown
    };
  },
  methods: {
    filterFn(val, update) {
      this.loading = true; // Start loading
      setTimeout(() => {
        update(() => {
          const needle = val.toLowerCase();
          this.options = this.options.filter(
            (v) => v.label.toLowerCase().indexOf(needle) > -1
          );
          this.loading = false; // Stop loading
        });
      }, 1000); // Simulated delay ( original reduce is 500)
    },
    submitForm() {
      // Set loading state to true when submitting
      this.loading = true;

      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        // After submission process, set loading to false
        this.loading = false;
        alert("Form submitted successfully!");
      }, 2000); // Simulated delay (e.g., API call)
    },
    formatDate(date) {
      this.form.date = date;
    },
  },
};
</script>

<style>
.header-tittle-section {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.header-section {
  /* background-color: #fefffe; */
  background-image: url("images/aesthetic.jpeg"); /* Path to the background image */
  background-size: cover; /* Make the image cover the entire section */
  background-position: center; /* Center the image */
  padding: 10px;
  margin-bottom: 20px;
  margin: 0 auto;
  width: 100%;

  /* color: white; */
}
.tittle-section {
  background-color: #84a2ef;
  padding: 10px;
  margin-bottom: 0%;
}
.card-title {
  font-size: 16px;
  margin: 1px 20px 2px 10px;
  padding: 4px;
}
.submitbutton {
  font-size: 12px;
}
</style>

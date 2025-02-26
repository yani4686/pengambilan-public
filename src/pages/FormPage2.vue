<template>
  <q-page>
    <q-form @submit="submitForm">
      <!------------------- Section A - First Card Horizontal Form (one-column) ---------------------->
      <div class="row">
        <q-card class="col-12">
          <q-card-section class="card-title">
            Example Form
            <span style="color: crimson; font-size: small"
              >(with API)</span
            ></q-card-section
          >
          <div class="row q-gutter">
            <q-card class="col-12 q-pa-sm q-mx-sm">
              <p>CHECK DETAIL</p>
              <!-- <q-card-section class="card-title"> Example Form </q-card-section> -->
              <div class="row q-gutter">
                <div class="col-12">
                  <q-select
                    class="q-mb-sm"
                    v-model="input.session"
                    :options="sessionOptions"
                    label="Session"
                    option-label="sessionname2"
                    option-value="session"
                    outlined
                    dense
                  />
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!-- tahap pengajian selection -->
                  <q-select
                    class="q-mb-sm"
                    v-model="input.levelstudy"
                    :options="levelstudyOptions"
                    label="Level of Study"
                    option-label="a024bnjkprog"
                    option-value="a024bjkprog"
                    outlined
                    dense
                  />
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!-- Kod Program -->
                  <q-select
                    class="q-mb-sm"
                    v-model="input.programcode"
                    :options="programcodeOptions"
                    label="Program Code"
                    option-label="y005namaprog"
                    option-value="a006kprog"
                    outlined
                    dense
                    :disable="!input.session || !input.levelstudy"
                  >
                  </q-select>
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!--Semester -->
                  <q-select
                    class="q-mb-sm"
                    v-model="input.semester"
                    :options="semesterOptions"
                    label="Semester"
                    option-label="sem"
                    option-value="sem"
                    outlined
                    dense
                    :disable="
                      !input.session || !input.levelstudy || !input.programcode
                    "
                  />
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!-- number -->
                  <q-input
                    class="q-mb-sm"
                    v-model="input.number"
                    label="Number of Student"
                    outlined
                    dense
                    readonly
                  />
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!-- Programme Name -->
                  <q-input
                    class="q-mb-sm"
                    v-model="input.progstudy"
                    label="Program Study"
                    outlined
                    dense
                  />
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!-- faculty Name -->
                  <q-input
                    class="q-mb-sm"
                    v-model="input.facstudy"
                    label="Faculty of Studies"
                    outlined
                    dense
                  />
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!-- Programme Name -->
                  <q-input
                    class="q-mb-sm"
                    v-model="input.progname"
                    label="Programme Name"
                    outlined
                    dense
                  />
                </div>
              </div>

              <div class="row q-gutter">
                <div class="col-12">
                  <!-- faculty Name -->
                  <q-input
                    class="q-mb-sm"
                    v-model="input.facname"
                    label="Faculty Name"
                    outlined
                    dense
                    @focus="askConfirmation"
                  />
                </div>
              </div>
              <!-- Submit button -->
              <q-card-actions align="right" class="submit-button">
                <q-btn
                  label="Submit"
                  type="submit"
                  color="primary"
                  class="q-mr-sm submitbutton"
                  size="md"
                  @click="Submit()"
                />
                <!-- <q-btn label="Submit" type="submit" color="primary" /> -->
              </q-card-actions>
            </q-card>
          </div>
        </q-card>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { onMounted } from "vue";
import { md5 } from "js-md5";

export default {
  data() {
    return {
      input: {
        nopel: "",
        kodprogram: "",
        session: "",
        levelstudy: "",
        programcode: "",
        semester: "",
        facname: "",
      },
      showConfirmation: false, // Controls the confirmation dialog visibility
      // sessions: [], // To store session options
      nopelError: "",
      kodProgramLoading: false,
      isVisible: this.visible,
      sessionOptions: [], // Store fetched session options
      levelstudyOptions: [], // Store level study options
      programcodeOptions: [], // Store program code options
      semesterOptions: [],
    };
  },
  watch: {
    "input.session"(newVal) {
      console.log("Session changed to:", newVal);
      this.fetchProgramCode();
    },
    "input.levelstudy"(newVal) {
      console.log("Level study changed to:", newVal);
      this.fetchProgramCode();
    },
    "input.semester"(newVal) {
      console.log("Semester changed:", newVal);
      if (newVal) {
        this.fetchNumber();
        this.fetchprogstud();
      }
    },
    "input.programcode"(newVal) {
      console.log("Program code changed:", newVal);
      if (newVal) {
        this.fetchSemester();
      }
    },
    visible(newVal) {
      this.isVisible = newVal;
    },
    isVisible(newVal) {
      this.$emit("update:visible", newVal);
    },
    // Watch for changes in session and levelstudy
    "input.session": "fetchProgramCode",
    "input.levelstudy": "fetchProgramCode",
  },
  mounted() {
    this.fetchSessions();
    this.fetchLevelStudy();
    this.fetchProgramCode();
    this.fetchSemester();
    this.fetchNumber();
    this.fetchprogstud();
  },
  methods: {
    fetchSessions() {
      let mdate = new Date();
      // console.log(mdate);
      // Ensure day and month are always two digits (with leading zeros if needed)
      let day = mdate.getDate().toString().padStart(2, "0");
      let month = (mdate.getMonth() + 1).toString().padStart(2, "0");
      let year = mdate.getFullYear().toString();

      let token = md5(day + month + year);
      // console.log(token);

      api.get("/v2/get-academic-session?token=" + token).then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          this.sessionOptions = res.data.data;
        } else {
          this.sessionOptions = [];
          console.warn("No data available");
        }
      });
    },
    fetchLevelStudy() {
      let mdate = new Date();
      // console.log(mdate);
      // Ensure day and month are always two digits (with leading zeros if needed)
      let day = mdate.getDate().toString().padStart(2, "0");
      let month = (mdate.getMonth() + 1).toString().padStart(2, "0");
      let year = mdate.getFullYear().toString();
      let token = md5(day + month + year);

      api.get("/academic/get-levelstudy?token=" + token).then((res) => {
        if (res.data.status == "success") {
          this.levelstudyOptions = res.data.data;
        } else {
          this.levelstudyOptions = [];
          console.warn("No data available");
        }
      });
    },

    fetchProgramCode() {
      if (!this.input.session.session || !this.input.levelstudy.a024bjkprog) {
        this.programcodeOptions = []; // Clear program options if session/levelstudy is not selected
        return;
      }

      let mdate = new Date();
      // console.log(mdate);
      // Ensure day and month are always two digits (with leading zeros if needed)
      let day = mdate.getDate().toString().padStart(2, "0");
      let month = (mdate.getMonth() + 1).toString().padStart(2, "0");
      let year = mdate.getFullYear().toString();
      let tokendate = day + month + year;

      const token = md5(
        this.input.session.session +
          this.input.levelstudy.a024bjkprog +
          tokendate
      );

      api
        .get(
          "/academic/get-programcode?token=" +
            token +
            "&session=" +
            this.input.session.session +
            "&levelstudy=" +
            this.input.levelstudy.a024bjkprog
        )
        .then((res) => {
          console.log(res);
          // console.log("Program Code:", res.data.data);
          if (res.data.status == "success") {
            this.programcodeOptions = res.data.data;
          } else {
            this.programcodeOptions = [];
            console.warn("No data available");
          }
        });
    },

    fetchSemester() {
      // console.log("Session:", this.input.session);
      // console.log("Level Study:", this.input.levelstudy);
      // console.log("Program Code:", this.input.programcode.A006KPROG);

      if (
        !this.input.session.session ||
        !this.input.levelstudy.a024bjkprog ||
        !this.input.programcode.a006kprog
      ) {
        // console.warn("Missing required fields for fetching semester!");
        this.semesterOptions = []; // Clear program options if session/levelstudy is not selected
        return;
      }

      let mdate = new Date();
      // console.log(mdate);
      // Ensure day and month are always two digits (with leading zeros if needed)
      let day = mdate.getDate().toString().padStart(2, "0");
      let month = (mdate.getMonth() + 1).toString().padStart(2, "0");
      let year = mdate.getFullYear().toString();
      let tokendate = day + month + year;

      const token = md5(
        this.input.session.session +
          this.input.levelstudy.a024bjkprog +
          this.input.programcode.a006kprog +
          tokendate
      );

      api
        .get(
          "/academic/get-semester?token=" +
            token +
            "&session=" +
            this.input.session.session +
            "&levelstudy=" +
            this.input.levelstudy.a024bjkprog +
            "&kprog=" +
            this.input.programcode.a006kprog
        )
        .then((res) => {
          console.log(res);
          console.log("sem:", res.data.data);
          if (res.data.status == "success") {
            this.semesterOptions = res.data.data;
            // Add "All Sem" option at the end of the array
            this.semesterOptions.push({
              sem: "All",
            });
          } else {
            this.semesterOptions = [];
            console.warn("No data available");
          }
        });
    },

    fetchNumber() {
      if (
        !this.input.session.session ||
        !this.input.levelstudy.a024bjkprog ||
        !this.input.programcode.a006kprog ||
        !this.input.semester.sem
      ) {
        this.input.number = ""; // Clear the number field if required values are missing
        return;
      }

      // Generate token based on inputs
      let mdate = new Date();
      // console.log(mdate);
      // Ensure day and month are always two digits (with leading zeros if needed)
      let day = mdate.getDate().toString().padStart(2, "0");
      let month = (mdate.getMonth() + 1).toString().padStart(2, "0");
      let year = mdate.getFullYear().toString();
      let tokendate = day + month + year;

      const token = md5(
        this.input.session.session +
          this.input.levelstudy.a024bjkprog +
          this.input.programcode.a006kprog +
          this.input.semester.sem +
          tokendate
      );

      // API call to fetch the number based on selected inputs
      api
        .get(
          "/academic/get-number?token=" +
            token +
            "&session=" +
            this.input.session.session +
            "&levelstudy=" +
            this.input.levelstudy.a024bjkprog +
            "&kprog=" +
            this.input.programcode.a006kprog +
            "&semester=" +
            this.input.semester.sem
        )
        .then((res) => {
          console.log(res);
          console.log("no student:", res.data.data[0].count);
          if (res.data.status === "success") {
            this.input.number = res.data.data[0].count; // Set the fetched number
          } else {
            this.input.number = "";
            console.warn("No number available for the selected options.");
          }
        })
        .catch((err) => {
          console.error("Error fetching number:", err);
          this.input.number = "";
        });
    },
    fetchprogstud() {
      if (
        !this.input.session.session ||
        !this.input.levelstudy.a024bjkprog ||
        !this.input.programcode.a006kprog ||
        !this.input.semester.sem
      ) {
        this.input.progstudy = ""; // Clear the number field if required values are missing
        this.input.facstudy = "";
        this.input.progname = "";
        this.input.facname = "";
        return;
      }

      let mdate = new Date();
      // console.log(mdate);
      // Ensure day and month are always two digits (with leading zeros if needed)
      let day = mdate.getDate().toString().padStart(2, "0");
      let month = (mdate.getMonth() + 1).toString().padStart(2, "0");
      let year = mdate.getFullYear().toString();
      let tokendate = day + month + year;

      const token = md5(
        this.input.session.session +
          this.input.levelstudy.a024bjkprog +
          this.input.programcode.a006kprog +
          this.input.semester.sem +
          tokendate
      );

      // API call to fetch the number based on selected inputs
      api
        .get(
          "/academic/get-progdetail?token=" +
            token +
            "&session=" +
            this.input.session.session +
            "&levelstudy=" +
            this.input.levelstudy.a024bjkprog +
            "&kprog=" +
            this.input.programcode.a006kprog +
            "&semester=" +
            this.input.semester.sem
        )
        .then((res) => {
          console.log(res);
          console.log("detail:", res.data.data);
          if (res.data.status === "success") {
            this.input.progstudy = res.data.data[0].progstudy;
            this.input.facstudy = res.data.data[0].facstudy;
            this.input.progname = res.data.data[0].progname;
            this.input.facname = res.data.data[0].facname; // Set the fetched number
          } else {
            this.input.progstudy = "";
            this.input.facstudy = "";
            this.input.progname = "";
            this.input.facname = "";
            console.warn("No data.");
          }
        })
        .catch((err) => {
          console.error("Error fetching number:", err);
          this.input.number = "";
        });
    },

    askConfirmation() {
      this.showConfirmation = true; // Show the confirmation dialog
    },
    confirmProcess() {
      this.showConfirmation = false; // Hide the dialog
      this.runProcessFunction(); // Call the desired function
    },
  },
};
</script>
<style>
body {
  font-family: roboto;
}

.card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
}
hr {
  margin-left: 14px;
  margin-right: 14px;
}
.submitbutton {
  font-size: 12px;
}
.submit-button {
  padding-bottom: 30px;
  margin-right: 5px;
}

/* .q-field--auto-height.q-field--dense .q-field__control,
.q-field--auto-height.q-field--dense .q-field__native {
  min-height: 30px;
} */
</style>

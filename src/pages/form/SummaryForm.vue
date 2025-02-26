<template>
    <q-page class="q-pa-md">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Summary & Print</div>
        </q-card-section>
  
        <q-card-section>
          <div class="d-flex justify-end">
            <q-btn flat round icon="download" @click="printPage" />
          </div>
  
          <h3 class="text-h6">Profile Information</h3>
          <q-separator />
  
          <q-list bordered separator>
            <q-item>
              <q-item-section>
                <q-item-label>Passport-sized Picture</q-item-label>
                <q-item-label>
                  <q-img :src="profilePicture" fit="contain" style="max-width: 150px; height: auto;" />
                </q-item-label>
              </q-item-section>
            </q-item>
  
            <q-item v-for="(value, key) in profileInfo" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
  
          <q-separator class="q-my-md" />
          <h3 class="text-h6">Application Details</h3>
          <q-list bordered separator>
            <q-item v-for="(value, key) in applicationDetails" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
  
          <q-separator class="q-my-md" />
          <h3 class="text-h6">Academic Qualification</h3>
          <q-list bordered separator>
            <q-item v-for="(value, key) in academicQualification" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
  
          <q-separator class="q-my-md" />
          <h3 class="text-h6">English Language Proficiency</h3>
          <q-list bordered separator>
            <q-item v-for="(value, key) in englishProficiency" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
  
          <q-separator class="q-my-md" />
          <h3 class="text-h6">Additional</h3>
          <q-list bordered separator>
            <q-item v-for="(value, key) in additionalInfo" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
  
          <q-separator class="q-my-md" />
          <h3 class="text-h6">Submission</h3>
          <q-list bordered separator>
            <q-item v-for="(value, key) in submission" :key="key">
              <q-item-section>
                <q-item-label>{{ key }}</q-item-label>
                <q-item-label caption>{{ value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
  
        </q-card-section>
  
        <q-card-section>
          <q-btn label="Print" color="primary" @click="printPage" />
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profilePicture: "./pascav2/assets/media/users/blank.png",
        profileInfo: {
          Name: "John Doe",
          "IC/Passport No.": "123456-78-9101",
          "Date of Birth": "01 Jan 1990",
          "Nationality Status": "Citizen",
          Nationality: "Malaysia",
          Disability: "None",
          Email: "john.doe@example.com",
          "Corresponding Address": "123 Street, City",
          State: "Selangor",
          Country: "Malaysia",
          "Tel No": "03-12345678",
          "Mobile No": "012-3456789",
          "Office No": "03-98765432",
          "Fax No": "03-87654321",
          "Home Address": "456 Home Street, Town"
        },
        applicationDetails: {
          "Mode of Study": "Full Time",
          "Type of Study": "Research",
          Programme: "Master of Science"
        },
        academicQualification: {
          "Highest Tertiary Education": "Bachelor of Science",
          "Awarding University (Bachelor)": "University of XYZ",
          "Class/CGPA (Bachelor)": "3.8",
          "Country Awarding (Bachelor)": "Malaysia",
          "Awarding University (Master)": "University of ABC",
          "Class/CGPA (Master)": "3.9",
          "Country Awarding (Master)": "United Kingdom",
          "Proposed Research Title/Area": "AI and Machine Learning",
          "Proposed Supervisor": "Dr. John Smith",
          "Portfolio Document": "Available upon request"
        },
        englishProficiency: {
          "Exam Type": "IELTS",
          Result: "8.0",
          "Registration No./Candidate No.": "IELTS12345",
          "Date of Examination": "01 Feb 2024"
        },
        additionalInfo: {
          "Agent Name": "ABC Consultants",
          "Agent Email": "agent@abc.com",
          "Type of Sponsorship": "Scholarship",
          "Household Income": "50,000 MYR"
        },
        submission: {
          "Approval of Program Changes": "Pending"
        }
      };
    },
    methods: {
      printPage() {
        window.print();
      }
    }
  };
  </script>
  
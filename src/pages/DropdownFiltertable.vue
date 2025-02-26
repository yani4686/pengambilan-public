<template>
  <q-page>
    <q-card flat bordered>
      <div style="display: flex; justify-content: center">
        <span style="font-size: medium; font-weight: bold"
          >Data Table Report</span
        >
      </div>
      <hr />
      <q-card-section> </q-card-section>

      <q-card-section>
        <!-------------------------------------- DROPDOWN FACULTY AND PROGRAM --------------------------------------------->
        <div class="row q-col-gutter-sm">
          <div class="col">
            <q-select
              v-model="selectedFaculty"
              :options="faculties"
              label="Select Faculty"
              emit-value
              map-options
              option-value="code"
              option-label="name"
              outlined
              dense
            ></q-select>
          </div>
          <div class="col">
            <q-select
              v-model="selectedProgram"
              :options="filteredPrograms"
              label="Select Program"
              emit-value
              map-options
              option-value="code"
              option-label="name"
              :disable="!selectedFaculty"
              outlined
              dense
            ></q-select>
          </div>
        </div>
        <!------------------------------ BUTTON ADD NEW, EXPORT PDF AND EXPORT EXCEL -------------------------- -->
        <q-row class="q-col-gutter-none items-center">
          <!-- Add New Row Button -->
          <q-col>
            <q-btn flat icon="add" color="primary" @click="addRow()">
              <q-tooltip class="bg-no-color" :offset="[10, 10]">
                Add new row
              </q-tooltip>
            </q-btn>
          </q-col>

          <!-- Export PDF Button -->
          <q-col>
            <q-btn flat round @click="downloadPDF()">
              <img src="~assets/pdf.svg" alt="PDF Icon" class="pdf" />
              <q-tooltip class="bg-no-color" :offset="[10, 10]">
                Export PDF
              </q-tooltip>
            </q-btn>
          </q-col>

          <!-- Export Excel Button -->
          <q-col>
            <q-btn flat round @click="downloadEXCEL()">
              <img src="~assets/Excel.png" alt="Excel Icon" class="excel" />
              <q-tooltip class="bg-no-color" :offset="[10, 10]">
                Export Excel
              </q-tooltip>
            </q-btn>
          </q-col>
        </q-row>
        <!----------------------------- REPORT TABLE ----------------------------------------------------->
        <q-table
          v-if="selectedFaculty && selectedProgram"
          :rows="reportData"
          :columns="columns"
          row-key="courseCode"
          separator="cell"
          flat
          @request="onRequest"
          v-model:pagination="pagination"
          style="padding: 2px; border: 1px solid lightgray"
        >
          <!-- Body Slots for Table -->
          <template v-slot:body-cell-facultyName="props">
            <q-td :props="props" :style="{ textAlign: 'left' }">{{
              props.row.facultyName
            }}</q-td>
          </template>
          <template v-slot:body-cell-programName="props">
            <q-td :props="props" :style="{ textAlign: 'left' }">{{
              props.row.programName
            }}</q-td>
          </template>
          <template v-slot:body-cell-courseName="props">
            <q-td :props="props" :style="{ textAlign: 'left' }">{{
              props.row.courseName
            }}</q-td>
          </template>
          <template v-slot:body-cell-action="props">
            <q-td align="center">
              <q-btn
                dense
                flat
                icon="edit"
                color="primary"
                @click="showUpdateReportModal(props.row)"
              />
              <q-btn
                dense
                flat
                icon="delete"
                color="negative"
                @click="showDeleteReportModal(props.row)"
              />
              <q-btn flat round>
                <img
                  src="~assets/pdf.svg"
                  alt="PDF Icon"
                  class="pdfRow"
                  @click="downloadPDFRow(props.row)"
                />
                <q-tooltip class="bg-no-color" :offset="[10, 10]"
                  >Export PDF</q-tooltip
                >
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <!-- Dialogs -->
    <q-dialog v-model="addReportTableModal"><addReport /></q-dialog>
    <q-dialog v-model="updateReportTableModal"><updateReport /></q-dialog>
    <q-dialog v-model="deleteReportTableModal"><deleteReport /></q-dialog>
  </q-page>
</template>

<script>
import { ref, computed, watch } from "vue";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import addReport from "./addReportTable.vue";
import updateReport from "./updateReportTable.vue";
import deleteReport from "./deleteReportTable.vue";

export default {
  components: {
    addReport,
    updateReport,
    deleteReport,
  },
  setup() {
    const pagination = ref({
      sortBy: "index",
      descending: false,
      page: 1,
      tableDataPerPage: 5,
      tableDataNumber: 10,
    });

    const faculties = ref([
      { code: "09", name: "FAKULTI UNDANG-UNDANG DAN HUBUNGAN ANTARABANGSA" },
      { code: "05", name: "FAKULTI INFORMATIK & KOMPUTERAN" },
      { code: "06", name: "FAKULTI BAHASA & KOMUNIKASI" },
      { code: "12", name: "FAKULTI REKA BENTUK INOVATIF DAN TEKNOLOGI" },
    ]);
    const programs = ref([
      //------------------------- 09 ---------------------------------------------------
      { code: "311", name: "DIPLOMA UNDANG-UNDANG", faculty: "09" },
      //--------------------------- 05 ------------------------------------------------
      { code: "411", name: "DIPLOMA TEKNOLOGI MAKLUMAT", faculty: "05" },
      {
        code: "C27",
        name: "IJAZAH SARJANA MUDA SAINS KOMPUTER (KESELAMATAN RANGKAIAN KOMPUTER) DENGAN KEPUJIAN ",
        faculty: "05",
      },
      {
        code: "C34",
        name: "SARJANA MUDA TEKNOLOGI MAKLUMAT (INFORMATIK MEDIA) DENGAN KEPUJIAN",
        faculty: "05",
      },
      //-------------------------- 06 ----------------------------------------------------
      {
        code: "611",
        name: "DIPLOMA PENGAJARAN BAHASA INGGERIS SEBAGAI BAHASA KEDUA (TESL)",
        faculty: "06",
      },
      {
        code: "B05",
        name: "IJAZAH SARJANA MUDA PENGAJIAN BAHASA ARAB (DENGAN KEPUJIAN)",
        faculty: "06",
      },
      {
        code: "B06",
        name: "SARJANA MUDA PERHUBUNGAN AWAM DENGAN MEDIA KONTEMPORARI ",
        faculty: "06",
      },
      //-------------------------------- 07 ----------------------------------------

      {
        code: "B07",
        name: "SARJANA MUDA BAHASA MELAYU KONTEMPORARI DENGAN MEDIA INTERAKTIF (KEPUJIAN)",
        faculty: "06",
      },
      //-------------------------------- 12 ----------------------------------------
      { code: "512", name: "DIPLOMA REKA BENTUK PERINDUSTRIAN", faculty: "12" },
      { code: "511", name: "", faculty: "12" },
    ]);
    const courses = ref([
      //---------------- 311 ---------------------
      {
        code: "LAW1233",
        name: "LAW1233 - ISLAMIC LEGAL SYSTEM",
        faculty: "09",
        program: "311",
      },
      {
        code: "SKP1021",
        name: "SKP1021 - SISTEM POLITIK MALAYSIA ",
        faculty: "09",
        program: "311",
      },
      {
        code: "SKE3065",
        name: "SKE3065 - ASAS-ASAS PEMBANGUNAN DALAM ISLAM ",
        faculty: "09",
        program: "311",
      },
      //---------------- 411 ---------------------

      {
        code: "TAF1023",
        name: "TAF1023 - KALKULUS",
        faculty: "05",
        program: "411",
      },
      {
        code: "MAT2033",
        name: "MAT2033 - MATEMATIK III ",
        faculty: "05",
        program: "411",
      },
      //---------------- C27 ---------------------

      {
        code: "CSC2043",
        name: "CSC2043 - PENGATURCARAAN II ",
        faculty: "05",
        program: "C27",
      },
      //---------------- C34 ---------------------

      {
        code: "TEC4157",
        name: "TEC4157 - OCCUPATIONAL SAFETY AND HEALTH",
        faculty: "05",
        program: "C34",
      },
      //---------------- 611 ---------------------

      {
        code: "BTL1022",
        name: "BTL1022 - ENGLISH CAMP I",
        faculty: "06",
        program: "611",
      },
      //---------------- B05 ---------------------

      {
        code: "LBA1011",
        name: "LBA1011 - BAHASA ARAB ",
        faculty: "06",
        program: "B05",
      },
      {
        code: "PBA2093",
        name: "PBA2093 - SEJARAH UMAT ISLAM",
        faculty: "06",
        program: "B05",
      },
      //---------------- B06 ---------------------

      {
        code: "LPI1011",
        name: "LPI1011 - ULUM AL-QURAN ",
        faculty: "06",
        program: "B06",
      },
      //---------------- B07 ---------------------

      {
        code: "SST2064",
        name: "SST2064 - AGAMA ISLAM & MASYARAKAT MELAYU  ",
        faculty: "06",
        program: "B07",
      },
      {
        code: "KZM1011",
        name: "KZM1011 - BAHASA MELAYU  ",
        faculty: "06",
        program: "B07",
      },
      //---------------- 512 ---------------------

      {
        code: "ZPP3025",
        name: "ZPP3025 - PENGURUSAN ORGANISASI",
        faculty: "12",
        program: "512",
      },
      {
        code: "LAW2033",
        name: "LAW2033 - MALAYSIAN LEGAL SYSTEM II ",
        faculty: "12",
        program: "512",
      },
      {
        code: "TEC3125",
        name: "TEC3125 - FABRICATION TECHNOLOGY",
        faculty: "12",
        program: "512",
      },
      {
        code: "LPK1011",
        name: "LPK1011 - KENEGARAAN MALAYSIA ",
        faculty: "12",
        program: "512",
      },
    ]);

    const selectedFaculty = ref(null);
    const selectedProgram = ref(null);
    const reportData = ref([]);

    const filteredPrograms = computed(() => {
      return programs.value.filter(
        (program) => program.faculty === selectedFaculty.value
      );
    });

    watch([selectedFaculty, selectedProgram], () => {
      // Ensure both faculty and program are selected
      if (selectedFaculty.value && selectedProgram.value) {
        reportData.value = courses.value
          .filter(
            (course) =>
              course.faculty === selectedFaculty.value &&
              course.program === selectedProgram.value
          )
          .map((course) => {
            const program = programs.value.find(
              (p) => p.code === course.program
            );
            const faculty = faculties.value.find(
              (f) => f.code === course.faculty
            );
            return {
              facultyName: faculty ? faculty.name : "",
              programName: program ? program.name : "",
              courseName: course.name,
            };
          });
      } else {
        // Clear the reportData if selections are not valid
        reportData.value = [];
      }
    });

    const columns = [
      {
        name: "facultyName",
        label: "FACULTY",
        field: "facultyName",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
      },
      {
        name: "programName",
        label: "PROGRAM",
        field: "programName",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
      },
      {
        name: "courseName",
        label: "COURSE",
        field: "courseName",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
      },

      {
        name: "action",
        label: "Action",
        field: "action",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
      },
    ];

    const addReportTableModal = ref(false);
    const updateReportTableModal = ref(false);
    const deleteReportTableModal = ref(false);

    function addRow() {
      addReportTableModal.value = true;
    }

    function showUpdateReportModal(row) {
      console.log("Update:", row);
      updateReportTableModal.value = true;
    }

    function showDeleteReportModal(row) {
      console.log("Delete:", row);
      deleteReportTableModal.value = true;
    }
    //------------------------- Generate PDF by Row -----------------------------------------------------------------
    function downloadPDFRow(row) {
      // Ensure proper row index is used
      const index = reportData.value.indexOf(row);
      const doc = new jsPDF();
      doc.setFontSize(12);
      doc.text("INDIVIDUAL REPORT", 105, 12, { align: "center" });

      const tableColumn = ["INDEX", "FACULTY", "PROGRAM", "COURSE"];
      const tableRows = [
        [
          index + 1,
          row.facultyName || "N/A",
          row.programName || "N/A",
          row.courseName || "N/A",
        ],
      ];

      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 20,
        theme: "grid",
        headStyles: {
          fillColor: [255, 255, 255], // Header background color
          textColor: [0, 0, 0], // Header text color
          lineWidth: 0.1, // Border thickness for header
          lineColor: [0, 0, 0], // Border color for header
          halign: "center", // Horizontal alignment for header
        },
        styles: {
          fontSize: 10, // Font size for table content
          lineColor: [0, 0, 0], // Line color for table content
          lineWidth: 0.1, // Line width for table content
        },
        tableLineColor: [0, 0, 0], // Global table line color
        tableLineWidth: 0.1, // Global table line width
        columnStyles: {
          0: { halign: "center" }, // Center align the INDEX column
        },
      });

      const fileName = `report_${
        row.courseName.replace(/\s/g, "_") || "undefined_course"
      }.pdf`;
      doc.save(fileName);
    }
    //---------------------------- Generate EXCEL ----------------------------------------
    const downloadEXCEL = () => {
      const ws = XLSX.utils.json_to_sheet(
        reportData.value.map((row, index) => ({
          // "#": index + 1,
          INDEX: index + 1,
          FACULTY: row.facultyName,
          PROGRAM: row.programName,
          COURSE: row.courseName,
        }))
      );

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Report");

      XLSX.writeFile(wb, "report.xlsx");
    };
    //---------------------------------- Generate PDF -------------------------------------------------

    const downloadPDF = () => {
      const doc = new jsPDF();

      // Save PDF name as Report
      doc.setFontSize(12);
      doc.text("REPORT", 105, 12, { align: "center" });

      // Prepare table data
      const tableColumn = ["INDEX", "FACULTY", "PROGRAM", "COURSE"];
      const tableRows = reportData.value.map((row, index) => [
        index + 1,
        row.facultyName,
        row.programName,
        row.courseName,
      ]);

      // Apply border and styling to match the table header
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 20, // Vertical start position
        theme: "grid",
        headStyles: {
          fillColor: [255, 255, 255], // Header background color
          textColor: [0, 0, 0], // Header text color
          lineWidth: 0.1, // Border thickness for header
          lineColor: [0, 0, 0], // Border color for header
          halign: "center", // Horizontal alignment for header
        },
        styles: {
          fontSize: 10, // Font size for table content
          lineColor: [0, 0, 0], // Line color for table content
          lineWidth: 0.1, // Line width for table content
        },
        tableLineColor: [0, 0, 0], // Global table line color
        tableLineWidth: 0.1, // Global table line width
        columnStyles: {
          0: { halign: "center" }, // Center align the INDEX column
        },
      });

      // Save the PDF
      doc.save("report.pdf");
    };
    //--------------------------------------------------------------------------------------------
    function onRequest(props) {
      const { page, tableDataPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      loading.value = true;

      setTimeout(() => {
        // Update rowsNumber based on the filtered data
        pagination.value.rowsNumber = getRowsNumberCount(filter);

        const fetchCount =
          tableDataPerPage === 0
            ? pagination.value.tableDataNumber
            : tableDataPerPage;
        const startRow = (page - 1) * tableDataPerPage;

        // Fetch and sort the data from server
        tableData.value.splice(
          0,
          tableData.value.length,
          ...fetchFromServer(startRow, fetchCount, filter, sortBy, descending)
        );

        pagination.value.page = page;
        pagination.value.tableDataPerPage = tableDataPerPage;
        pagination.value.sortBy = sortBy;
        pagination.value.descending = descending;
        loading.value = false;
      }, 500);
    }

    return {
      pagination,
      faculties,
      selectedFaculty,
      programs,
      filteredPrograms,
      selectedProgram,
      reportData,
      columns,
      onRequest,
      addReportTableModal,
      updateReportTableModal,
      deleteReportTableModal,
      addRow,
      showUpdateReportModal,
      showDeleteReportModal,
      downloadPDFRow,
      downloadEXCEL,
      downloadPDF,
    };
  },
};
</script>

<style>
* {
  font-family: Arial, sans-serif; /* Example styling */
}
.pdfRow {
  width: 20px; /* Set icon width */
}
* {
  font-family: Tahoma, sans-serif;
}
.excel {
  height: auto;
  max-width: 40px;
  max-height: 40px;
  object-fit: contain;
}
.pdf {
  height: auto;
  max-width: 20px;
  max-height: 30px;
  object-fit: contain;
}
.pdfRow {
  max-width: 20px;
  max-height: 15px;
  object-fit: contain;
}
.q-table th,
.q-table td {
  padding: 2px 8px;
  background-color: inherit;
}
.q-table tbody td {
  font-size: 12px;
}

.q-field--outlined.q-field--rounded .q-field__control {
  border-radius: 2px;
}
</style>

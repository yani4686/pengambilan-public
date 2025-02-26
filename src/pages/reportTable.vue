<template>
  <q-page class="q-pa-sm justify-center">
    <div class="q-pa-sm">
      <q-card flat bordered>
        <q-card-section>
          <q-table
            flat
            separator="cell"
            ref="tableRef"
            title="Programs"
            :rows="tableData"
            :columns="columns"
            row-key="id"
            v-model:pagination="pagination"
            :loading="loading"
            :filter="filter"
            binary-state-sort
            @request="onRequest"
            style="padding: 2px; border: 1px solid lightgray"
          >
            <!-- Report Title -->
            <template v-slot:top-left>
              <div>
                <span style="font-size: medium; font-weight: bold"
                  >Data Table Report</span
                >
                <hr />
              </div>
            </template>

            <!-- Search Bar -->
            <template v-slot:top-right>
              <!-- Buttons Row -->
              <q-row class="items-center justify-start">
                <!-- Add New Row Button -->
                <q-col auto>
                  <q-btn flat icon="add" color="primary" @click="addRow()">
                    <q-tooltip class="bg-no-color" :offset="[10, 10]">
                      Add new row
                    </q-tooltip>
                  </q-btn>
                </q-col>

                <!-- Export PDF Button -->
                <q-col auto>
                  <q-btn flat round>
                    <img
                      src="~assets/pdf.svg"
                      alt="PDF Icon"
                      class="pdf"
                      @click="downloadPDF()"
                    />
                    <q-tooltip class="bg-no-color" :offset="[10, 10]">
                      Export PDF
                    </q-tooltip>
                  </q-btn>
                </q-col>

                <!-- Export Excel Button -->
                <q-col auto>
                  <q-btn flat round>
                    <img
                      src="~assets/Excel.png"
                      alt="Excel Icon"
                      class="excel"
                      @click="downloadEXCEL()"
                    />
                    <q-tooltip class="bg-no-color" :offset="[10, 10]">
                      Export Excel
                    </q-tooltip>
                  </q-btn>
                </q-col>
              </q-row>
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

            <!-- Table Actions -->
            <template v-slot:body-cell-actions="props">
              <q-td align="center">
                <q-btn
                  dense
                  flat
                  icon="edit"
                  color="primary"
                  @click="updateRow(props.row)"
                />
                <q-btn
                  dense
                  flat
                  icon="delete"
                  color="negative"
                  @click="deleteRow(props.row)"
                />
                <q-btn flat round>
                  <img
                    src="~assets/pdf.svg"
                    alt="PDF Icon"
                    class="pdfRow"
                    @click="downloadPDFRow(props.row)"
                  />
                  <q-tooltip class="bg-no-color" :offset="[10, 10]">
                    Export PDF
                  </q-tooltip>
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
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import addReport from "./addReportTable.vue";
import updateReport from "./updateReportTable.vue";
import deleteReport from "./deleteReportTable.vue";

export default {
  name: "reportTable",
  components: {
    addReport,
    updateReport,
    deleteReport,
  },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();
    const tableRef = ref();
    const tableData = ref([]);
    const filter = ref("");
    const loading = ref(false);
    const addReportTableModal = ref(false);
    const updateReportTableModal = ref(false);
    const deleteReportTableModal = ref(false);

    const pagination = ref({
      sortBy: "index",
      descending: false,
      page: 1,
      tableDataPerPage: 5,
      tableDataNumber: 10,
    });

    const columns = [
      {
        name: "index",
        label: "INDEX",
        align: "center",
        field: "index",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
        sortable: true, // Enable sorting
      },
      {
        name: "faculty",
        label: "FACULTY",
        align: "left",
        field: "faculty",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
        sortable: true, // Enable sorting
      },
      {
        name: "program",
        label: "PROGRAM",
        align: "left",
        field: "program",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
        sortable: true, // Enable sorting
      },
      {
        name: "course",
        label: "COURSE",
        align: "left",
        field: "course",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
        sortable: true, // Enable sorting
      },
      {
        name: "actions",
        label: "ACTION",
        align: "center",
        field: "actions",
        headerStyle:
          "background-color: #f0f0f0; font-weight: bold; text-align: center",
        sortable: false, // No sorting for actions
      },
    ];

    const originalRows = [
      {
        id: 1,
        index: 1,
        faculty: "FAKULTI UNDANG-UNDANG DAN HUBUNGAN ANTARABANGSA",
        program: "DIPLOMA UNDANG-UNDANG",
        course: "LAW1233 - ISLAMIC LEGAL SYSTEM",
      },
      {
        id: 2,
        index: 2,
        faculty: "FAKULTI INFORMATIK & KOMPUTERAN",
        program: "DIPLOMA TEKNOLOGI MAKLUMAT",
        course: "TAF1023 - KALKULUS",
      },
      {
        id: 3,
        index: 3,
        faculty: "FAKULTI BAHASA & KOMUNIKASI",
        program:
          "DIPLOMA PENGAJARAN BAHASA INGGERIS SEBAGAI BAHASA KEDUA (TESL)",
        course: "BTL1022 - ENGLISH CAMP I",
      },
      {
        id: 4,
        index: 4,
        faculty: "FAKULTI REKA BENTUK INOVATIF DAN TEKNOLOGI",
        program: "DIPLOMA REKA BENTUK PERINDUSTRIAN",
        course: "DAS1023 - MATERIALS & MANUFAC. PROCESSES II",
      },
    ];

    function addRow() {
      addReportTableModal.value = true;
    }

    function updateRow(row) {
      console.log("Update:", row);
      updateReportTableModal.value = true;
    }

    function deleteRow(row) {
      console.log("Delete:", row);
      deleteReportTableModal.value = true;
    }
    //======================================================== GENERATE PDF  ===================================================================
    const downloadPDF = () => {
      const doc = new jsPDF();

      // Save PDF name as Report
      doc.setFontSize(12);
      doc.text("REPORT", 105, 12, { align: "center" });

      // Prepare table data
      const tableColumn = ["INDEX", "FACULTY", "PROGRAM", "COURSE"];
      const tableRows = tableData.value.map((row, index) => [
        index + 1,
        row.faculty,
        row.program,
        row.course,
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

    //======================================================== GENERATE EXCEL  ===================================================================
    const downloadEXCEL = () => {
      const ws = XLSX.utils.json_to_sheet(
        tableData.value.map((row, index) => ({
          // "#": index + 1,
          INDEX: index + 1,
          FACULTY: row.faculty,
          PROGRAM: row.program,
          COURSE: row.course,
        }))
      );

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Report");

      XLSX.writeFile(wb, "report.xlsx");
    };
    //======================================================= GENERATE PDF BY ROW ==================================================
    const downloadPDFRow = (row) => {
      const doc = new jsPDF();

      // Save PDF name as individual row report
      doc.setFontSize(12);
      doc.text("INDIVIDUAL REPORT", 105, 12, { align: "center" });

      // Prepare table data for a single row
      const tableColumn = ["INDEX", "FACULTY", "PROGRAM", "COURSE"];
      const tableRows = [[row.index, row.faculty, row.program, row.course]];

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

      // Save the PDF with a dynamic name, such as the course name or index
      const fileName = `report_${row.course.replace(/\s/g, "_")}.pdf`;
      doc.save(fileName);
    };

    //===========================================================================================================================

    function getRowsNumberCount(filter) {
      if (!filter) {
        return originalRows.length;
      }
      return originalRows.filter(
        (row) =>
          row.faculty.includes(filter) ||
          row.program.includes(filter) ||
          row.course.includes(filter)
      ).length;
    }

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
    function fetchFromServer(startRow, count, filter, sortBy, descending) {
      const data = filter
        ? originalRows.filter((row) => {
            const searchText = filter.toLowerCase();
            // Combine all the columns' values into a single string for better search matching
            const combinedRowText =
              `${row.faculty} ${row.program} ${row.course}`.toLowerCase();
            return combinedRowText.includes(searchText);
          })
        : originalRows.slice();

      // Sort data if sortBy is provided
      if (sortBy) {
        const sortFn = descending
          ? (a, b) =>
              a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0
          : (a, b) =>
              a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
        data.sort(sortFn);
      }

      return data.slice(startRow, startRow + count);
    }
    onMounted(() => {
      tableRef.value.requestServerInteraction();
    });

    return {
      tableRef,
      filter,
      loading,
      pagination,
      columns,
      tableData,
      onRequest,
      addRow,
      updateRow,
      deleteRow,
      addReportTableModal,
      updateReportTableModal,
      deleteReportTableModal,
      downloadPDF,
      downloadEXCEL,
      downloadPDFRow,
    };
  },
};
</script>

<style>
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

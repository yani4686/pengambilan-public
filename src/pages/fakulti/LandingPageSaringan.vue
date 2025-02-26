<template>
  <q-card>
    <q-page-container
      style="padding-top: 10px; padding-bottom: 37px; padding-left: 80px"
    >
    <div class="text-bold text-h6 col-12">Senarai Permohonan</div>
      <q-page class="q-pa-lg q-mt-md">
        <div class="row q-col-gutter-lg" id="test">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              class="cursor-pointer"
              :style="{
                backgroundColor: isClicked
                  ? '#68d8f7'
                  : isHovered
                  ? '#68d8f7'
                  : '#ffffff',
              }"
              :class="{ hovered: isHovered, clicked: isClicked }"
              @mouseover="isHovered = true"
              @mouseleave="isHovered = false"
              @click="handleClick"
            >
              <!-- :class="{ active: status == selectedStatus }"> -->
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Permohonan Baru</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-warning q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(231 247 253);
                      "
                    >
                      <a
                        ><span class="text-weight-medium title text-primary">
                          {{ bilB }}</span
                        ></a
                      >
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              class="cursor-pointer"
              :style="{
                backgroundColor: isClicked1
                  ? '#FFFF8F'
                  : isHovered1
                  ? '#FFFF8F'
                  : '#ffffff',
              }"
              :class="{ hovered: isHovered1, clicked: isClicked1 }"
              @mouseover="isHovered1 = true"
              @mouseleave="isHovered1 = false"
              @click="handleClick1"
            >
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Permohonan Pindah Fakulti</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-warning q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(255, 239, 226);
                        /* background-color: rgb(240, 225, 17); */
                      "
                    >
                      <span class="text-weight-medium title"> {{ bilPF }}</span>
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              class="cursor-pointer"
              :style="{
                backgroundColor: isClicked2
                  ? '#22e08e'
                  : isHovered2
                  ? '#22e08e'
                  : '#ffffff',
              }"
              :class="{ hovered: isHovered2, clicked: isClicked2 }"
              @mouseover="isHovered2 = true"
              @mouseleave="isHovered2 = false"
              @click="handleClick2"
            >
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Permohonan Diluluskan</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-positive q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(225, 246, 232);
                      "
                    >
                      <span class="text-weight-medium title text-positive">
                        {{ bilLF }}</span
                      >
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <q-card
              no-shadow
              fit
              bordered
              class="cursor-pointer"
              :style="{
                backgroundColor: isClicked3
                  ? '#e66c5c'
                  : isHovered3
                  ? '#e66c5c'
                  : '#ffffff',
              }"
              :class="{ hovered: isHovered3, clicked: isClicked3 }"
              @mouseover="isHovered3 = true"
              @mouseleave="isHovered3 = false"
              @click="handleClick3"
            >
              <q-card-section vert class="q-pa-sm" role="">
                <q-item row no-wrap class="">
                  <q-item-section column justify-center class=""
                    ><q-item-label
                      ><span class="text-weight-medium title text-grey-8"
                        >Permohonan Tidak Diluluskan</span
                      ></q-item-label
                    >
                  </q-item-section>
                  <q-item-section side justify-center class=""
                    ><q-avatar
                      class="text-negative q-chip--colored q-ml-none"
                      style="
                        font-size: 45px;
                        background-color: rgb(253, 228, 227);
                      "
                    >
                      <span class="text-weight-medium title text-negative">
                        {{ bilGF }}</span
                      >
                    </q-avatar>
                  </q-item-section>
                </q-item>
              </q-card-section>
            </q-card>
          </div>
          <!-- end 4 kotak -->
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <q-table
              flat
              bordered
              no-wrap
              :rows="filteredRows"
              :columns="columns"
              row-key="p001nokp"
              :horizontal-separator="separator"
              style="padding: 2px; border: 1px solid lightgray"
              v-model:pagination.sync="pagination"
              :filter="filter"
              :options="options"
              ref="tableRef"
              @request="onRequest"
            >
              <template v-slot:top-left>
                <div class="">
                  <span style="font-size: medium; font-weight: bold"
                    >Senarai Permohonan</span
                  >
                  <hr />
                </div>
              </template>
              <template v-slot:body-cell-actions="props">
                <q-td align="center">
                  <q-btn
                    dense
                    flat
                    color="black"
                    icon="edit"
                    @click="goToDetails(props.row.p001nokp)"
                  />
                  <!-- <q-btn dense flat icon="edit" color="primary" @click="goToEditDetails(props.row.p001nokp)" /> -->
                </q-td>
              </template>
              <template v-slot:top-right>
                <div class="row q-gutter-sm">
                  <q-input
                    outlined
                    dense
                    debounce="300"
                    v-model="filter"
                    placeholder="Search"
                    items-start
                    class=""
                  >
                    <template v-slot:append> <q-icon name="search" /> </template
                  ></q-input>
                  <q-col auto>
                    <q-btn flat round>
                      <img
                        src="src/assets/pdf.svg"
                        alt="PDF Icon"
                        class="pdf"
                      />
                      <q-tooltip class="bg-no-color" :offset="[5, 5]">
                        Export PDF
                      </q-tooltip>
                    </q-btn></q-col
                  >
                  <q-col auto>
                    <q-btn flat round>
                      <img
                        src="src/assets/Excel.png"
                        alt="Excel Icon"
                        class="excel"
                      />
                      <q-tooltip class="bg-no-color" :offset="[5, 5]">
                        Export Excel
                      </q-tooltip>
                    </q-btn>
                  </q-col>

                </div>
              </template>
              <template v-slot:body-cell-status="props">
                <q-chip
                  :color="statusColor(props.row.p001status)"
                  text-color="white"
                  dense
                  class="text-weight-bolder"
                  square
                  style="width: 100px; height: 100%"
                >
                  <!-- {{ props.row.p001status }} -->
                  {{ statusDescription(props.row.p001status) }}
                </q-chip>
              </template>
            </q-table>
          </div>
        </div>
        <!-- end 1st gutter -->
      </q-page>
    </q-page-container>
  </q-card>
</template>

<style>
/* .flex-center {
  align-items: center;
} */
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

.q-separator {
  border: 0;
  background: #0000001f;
  margin: 0;
  transition: background 0.3s, opacity 0.3s;
  flex-shrink: 0;
}

.q-separator--horizontal {
  display: block;
  height: 1px;
}

.q-field {
  font-size: 14px;
}

.q-pr-md {
  padding-right: 16px;
}

.shadow_custom {
  box-shadow: 0 2px 6px #2f2b3d !important;
}

.no-shadow {
  box-shadow: none !important;
}

.responsive-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .responsive-layout {
    flex-direction: column;
  }

  .q-card-section {
    width: 100% !important;
    margin: 0 auto !important;
  }
}

.row > .col-md-12 {
  height: auto;
  width: 100%;
}

.q-pa-lg {
  padding: 24px;
}

.q-mt-md {
  margin-top: 16px;
}

.fit {
  width: 100% !important;
  height: 100% !important;
}

.q-card {
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
  border-radius: 4px;
  vertical-align: top;
  background: #fff;
  position: relative;
}

/* */
.q-pa-sm {
  padding: 8px;
}

.no-wrap {
  flex-wrap: nowrap;
}

.q-item {
  min-height: 48px;
  padding: 8px 16px;
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
}

.q-item {
  position: relative;
}

.row,
.column,
.flex {
  display: flex;
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}

.column {
  flex-direction: column;
}

.text-primary {
  color: var(--q-primary) !important;
}

.q-avatar {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  border-radius: 50%;
  font-size: 48px;
  height: 1em;
  width: 1em;
}

.text-grey-8 {
  color: #616161 !important;
}

.text-negative {
  color: var(--q-negative) !important;
}

.text-positive {
  color: var(--q-positive) !important;
}

.text-warning {
  /* color: var(--q-warning) !important; */
  color: rgb(243, 243, 241);
}

.text-primary {
  color: #5bb9e7 !important;
}

.full-width {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.excel {
  height: auto;
  max-width: 45px;
  max-height: 45px;
  object-fit: contain;
}

.pdf {
  height: auto;
  max-width: 25px;
  max-height: 25px;
  object-fit: contain;
}

.pdfRow {
  max-width: 20px;
  max-height: 15px;
  object-fit: contain;
}
</style>
<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted, ref, computed, reactive } from "vue";
import { useRetPermohonanStore } from "src/stores/getmohon";

export default defineComponent({
  name: "PermohonanPage",
  setup() {
    const storeGetMohon = useRetPermohonanStore(); // Pinia store

    // Computed property for reactive state
    const MohonList = computed(() => {
      const list = storeGetMohon.MohonList;
      //  console.log("MohonList:", MohonList.value);
      //  console.log("List:", list.value);

      if (Array.isArray(list)) {
        return list;
      } else if (list && typeof list === "object") {
        return Object.values(list); // Convert object to array
      } else {
        return []; // Default to empty array
      }
    });

    const tableRef = ref();
    const router = useRouter();
    const route = useRoute();
    const filter = ref("");
    const statB = ref("");
    const bilB = ref("");
    const bilD = ref("");
    const bilPF = ref("");
    const bilGF = ref("");
    const bilLF = ref("");
    const selectedStatus = ref("");
    const isHovered = ref(false);
    const isHovered1 = ref(false);
    const isHovered2 = ref(false);
    const isHovered3 = ref(false);
    const isClicked = ref(false);
    const isClicked1 = ref(false);
    const isClicked2 = ref(false);
    const isClicked3 = ref(false);

    const handleClick = () => {
      isClicked.value = !isClicked.value;
      selectStatus("0");
    };

    const handleClick1 = () => {
      isClicked1.value = !isClicked1.value;
      selectStatus("4");
    };

    const handleClick2 = () => {
      isClicked2.value = !isClicked2.value;
      selectStatus(["1","2","5"]);
    };

    const handleClick3 = () => {
      isClicked3.value = !isClicked3.value;
      selectStatus("3");
    };

    // Filters rows based on selected status
    const filteredRows = computed(() => {
      // console.log("Selected Status for Filter:", selectedStatus.value); // Debugging
      if (selectedStatus.value.length === 0) {
        return MohonList.value; // Return all if no filter is applied
      }

      return MohonList.value.filter((row) =>
        selectedStatus.value.includes(row.p001status)
      );

      // const filtered = selectedStatus.value
      //   ? MohonList.value.filter(
      //       (row) => row.p001status === selectedStatus.value
      //     )
      //   : MohonList.value;

      // //console.log("Filtered Rows:", filtered); // Debugging
      // return filtered;
    });

    // const selectStatus = (status) => {
    //   //console.log("Clicked Status:", status);
    //   selectedStatus.value = status;
    // };

    const selectStatus = (status) => {
      if (Array.isArray(status)) {
        selectedStatus.value = status;
        console.log("Filtering for multiple statuses:", status);
      } else {
        selectedStatus.value = [status];
        console.log("Filtering for single status:", status);
      }
    };

    const statusColor = (status) => {
      const colors = {
        1: "green",
        2: "green",
        3: "red",
        4: "yellow",
        5: "yellow",
        6: "red",
        0: "blue",
        "": "grey",
      };
      return colors[status] || "grey"; // Default to grey if status is unknown
    };

    const statusDescription = (status) => {
      // console.log('Status:', status); // Debugging
      const descriptions = {
        1: "Approved (PPS)",
        2: "Approved (Faculty)",
        3: "Rejected",
        4: "Transfer Faculty",
        5: "Under Processing",
        6: "Requires Action",
        0: "New",
        "": "Draft",
      };
      return descriptions[status] || "Draft";
    };

    // Fetch data on component mount
    onMounted(() => {
      onLoad();
    });

    // Load data from the store
    async function onLoad() {
      try {
        // Fetch data for MohonList
        await storeGetMohon.fetchP();
        // Fetch data for bilstat
        await storeGetMohon.fetchbilstat();
        bilB.value = storeGetMohon.Countbystat.bildraf || "";
        bilD.value = storeGetMohon.Countbystat.bildraf1 || "";
        bilPF.value = storeGetMohon.Countbystat.bilpindahf || "";
        bilGF.value = storeGetMohon.Countbystat.bilgagalf || "";
        bilLF.value = storeGetMohon.Countbystat.billulusf || "";
        //console.log("Bilstat fetched successfully:", bilB.value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const Total = (type) => {
      console.log("Total:", type);
    };

    const goToDetails = (p001nokp) => {
      router.push({ name: "DetailsPermohonan", params: { p001nokp } });
    };

    const goToEditDetails = (p001nokp) => {
      router.push({ name: "EditPermohonan", params: { p001nokp } });
    };

    const onRequest = (props) => {
      // Handle request for pagination and sorting here if necessary
      console.log("Request:", props);
    };

    return {
      isHovered,
      isHovered1,
      isHovered2,
      isHovered3,
      isClicked,
      isClicked1,
      isClicked2,
      isClicked3,
      handleClick,
      handleClick1,
      handleClick2,
      handleClick3,
      MohonList,
      tableRef,
      columns: [
        { name: "name", label: "NAMA PEMOHON", field: "p001nama", align: "center" },
        { name: "nokp", label: "NO KP/PASSPORT", field: "p001nokp", align: "center" },
        { name: "tkhmohon", label: "TARIKH MOHON", field: "p001tkhpohon", align: "center" },
        { name: "program", label: "PROGRAM", field: "p001kprog" , align: "center"},
        { name: "status", label: "STATUS", field: "p001status", align: "center" },
        { name: "actions", label: "TINDAKAN", align: "center" },
      ],
      filter,
      statB,
      bilB,
      bilD,
      bilGF,
      bilLF,
      bilPF,
      filteredRows,
      selectedStatus,
      selectStatus,
      goToDetails,
      goToEditDetails,
      onRequest,
      Total,
      statusColor,
      statusDescription,
      // color,
      pagination: {
        rowsPerPage: 5,
      },
      options: {
        customFilters: [
          {
            name: "statusFilter",
            callback: function (row, props) {
              return row.status[0] == props;
            },
          },
        ],
      },
    };
  },
});
</script>

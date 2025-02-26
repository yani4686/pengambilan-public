<template>
  <q-page>
    <q-table
      :rows="MohonList"
      :columns="columns"
      row-key="nokp"
      :filter="filter"
    >
      <template v-slot:body-cell-nokp="props">
        <q-td>{{ props.row.p001nokp }}</q-td>
      </template>

      <template v-slot:body-cell-nama="props">
        <q-td>{{ props.row.p001nama }}</q-td>
      </template>
    </q-table>
  </q-page>
</template>

  
 <script>
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRetPermohonanStore } from "src/stores/getmohon";

export default defineComponent({
  name: "TestRetPage",

  setup() {
    const storeGetMohon = useRetPermohonanStore(); // Pinia store
    const filter = ref(""); // Table filter

    // Computed property for reactive state
    const MohonList = computed(() => {
      const list = storeGetMohon.MohonList;
      console.log("MohonList:", MohonList.value);
      console.log("List:", list.value);

      if (Array.isArray(list)) {
        return list;
      } else if (list && typeof list === "object") {
        return Object.values(list); // Convert object to array
      } else {
        return []; // Default to empty array
      }
    });

    // Fetch data on component mount
    onMounted(() => {
      onLoad();
    });

    // Load data from the store
    function onLoad() {
      storeGetMohon.fetchP().then(() => {
        console.log(storeGetMohon.MohonList);
      }).catch((error) => {
        console.error("Error fetching data:", error);
      });
    }

    return {
      MohonList,
      //list,
      filter,
      columns: [
        { name: "nokp", label: "NOKP", align: "center", field: "p001nokp" },
        { name: "nama", label: "Nama", align: "center", field: "p001nama" },
      ],
    };
  },
});
</script>

  
  <style>
  .my-table-container {
    height: 460px;
    overflow-y: auto;
  }
  </style>
  
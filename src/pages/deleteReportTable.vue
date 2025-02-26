<template>
  <q-card style="width: 700px">
    <q-card-section>
      <span class="text-h6">DELETE REPORT</span>
      <hr />
      <q-form>
        <span><b>Are you sure you want to delete?</b></span> <br />
        <span>FAKULTI : FAKULTI UNDANG-UNDANG DAN HUBUNGAN ANTARABANGSA </span>
        <br />
        <span>PROGRAM : DIPLOMA UNDANG-UNDANG</span> <br />
        <span>COURSE : LAW1233 - ISLAMIC LEGAL SYSTEM</span>
        <div class="flex justify-end">
          <q-btn
            type="Submit"
            label="Delete"
            color="primary"
            class="q-mr-sm"
            outlined
            @click="deleteData()"
            v-close-popup
          ></q-btn>
          <q-btn label="Close" color="negative" outlined v-close-popup></q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
//import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "deleteReportTable",

  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();

    function deleteData() {}
    return {
      deleteData,
    };
  },
};
</script>

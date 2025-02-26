<template>
  <q-card style="width: 700px">
    <q-card-section span class="text-h6"
      >UPDATE REPORT
      <hr />
      <q-form>
        <q-select
          class="q-mb-sm"
          label="Choose Faculty"
          v-model="input.faculty"
          :options="[
            { label: 'FAKULTI PERUBATAN & SAINS KESIHATAN', value: '93' },
            { label: 'FAKULTI SAINS SOSIAL GUNAAN', value: '58' },
            { label: 'FAKULTI PENGAJIAN KONTEMPORARI ISLAM', value: '07' },
            {
              label: 'FAKULTI REKA BENTUK INOVATIF DAN TEKNOLOGI',
              value: '12',
            },
          ]"
          outlined
          dense
        ></q-select>

        <q-select
          class="q-mb-sm"
          label="Choose Program"
          v-model="input.program"
          :options="[
            { label: 'DIPLOMA TEKNOLOGI MAKMAL PERUBATAN', value: '814' },
            {
              label:
                'IJAZAH SARJANA MUDA SAINS SOSIAL (ANTROPOLOGI DAN DAKWAH) DENGAN KEPUJIAN',
              value: 'A14',
            },
            { label: 'DIPLOMA BAHASA DAN KESUSASTERAAN ARAB', value: '112' },
            { label: 'DIPLOMA TEKNOLOGI PEMBUATAN', value: '511' },
          ]"
          outlined
          dense
        ></q-select>

        <q-select
          class="q-mb-sm"
          label="Choose Course"
          v-model="input.course"
          :options="[
            { label: 'IAE4043 - GENDER DAN PEMBANGUNAN', value: 'IAE4043' },
            { label: 'UBA3012 - BAHASA ARAB I', value: 'UBA3012' },
            {
              label: 'UMW1012 - ASAS PEMBUDAYAAN KEUSAHAWANAN',
              value: 'UMW1012',
            },
            { label: 'DTS2193 - QUALITY ASSURANCE', value: 'DTS2193' },
          ]"
          outlined
          dense
        ></q-select>
        <div class="flex justify-end">
          <q-btn
            type="Submit"
            label="Update"
            color="primary"
            class="q-mr-sm"
            outlined
            v-close-popup
          ></q-btn>
          <q-btn label="Close" color="negative" outlined v-close-popup></q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "updateReportTable",

  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();
    var faculty = ref([]);
    var program = ref([]);
    var course = ref([]);
    var input = ref([]);

    return {
      faculty,
      program,
      course,
      input,
    };
  },
};
</script>

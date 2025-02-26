<template>
  <q-page class="q-pa-md flex-center" style="width: 1500px">
    <q-page-container style="padding-top: 10px; padding-bottom: 30px; padding-left: 50px">
      <q-form class="q-gutter-md" @submit="submitForm">
        <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
          <q-card class="col-lg-8 col-md-4 col-sm-12 col-xs-12">
            <q-card-section class="card-title">
              Proses Permohonan
              <span style="color: crimson; font-size: small; font-weight: bold"></span>
            </q-card-section>

            <div class="row q-gutter-none q-mt-sm">
              <div class="col-12 col-sm-2">
                <label class="col-form-label q-mb-none" style="margin-left: 20px">
                  Pengesahan<span style="color: red">*</span></label>
              </div>
              <div class="col-12 col-sm-10">
                <q-select class="q-pb-xs" label="Pengesahan" color="blue" :options="singleDropdownOptions" outlined dense
                  required style="margin-right: 12px" />
              </div>
            </div>

            <div class="row q-gutter-none q-mt-sm">
              <div class="col-12 col-sm-2">
                <label class="col-form-label q-mb-none" style="margin-left: 20px">Catatan Pengesahan<span
                    style="color: red">*</span></label>
              </div>
              <div class="col-12 col-sm-10">
                <q-input color="blue" type="textarea" outlined dense :rules="[(val) => !!val || 'Name is required']"
                  required style="margin-right: 12px" />
              </div>
            </div>


            <q-card-actions align="right" class="submit-button">
              <q-btn label="Simpan" type="submit" color="primary" class="q-mr-sm" v-close-popup @click="Submit()" />
              <q-btn label="Tutup" color="negative" outlined v-close-popup></q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-form>
    </q-page-container>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();

export default {
  name: "EditPermohonan",

  setup() {

    const editor = ref([]);
    const form = ref({
      singleDropdown: "",
    });

    const options = ref([]);

    const singleDropdownOptions = [
      "Permohonan Diluluskan",
      "Permohonan Tidak Diluluskan",
      "Pindah Fakulti",
    ];

    const submitForm = () => {
      // Handle form submission
      console.log("Form Submitted", form.value);
    };

    return {
      singleDropdownOptions,
      editor,
      submitForm,
    };
  },
};
</script>
<style>
.card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
}

/* .q-card>div:nth-child(1 of :not(.q--avoid-card-border)),
.q-card>img:nth-child(1 of :not(.q--avoid-card-border)) {
  background-color: #b4dcfd97;
  padding: 10px;
  color: black;
} */
</style>

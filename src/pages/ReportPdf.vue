<template>
  <q-page>
    <span class="text-h6">{{ output }}</span>
    <br />
    <q-btn label="Obe" @click="getObe(input.mqf)"></q-btn>
    <span>{{ obeOutput }}</span>

    <br /><br /><br />
    <span>POST Data</span>
    <q-banner class="bg-info border-rounded" v-if="alertAddMqf"
      ><b>Info</b> <span>{{ input.msg }}</span></q-banner
    >
    <q-input label="version" v-model="input.version"></q-input>
    <q-input label="tax" v-model="input.tax"></q-input>
    <q-input label="MQF Name" v-model="input.mqf"></q-input>
    <q-input label="MQF Description" v-model="input.desc"></q-input>
    <q-btn label="Submit" @click="addMqf"></q-btn>
  </q-page>
</template>
<script>
import { api } from "src/boot/axios";
import { onMounted, ref } from "vue";
export default {
  name: "TestPage",
  setup() {
    //declare variable
    var output = ref("");
    var obeOutput = ref("");
    var input = ref({});
    var alertAddMqf = ref(false);

    //first load
    onMounted(() => {
      getStudent();
    });

    //function
    function getStudent() {
      api.get("/academic").then((res) => {
        // console.log(res);
        if (res.data.status == "success") output.value = res.data.data.TOTAL;
        else output.value = "no data available";
      });
    }

    function getObe(input) {
      api.get("/obe/get-mqf?mqf=" + input + "&version=1").then((res) => {
        obeOutput.value = res.data;
      });
    }

    function addMqf() {
      let fd = new FormData();
      fd.set("version", input.value.version);
      fd.set("tax", input.value.tax);
      fd.set("mqf", input.value.mqf);
      fd.set("desc", input.value.desc);

      api.postForm("/obe/add-mqf", fd).then((res) => {
        if (res.data.status == "success") {
          alertAddMqf.value = true;
          input.value.msg = res.data.msg;
        } else output.value = "no data available";
      });
    }

    return {
      output,
      obeOutput,
      input,
      alertAddMqf,
      getObe,
      addMqf,
    };
  },
};
</script>

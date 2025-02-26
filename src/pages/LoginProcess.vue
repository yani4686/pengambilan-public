<template>
  <span> Check SSO... </span>
</template>
<script>
import { useQuasar } from "quasar";
import { api } from "src/boot/axios";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    var $q = useQuasar();
    var route = useRoute();
    var router = useRouter();
    var token = route.params.token;

    if (token == "") window.location.href = "https://portal.unisza.edu.my/";
    else getToken(token);

    function getToken(data) {
      //session storage
      $q.sessionStorage.set("token", data);
      return router.push("/dashboard");
    }
    return {};
  },
};
</script>

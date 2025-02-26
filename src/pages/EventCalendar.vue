<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-date v-model="date" :events="events" event-color="orange" />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="2024/09/16">
            <div class="text-h4 q-mb-md">2024/09/16</div>
            <p>Hari Malaysia.</p>
          </q-tab-panel>

          <q-tab-panel name="2024/09/17">
            <div class="text-h4 q-mb-md">2024/09/17</div>
            <p>School Holiday</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      splitterModel: ref(50),
      date: ref("2024/09/17"),
      events: ["2024/09/16", "2024/09/17"],
    };
  },
};
</script>

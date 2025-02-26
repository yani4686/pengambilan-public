<template>
  <q-page class="q-pa-md">
    <!-- Responsive Collapsible Section -->
    <br />
    <div class="row q-col-gutter-md">
      <q-card class="col-12 col-md-12 q-pa-sm">
        <q-card-section>
          <div class="text-h6">ACCORDIAN</div>
          <hr />
        </q-card-section>
        <q-expansion-item
          v-for="(section, index) in sections"
          :key="index"
          expand-separator
          :label="section.label"
          :icon="getIconName(index)"
          header-class="text-bold text-primary"
          dense-toggle
          group="collapsible-group"
          accordion
        >
          <!-- Content of the collapsible section -->
          <q-card-section>
            <div v-html="section.content"></div>
          </q-card-section>
        </q-expansion-item>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

// Define sections with labels and content
const sections = [
  {
    label: "WHY UNISZA?",
    content:
      "<b><span style='font-size: 18px;'>Learning is a powerful tool. Learning makes every humans a potential genius.</span></b> <br> At UniSZA, you’ll find excellent teaching, a welcoming community and one of the best overall student experiences in Malaysia. We’re surrounded by nature but we’re well connected to major towns and cities.",
  },
  {
    label: "FALSAFAH UNISZA",
    content:
      "Integrasi Kecemerlangan Islam dan Kontemporari demi Manfaat Ummah.",
  },
  {
    label: "VISI, MISI & MOTO UNISZA",
    content:
      "<b><span style='font-size: 18px;'> VISI </span></b><br>Menjadi Peneraju Kepada Universiti Islam Integrasi Kontemporari. <br><br><b><span style='font-size: 18px;'>MISI </span></b><br>Membentuk insan holistik menerusi pendidikan cemerlang dan penyelidikan berimpak tinggi berasaskan pengalaman pintar untuk melestrasikan masyarakat.<br><br> <b><span style='font-size: 18px;'>MOTO </span></b><br>Ilmu Demi Faedah Insan.",
  },
];

// Function to get the icon name based on index
const getIconName = (index) => {
  const iconNames = ["looks_one", "looks_two", "looks_3", "looks_4", "looks_5"];
  return iconNames[index] || "label";
};
</script>

<style scoped>
/* Style to adjust padding and margin */
.q-expansion-item {
  margin-bottom: 10px;
}

/* Style for the header of the collapsible item */
.text-bold {
  font-weight: bold;
}
</style>

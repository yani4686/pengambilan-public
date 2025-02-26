<template>
  <q-card class="q-mb-md q-pa-md" style="position: relative">
    <!-------------------------- CLOSE BUTTON --------------------------->
    <q-btn
      class="q-ml-md"
      icon="close"
      flat
      round
      dense
      v-close-popup
      style="
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 10;
        background-color: white;
      "
    />

    <!--------------------- TABLE HIGHLIGHT DATES ------------------------>
    <q-card-section>
      <q-markup-table style="border: 1px solid #ccc; width: auto">
        <caption
          class="text-h6 text-center"
          style="
            border-bottom: 1px solid #f0edf8;
            padding-bottom: 10px;
            font-weight: bold;
          "
        >
          Highlight Dates
        </caption>
        <thead>
          <tr style="background-color: #f0f0f0; color: #333">
            <th
              class="text-center"
              style="font-size: 14px; font-weight: bold; border: 1px solid #ccc"
            >
              Activity
            </th>
            <th
              class="text-center"
              style="font-size: 14px; font-weight: bold; border: 1px solid #ccc"
            >
              Session
            </th>
            <th
              class="text-center"
              style="font-size: 14px; font-weight: bold; border: 1px solid #ccc"
            >
              Level
            </th>
            <th
              class="text-center"
              style="font-size: 14px; font-weight: bold; border: 1px solid #ccc"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #e6f7ff">
            <td class="text-left" style="border: 1px solid #ccc">
              PENDAFTARAN PELAJAR BARU
            </td>
            <td class="text-left" style="border: 1px solid #ccc">
              SEM 1 2024/2025
            </td>
            <td class="text-left" style="border: 1px solid #ccc">
              IJAZAH SARJANA MUDA
            </td>
            <td class="text-left" style="border: 1px solid #ccc">
              29-09-2024 until 03-10-2024
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.q-mb-md {
  max-width: 1200px;
  margin: 0 auto; /* Center the card on the page */
}
</style>

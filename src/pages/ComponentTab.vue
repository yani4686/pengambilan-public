<template>
  <q-page class="q-pa-md flex-center">
    <div class="text-center text-bold q-mb-md">UNISZA</div>
    <div class="row q-gutter-x">
      <!-- First Card: VERTICAL TAB -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md q-mx-sm">
          <div style="max-width: 600px">
            <q-tabs
              v-model="tab"
              align="justify"
              narrow-indicator
              class="q-mb-lg"
            >
              <!-- Add icon property to each tab -->
              <q-tab
                class="text-purple"
                name="mails"
                label="Mails"
                icon="mail"
              />
              <q-tab
                class="text-orange"
                name="alarms"
                label="Alarms"
                icon="notifications"
              />
              <q-tab
                class="text-teal"
                name="movies"
                label="Movies"
                icon="movie"
              />
            </q-tabs>

            <div class="q-gutter-y-sm">
              <q-tab-panels
                v-model="tab"
                animated
                transition-prev="scale"
                transition-next="scale"
                class="text-center"
              >
                <q-tab-panel name="mails">
                  <div class="text-h6">Mails</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="alarms">
                  <div class="text-h6">Alarms</div>
                  Ad molestiae non facere animi nobis, similique nemo velit.
                </q-tab-panel>

                <q-tab-panel name="movies">
                  <div class="text-h6">Movies</div>
                  Nostrum necessitatibus expedita dolores? Voluptatem.
                </q-tab-panel>
              </q-tab-panels>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Second Card: HORIZONTAL TAB -->
      <div class="col-12 col-md-6">
        <q-card class="q-pa-md q-mx-sm">
          <div class="text-center text-bold">HORIZONTAL TAB</div>
          <hr />
          <br />
          <div>
            <q-splitter v-model="splitterModel" style="max-height: fit-content">
              <template v-slot:before>
                <q-tabs
                  v-model="horizontalTab"
                  vertical
                  class="bg-indigo-12 text-white"
                >
                  <q-tab name="Hcontact" icon="phone" label="Contact" />
                  <q-tab name="Hinfo" icon="info" label="Info" />
                  <q-tab name="Haddress" icon="location_on" label="Address" />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels v-model="horizontalTab" animated vertical>
                  <q-tab-panel name="Hcontact" class="bordered">
                    <div class="q-pa-md" style="border-bottom: 1px solid #ccc">
                      UniSZA Gong Badak Campus : <br />
                      Phone : 09-668 8888 <br />
                      Fax : 09-668 7869
                    </div>
                    <div class="q-pa-md" style="border-bottom: 1px solid #ccc">
                      UniSZA Medical Campus : <br />
                      Phone : 09-627 5740 <br />
                      Fax : 09-627 5771
                    </div>
                    <div class="q-pa-md" style="border-bottom: 1px solid #ccc">
                      UniSZA Besut Campus : <br />
                      Phone : 09-699 3119 <br />
                      Fax : 09-699 3004
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="Hinfo">
                    <div class="q-pa-md">
                      <img src="~assets/gb_campus.jpg" class="adjusted-image" />
                    </div>
                    <div class="q-pa-md">
                      <img
                        src="~assets/besut_campus.jpg"
                        class="adjusted-image"
                      />
                    </div>
                    <div class="q-pa-md">
                      <img
                        src="~assets/medical_campus.jpg"
                        class="adjusted-image"
                      />
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="Haddress">
                    <div class="q-pa-md">
                      UniSZA Gong Badak Campus :
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.422036371756!2d103.0773968!3d5.4000598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b7bc9fcedc25f1%3A0xd358e8cd73cde90a!2sUniversiti%20Sultan%20Zainal%20Abidin%20(UniSZA)!5e0!3m2!1sen!2smy!4v1694514926577!5m2!1sen!2smy"
                        width="100%"
                        height="300"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div class="q-pa-md">
                      UniSZA Medical Campus :
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.654327535428!2d103.106044!3d5.268561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b7eb0509c75bc1%3A0x448194e76313c918!2sUniSZA%20Medical%20Campus!5e0!3m2!1sen!2smy!4v1694517261525!5m2!1sen!2smy"
                        width="100%"
                        height="300"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div class="q-pa-md">
                      UniSZA Besut Campus :
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.529870519881!2d102.6298789!3d5.7575389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b6faab905b2ca7%3A0xa81ba1f9f9407ce8!2sUniSZA%20Kampus%20Besut!5e0!3m2!1sen!2smy!4v1694517355425!5m2!1sen!2smy"
                        width="100%"
                        height="300"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      tab: ref("mails"),
      verticalTab: "contact", // Set a valid default tab name
      horizontalTab: "Hcontact", // Set a valid default tab name
      splitterModel: 20,
    };
  },
};
</script>
<style>
.adjusted-image {
  width: 100%;
  /* height: auto;
  max-width: 200px;
  max-height: 100px; */
  object-fit: contain;
}
</style>

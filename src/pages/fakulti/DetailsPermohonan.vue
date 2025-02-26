<template>
  <q-page class="q-pa-md flex-center">
    <q-page-container
      style="padding-top: 10px; padding-bottom: 37px; padding-left: 80px"
    >
      <!-- <q-card bordered no-shadow fit class="q-pa-md"> -->
      <!-- <q-card-section> -->
      <div class="row q-col-gutter-sm">
        <div class="">
          <span style="font-size: medium; font-weight: bold"
            >Fakulti/Maklumat Permohonan</span
          >
        </div>
        <div class="">
          <!-- <q-btn dense flat icon="edit" color="negative" @click="updateRow()">
                <q-tooltip class="bg-indigo" :offset="[10, 10]">
                  Tindakan Fakulti
                </q-tooltip>
              </q-btn> -->
          <q-btn
            @click="updateRow1()"
            icon="edit"
            outline
            color="primary"
            label="Tindakan Fakulti"
            class="q-mr-xs"
          />
        </div>
      </div>
      <!-- </q-card-section> -->

      <!-- <hr /> -->

      <q-card-section>
        <q-item type row no-wrap>
          <div class="q-pa-md">
            <div class="row">
              <q-item-section column side text-grey-8>
                <div class="row items-center">
                  <!-- SVG Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    width="24"
                    height="24"
                    stroke-width="2"
                  >
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                  <label class="q-ml-sm" style="margin-left: 5px"
                    ><span style="font-weight: bold">Status Mohon :</span>
                    {{ statdesc }}
                  </label>
                </div>
              </q-item-section>
              <q-item-section column side text-grey-8>
                <div class="row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    width="24"
                    height="24"
                    stroke-width="2"
                  >
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path
                      d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
                    ></path>
                    <path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
                  </svg>
                  <label class="q-ml-sm" style="margin-left: 5px"
                    ><span style="font-weight: bold">Jenis Permohonan :</span>
                    {{ laluan }}</label
                  >
                </div>
              </q-item-section>
            </div>
            <br />
            <q-item-section column side text-grey-8>
              <div class="row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="24"
                  height="24"
                  stroke-width="2"
                >
                  <path
                    d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"
                  ></path>
                  <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2"></path>
                  <path
                    d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                  ></path>
                  <path d="M8 11h4"></path>
                  <path d="M8 15h3"></path>
                  <path
                    d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"
                  ></path>
                  <path d="M18.5 19.5l2.5 2.5"></path>
                </svg>
                <label class="q-ml-sm" style="margin-left: 5px"
                  ><span style="font-weight: bold">Catatan :</span>
                  {{ transfer }}</label
                >
              </div>
            </q-item-section>
          </div>
        </q-item>
        <hr />
      </q-card-section>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card bordered no-shadow fit>
          <q-card-section vert text-grey-8>
            <span style="font-size: medium; font-weight: bold"
              >Maklumat Pengesahan Fakulti</span
            >
            <hr />
            <q-item type row no-wrap>
              <q-item-section column side text-grey-8>
                <label
                  class="col-form-label q-mb-none"
                  style="margin-left: 10px"
                  ><span style="font-weight: bold">Program :</span>
                  {{ namaprogram }} ({{ necprogram }})</label
                >
                <label
                  class="col-form-label q-mb-none"
                  style="margin-left: 10px"
                  ><span style="font-weight: bold">Fakulti:</span>
                  {{ fakultiprogram }}
                </label>
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-section vert q-px-lg>
            <div class="row q-col-gutter-lg">
              <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                <q-card bordered no-shadow>
                  <q-list dense role="list">
                    <q-item header q-mt-none text-grey-6>(A)</q-item>
                    <q-item type row no-wrap role="listitem">
                      <q-item-section column side text-grey-8>
                        <label
                          class="col-form-label q-mb-none"
                          style="margin-left: 10px"
                          ><span style="font-weight: bold">Fakulti :</span>
                          {{ fakultiprogram }}</label
                        >
                      </q-item-section>
                    </q-item>
                    <q-item type row no-wrap role="listitem">
                      <q-item-section column side text-grey-8>
                        <label
                          class="col-form-label q-mb-none"
                          style="margin-left: 10px"
                          ><span style="font-weight: bold">Tindakan :</span>
                          {{ statdesc }}
                        </label>
                      </q-item-section>
                    </q-item>
                    <q-item type row no-wrap role="listitem">
                      <q-item-section column side text-grey-8>
                        <label
                          class="col-form-label q-mb-none"
                          style="margin-left: 10px"
                          ><span style="font-weight: bold">Catatan :</span>
                          {{ cttnsah }}</label
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card>
              </div>
              <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                <q-card bordered no-shadow>
                  <q-list dense role="list">
                    <q-item header q-mt-none text-grey-6>(B)</q-item>
                    <q-item type row no-wrap role="listitem">
                      <q-item-section column side text-grey-8>
                        <label
                          class="col-form-label q-mb-none"
                          style="margin-left: 10px"
                          ><span style="font-weight: bold">Fakulti :</span>
                          N/A</label
                        >
                      </q-item-section>
                    </q-item>
                    <q-item type row no-wrap role="listitem">
                      <q-item-section column side text-grey-8>
                        <label
                          class="col-form-label q-mb-none"
                          style="margin-left: 10px"
                          ><span style="font-weight: bold">Tindakan :</span>
                          N/A</label
                        >
                      </q-item-section>
                    </q-item>
                    <q-item type row no-wrap role="listitem">
                      <q-item-section column side text-grey-8>
                        <label
                          class="col-form-label q-mb-none"
                          style="margin-left: 10px"
                          ><span style="font-weight: bold">Catatan :</span
                          >N/A</label
                        >
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <q-tab class="text-blue" name="mails" label="Profil Pemohon" />
        <q-tab class="text-blue" name="alarms" label="Program Pilihan" />
        <q-tab class="text-blue" name="movies" label="Dokumen Sokongan" />
        <q-tab class="text-blue" name="infodll" label="Maklumat Tambahan" />
        <!-- <q-tab class="text-blue" name="agree" label="Setuju/Disclaimer" /> -->
      </q-tabs>
      <div class="q-gutter-y-xl">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="text-left"
        >
          <q-tab-panel name="mails">
            <div class="col-12 q-mt-sm">
              <q-card bordered no-shadow class="card_style">
                <q-card-section vert>
                  <div class="row q-col-gutter-lg">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <q-card bordered no-shadow class="card_style">
                        <q-card-section vert text-center class="image-center">
                          <q-avatar square size="100px"
                            ><img :src="urlpic" alt="Avatar" />
                          </q-avatar>
                        </q-card-section>
                        <q-card-section>
                          <div class="row">
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="No KP/Passport"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="nokp"
                                :label="'No KP'"
                              ></q-input>
                            </div>

                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Nama"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="nama"
                                :label="labelText"
                              ></q-input>
                            </div>

                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Tarikh Lahir"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="tkhlahir"
                                :label="'Tarikh Lahir'"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Status
                                    Warganegara"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="statwarga"
                                :label="'Status Warganegara'"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Status Kecatatan"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="statoku"
                                :label="'Status Kecacatan'"
                              ></q-input>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <q-card bordered no-shadow class="card_style">
                        <q-card-section vert>
                          <!-- <q-avatar rounded size="100px"
                              ><img src=""
                            /></q-avatar> -->
                          <!-- <q-item type row no-wrap>
                              <q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Alamat Semasa :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (HP) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Rumah) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Pej) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>
                              </q-item-section>
                            </q-item> -->
                          <div class="row">
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Alamat Semasa"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="almtsemasa"
                                :label="'Alamat Semasa'"
                              ></q-input>
                            </div>

                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="No Tel(HP)"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="telHPS"
                                :label="'No Tel(HP)'"
                              ></q-input>
                            </div>

                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="No Tel(R)"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="telRS"
                                :label="'No Tel(R)'"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="No Tel(P)"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="offS"
                                :label="'No Tel(P)'"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Fax No"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="faxS"
                                :label="'Fax No'"
                              ></q-input>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Alamat Tetap"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="almtT"
                                :label="'Alamat Tetap'"
                              ></q-input>
                            </div>

                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="No Tel (HP)"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="0162321111"
                              ></q-input>
                            </div>

                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="No Tel (Rumah)"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="095332222"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="No Tel (Pej)"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="Tiada"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Fax No"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="Tiada"
                              ></q-input>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <!-- <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <q-card bordered no-shadow class="card_style">
                          <q-card-section vert>

                            <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Alamat Tetap :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (HP) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Rumah) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">No Tel (Pej) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>
                              </q-item-section></q-item></q-card-section></q-card>
                      </div> -->
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="col-12 q-mt-sm">
              <q-card bordered no-shadow class="card_style">
                <q-card-section vert>
                  <div class="row q-col-gutter-lg">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <q-card bordered no-shadow class="card_style">
                        <q-card-section>
                          <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Mod Pengajian :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kaedah :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Program :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Specialization :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kampus :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Cadangan Tajuk
                                  Penyelidikan :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Cadangan Penyelia
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Pengalaman Bekerja
                                  :</label>
                              </q-item-section></q-item> -->
                          <div class="row">
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Mod Pengajian"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="modest"
                                :label="'Mode'"
                              ></q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Kaedah"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="kaedah"
                                :label="'Kaedah'"
                              ></q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Program"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="kdprogram"
                                :label="'Program'"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Specialization"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="Tiada"
                              ></q-input>
                            </div>
                            <div class="col-10 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Cadangan Tajuk
                                  Penyelidikan"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                textarea
                                :readonly="true"
                                dense
                                v-model="tajuk"
                                :label="'Tajuk Penyelidikan'"
                              ></q-input>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Cadangan Penyelia"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="sv"
                                :label="'Penyelia'"
                              ></q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Pengalaman Bekerja"
                              ></q-input>
                            </div>
                            <div class="col-2 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="expr"
                                :label="'Pengalaman Bekerja'"
                              ></q-input>
                            </div>

                            <!-- <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="No Tel (Rumah)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="095332222"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="No Tel (Pej)"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Fax No"></q-input>
                              </div>
                              <div class="col-2 q-px-xs">
                                <q-input :readonly="true" dense label="Tiada"></q-input>
                              </div> -->
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <q-card bordered no-shadow class="card_style">
                        <q-card-section vert>
                          <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kelayakan Akdemik
                                  Tertinggi :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Universiti Anugerah
                                  (Bachelor/Setara)
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Negara :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">CGPA :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Fax No :</label>

                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Universiti Anugerah
                                  (Master/Setara) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Negara :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">CGPA :</label>
                              </q-item-section></q-item> -->
                          <div class="row">
                            <div class="col-12 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Kelayakan Akdemik
                                  Tertinggi"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="akadtggi"
                                :label="'Kelayakan Akdemik'"
                              ></q-input>
                            </div>

                            <div class="col-12 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Universiti Anugerah
                                  (Bachelor/Setara)"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="unilama"
                                :label="'Universiti Anugerah'"
                              ></q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Negara Anugerah"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="negunilama"
                                :label="'Negara Anugerah'"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="CGPA"
                              ></q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="cgpa"
                                :label="'CGPA'"
                              ></q-input>
                            </div>
                            <!-- <hr /> -->
                          </div>
                          <div class="row">
                            <div class="col-12 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Universiti Anugerah
                                  (Master/Setara)"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="unilama2"
                                :label="'Universiti Anugerah (Master/Setara)'"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="CGPA"
                              ></q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                v-model="cgpa2"
                                :label="'CGPA'"
                              ></q-input>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <q-card bordered no-shadow class="card_style">
                        <q-card-section vert>
                          <!-- <q-item type row no-wrap><q-item-section column side justify-center
                                text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">BI (SPM) :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">MUET :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">
                                  Lain-lain (IELTS/TOEFL) :</label>
                              </q-item-section></q-item> -->
                          <div class="row">
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Kelayakan Bahasa Inggeris"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="Ada"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Jenis Exam"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="MUET"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Markah"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="Band 3"
                              ></q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Tarikh Peperiksaan"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="02/02/2024"
                              ></q-input>
                            </div>
                          </div> </q-card-section
                      ></q-card>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="col-12 q-mt-sm">
              <q-card bordered no-shadow class="card_style">
                <q-card-section vert>
                  <div class="row q-col-gutter-lg">
                    <div class="col-lg-10 col-md-4 col-sm-12 col-xs-12">
                      <q-card bordered no-shadow class="card_style">
                        <q-card-section>
                          <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Salinan No KP/Passport
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Academic Certificates/
                                  Senate Letter/
                                  Completion Letter Of Programme :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Transkrip Akademik
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">English Language
                                  Qualification :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Kertas Kerja
                                  Penyelidikan :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Resit Pembayaran
                                  :</label>
                              </q-item-section></q-item> -->
                          <div class="row">
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Salinan No KP/Passport"
                              >
                              </q-input>
                            </div>

                            <div class="col-4 q-px-xs">
                              <q-input :readonly="true" dense>
                                <template v-slot:append>
                                  <q-btn
                                    flat
                                    dense
                                    icon="visibility"
                                    @click="showModal = true"
                                    label="View"
                                  />
                                </template>
                              </q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Academic Certificates"
                              >
                              </q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input :readonly="true" dense label="">
                                <template v-slot:append>
                                  <q-btn
                                    flat
                                    dense
                                    icon="visibility"
                                    @click="showModalcert = true"
                                    label="View"
                                  />
                                </template>
                              </q-input>
                            </div>

                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Transkrip Akademik"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input :readonly="true" dense label="">
                                <template v-slot:append>
                                  <q-btn
                                    flat
                                    dense
                                    icon="visibility"
                                    @click="showModalcert = true"
                                    label="View"
                                  />
                                </template>
                              </q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Kelayakan Bahasa Inggeris"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input :readonly="true" dense label="">
                                <template v-slot:append>
                                  <q-btn
                                    flat
                                    dense
                                    icon="visibility"
                                    @click="showModalbi = true"
                                    label="View"
                                  />
                                </template>
                              </q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Kertas Kerja
                                  Penyelidikan"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input :readonly="true" dense label="">
                                <template v-slot:append>
                                  <q-btn
                                    flat
                                    dense
                                    icon="visibility"
                                    @click="showModalpro = true"
                                    label="View"
                                  />
                                </template>
                              </q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Resit Pembayaran"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input :readonly="true" dense label="">
                                <template v-slot:append>
                                  <q-btn
                                    flat
                                    dense
                                    icon="visibility"
                                    @click="showModalresit = true"
                                    label="View"
                                  />
                                </template>
                              </q-input>
                            </div>
                            <div class="col-8 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Pengalaman Bekerja"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input :readonly="true" dense label="">
                                <template v-slot:append>
                                  <q-btn
                                    flat
                                    dense
                                    icon="visibility"
                                    @click="showModalexp = true"
                                    label="View"
                                  />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="infodll">
            <div class="col-12 q-mt-sm">
              <q-card bordered no-shadow class="card_style">
                <q-card-section vert>
                  <div class="row q-col-gutter-lg">
                    <div class="col-lg-10 col-md-4 col-sm-12 col-xs-12">
                      <q-card bordered no-shadow class="card_style">
                        <q-card-section>
                          <!-- <q-item type row no-wrap><q-item-section column side justify-center text-grey-8>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Maklumat Agent :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Sumber Kewangan
                                  :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Nama Tajaan :</label>
                                <label class="col-form-label q-mb-none" style="margin-left: 10px">Jumlah Pendapatan (RM)
                                  :</label>
                              </q-item-section></q-item> -->
                          <div class="row">
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Nama Agent"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="Mr ALI"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Emel Agent"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="test@gmail.com"
                              ></q-input>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Sokongan Kewangan"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="Biasisiwa"
                              ></q-input>
                            </div>
                            <div class="col-6 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                outlined
                                class="bg-grey-4"
                                label="Jenis Biasiswa"
                              ></q-input>
                            </div>
                            <div class="col-4 q-px-xs">
                              <q-input
                                :readonly="true"
                                dense
                                label="JPA"
                              ></q-input>
                            </div>
                            <!-- <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4" label="Kertas Kerja
                                  Penyelidikan"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div>
                              <div class="col-4 q-px-xs">
                                <q-input :readonly="true" dense outlined class="bg-grey-4"
                                  label="Resit Pembayaran"></q-input>
                              </div>
                              <div class="col-8 q-px-xs">
                                <q-input :readonly="true" dense label=""></q-input>
                              </div> -->
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <!-- </q-card> -->
      <!-- view file attach -->
      <!-- Modal Popup for Viewing Attachment -->
      <q-dialog v-model="showModal" persistent>
        <q-card style="width: 90vw; max-width: 600px">
          <q-card-section>
            <div class="text-h6">Attachment Viewer</div>
          </q-card-section>

          <q-card-section>
            <iframe
              :src="urlic"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              @click="showModal = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="showModalcert" persistent>
        <q-card style="width: 90vw; max-width: 600px">
          <q-card-section>
            <div class="text-h6">Attachment Viewer</div>
          </q-card-section>

          <q-card-section>
            <iframe
              :src="urlcert"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              @click="showModalcert = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="showModalresit" persistent>
        <q-card style="width: 90vw; max-width: 600px">
          <q-card-section>
            <div class="text-h6">Attachment Viewer</div>
          </q-card-section>

          <q-card-section>
            <iframe
              :src="urlresit"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              @click="showModalresit = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="showModalbi" persistent>
        <q-card style="width: 90vw; max-width: 600px">
          <q-card-section>
            <div class="text-h6">Attachment Viewer</div>
          </q-card-section>

          <q-card-section>
            <iframe
              :src="urlbi"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              @click="showModalbi = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="showModalpro" persistent>
        <q-card style="width: 90vw; max-width: 600px">
          <q-card-section>
            <div class="text-h6">Attachment Viewer</div>
          </q-card-section>

          <q-card-section>
            <iframe
              :src="urlpro"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              @click="showModalpro = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="showModalexp" persistent>
        <q-card style="width: 90vw; max-width: 600px">
          <q-card-section>
            <div class="text-h6">Attachment Viewer</div>
          </q-card-section>

          <q-card-section>
            <iframe
              :src="urlexp"
              style="width: 100%; height: 400px"
              frameborder="0"
            ></iframe>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              @click="showModalexp = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- Dialogs -->
      <q-dialog v-model="updateTindakanModal">
        <updateTindakan />
      </q-dialog>
      <q-dialog v-model="new_customer">
        <q-card style="width: 600px; max-width: 60vw">
          <q-card-section>
            <div class="text-h6">
              Proses Permohonan
              <q-btn
                round
                flat
                dense
                icon="close"
                class="float-right"
                color="grey-8"
                v-close-popup
              ></q-btn>
            </div>
          </q-card-section>
          <q-separator inset></q-separator>
          <q-card-section class="q-pt-none">
            <!-- <q-form @submit.prevent="submitForm" class="q-gutter-md" > -->
            <q-form @submit="submitForm" class="q-gutter-md" justify-center>
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label class="q-pb-xs">
                      Nama & NoKP/Passport</q-item-label
                    >
                    <q-item-label class="text-grey-8"
                      >{{ nama }} ({{ nokp }})</q-item-label
                    >
                    <q-input
                      color="blue"
                      type="text"
                      readonly
                      outlined
                      dense
                      label="NoKp/Passport"
                      v-model="formData.nokpform"
                      style="display: none"
                    />
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label class="q-pb-xs"
                      >Tindakan Pengesahan</q-item-label
                    >
                    <q-select
                      class="q-pb-xs"
                      label="Tindakan Pengesahan"
                      color="blue"
                      v-model="selectedOption"
                      :options="singleDropdownOptions"
                      @update:model-value="updateSelectedOption"
                      outlined
                      dense
                      required
                      :rules="[
                        (val) => !!val || 'Tindakan Pengesahan is required',
                      ]"
                      style="margin-right: 12px"
                    />
                  </q-item-section>
                </q-item>
                <!-- <div>Selected Option: {{ selectedOption }}</div> -->
                <div :key="selectedOption">
                  <div v-if="selectedOption === '4'">
                    <!-- <div v-if="true"> -->
                    <q-item>
                      <q-item-section>
                        <q-item-label class="q-pb-xs"
                          >Pilihan Program Baru</q-item-label
                        >
                        <q-select
                          class="q-pb-xs"
                          v-model="formData.kdprogrambaru"
                          :options="programOptions"
                          label="Search and Select a Program"
                          option-label="label"
                          option-value="value"
                          emit-value
                          map-options
                          filled
                          use-input
                          v-model:input-value="searchTerm"
                          @filter="filterPrograms"
                          @update:model-value="onOptionSelect"
                          color="blue"
                          outlined
                          dense
                          required
                          :rules="[(val) => !!val || 'Program is required']"
                          style="margin-right: 12px"
                        />
                      </q-item-section>
                    </q-item>
                  </div>
                </div>
                <q-item>
                  <q-item-section>
                    <q-item-label class="q-pb-xs"
                      >Catatan Pengesahan</q-item-label
                    >
                    <q-input
                      color="blue"
                      type="textarea"
                      outlined
                      dense
                      label="Catatan Pengesahan"
                      v-model="formData.catatanPengesahan"
                      :rules="[(val) => !!val || 'Catatan is required']"
                      required
                      style="margin-right: 12px"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
              <q-btn
                type="submit"
                @click="submitForm"
                label="Submit"
                color="primary"
                class="q-mr-sm"
              />
              <!-- <q-btn label="Tutup" color="negative" outlined v-close-popup></q-btn> -->
            </q-form>
          </q-card-section>

          <!-- <q-card-actions align="right" class="submit-button">
            <q-btn label="Simpan" type="submit" color="primary" class="q-mr-sm" v-close-popup @click="Submit" />
            <q-btn label="Tutup" color="negative" outlined v-close-popup></q-btn>
          </q-card-actions> -->
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-page>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  computed,
  reactive,
  watch,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import updateTindakan from "./EditPermohonan.vue";
import { useRetPermohonanStore } from "src/stores/getmohon";

export default defineComponent({
  name: "DetailPermohonan",
  components: {
    updateTindakan,
  },

  setup() {
    const route = useRoute(); // Access route parameters
    const router = useRouter(); // For navigation if needed
    const storeGetMohon = useRetPermohonanStore(); // Pinia store
    const nama = ref(""); // Reactive variable for dynamic label or data
    const nokp = ref(""); // Reactive variable for dynamic label or data
    const tkhlahir = ref(""); // Reactive variable for dynamic label or data
    const statwarga = ref(""); // Reactive variable for dynamic label or data
    const statoku = ref(""); // Reactive variable for dynamic label or data
    const almtsemasa = ref(""); // Reactive variable for dynamic label or data
    const telRS = ref(""); // Reactive variable for dynamic label or data
    const telHPS = ref(""); // Reactive variable for dynamic label or data
    const offS = ref(""); // Reactive variable for dynamic label or data
    const faxS = ref(""); // Reactive variable for dynamic label or data
    const almtT = ref(""); // Reactive variable for dynamic label or data
    const kaedah = ref(""); // Reactive variable for dynamic label or data
    const modest = ref(""); // Reactive variable for dynamic label or data
    const kdprogram = ref(""); // Reactive variable for dynamic label or data
    const tajuk = ref(""); // Reactive variable for dynamic label or data
    const sv = ref(""); // Reactive variable for dynamic label or data
    const expr = ref(""); // Reactive variable for dynamic label or data
    const akadtggi = ref("");
    const unilama = ref("");
    const negunilama = ref("");
    const cgpa = ref("");
    const cgpa2 = ref("");
    const unilama2 = ref("");
    const urlpic = ref("");
    const laluan = ref("");
    const transfer = ref("");
    const urlic = ref("");
    const urlcert = ref("");
    const urlpro = ref("");
    const urlbi = ref("");
    const urlresit = ref("");
    const urlexp = ref("");
    const labelText = ref(""); // Reactive variable for label text (e.g., from API)
    const nokpform = ref("");
    const statdesc = ref("");
    const cttnsah = ref("");
    const namaprogram = ref("");
    const kodprogram = ref("");
    const fakultiprogram = ref("");
    const program = ref("");
    const necprogram = ref("");
    const groupedPrograms = ref("");
    const facultyMap = ref("");
    const searchTerm = ref("");
    const term = ref("");
    const allPrograms = ref([]);

    //const Details = computed(() => storeGetMohon.Details); // Computed value from the store
    const setDetails = computed(() => {
      return storeGetMohon.Details;
    });

    const updateTindakanModal = ref(false);
    const showModal = ref(false);
    const showModalcert = ref(false);
    const showModalpro = ref(false);
    const showModalbi = ref(false);
    const showModalresit = ref(false);
    const showModalexp = ref(false);
    const new_customer = ref(false);

    const form = ref({
      singleDropdown: "",
    });

    const selectedOption = ref(""); // Tracks selected dropdown value
    // watch(selectedOption, (newValue) => {console.log("Selected Option:", newValue);});

    const updateSelectedOption = (selected) => {
      selectedOption.value = selected.value; // Extract only the value
    };

    const formData = ref({
      kdprogrambaru: "",
      catatanPengesahan: "",
      nokpform: "",
    });

    const singleDropdownOptions = [
      { label: "Permohonan Diluluskan", value: "2" },
      { label: "Permohonan Tidak Diluluskan", value: "3" },
      { label: "Pindah Fakulti", value: "4" },
    ];

    const programOptions = ref([]);
    const filteredPrograms = ref([]);
    const filteredWithHeaders = ref([]);
    const addedFaculties = ref([]);

    // const programOptions = storeGetMohon.KodProgram.map((program) => ({
    //   label: program.p020namaprogbi, // Program name
    //   value: program.p020kprog, // Program unique identifier
    // }));

    const listprogram = computed(() => {
      return storeGetMohon.KodProgram;
    });

    const submitForm = async () => {
      const payload = {
        tindakanPengesahan: selectedOption.value,
        kdprogrambaru:
          selectedOption.value === "4" ? formData.value.kdprogrambaru : null,
        catatanPengesahan: formData.value.catatanPengesahan,
        nokpform: formData.value.nokpform,
      };

      try {
        const response = await storeGetMohon.createupdtindakanf(payload);
        // console.log("API Response:", response.status); // Debugging
        //console.log('Form submitted successfully');
        if (response.status === "success") {
          //console.log("Success response received");
          new_customer.value = false;
          // console.log("Modal closed");

          setTimeout(() => {
            router.push({ name: "LandingPageSaringan" });
            //  console.log("Redirecting to LandingPageSaringan");
          }, 200);

          // new_customer.value = false;
          // console.log(new_customer.value)
          //  router.push('/landingpgsaringan');
          router.push({ name: "LandingPageSaringan" });
          // this.$router.push('/landingpgsaringan'); // Redirect
        }
      } catch (error) {
        console.error("Form submission failed:", error);
      }
    };

    // Function to fetch data based on route ID
    const fetchDetails = async () => {
      const id = route.params.p001nokp; // Get the ID from the route
      if (id) {
        try {
          await storeGetMohon.fetchDetail(id); // Fetch details using Pinia store action
          nama.value = storeGetMohon.Details.p001nama || ""; // Example: bind the fetched name to the variable
          nokp.value = storeGetMohon.Details.p001nokp || ""; // Example: bind the fetched name to the variable
          formData.value.nokpform = storeGetMohon.Details.p001nokp || ""; // Example: bind the fetched name to the variable
          tkhlahir.value = storeGetMohon.Details.p001tkhlahir || ""; // Example: bind the fetched name to the variable
          statwarga.value = storeGetMohon.Details.ktrgnstatwarga || ""; // Example: bind the fetched name to the variable
          statoku.value = storeGetMohon.Details.z013aketerangan || ""; // Example: bind the fetched name to the variable
          almtsemasa.value = storeGetMohon.Details.almtsemasa || ""; // Example: bind the fetched name to the variable
          telRS.value = storeGetMohon.Details.p001notel || ""; // Example: bind the fetched name to the variable
          telHPS.value = storeGetMohon.Details.p001nohp || ""; // Example: bind the fetched name to the variable
          offS.value = storeGetMohon.Details.p001offno || ""; // Example: bind the fetched name to the variable
          faxS.value = storeGetMohon.Details.p001faxno || ""; // Example: bind the fetched name to the variable
          almtT.value = storeGetMohon.Details.almttetap || ""; // Example: bind the fetched name to the variable
          kaedah.value = storeGetMohon.Details.kaedah || ""; // Example: bind the fetched name to the variable
          modest.value = storeGetMohon.Details.modebelajar || ""; // Example: bind the fetched name to the variable
          kdprogram.value = storeGetMohon.Details.p001kprog || ""; // Example: bind the fetched name to the variable

          const program = storeGetMohon.KodProgram.find(
            (item) => item.p020kprog === kdprogram.value
          );
          if (program) {
            // Display namaprogram if program is found
            namaprogram.value = program.p020namaprogbi || "";
            fakultiprogram.value = program.a019bi || "";
            necprogram.value = program.z054bnecdetail || "";
            // console.log("Program found, namaprogram:", namaprogram.value);
          } else {
            // console.log("Program not found");
            namaprogram.value = ""; // Reset if not found
            fakultiprogram.value = ""; // Reset if not found
          }

          tajuk.value = storeGetMohon.Details.p001tajuk || ""; // Example: bind the fetched name to the variable
          sv.value = storeGetMohon.Details.p001penyelia || ""; // Example: bind the fetched name to the variable
          expr.value = storeGetMohon.Details.p001bilexp || ""; // Example: bind the fetched name to the variable
          akadtggi.value = storeGetMohon.Details.akadtggi || ""; // Example: bind the fetched name to the variable
          unilama.value = storeGetMohon.Details.p001unilama || ""; // Example: bind the fetched name to the variable
          negunilama.value = storeGetMohon.Details.negunilama || ""; // Example: bind the fetched name to the variable
          cgpa.value = storeGetMohon.Details.p001cgpa || ""; // Example: bind the fetched name to the variable
          cgpa2.value = storeGetMohon.Details.p001cgpa2 || ""; // Example: bind the fetched name to the variable
          unilama2.value = storeGetMohon.Details.p001unilama2 || ""; // Example: bind the fetched name to the variable
          urlpic.value = storeGetMohon.Details.urlgmbr || ""; // Example: bind the fetched name to the variable
          laluan.value = storeGetMohon.Details.laluan || ""; // Example: bind the fetched name to the variable
          transfer.value = storeGetMohon.Details.setujutransfer || ""; // Example: bind the fetched name to the variable
          urlic.value = storeGetMohon.Details.urlnokppass || ""; // Example: bind the fetched name to the variable
          urlcert.value = storeGetMohon.Details.urlcert || ""; // Example: bind the fetched name to the variable
          urlpro.value = storeGetMohon.Details.urlpro || ""; // Example: bind the fetched name to the variable
          urlbi.value = storeGetMohon.Details.urlpro || ""; // Example: bind the fetched name to the variable
          urlresit.value = storeGetMohon.Details.urlpro || ""; // Example: bind the fetched name to the variable
          urlexp.value = storeGetMohon.Details.urlpro || ""; // Example: bind the fetched name to the variable
          labelText.value = storeGetMohon.Details.label || "Default Label"; // Example: bind label text if available
          statdesc.value = storeGetMohon.Details.statdesc || "N/A";
          cttnsah.value = storeGetMohon.Details.p001catatan || "N/A";
          //  console.log("Details fetched nokp", nokp.value);
          //  console.log("Details fetched successfully", storeGetMohon.Details);
        } catch (error) {
          console.error("Error fetching details frontend:", error);
        }
      } else {
        console.warn("No ID found in route params.");
      }
    };

    // Fetch data when the component is mounted
    onMounted(() => {
      fetchDetails();
      onLoad();
    });

    async function onLoad() {
      try {
        // Fetch data for kodprogram
        await storeGetMohon.fetchKodProgram();

        // Group programs by faculty
        const groupedPrograms = [];
        const facultyMap = new Map();

        storeGetMohon.KodProgram.forEach((program) => {
          const faculty = program.a019bi; // Faculty Name
          if (!facultyMap.has(faculty)) {
            facultyMap.set(faculty, {
              label: faculty.toUpperCase(), // Faculty Title (Uppercase for header style)
              disable: true, // Makes it a non-selectable header
            });
            groupedPrograms.push(facultyMap.get(faculty));
          }

          groupedPrograms.push({
            label: program.p020namaprogbi + " (" + program.z054bnecdetail + ")", // Program Name
            value: program.p020kprog, // Unique identifier
            faculty: faculty,
          });
        });

        programOptions.value = groupedPrograms;
        allPrograms.value = groupedPrograms;

        //display on label
        namaprogram.value = storeGetMohon.KodProgram[0].p020namaprogbi || "";
        kodprogram.value = storeGetMohon.KodProgram[0].p020kprog || "";
        fakultiprogram.value = storeGetMohon.KodProgram[0].a019bi || "";
        necprogram.value = storeGetMohon.KodProgram[0].z054bnecdetail || "";
        // console.log("namaprogram fetched successfully:", namaprogram.value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Auto-filter function
    const filterPrograms = (val, update) => {
      update(() => {
        if (!val) {
          // ✅ Show all options when search is empty
          programOptions.value = allPrograms.value;
        } else {
          const term = val.toLowerCase();
          searchTerm.value = val; // ✅ Update input field

          const filteredPrograms = allPrograms.value.filter(
            (option) =>
              !option.disable && option.label.toLowerCase().includes(term)
          );

          // ✅ Re-add faculty headers if at least one program from that faculty matches
          const filteredWithHeaders = [];
          const addedFaculties = new Set();

          allPrograms.value.forEach((option) => {
            if (option.disable) {
              // ✅ Always add faculty headers
              addedFaculties.add(option.label);
              filteredWithHeaders.push(option);
            } else if (
              filteredPrograms.some((prog) => prog.faculty === option.faculty)
            ) {
              // ✅ Only add programs that match the search
              filteredWithHeaders.push(option);
            }
          });

          programOptions.value = filteredWithHeaders;
        }
      });
    };

    const onOptionSelect = (selectedValue) => {
      if (!selectedValue) return;
      formData.value.kdprogrambaru = selectedValue;
    };

    return {
      tab: ref("mails"),
      verticalTab: "contact", // Set a valid default tab name
      horizontalTab: "", // Set a valid default tab name
      splitterModel: 20,

      updateTindakanModal,
      updateRow: () => (updateTindakanModal.value = true),
      updateRow1: () => (new_customer.value = true),
      singleDropdownOptions,
      updateSelectedOption,
      selectedOption,
      programOptions,
      filterPrograms,
      filteredPrograms,
      filteredWithHeaders,
      addedFaculties,
      onOptionSelect,
      searchTerm,
      term,
      //allPrograms,
      listprogram,
      formData,
      submitForm,
      form,
      new_customer,
      setDetails,
      nama,
      nokp,
      nokpform,
      tkhlahir,
      statwarga,
      statoku,
      almtsemasa,
      telRS,
      telHPS,
      offS,
      faxS,
      almtT,
      kaedah,
      modest,
      kdprogram,
      tajuk,
      sv,
      expr,
      akadtggi,
      unilama,
      negunilama,
      cgpa,
      cgpa2,
      unilama2,
      urlpic,
      laluan,
      transfer,
      urlic,
      urlcert,
      urlpro,
      urlbi,
      urlresit,
      urlexp,
      labelText,
      showModal,
      showModalcert,
      showModalpro,
      showModalbi,
      showModalresit,
      showModalexp,
      statdesc,
      cttnsah,
      namaprogram,
      kodprogram,
      fakultiprogram,
      program,
      necprogram,
      groupedPrograms,
      facultyMap,
      // labelText1,
    };
  },
});
</script>

<style>
.card_style {
  border-radius: 12px;
}

.image-center {
  text-align: center;
}

.card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
}

/* .card-title {
  font-size: 16px;
  margin: 0 0 7px 0;
  font-weight: 500;
} */

/* .shadow_custom {
  box-shadow: 0 2px 6px #4359711f !important;
} */

/* .q-col-gutter-y-lg,
.q-col-gutter-lg {
  margin-top: -24px;
}

.q-col-gutter-x-lg,
.q-col-gutter-lg {
  margin-left: -24px;
} */

/* .row,
.column,
.flex {
  display: flex;
  flex-wrap: wrap;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
} */
</style>

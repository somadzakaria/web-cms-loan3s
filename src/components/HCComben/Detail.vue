<template>
  <div>
    <div class="modal" id="Detail" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title font-weight-bold"
              style="font-family: 'Poppins'; color: #4a5568"
            >
              Detail
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="container-fluid">
            <div class="modal-body text-center">
              <div class="form" v-viewer>
                <img
                  :src="dataModal.FileAttachment_KTP"
                  style="border-radius:10px; cursor:pointer;"
                  height="150PX"
                  alt=""
                />
                <div class="row mt-5">
                  <div class="col-lg-6 text-left">
                    <label for="NIK" style="text-align: left"> NIK</label>
                    <input
                      type="text"
                      id="NIK"
                      class="form-control"
                      v-model="dataModal.NIK"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 text-left">
                    <label for="NIK" style="text-align: left"
                      >Tujuan Pinjaman</label
                    >
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.FinancePurpose"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 mt-3 text-left">
                    <label for="NIK" style="text-align: left">Nama</label>
                    <input
                      type="text"
                      id="NIK"
                      v-model="fullName"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 mt-3 text-left">
                    <label for="NIK" style="text-align: left"> Pinjaman</label>
                    <vue-numeric
                      separator="."
                      v-model="dataModal.LoanAmount"
                      :read-only="readOnly"
                      read-only-class="form-control disable"
                    />
                  </div>
                  <div class="col-lg-6 mt-3 text-left">
                    <label for="NIK" style="text-align: left"
                      >Lokasi kerja</label
                    >
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.WorkLocation"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 mt-3 text-left">
                    <label for="NIK" style="text-align: left">Rate/tahun</label>
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.EffectiveRate"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 mt-3 text-left">
                    <label for="NIK" style="text-align: left"
                      >Tanggal Pengajuan</label
                    >
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.SubmitDate"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 mt-3 text-left">
                    <label for="NIK" style="text-align: left">Tenor</label>
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.Tenor"
                      class="form-control"
                      disabled
                    />
                  </div>

                  <div class="col-lg-12 mt-3 text-left">
                    <h5
                      class="mt-4 font-weight-800 mb-3"
                      style="font-family: 'Poppins'; font-size: 15px"
                    >
                      Dokumen Persetujuan Pinjaman
                    </h5>

                    <a class="btn btn-pdf" :href="dataModal.DokumenPersetujuan"
                      ><i class="far fa-file-pdf text-white"></i> Lihat PDF</a
                    >
                  </div>
                  <h5
                    class=" font-weight-800 mt-4"
                    style="font-family:'Poppins'; font-size:15px; margin-left:10px;"
                  >
                    Dokumen Pendukung Pinjaman
                  </h5>
                  <div class="col-lg-12 mt-5 mb-5 img-thumbnail py-3">
                    <div class="row">
                      <div class="col-4 mb-3">
                        <img
                          style="border-radius:10px !important; cursor:pointer; width:240px; height: 141px;"
                          :src="dataModal.FileAttachment_DocPendukung"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 text-left">
                    <h5
                      class="mt-4 font-weight-bold"
                      style="font-family: 'Poppins'; font-size: 13px"
                    >
                      Rekomendasi
                    </h5>
                    <label for="NIK" style="text-align: left"
                      >Rekomendasi untuk Peminjaman</label
                    >
                    <input
                      type="text"
                      id="NIK"
                      v-model="HC_Recommendations"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-4 text-left">
                    <h5
                      class="mt-4 font-weight-bold"
                      style="font-family: 'Poppins'; font-size: 13px"
                    >
                      DSR
                    </h5>
                    <label for="NIK" style="text-align: left"
                      >Apakah DSR karyawan mencukupi?</label
                    >
                    <input
                      type="text"
                      id="NIK"
                      v-model="DSR"
                      class="form-control"
                      disabled
                    />
                  </div>

                  <div class="col-lg-4 text-left">
                    <h5
                      class="mt-4 font-weight-bold"
                      style="font-family: 'Poppins'; font-size: 13px"
                    >
                      SP
                    </h5>
                    <label for="NIK" style="text-align: left"
                      >Apakah karyawan ada riwayat SP?</label
                    >
                    <input
                      type="text"
                      id="NIK"
                      v-model="SP"
                      class="form-control"
                      disabled
                    />
                  </div>

                  <div class="col-lg-12 mt-3 text-left">
                    <h5
                      class="mt-4 font-weight-700"
                      style="font-family: 'Poppins'; font-size: 13px"
                    >
                      Notes
                    </h5>
                    <label for="NIK" style="text-align: left"
                      >Notes untuk Peminjaman</label
                    >
                    <textarea
                      class="form-control"
                      id="Nik"
                      v-model="dataModal.Notes_HCBP"
                      cols="30"
                      rows="10"
                      disabled
                    ></textarea>
                  </div>
                </div>
                <viewer :images="images">
                  <img v-for="src in images" :src="src" :key="src" />
                </viewer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal Content -->
    </div>
  </div>
</template>
<style scoped>
.disable {
  background-color: #edf2f7;
}
.img-thumbnail {
  margin-top: 10px !important;
}
.btn-pdf {
  width: 255px;
  color: white;
  background-color: #007aff;
}
</style>
<script>
import VueNumeric from "vue-numeric";
export default {
  components: {
    VueNumeric,
  },
  data() {
    return {
      detials: [],
      readOnly: true,
      images: "",
    };
  },
  props: {
    dataModal: {
      required: true,
    },
  },

  computed: {
    fullName: {
      get() {
        return `${this.dataModal.firstname} ${this.dataModal.lastname}`;
      },
      set(newValue) {
        const m = newValue.match(/(\S*)\s+(.*)/);
        this.firsnName = m[1];
        this.lastname = m[2];
      },
    },
    HC_Recommendations: {
      get() {
        return this.dataModal.HC_Recommendations ? "Ya" : "Tidak";
      },
    },
    DSR: {
      get() {
        return this.dataModal.DSR ? "Ya" : "Tidak";
      },
    },
    SP: {
      get() {
        return this.dataModal.SP ? "Ya" : "Tidak";
      },
    },
  },
};
</script>

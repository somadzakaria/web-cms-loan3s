<template>
  <div>
    <div class="modal" id="EditModal" tabindex="-1">
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
          <div class="modal-body text-center">
            <form>
              <div class="form">
                <img :src="dataModal.FileAttachment_KTP" width="350" alt="" />
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
                    <label for="NIK" style="text-align: left">Tujuan</label>
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
                    <label for="NIK" style="text-align: left">Pinjaman</label>
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
                  <div class="col-lg-6 mt-3 text-left">
                    <p>Document</p>
                    <img
                      :src="dataModal.DokumenPersetujuan"
                      id="NIK"
                      width="330"
                    />
                  </div>
                  <div class="col-lg-12 mt-3 text-left">
                    <label for="NIK" style="text-align: left"
                      >Upload Image</label
                    >
                    <input
                      id="file-input"
                      accept="image/*"
                      @change="onFileChange"
                      type="file"
                      class="form-control custom-file"
                      required
                    />
                  </div>
                  <div class="col-lg-12 mt-3 text-left">
                    <label for="NIK" style="text-align: left">Notes</label>
                    <textarea
                      class="form-control"
                      id="Nik"
                      cols="30"
                      rows="5"
                      v-model="dataModal.Notes_HCRecommendation"
                      disabled
                    ></textarea>
                  </div>
                  <div class="col-lg-12 mt-3 text-center">
                    <button class="btn btn-primary" @click="submit()">
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.disable {
  background-color: #edf2f7;
}

.custom-file {
  height: 55px !important;
  padding: 10px;
}
</style>
<script>
import LoanService from "../../services/loan.service";
import VueNumeric from "vue-numeric";
export default {
  components: {
    VueNumeric,
  },
  data() {
    return {
      loan: [],
      readOnly: true,
    };
  },
  props: {
    dataModal: {
      required: true,
    },
  },
  methods: {
    submit() {
      let params = {
        NIK: this.dataModal.NIK,
        DokumenPersetujuan: this.dataModal.DokumenPersetujuan,
      };
      LoanService.postUpdate(this.dataModal.id, params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
        })
        .catch((error) => {
          console.log("data tidak terkirim", error.response);
        });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.dataModal.DokumenPersetujuan = e.target.result;
      };
      reader.readAsDataURL(file);
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
  },
};
</script>

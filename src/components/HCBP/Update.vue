<template>
  <div>
    <div class="modal" id="Edit" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title font-weight-bold"
              style="font-family: 'Poppins'; color: #4a5568"
            >
              UPDATE
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
            <form role="form" @submit.prevent="submit($event)">
              <div class="form">
                <img :src="dataModal.FileAttachment_KTP" width="200" alt="" />
                <div class="row mt-5">
                  <div class="col-lg-6 text-left">
                    <label for="NIK" style="text-align: left"> NIK</label>
                    <input
                      type="text"
                      v-model="dataModal.NIK"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 text-left">
                    <label for="NIK" style="text-align: left"> Jabatan</label>
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.JobTitle"
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
                    <label for="NIK" style="text-align: left"
                      >Nomor Telepon</label
                    >
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.mobilephoneno"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-6 mt-3 text-left">
                    <label for="NIK" style="text-align: left"
                      >Lokasi Kerja</label
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
                    <label for="NIK" style="text-align: left">Email</label>
                    <input
                      type="text"
                      id="NIK"
                      v-model="dataModal.email"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <div class="col-lg-12 text-left">
                    <h5
                      class="mt-4 font-weight-bold"
                      style="font-family: 'Poppins'; font-size: 13px"
                    >
                      Dokumen Persetujuan Pinjaman
                    </h5>
                    <img
                      class="mt-3 mb-3"
                      :src="dataModal.DokumenPersetujuan"
                      width="200"
                      alt=""
                      required
                    />
                  </div>
                  <div class="col-lg-12 mt-3 text-left">
                    <label for="file" style="text-align: left"
                      >Dokumen Persetujuan (file .pdf)</label
                    >
                    <input
                      type="file"
                      @change="onFileChange"
                      class="form-control"
                      id="inputFile"
                    />
                  </div>
                  <div class="col-lg-12 text-left">
                    <h5
                      class="mt-4 font-weight-bold"
                      style="font-family: 'Poppins'; font-size: 12px"
                    >
                      Notes
                    </h5>
                    <label for="NIK" style="text-align: left" required
                      >Notes untuk Peminjaman
                    </label>
                    <textarea
                      class="form-control"
                      id="Nik"
                      v-model="dataModal.Notes"
                      cols="30"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div class="col-lg-12 mt-3 text-center">
                    <button class="btn btn-primary">
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
.custom-file {
  height: 55px !important;
  padding: 10px;
}
</style>
<script>
import router from "@/router";
import HcbpService from "../../services/hcbp.service";
export default {
  data() {
    return {
      HCBP: [],
    };
  },
  props: {
    dataModal: {
      required: true,
    },
  },
  methods: {
    submit(event) {
      let loading = this.$loading.show();
      event.preventDefault();
      var imageInput = document.getElementById("inputFile").files[0];
      var formData = new FormData();
      formData.append("NIK", this.dataModal.NIK);
      formData.append("DokumenPersetujuan", imageInput);
      formData.append("Notes", this.dataModal.Notes);
      HcbpService.postUpdate(this.dataModal.id, formData)
        .then((response) => {
          loading.hide();
          router.back();
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

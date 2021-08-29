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

          <div class="modal-body text-center">
            <div class="form" v-viewer>
              <img
                :src="dataModal.FileAttachment_KTP"
                width="200"
                style="cursor:pointer"
                alt=""
              />
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
                  <label for="NIK" style="text-align: left">Lokasi Kerja</label>
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
                <h5
                  class="mt-4 font-weight-bold"
                  style="font-family: 'Poppins'; font-size: 13px"
                >
                  Dokumen Pendukung Pinjaman
                </h5>
                <div class="col-lg-12 border-detail text-left" v-viewer>
                  <div class="row">
                    <div class="col-lg-4">
                      <img
                        class="mt-3 mb-3"
                        :src="dataModal.FileAttachment_DocPendukung"
                        style="cursor:pointer"
                        width="200"
                        height="auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 text-left">
                  <h5
                    class="mt-4 font-weight-bold"
                    style="font-family: 'Poppins'; font-size: 12px"
                  >
                    Notes
                  </h5>
                  <label for="NIK" style="text-align: left"
                    >Notes untuk Peminjaman
                  </label>
                  <textarea
                    class="form-control"
                    id="Nik"
                    v-model="dataModal.Notes"
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
  </div>
</template>
<style scoped>
.modal-xl {
  padding: 20px !important;
}
.border-detail {
  border: 0.1px solid rgb(163, 159, 159);
  border-radius: 10px;
  margin: 10px 20px 0px -1px !important;
}
</style>
<script>
export default {
  data() {
    return {
      ochart: [],
      dataModals: [],
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
  },
};
</script>

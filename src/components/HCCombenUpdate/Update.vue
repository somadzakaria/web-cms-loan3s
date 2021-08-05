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
              HC Comben Update
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
            <div class="form">
              <div class="row">
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left">Resign Date</label>
                  <input
                    type="datetime-local"
                    id="NIK"
                    class="form-control"
                    v-model="dataModal.ResignDate"
                  />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left">Jabatan</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.jobtitle"
                    value="dataModa.jobtitle"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">NIK</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.NIK"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi Kerja</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.WorkLocation"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Nama Depan</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.firstname"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left"
                    >Nama belakang</label
                  >
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.lastname"
                    class="form-control"
                  />
                </div>

                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">PG</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.PG"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">JG</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.JG"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-12 mt-3 text-center">
                  <button class="btn btn-primary" @click="submit()">
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import Combenupdate from "../../services/hccombenupdate.service";
export default {
  data() {
    return {
      dataModa: [],
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
        ResignDate: this.dataModal.ResignDate,
        JobTitle: this.dataModal.jobtitle,
        NIK: this.dataModal.NIK,
        WorkLocation: this.dataModal.WorkLocation,
        Firstname: this.dataModal.firstname,
        Lastname: this.dataModal.lastname,
        PG: this.dataModal.PG,
        JG: this.dataModal.JG,
      };
      Combenupdate.postUpdate(this.dataModal.id, params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
          router.go();
        })
        .catch((error) => {
          console.log("data tidak terkirim", error.response);
        });
    },
  },
};
</script>

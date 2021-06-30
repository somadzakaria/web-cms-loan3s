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
              Detail HC Comben Update
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
                    type="text"
                    id="NIK"
                    class="form-control"
             v-model="dataModal.ResignDate"
                    disabled
                  />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left">Jabatan</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.Jabatan"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">NIK</label>
                  <input
                    type="text"
                    id="NIK"
                   v-model="dataModal.NIK"
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
                  <label for="NIK" style="text-align: left">Nama</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.firstname"
                    class="form-control"
                    disabled
                  />
                </div>
            
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">PG</label>
                  <input
                    type="text"
                    id="NIK"
             v-model="dataModal.PG"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">JG</label>
                  <input
                    type="text"
                    id="NIK"
                  v-model="dataModal.JG"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-3 mt-3 text-left">
                  <label for="NIK" style="text-align: left">DSR</label>
                  <input
                    type="text"
                    id="NIK"
                  v-model="dataModal.DSR"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-3 mt-3 text-left">
                  <label for="NIK" style="text-align: left">SP</label>
                  <input
                    type="text"
                    id="NIK"
                  v-model="dataModal.SP"
                    class="form-control"
                    disabled
                  />
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
};
</script>

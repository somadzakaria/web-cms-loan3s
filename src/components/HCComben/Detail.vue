<template>
  <div>
    <div class="modal" id="exampleModal" tabindex="-1">
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
            <div class="form">
              <img src="img/image.png" width="350" alt="" />
              <div class="row mt-5">
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> NIK</label>
                  <input
                    type="text"
                    id="NIK"
                    class="form-control"
                    placeholder="5555555"
                    disabled
                  />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> Jabatan</label>
                  <input
                    type="text"
                    id="NIK"
                    placeholder="Beli Truck"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Name</label>
                  <input
                    type="text"
                    id="NIK"
                    placeholder="Bhaihaki AB"
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
                    placeholder="0882828282"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi kerja</label>
                  <input
                    type="text"
                    id="NIK"
                    placeholder="PT.SITAMA"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Email</label>
                  <input
                    type="text"
                    id="NIK"
                    placeholder="DebaleLilo@gmail.com"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Notes</label>
                  <textarea
                    class="form-control"
                    id="Nik"
                    placeholder="Untuk Pijet +++"
                    cols="30"
                    rows="10"
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal Content -->
    </div>
  </div>
</template>
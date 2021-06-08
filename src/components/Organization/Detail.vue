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
              <div class="row">
                <div class="col-lg-12">
                  <img src="../../assets/djani.png" alt="" />
                </div>
                <div class="col-lg-12 text-left">
                  <label for="NIK" style="text-align: left">PIC</label>
                  <input
                    type="text"
                    id="NIK"
                    class="form-control"
                    placeholder="Djani Setiadi"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Jabatan</label>
                  <input
                    type="text"
                    id="NIK"
                    placeholder="Ceo "
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Status</label>
                  <input
                    type="text"
                    id="NIK"
                    placeholder="Founder"
                    class="form-control"
                    disabled
                  />
                </div>

                <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Keyword</label>
                  <textarea
                    class="form-control"
                    id="Nik"
                    placeholder="Minjem Buat Beli Truck"
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
    </div>
  </div>
</template>
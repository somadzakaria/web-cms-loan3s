<template>
  <div>
    <div class="modal" id="EditDetail" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title font-weight-bold"
              style="font-family: 'Poppins'; color: #4a5568"
            >
             Upload Organization Chart
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
                <div class="col-lg-12 text-left">
                  <label for="NIK" style="text-align: left">Judul</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Foto  cover Blog</label>
                  <input type="file" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pilih Kategori</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tags</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
             <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Isi Blog</label>
                  <textarea
                    class="form-control"
                    id="Nik"
                   
                    cols="30"
                    rows="10"
                   
                  ></textarea>
                </div>
                <div class="col-lg-12 mt-4 text-center">
                  <button class="btn-primary btn-lg text-center">Simpan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
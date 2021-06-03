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
              Edit Detail
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
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> Tujuan</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Name</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pinjaman</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi kerja</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Rate/tahun</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left"
                    >Tanggal Pengajuan</label
                  >
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-12 text-left">
                  <h5
                    class="mt-4 font-weight-bold"
                    style="font-family: 'Poppins'; font-size: 13px"
                  >
                    Rekomendasi
                  </h5>
                  <label for="NIK" style="text-align: left"
                    >Rekomendasi untuk Peminjaman</label
                  >
                  <input type="text" id="NIK" class="form-control" />
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
                    cols="30"
                    rows="8"
                  ></textarea>
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Nama Dokumen</label>
                  <input type="text" id="NIK" class="form-control" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Dokumen</label>
                  <input type="file" class="form-control" />
                </div>
                <div class="col-lg-12 mt-5">
                  <button class="btn btn-primary btn-lg">Simpan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal Content -->
      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
    </div>
  </div>
</template>
<template>
  <div>
    <div class="modal" id="exampleModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-bold" style="font-family: 'Poppins'; color: #4a5568">
              Detail
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div class="form">
              <img src="img/image.png" width="350" alt="" />
              <div class="row mt-5">
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> NIK</label>
                  <input type="text" id="NIK" class="form-control"  disabled />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> Tujuan</label>
                  <input type="text" id="NIK" placeholder="Beli Truck" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Name</label>
                  <input type="text" id="NIK" placeholder="Lilo Digdya Pasha" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pinjaman</label>
                  <input type="text" id="NIK" placeholder="Rp.3.000.000" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi kerja</label>
                  <input type="text" id="NIK" placeholder="PT.SITAMA" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Rate/tahun</label>
                  <input type="text" id="NIK" placeholder="7%" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tanggal Pengajuan</label>
                  <input type="text" id="NIK" placeholder="3 Agustus 2019" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor</label>
                  <input type="text" id="NIK" placeholder="3 Bulan" class="form-control" disabled />
                </div>
                <div class="col-lg-12 text-left">
                  <h5 class="mt-4 font-weight-bold" style="font-family: 'Poppins'; font-size: 13px">
                    Rekomendasi
                  </h5>
                  <label for="NIK" style="text-align: left">Rekomendasi untuk Peminjaman</label>
                  <input type="text" id="NIK" placeholder="3 Bulan" class="form-control" disabled />
                </div>
                <div class="col-lg-12 text-left">
                  <h5 class="mt-4 font-weight-bold" style="font-family: 'Poppins'; font-size: 12px">
                    Notes
                  </h5>
                  <label for="NIK" style="text-align: left">Notes untuk Peminjaman </label>
                  <textarea class="form-control" id="Nik" placeholder="Peminjaman boleh diberikan namun hanya dengan limit Rp 2.000.000 dengan tenor selama 6 bulan" cols="30" rows="10" disabled></textarea>
                </div>

                <div class="row">
                  <div class="col-lg-4 mt-5 text-center">
                    <img src="img/dokumen.png" id="NIK" width="330" height="90%" />
                    <label class="mt-4" style="text-align: left">Pesetujuan dari xxxx </label>
                  </div>
                  <div class="col-lg-4 mt-5 text-center">
                    <img src="img/dokumen.png" id="NIK" width="330" />
                    <label class="mt-4" style="text-align: left">Pesetujuan dari xxxx </label>
                  </div>
                  <div class="col-lg-4 mt-5 text-center">
                    <img src="img/dokumen.png" id="NIK" width="330" />
                    <label class="mt-4" style="text-align: left">Pesetujuan dari xxxx </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


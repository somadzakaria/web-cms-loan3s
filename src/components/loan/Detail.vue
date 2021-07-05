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
              <img :src="dataModal.FileAttachment_KTP" width="350" alt="" />
              <div class="row mt-5">
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> NIK</label>
                  <input type="text" id="NIK" class="form-control" v-model="dataModal.NIK" disabled />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> Tujuan</label>
                  <input type="text" id="NIK" v-model="dataModal.FinancePurpose" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Name Depan</label>
                  <input type="text" id="NIK" v-model="dataModal.firstname" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Name Belakang</label>
                  <input type="text" id="NIK" v-model="dataModal.lastname" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pinjaman</label>
                  <input type="text" id="NIK" v-model="dataModal.LoanAmount" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi kerja</label>
                  <input type="text" id="NIK" v-model="dataModal.WorkLocation" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Rate/tahun</label>
                  <input type="text" id="NIK" placeholder="7%" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tanggal Pengajuan</label>
                  <input type="text" id="NIK" v-model="dataModal.SubmitDate" class="form-control" disabled />
                </div>
                <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor</label>
                  <input type="text" id="NIK" v-model="dataModal.Tenor" class="form-control" disabled />
                </div>
   
                  <div class="col-lg-6 mt-3 text-left">
                  <p>Document</p>
                  <img :src="dataModal.DokumenPersetujuan" id="NIK" width="330" />
                </div>
                             <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Notes</label>
                  <textarea class="form-control" id="Nik" placeholder="Minjem Bob" cols="30" rows="10" disabled></textarea>
                </div>  
                <div class="col-lg-12 mt-3 text-center">
                  <button class="btn btn-primary"><i class="fas fa-dollar-sign mr-3"></i>Cairkan</button>
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
      ochart: [],
    };
  },
  props: {
    dataModal: {
      required: true,
    },
  },
};
</script>

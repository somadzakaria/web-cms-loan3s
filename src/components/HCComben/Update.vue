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
              Update
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
              <img :src="dataModal.FileAttachment_KTP" width="350" alt="" />
              <div class="row mt-5">
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> NIK</label>
                  <input
                    type="text"
                    id="NIK"
                    class="form-control"
                    v-model="dataModal.NIK"
                 disabled 
                  />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left">Tujuan Pinjaman</label>
                  <input
                    type="text"
                    id="NIK"
                   v-model="dataModal.FinancePurpose"
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
                  <label for="NIK" style="text-align: left"> Pinjaman</label>
                  <input
                    type="text"
                    id="NIK"
                  v-model="dataModal.LoanAmount"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left"
                    >Lokasi kerja</label
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
                  <label for="NIK" style="text-align: left">Rate/tahun</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.EffectiveRate"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tanggal Pengajuan</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.SubmitDate"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.Tenor" 
                
                    class="form-control"
                    disabled
                  />
                </div>
                     <div class="col-lg-4 text-left">
                  <h5 class="mt-4 font-weight-bold" style="font-family: 'Poppins'; font-size: 13px">
                   Rekomendasi
                  </h5>
   <label for="NIK" style="text-align: left">Rekomendasi untuk Peminjaman</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.RekomendasiPeminjaman"
                    class="form-control"
                 
                  />
                               
                </div>
                     <div class="col-lg-4 text-left">
                  <h5 class="mt-4 font-weight-bold" style="font-family: 'Poppins'; font-size: 13px">
                  DSR
                  </h5>
   <label for="NIK" style="text-align: left">Apakah DSR karyawan mencukupi?</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal. DSR"
                    class="form-control"
               
                  />
                               
                </div>
                     <div class="col-lg-4 text-left">
                  <h5 class="mt-4 font-weight-bold" style="font-family: 'Poppins'; font-size: 13px">
                  SP
                  </h5>
   <label for="NIK" style="text-align: left">Apakah karyawan ada riwayat SP?</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.SP"
                    class="form-control"
                
                  />
                               
                </div>
                <div class="col-lg-12 mt-3 text-left">
                   <h5 class="mt-4 font-weight-bold" style="font-family: 'Poppins'; font-size: 13px">
                Notes
                  </h5>
                  <label for="NIK" style="text-align: left">Notes untuk Peminjaman</label>
                  <textarea
                    class="form-control"
                    id="Nik"
                   v-model="dataModal.Notes"
                    cols="30"
                    rows="10"
           
                  ></textarea>
                </div>
                    <div class="col-lg-12 mt-3 text-center">
                  <button class="btn btn-primary" @click="submit()">Simpan</button>
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
<script>
import HCcombenService from "../../services/hccomben.service"
export default {
  data() {
    return {
      detials: [],
    };
  },
  props: {
    dataModal: {
      required: true,
    },
  },
      methods:{
  submit(){
  let params ={
    NIK : this.dataModal.NIK,
    RekomendasiPeminjaman : this.dataModal.RekomendasiPeminjaman,
    DSR : this.dataModal.DSR,
    SP : this.dataModal.SP,
    Notes : this.dataModal.Notes
    }
  HCcombenService.postUpdate(this.dataModal.id,params).then((response)=>
  {
    console.log(response,"Berhasil Di tambahkan")
    }).catch((error)=>
    {
    console.log("data tidak terkirim",error.response)
  })
  },
  }
};
</script>
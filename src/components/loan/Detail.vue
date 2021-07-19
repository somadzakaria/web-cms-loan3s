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
           <form>
              <div class="form">
              <img :src="dataModal.FileAttachment_KTP" width="350" alt="" />
              <div class="row mt-5">
                <div class="col-lg-12 text-left">
                  <label class="h5 mb-4">Data Karyawan</label>
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> NIK</label>
                  <input type="text" id="NIK" class="form-control" v-model="dataModal.NIK" disabled />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left"> Tujuan</label>
                  <input type="text" id="NIK" v-model="dataModal.FinancePurpose" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Nama Lengkap</label>
                  <input type="text" id="NIK" v-model="fullName" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pinjaman</label>
                   <vue-numeric separator="." v-model="dataModal.LoanAmount"   :read-only="readOnly"  read-only-class="form-control disable" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi kerja</label>
                  <input type="text" id="NIK" v-model="dataModal.WorkLocation" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Rate/tahun</label>
                  <input type="text" id="NIK" v-model="dataModal.EffectiveRate" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tanggal Pengajuan</label>
                  <input type="text" id="NIK" v-model="dataModal.SubmitDate" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor</label>
                  <input type="text" id="NIK" v-model="dataModal.Tenor" class="form-control" disabled />
                </div>
                  <div class="col-lg-6 mt-3 text-left">
                  <p>Document</p>
                  <img :src="dataModal.DokumenPersetujuan" id="NIK" width="330" />
                </div>
                  <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Notes</label>
                  <textarea class="form-control" id="Nik"  cols="30" rows="10" disabled></textarea>
                </div>  
                <div class="col-lg-12 mt-3 text-center">
                  <button class="btn btn-primary" @click="submit()"><i class="fas fa-dollar-sign mr-3"></i>Cairkan</button>
                </div>
              </div>
            </div>
           </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.disable{
   background-color: #edf2f7;
}
</style>
<script>
import LoanService from "../../services/aproval.service"
import VueNumeric from 'vue-numeric'
export default {
    components: {
    VueNumeric
  },
  data() {
    return {
      loan: [],
      readOnly: true
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
    loan_amount : this.dataModal.loan_amount,
    term_years : this.dataModal.term_years,
    terms : this.dataModal.terms
    }

  LoanService.postActivation(this.dataModal.id,params).then((response)=>
  { console.log(response,"Berhasil Di tambahkan")}).catch((error)=>{
    console.log("data tidak terkirim",error.response)
  })},
  
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
      }
    },
  
  }
};
</script>

<template>
  <div class="modal" id="Detail" tabindex="-1">
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
          <form>
            <div class="form">
              <div class="row">
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left">NIK</label>
                  <input
                    type="text"
                    id="NIK"
                    class="form-control"
                    v-model="dataModal.NIK"
                    disabled
                  />
                </div>
                <div class="col-lg-6 text-left">
                  <label for="NIK" style="text-align: left">Tujuan</label>
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
                    v-model="fullName"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pinjaman</label>
                    <vue-numeric separator="." v-model="dataModal.LoanAmount"  :read-only="readOnly"  read-only-class="form-control disable" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi kerja</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.WorkLocation"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Rate</label>
                  <input
                    type="text"
                    id="NIK"
                    v-model="dataModal.EffectiveRate"
                    class="form-control"
                    disabled
                  />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pengajuan</label>
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
                <div class="col-lg-6 mt-5">
                  <img :src="dataModal.DokumenPersetujuan" alt="" />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Note</label>
                  <textarea
                    class="form-control"
                    id="Nik"
                    v-model="dataModal.Notes"
                    cols="30"
                    rows="10"
                    disabled
                  ></textarea>
                </div>
                <div class="col-lg-12 mt-5">
                  <button class="btn btn-danger mt-5 mr-3 btn-lg" @click="back()">
                    Reject
                  </button>
                  <button class="btn btn-success mt-5 btn-lg" @click="submit(dataModal.Approval)">Approve</button>
                </div>
              </div>
            </div>
          </form>
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
import router from "@/router"
import AprovalService from "../../services/aproval.service";
import VueNumeric from 'vue-numeric'
export default {
    components: {
    VueNumeric
  },
  data() {
    return {
      ochart: [],
      readOnly: true
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
        Approval: this.dataModal.Approval,
      };
      AprovalService.postSubmit(this.dataModal.id,params)
        .then((response) => {
          console.log(response,"Berhasil Di tambahkan");
          router.go();
        })
        .catch((error) => {
          console.log("Gagal Di tambahkan", error.res);
        });
    },
    back(){
      router.go();
    }
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
    }
  }
};
</script>

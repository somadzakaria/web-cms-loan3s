<template>
  <div class="home">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <Sidebar />
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <Navbar />
          <!-- Begin Page Content -->
          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <div class="row">
                  <div class="col-lg-6 text-left">
                    <h6
                      style="
                        font-family: 'Poppins';
                        font-size: 14px;
                        font-weight: bold;
                      "
                    >
                      Update Loan Admin
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body text-center">
                     <img class="mb-5" :src="loan.DokumenPersetujuan" width="200" alt="" />  
                <form role="form" @submit.prevent="submit($event)">
                  <div class="form">
                    <div class="row">
                     <div class="col-lg-6 mt-5 text-left">
                  <label for="NIK" style="text-align: left"> NIK</label>
                  <input type="text" id="NIK" class="form-control" v-model="loan.NIK" />
                </div>
                <div class="col-lg-6 mt-5 text-left">
                  <label for="NIK" style="text-align: left"> Tujuan</label>
                  <input type="text" id="NIK" v-model="loan.FinancePurpose" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Name Depan</label>
                  <input type="text" id="NIK" v-model="loan.firstname" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Name Belakang</label>
                  <input type="text" id="NIK" v-model="loan.lastname" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Pinjaman</label>
                  <input type="text" id="NIK" v-model="loan.LoanAmount" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Lokasi kerja</label>
                  <input type="text" id="NIK" v-model="loan.WorkLocation" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Rate/tahun</label>
                  <input type="text" id="NIK" v-model="loan.EffectiveRate" class="form-control" disabled />
                </div>
                <div class="col-lg-6 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tanggal Pengajuan</label>
                  <input type="text" id="NIK" v-model="loan.SubmitDate" class="form-control" disabled />
                </div>
                <div class="col-lg-12 mt-3 text-left">
                  <label for="NIK" style="text-align: left">Tenor</label>
                  <input type="text" id="NIK" v-model="loan.Tenor" class="form-control" disabled />
                </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Upload Image</label>
                        <input id="file-input" accept="image/*" @change="onFileChange" type="file" class="form-control" />
                      </div>
                      <div class="col-lg-12 mt-4 text-center">
                        <button class="btn-primary btn-lg text-center" type="submit">Simpan</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <Footer />
        <!-- End of Footer -->
      </div>

      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>
<script>
import router from "@/router";
import Sidebar from "../navigation/Sidebar.vue";
import Navbar from "../navigation/Navbar.vue";
import Footer from "../navigation/Footer.vue";
import LoanService from "../../services/loan.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      Loan: this.$route.params.id,
      loan: {
        NIK: "",
        firstname:'',
        lastname:'',
        LoanAmount:"",
        WorkLocation:'',
        SubmitDate:'',
        DokumenPersetujuan: "",
        FileAttachment_KTP:"",
        EffectiveRate:"",
        Tenor:"",
        FinancePurpose:"",
      },
    };
  },
  methods: {
    getDetail() {
      LoanService.getShow(this.$route.params.id).then((response) => {
        if (response.code === 200) {
          this.loan.NIK = response.data.NIK;
          this.loan.firstname = response.data.firstname;
          this.loan.lastname = response.data.lastname;
          this.loan.WorkLocation = response.data.WorkLocation;
          this.loan.LoanAmount = response.data.LoanAmount;
          this.loan.EffectiveRate = response.data.EffectiveRate;
          this.loan.SubmitDate = response.data.SubmitDate;
          this.loan.Tenor = response.data.Tenor;
          this.loan.FinancePurpose = response.data.FinancePurpose;
          this.loan.DokumenPersetujuan = response.data.DokumenPersetujuan;
          this.loan.FileAttachment_KTP = response.data.FileAttachment_KTP;
        }
      });
    },
    submit(event) {
      event.preventDefault();
      let params = {
        NIK: this.loan.NIK,
        DokumenPersetujuan: this.loan.DokumenPersetujuan,
      };
      LoanService.postUpdate(this.$route.params.id, params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
          router.back();
        })
        .catch((error) => {
          console.log("Gagal Di tambahkan", error.res);
        });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.loan.DokumenPersetujuan = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>

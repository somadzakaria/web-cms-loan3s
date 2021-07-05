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
                      Update HCComben
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="submit($event)">
                  <div class="form">
                    <div class="row">
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">Name</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.firstname" />
                      </div>
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">NIK</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.NIK" />
                      </div>
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">ResignDate</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.ResignDate" />
                      </div>
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">Jabatan</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.Jabatan" />
                      </div>
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">WorkLocation</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.WorkLocation" />
                      </div>
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">PG</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.PG" />
                      </div>
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">JG</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.JG" />
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
import HCCombenupdateService from "../../services/hccombenupdate.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      HCComben: this.$route.params.id,
      hccomben: {
        firstname: "",
        NIK: "",
        ResignDate: "",
        Jabatan: "",
        WorkLocation: "",
        PG: "",
        JG: "",
    
      },
    };
  },
  methods: {
    getDetail() {
      HCCombenupdateService.getShow(this.$route.params.id).then((response) => {
        if (response.code === 200) {
          this.hccomben.firstname = response.data.firstname,
          this.hccomben.NIK = response.data.NIK,
          this.hccomben.ResignDate = response.data.ResignDate,
          this.hccomben.Jabatan = response.data.Jabatan,
          this.hccomben.WorkLocation = response.data.WorkLocation,
          this.hccomben.PG = response.data.PG,
          this.hccomben.JG = response.data.JG

        }
      });
    },
    submit(event) {
      event.preventDefault();
      let params = {
        Firstname: this.hccomben.Firstname,
        NIK: this.hccomben.NIK,
        ResignDate: this.hccomben.ResignDate,
        Jabatan: this.hccomben.Jabatan,
        WorkLocation: this.hccomben.WorkLocation,
        PG: this.hccomben.PG,
        JG: this.hccomben.JG,
      };
      HCCombenupdateService.postUpdate(this.$route.params.id, params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
          router.back();
        })
        .catch((error) => {
          console.log("Gagal Di tambahkan", error.res);
        });
    },
  },
   mounted() {
    this.getDetail();
  },
};
</script>

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
                      Create GeneralSetting
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
                        <input type="text" id="NIK" class="form-control" v-model="general.GSName" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">GSValue</label>
                        <input type="text" id="NIK" class="form-control" v-model="general.GSValue" />
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
import GeneralService from "../../services/general.service";

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      general: {
        GSName: "",
        GSValue: "",
      },
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      let params = {
        GSName: this.general.GSName,
        GSValue: this.general.GSValue,
      };
      GeneralService.postCrate(params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
          router.back();
        })
        .catch((error) => {
          console.log("Gagal Di tambahkan", error.res);
        });
    },
  },
};
</script>

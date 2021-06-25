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
                      Update Ochart
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="submit($event)">
                  <div class="form">
                    <div class="row">
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">TitleName</label>
                        <input type="text" id="NIK" class="form-control" v-model="ochart.TitleName" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">PIC</label>
                        <input type="text" id="NIK" class="form-control" v-model="ochart.PIC" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Quotes</label>
                        <input type="text" id="NIK" class="form-control" v-model="ochart.Quotes" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Upload Image</label>
                        <input id="file-input" accept="image/*" @change="onFileChange" type="file" class="form-control" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Status</label>
                        <select class="form-control" v-model="ochart.isactive">
                          <option value="1">Active</option>
                          <option value="0">No Active</option>
                        </select>
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
import OchartService from "../../services/ochart.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      ochart: {
        TitleName: "",
        PIC: "",
        Quotes: "",
        ImagesPath: "",
        isactive: "",
      },
    };
  },
  methods: {
    getDetail() {
      OchartService.getShow(this.$route.params.id).then((response) => {
        if (response.code === 200) {
          this.ochart.TitleName = response.data.TitleName;
          this.ochart.PIC = response.data.PIC;
          this.ochart.Quotes = response.data.Quotes;
          this.ochart.ImagesPath = response.data.ImagesPath,
          this.ochart.isactive = response.data.isactive;
        }
      });
    },
    submit(event) {
      event.preventDefault();
      let params = {
        OchartID: this.$route.params.id,
        TitleName: this.ochart.TitleName,
        PIC: this.ochart.PIC,
        Quotes: this.ochart.Quotes,
        ImagesPath: this.ochart.ImagesPath,
        isactive: this.ochart.isactive,
      };
      OchartService.postUpdate(this.$route.params.id, params)
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
        this.ochart.ImagesPath = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>

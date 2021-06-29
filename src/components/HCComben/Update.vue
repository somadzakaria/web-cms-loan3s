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
                      Update GeneralSetting
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
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.NIK" />
                      </div>
                    <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Rekomendasi Peminjaman</label>
                        <select class="form-control" v-model="hccomben.RekomendasiPeminjaman">
                          <option value="1">Ya</option>
                          <option value="0">Tidak</option>
                        </select>
                      </div>
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">Nama Dokumen</label>
                        <input type="text" id="NIK" class="form-control" v-model="hccomben.NamaDokumen" />
                      </div>
                         <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Upload Image Dokumen</label>
                        <input id="file-input" accept="image/*" @change="onFileChange" type="file" class="form-control" />
                      </div>
                           <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Notes</label>
                        <textarea class="form-control" id="Nik" v-model="hccomben.Notes" cols="30" rows="10"></textarea>
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
import HCCombenService from "../../services/hccomben.service";
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
        NIK: "",
        RekomendasiPeminjaman: "",
        NamaDokumen: "",
        DokumenAttachment: "",
        Notes: "",
      },
    };
  },
  methods: {
    getDetail() {
      HCCombenService.getShow(this.$route.params.id).then((response) => {
        if (response.code === 200) {
          this.hccomben.NIK = response.data.NIK,
          this.hccomben.RekomendasiPeminjaman = response.data.RekomendasiPeminjaman,
          this.hccomben.NamaDokumen = response.data.NamaDokumen,
          this.hccomben.DokumenAttachment = response.data.DokumenAttachment,
          this.hccomben.Notes = response.data.Notes
        }
      });
    },
    submit(event) {
      event.preventDefault();
      let params = {
        NIK: this.hccomben.NIK,
        RekomendasiPeminjaman: this.hccomben.RekomendasiPeminjaman,
        NamaDokumen: this.hccomben.NamaDokumen,
        DokumenAttachment: this.hccomben.DokumenAttachment,
        Notes: this.hccomben.Notes,
      };
      HCCombenService.postUpdate(this.$route.params.id, params)
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
        this.hccomben.DokumenAttachment = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
   mounted() {
    this.getDetail();
  },
};
</script>

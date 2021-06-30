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
                      Create Promotion
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="submit($event)">
                  <div class="form">
                    <div class="row">
                       <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Upload Image</label>
                        <input id="file-input" accept="image/*" @change="onFileChange" type="file" class="form-control" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="exampleFormControlSelect1">Produk Name</label>
                        <select class="form-control" id="exampleFormControlSelect1" v-model="promotion.id" @click="changeProductID()">
                          <option v-for="promotion in promotions" :key="promotion.id">{{ promotion.ProductName }}</option>
                        </select>
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Promotion Description</label>
                        <input type="text" id="NIK" class="form-control" v-model="promotion.Promotion_Description" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">RedirectTo</label>
                        <input type="text" id="NIK" class="form-control" v-model="promotion.RedirectTo" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Status</label>
                        <select class="form-control" v-model="promotion.isactive">
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
import PromotionService from "../../services/promotion.service";
import ProductService from "../../services/produk.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      promotion: {
        ImagesPath:'',
        ProductID: "",
        Promotion_Description: "",
        RedirectTo: "",
        isactive: "",
      },
      promotions: [],
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      let params = {
        ProductID: this.promotion.id,
        ImagesPath: this.promotion.ImagesPath,
        // ProductID: this.promotion.ProductID,
        Promotion_Description: this.promotion.Promotion_Description,
        RedirectTo: this.promotion.RedirectTo,
        isactive: this.promotion.isactive,
      };
      PromotionService.postCrate(params)
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
      this.promotion.ImagesPath =e.target.result;
      };
      reader.readAsDataURL(file);
    },
    changeProductID() {
      ProductService.getAll().then((response) => {
        this.promotions = response.data;
      });
    },
  },
};
</script>

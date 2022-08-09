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
                      Update Promotion
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="submit($event)">
                  <div class="form">
                    <div class="row">
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left"
                          >Upload Image</label
                        >
                        <input
                          id="file-input"
                          accept="image/*"
                          @change="onFileChange"
                          type="file"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="exampleFormControlSelect1"
                          >Produk Name</label
                        >
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          v-model="promotion.id"
                          @click="changeProductID()"
                          required
                        >
                          <option
                            v-for="promotion in promotions"
                            :key="promotion.id"
                            >{{ promotion.ProductName }}</option
                          >
                        </select>
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left"
                          >Promotion Description</label
                        >
                        <textarea
                          class="form-control"
                          id="Nik"
                          v-model="promotion.Promotion_Description"
                          cols="30"
                          rows="10"
                          required
                        ></textarea>
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left"
                          >RedirectTo</label
                        >
                        <input
                          type="text"
                          id="NIK"
                          class="form-control"
                          v-model="promotion.RedirectTo"
                          required
                        />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Status</label>
                        <select
                          class="form-control"
                          v-model="promotion.isactive"
                          required
                        >
                          <option value="1">Active</option>
                          <option value="0">No Active</option>
                        </select>
                      </div>
                      <div class="col-lg-12 mt-4 text-center">
                        <button
                          class="btn-primary btn-lg text-center"
                          type="submit"
                        >
                          Simpan
                        </button>
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
import ProductService from "../../services/produkv1.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      ProductId: this.$route.params.id,
      promotion: {
        ProductID: "",
        ImagesPath: "",
        Promotion_Description: "",
        RedirectTo: "",
        isactive: "",
      },
      promotions: [],
    };
  },
  methods: {
    getDetail() {
      PromotionService.getShow(this.$route.params.id).then((response) => {
        if (response.code === 200) {
          (this.promotion.ProductID = response.data.ProductID),
            (this.promotion.Promotion_Description =
              response.data.Promotion_Description),
            (this.promotion.RedirectTo = response.data.RedirectTo),
            (this.promotion.isactive = response.data.isactive);
        }
      });
    },
    submit(event) {
      event.preventDefault();
      let params = {
        ProductID: this.promotion.id,
        ImagesPath: this.promotion.ImagesPath,
        Promotion_Description: this.promotion.Promotion_Description,
        RedirectTo: this.promotion.RedirectTo,
        isactive: this.promotion.isactive,
      };
      PromotionService.postUpdate(this.$route.params.id, params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
          this.$swal.fire({
            icon: "success",
            title: "Success",
            text: "Promotion Berhasil Di Update",
          });
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
        this.promotion.ImagesPath = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    changeProductID() {
      ProductService.getAll().then((response) => {
        this.promotions = response.data;
      });
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>

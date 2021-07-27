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
                      Create Product
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="submit($event)">
                  <div class="form">
                    <div class="row">
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left"
                          >Product Name</label
                        >
                        <input
                          type="text"
                          id="NIK"
                          class="form-control"
                          v-model="Products.ProductName"
                          required
                        />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left"
                          >Product Description</label
                        >
                        <textarea
                          class="form-control"
                          id="Nik"
                          v-model="Products.ProductDescription"
                          cols="30"
                          rows="10"
                          required
                        ></textarea>
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left"
                          >FinancePurpose</label
                        >
                        <input
                          type="text"
                          id="NIK"
                          class="form-control"
                          v-model="Products.FinancePurpose"
                          required
                        />
                      </div>
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
                        <label for="NIK" style="text-align: left"
                          >Tenor From</label
                        >
                        <input
                          type="text"
                          id="NIK"
                          class="form-control"
                          v-model="Products.Tenor_From"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
                          required
                        />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left"
                          >Tenor To</label
                        >
                        <input
                          type="text"
                          id="NIK"
                          class="form-control"
                          v-model="Products.Tenor_to"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                        required
                        />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left"
                          >EffectiveRate</label
                        >
                        <input
                          type="text"
                          id="NIK"
                          class="form-control"
                          v-model="Products.EffectiveRate"
                          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                       required
                        />
                      </div>

                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Status</label>
                        <select
                          class="form-control"
                          v-model="Products.isactive" required
                        >
                          <option value="" disabled>Pilih</option>
                          <option value="1">Active</option>
                          <option value="2">No Active</option>
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
      Products: {
        ProductName: "",
        ProductDescription: "",
        FinancePurpose: "",
        ImagesPath: "",
        Tenor_From: "",
        Tenor_to: "",
        EffectiveRate: "",
        isactive: "",
      },
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      let params = {
        ProductName: this.Products.ProductName,
        ProductDescription: this.Products.ProductDescription,
        FinancePurpose: this.Products.FinancePurpose,
        ImagesPath: this.Products.ImagesPath,
        Tenor_From: this.Products.Tenor_From,
        Tenor_to: this.Products.Tenor_to,
        EffectiveRate: this.Products.EffectiveRate,
        isactive: this.Products.isactive,
      };
      ProductService.postCrate(params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
          this.$swal.fire({
            icon: "success",
            title: "Success",
            text: "Produk Berhasil Di tambahkan",
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
        this.Products.ImagesPath = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

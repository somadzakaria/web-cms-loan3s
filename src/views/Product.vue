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
                      Product
                    </h6>
                  </div>
                  <div class="col-lg-6 text-right">
                    <button class="btn btn-primary text-left" @click="handleCreate()"><i class="fa fa-plus mr-3"></i> Tambah</button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Product
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          ID
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Description
                        </th>

                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Financial Purpose
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Tenor From
                        </th>

                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Tenor To
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Rate
                        </th>

                        <th
                          class="text-center"
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          status
                        </th>
                        <th
                          class="text-center"
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="Product in Products" :key="Product.id">
                        <td>{{ Product.ProductID }}</td>
                        <td>{{ Product.ProductName }}</td>
                        <td>{{ Product.ProductDescription }}</td>
                        <td>{{ Product.FinancePurpose }}</td>
                        <td>{{ Product.Tenor_From }}</td>
                        <td>{{ Product.Tenor_to }}</td>
                        <td>{{ Product.EffectiveRate }}</td>
                        <td>{{ Product.isactive === "1" ? "ACTIVE" : "NON ACTIVE" }}</td>
                        <td>
                          <button class="btn btn-universal" type="submit" @click.prevent="handledelete(Product.id)"><i class="far fa-trash-alt text-primary"></i></button>
                          <button class="btn btn-universal" type="submit" @click.prevent="handleupdate(Product.id)"><i class="far fa-edit text-primary"></i></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
        <!-- Modal Detail -->

        <!-- End Modal Content -->
        <!-- Footer -->
        <Footer />
        <!-- End of Footer -->
      </div>
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import router from "@/router";
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import ProductService from "../services/produk.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      Products: [],
    };
  },
  created() {
    ProductService.getAll()
      .then((response) => {
        this.Products = response.data;
      })
      .catch((error) => {
        console.log("Eror Data Tidak Di Temukan", error.response);
      });
  },
  methods: {
    handledelete(id) {
      ProductService.getDelete(id)
        .then((response) => {
          console.log(response, "Berhasil Terhapus");
          router.go();
        })
        .catch((error) => {
          console.log("Gagal Terhapus", error.response);
        });
    },
    handleCreate() {
      router.push("/Product-create");
    },
    handleupdate(id) {
      router.push("/Product-update/" + id);
    },
  },
};
</script>

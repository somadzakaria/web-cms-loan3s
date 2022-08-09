<template>
  <div class="home">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <Sidebar/>
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <Navbar/>
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
                      Product Konsumtif
                    </h6>
                  </div>
                  <div class="col-lg-6 text-right">
                    <button class="btn btn-primary text-left"
                            data-toggle="modal"
                            data-target="#AddProduct">
                      <i class="fa fa-plus mr-3"></i> Tambah
                    </button>

                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                      class="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                  >
                    <thead>
                    <tr>
                      <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                      >
                        Product ID
                      </th>
                      <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                      >
                        Pinjaman Min
                      </th>
                      <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                      >
                        Pinjaman Max
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
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                      >
                        Tenor
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
                        Status
                      </th>
                      <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                      >
                        Action
                      </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="item in items" :key="item.id">
                      <td>{{ item.ProductID }}</td>
                      <td>{{ formatPrice(item.RangePinjamanMin) }}</td>
                      <td>{{ formatPrice(item.RangePinjamanMax) }}</td>
                      <td>{{ item.EffectiveRate }} %</td>
                      <td>{{ item.TenorMin }} </td>
                      <td>{{ item.TenorMax }} </td>
                      <td>{{ item.EffectiveRate }} %</td>
                      <td>
                        <button
                            class="btn btn-universal"
                            data-toggle="modal"
                            data-target="#ViewsProduct"
                        >
                          <i class="far fa-eye text-primary"></i>
                        </button>
                        <button
                            class="btn btn-universal"
                            data-toggle="modal"
                            data-target="#EditProduct"
                        >
                          <i class="far fa-edit text-primary"></i>
                        </button>
                        <button
                            class="btn btn-universal"
                            data-toggle="modal"
                            data-target="#Delete"
                        >
                          <i class="far fa-trash-alt text-primary"></i>
                        </button>
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
        <Footer/>
        <Adds />
        <ViewsProduct />
        <!-- End of Footer -->
      </div>


    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";

import Adds from "../components/Product/Add.vue";
import ViewsProduct from "../components/Product/View.vue";
import ProductServices from "../services/product.service";


export default {
  name: "Product",
  components: {
    Sidebar,
    Navbar,
    Footer,
    Adds,
    ViewsProduct,
    // eslint-disable-next-line vue/no-unused-components
    ProductServices,
  },

  data() {
    return {
      items: [],
    };
  },
  created() {
    ProductServices.getAll()
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
  },
  methods:{
    handledelete(id){
      ProductServices.getDelete(id).then((response) =>
      {
        console.log(response,"Berhasil Terhapus");
      }).catch((error) => {
        console.log("Gagal Terhapus", error.response);
      });
    },

    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return "Rp. "+val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
  }



};
</script>
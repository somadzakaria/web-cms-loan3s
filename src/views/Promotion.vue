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
                <div class="row ">
                  <div class="col-lg-6 text-left">
                    <h6 style="font-family: 'Poppins'; font-size: 14px; font-weight: bold;">Promotion</h6>
                  </div>
                  <div class="col-lg-6 text-right">
                    <button class="btn btn-primary text-left" @click="handleCreate"><i class="fa fa-plus mr-3"></i> Tambah</button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Produk
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Deskripsi
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Link
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Status
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="promotion in promotions" :key="promotion.id">
                        <td>{{ promotion.ProductID }}</td>
                        <td>{{ promotion.Promotion_Description }}</td>
                        <td>{{ promotion.RedirectTo }}</td>
                        <td>{{ promotion.isactive }}</td>
                        <td>
                          <button class="btn btn-universal" data-toggle="modal" data-target="#Detail" @click.prevent="handledetail(promotion.id)"><i class="far fa-eye text-primary"></i></button>
                          <button class="btn btn-universal" @click.prevent="handleupdate(promotion.id)"><i class="far fa-edit text-primary"></i></button>
                          <button class="btn btn-universal" type="submit" @click.prevent="handledelete(promotion.id)"><i class="far fa-trash-alt text-primary"></i></button>
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
        <Detail :dataModal="dataModal" />
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
import Detail from "../components/Promotion/Prouctdetail.vue";
import PromotionService from "../services/promotion.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
    Detail,
  },
  data() {
    return {
      promotions: [],
      dataModal: "",
    };
  },
  created() {
    PromotionService.getAll()
      .then((response) => {
        this.promotions = response.data;
      })
      .catch((error) => {
        console.log("Eror Data Tidak Di Temukan", error.response);
      });
  },
  methods: {
    handledelete(id) {
      PromotionService.getDelete(id)
        .then((response) => {
          console.log(response, "Berhasil Terhapus");
          router.go();
        })
        .catch((error) => {
          console.log("Gagal Terhapus", error.response);
        });
    },
    handledetail(id) {
      PromotionService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Gagal Terhapus", error.response);
        });
    },
    handleCreate() {
      router.push("/Promotion-create");
    },
    handleupdate(id) {
      router.push("/Promotion-update/" + id);
    },
  },
};
</script>

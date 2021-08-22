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
            <!-- End Filter -->
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-3 text-gray-800" style="font-family: 'Poppins';">
                Transfer
              </h1>
            </div>
            <div class="card shadow mt-5">
              <div class="card-body">
                <vue-good-table
                  :columns="columns"
                  :rows="rows"
                  :search-options="{
                    enabled: true,
                  }"
                  :pagination-options="{
                    enabled: true,
                  }"
                >
                </vue-good-table>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
        <Detail :dataModal="dataModal" />
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
// import router from "@/router";
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
// import AprovalService from "../services/aproval.service";
// import Utils from "@/utils/index";
import Detail from "../components/Approval/Detail.vue";
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
      columns: [
        {
          label: "Tgl Pengajuan",
          field: "SubmitDate",
        },
        {
          label: "No. Pengajuan",
          field: "SubmitDate",
        },
        {
          label: "Total Transaction",
          field: "NIK",
          type: "number",
        },
        {
          label: "Funding Amount",
          field: "SubmitDate",
        },
      ],
      rows: [
        {
          SubmitDate: 1,
          firstname: "2",
          firstname2: "2",
          NIK: "3",
        },
      ],
      dataModal: "",
    };
  },
  //   created() {
  //     AprovalService.getAll()
  //       .then((response) => {
  //         this.rows = response.data;
  //       })
  //       .catch((error) => {
  //         console.log("Eror Data Tidak Di Temukan", error.response);
  //       });
  //   },
  //   methods: {
  //     handledetail(id) {
  //       AprovalService.getShow(id)
  //         .then((response) => {
  //           this.dataModal = response.data;
  //         })
  //         .catch((error) => {
  //           console.log("Eror Data Tidak Di Temukan", error.response);
  //         });
  //     },
  //     currency(nominal) {
  //       return Utils.currencyRp(nominal);
  //     },
  //   },
};
</script>

<style scoped>
.btn-white {
  font-family: "Poppins";
}
.btn-white:hover {
  background-color: #007aff;
  border-radius: 3px;
  font-family: "Poppins";
  color: #ffff;
}
</style>

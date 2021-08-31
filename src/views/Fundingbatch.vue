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
                Funding Batch
              </h1>
            </div>
            <div class="card shadow mt-5">
              <div class="card-body">
                <vue-good-table
                  :columns="columns"
                  :rows="rows"
                    :sort-options="{
                    enabled: false,
                  }"
                  :pagination-options="{
                    enabled: true,
                    mode: 'pages',
                  }"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'action'">
                      <button
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#Detail"
                      >
                        Approval
                      </button>
                    </span>
                    <span v-if="props.column.field == 'view'">
                      <button
                        class="btn btn-universal"
                        @click.prevent="handleShow()"
                      >
                        <i class="far fa-eye text-primary"></i>
                      </button>
                    </span>
                  </template>
                </vue-good-table>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <Detail :dataModal="dataModal" />
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
import Detail from "../components/Funding/Approval.vue";
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
          label: "No. Payment Voucher",
          field: "SubmitDate",
        },
        {
          label: "Jumlah Transaksi",
          field: "SubmitDate",
        },
        {
          label: "Nominal",
          field: "NIK",
          type: "number",
        },
        {
          label: "Funding",
          field: "WorkLocation",
        },
        {
          label: "Status",
          field: "WorkLocation",
        },
        {
          label: "View",
          field: "view",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
      rows: [
        {
          SubmitDate: 1,
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
  methods: {
    handleShow() {
      router.push("/funding-show/");
    },
  },
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

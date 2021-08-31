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
                Persetujuan Pinjaman
              </h1>
            </div>
            <div class="card shadow mt-5">
              <div class="card-body">
                <vue-good-table
                  :columns="columns"
                  :rows="rows"
                  :line-numbers="true"
                  :sort-options="{
                    enabled: false,
                  }"
                  :pagination-options="{
                    enabled: true,
                    mode: 'pages',
                  }"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'waktu'">
                      {{ props.row.SubmitDate | moment("DD MMMM YYYY") }}
                    </span>
                    <span v-if="props.column.field == 'action'">
                      <button
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#Detail"
                        @click.prevent="handledetail(props.row.id)"
                      >
                        Approval
                      </button>
                    </span>
                    <span v-else>
                      {{ props.formattedRow[props.column.field] }}
                    </span>
                    <span v-if="props.column.field === 'dsrcuy'">
                      {{ props.row.DSR == 1 ? "Ya" : "Tidak Disetujui" }}
                    </span>
                    <span v-if="props.column.field === 'spcuy'">
                      {{ props.row.SP == 1 ? "Ya" : "Tidak Disetujui" }}
                    </span>
                    <span v-if="props.column.field === 'Bendahara'">
                      {{
                        props.row.ApvBendahara == 1
                          ? "Disetujui"
                          : "Tidak Disetujui"
                      }}
                    </span>
                    <span v-else>
                      {{ props.formattedRow[props.column.Apvbendahara] }}
                    </span>
                    <span v-if="props.column.field === 'Pinjaman'">
                      {{ currency(props.row.LoanAmount) }}
                    </span>
                  </template>
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
import AprovalService from "../services/aproval.service";
import Utils from "@/utils/index";
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
          field: "waktu",
          width: "150px",
        },
        {
          label: "Nama",
          field: "firstname",
        },
        {
          label: "NIK",
          field: "NIK",
        },
        {
          label: "Lokasi Kerja",
          field: "WorkLocation",
        },
        {
          label: "Pinjaman",
          field: "Pinjaman",
        },
        {
          label: "DSR",
          field: "dsrcuy",
        },
        {
          label: "SP",
          field: "spcuy",
        },
        {
          label: "Bendahara",
          field: "Bendahara",
        },
        {
          label: "Ketua",
          field: "ApvKetua",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
      rows: [],
      dataModal: "",
    };
  },
  created() {
    AprovalService.getAll()
      .then((response) => {
        this.rows = response.data;
      })
      .catch((error) => {
        console.log("Eror Data Tidak Di Temukan", error.response);
      });
  },
  methods: {
    handledetail(id) {
      AprovalService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
    currency(nominal) {
      return Utils.currencyRp(nominal);
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

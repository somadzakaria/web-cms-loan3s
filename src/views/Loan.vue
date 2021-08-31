<template>
  <div>
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
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-3 text-gray-800" style="font-family: 'Poppins';">
                Administrasi Pinjaman
              </h1>
            </div>
            <div class="card shadow mb-4">
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
                    perPage: 5,
                  }"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'waktu'">
                      {{ props.row.SubmitDate | moment("DD MMMM YYYY") }}
                    </span>
                    <span v-if="props.column.field === 'NIK'">
                      {{ props.row.NIK }}
                    </span>
                    <span v-if="props.column.field === 'nama'">
                      {{ props.row.firstname }}
                      {{ props.row.lastname }}
                    </span>
                    <span v-if="props.column.field === 'WorkLocation'">
                      {{ props.row.WorkLocation }}
                    </span>
                    <span v-if="props.column.field === 'Pinjaman'">
                      {{ currency(props.row.LoanAmount) }}
                    </span>
                    <span v-if="props.column.field === 'dsrcuy'">
                      {{ props.row.DSR == 1 ? "Ya" : "Tidak" }}
                    </span>
                    <span v-if="props.column.field === 'spcuy'">
                      {{ props.row.SP == 1 ? "Ya" : "Tidak" }}
                    </span>
                    <span v-if="props.column.field == 'action'">
                      <button
                        class="btn btn-universal"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        @click.prevent="handledetail(props.row.id)"
                      >
                        <i class="far fa-eye text-primary"></i>
                      </button>
                      <button
                        class="btn btn-universal"
                        data-toggle="modal"
                        data-target="#EditModal"
                        @click.prevent="handleUpdate(props.row.id)"
                      >
                        <i class="far fa-edit text-primary"></i>
                      </button>
                      <button class="btn btn-primary">
                        <i class="fas fa-dollar-sign mr-3"></i>Cairkan
                      </button>
                    </span>
                  </template>
                </vue-good-table>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
          <Detail :dataModal="dataModal" />
          <Edit :dataModal="dataModal" />
        </div>
        <!-- End of Main Content -->
        <!-- Modal Detail -->

        <!-- End Modal Content -->
        <!-- Footer -->
        <Footer />
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>
<style scoped>
.dataTables_empty {
  border-bottom: none !important ;
}
</style>
<script>
// @ is an alias to /src
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import Detail from "../components/loan/Detail.vue";
import Edit from "../components/loan/Edit.vue";
import Utils from "@/utils/index";
import LoanService from "../services/loan.service";
export default {
  name: "Loan",
  components: {
    Sidebar,
    Navbar,
    Footer,
    Detail,
    Edit,
  },
  data() {
    return {
      columns: [
        {
          label: "Tgl Pengajuan",
          field: "waktu",
        },
        {
          label: "Nik",
          field: "NIK",
        },
        {
          label: "Nama",
          field: "nama",
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
          label: "Action",
          field: "action",
          width: "220px",
        },
      ],
      rows: [],
      loans: "",
      dataModal: "",
    };
  },
  created() {
    LoanService.getAll()
      .then((response) => {
        this.loans = response.data;
        this.rows = response.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  methods: {
    handledetail(id) {
      LoanService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
    handleUpdate(id) {
      LoanService.getShow(id)
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

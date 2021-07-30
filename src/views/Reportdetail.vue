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
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800">Report Detail</h1>
            </div>
            <!-- Filter -->
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-white">Januari</button>
                    <button type="button" class="btn btn-white">
                      Februari
                    </button>
                    <button type="button" class="btn btn-white">Maret</button>
                    <button type="button" class="btn btn-white">April</button>
                    <button type="button" class="btn btn-white">Mei</button>
                    <button type="button" class="btn btn-white">Juni</button>
                    <button type="button" class="btn btn-white">Juli</button>
                    <button type="button" class="btn btn-white">Agustus</button>
                    <button type="button" class="btn btn-white">
                      September
                    </button>
                    <button type="button" class="btn btn-white">Oktover</button>
                    <button type="button" class="btn btn-white">
                      November
                    </button>
                    <button type="button" class="btn btn-white">
                      Desember
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Filter -->
            <div class="card shadow mt-5">
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
                      Loan Admin
                    </h6>
                  </div>
                </div>
              </div>
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
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'Tglpengajuan'">
                      {{}}
                    </span>
                    <span v-else>
                      {{ props.formattedRow[props.column.field] }}
                    </span>
                    <span v-if="props.column.field == 'action'">
                      <button class="btn btn-primary">action</button>
                    </span>
                    <span v-else>
                      {{ props.formattedRow[props.column.field] }}
                    </span>
                    <span v-if="props.column.field == 'action'">
                      <button class="btn btn-primary">action</button>
                    </span>
                    <span v-else>
                      {{ props.formattedRow[props.column.field] }}
                    </span>
                  </template>
                </vue-good-table>
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
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import LoanService from "../services/loan.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      columns: [
        {
          label: "Tgl Pengajuan",
          field: "Tglpengajuan",
        },
        {
          label: "Nama",
          field: "name",
        },
        {
          label: "NIK",
          field: "age",
          type: "number",
        },
        {
          label: "Lokasi Kerja",
          field: "name",
        },
        {
          label: "Pinjaman",
          field: "Pinjaman",
        },
        {
          label: "DSR",
          field: "DSR",
        },
        {
          label: "SP",
          field: "SP",
        },

        {
          label: "Action",
          field: "action",
        },
      ],
      rows: [
        {
          id: 1,
          name: "John",
          age: 20,
          Pinjaman: "wkwkw",
          score: "",
          action: "",
        },
        {
          id: 2,
          name: "Kantong",
          age: 20,
          Pinjaman: "wkwkw",
          score: "",
          action: "",
        },
      ],
    };
  },
  created() {
    LoanService.getAll()
      .then((response) => {
        this.loans = response.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  methods: {
    loadItems() {
      LoanService.getAll(this.serverParams).then((response) => {
        this.totalRecords = response.totalRecords;
        this.rows = response.rows;
      });
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

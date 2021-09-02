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
              <h1 class="h3 mb-3 text-gray-800" style="font-family: 'Poppins';">
                Rekomendasi Pinjaman
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
                  }"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'SubmitDate'">
                      {{ props.row.SubmitDate | moment("DD MMMM YYYY") }}
                    </span>
                    <span v-if="props.column.field == 'NIK'">
                      {{ props.row.NIK }}
                    </span>
                    <span v-if="props.column.field == 'Nama'">
                      {{ props.row.firstname }}
                      {{ props.row.lastname }}
                    </span>
                    <span v-if="props.column.field == 'JobTitle'">
                      {{ props.row.JobTitle }}
                    </span>
                    <span v-if="props.column.field == 'WorkLocation'">
                      {{ props.row.WorkLocation }}
                    </span>
                    <span v-if="props.column.field == 'HC_Recommendations'">
                      {{ props.row.HC_Recommendations == 1 ? "Ya" : "Tidak" }}
                    </span>
                    <span v-if="props.column.field == 'DSR'">
                      {{ props.row.DSR == 1 ? "Ya" : "Tidak" }}
                    </span>
                    <span v-if="props.column.field == 'SP'">
                      {{ props.row.SP == 1 ? "Ya" : "Tidak" }}
                    </span>
                    <span v-if="props.column.field == 'action'">
                      <button
                        class="btn btn-universal"
                        data-toggle="modal"
                        data-target="#Detail"
                        @click.prevent="handledetail(props.row.id)"
                      >
                        <i class="far fa-eye text-primary"></i>
                      </button>
                      <button
                        class="btn btn-universal"
                        data-toggle="modal"
                        data-target="#Edit"
                        @click.prevent="handleUpdate(props.row.id)"
                      >
                        <i class="far fa-edit text-primary"></i>
                      </button>
                    </span>
                  </template>
                </vue-good-table>
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
        <Update :dataModal="dataModal" />
      </div>

      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import Detail from "../components/HCComben/Detail.vue";
import Update from "../components/HCComben/Update.vue";
import Utils from "@/utils/index";
import HCCombenService from "../services/hccomben.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
    Detail,
    Update,
  },
  data() {
    return {
      columns: [
        {
          label: "Tgl Pengajuan",
          field: "SubmitDate",
        },
        {
          label: "NIK",
          field: "NIK",
        },
        {
          label: "Nama",
          field: "Nama",
        },
        {
          label: "Jabatan",
          field: "JobTitle",
        },
        {
          label: "Lokasi Kerja",
          field: "WorkLocation",
        },
        {
          label: "Rekomendasi",
          field: "HC_Recommendations",
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
      rows: [],
      dataModal: "",
      images:'',
    };
  },
  created() {
    HCCombenService.getAll()
      .then((response) => {
        this.rows = response.data;
      })
      .catch((error) => {
        console.log(error.response, "Respon data");
      });
  },
  methods: {
    handledetail(id) {
      HCCombenService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
    handleupdate(id) {
      HCCombenService.getShow(id)
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

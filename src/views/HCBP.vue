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
                Pengajuan Pinjaman
              </h1>
            </div>
            <div class="card shadow mb-4">
              <div class="card-body">
                <vue-good-table
                  :columns="columns"
                  :rows="rows"
                  :line-numbers="true"
                  :sort-options="{
                    enabled: false
                  }"
                  :pagination-options="{
                    enabled: true,
                    mode: 'pages'
                  }"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'SubmitDate'">
                      {{ props.row.SubmitDate | moment("DD MMMM YYYY") }}
                    </span>
                    <span v-if="props.column.field === 'NIK'">
                      {{ props.row.NIK }}
                    </span>
                    <span v-if="props.column.field === 'JobTitle'">
                      {{ props.row.JobTitle }}
                    </span>
                    <span v-if="props.column.field === 'WorkLocation'">
                      {{ props.row.WorkLocation }}
                    </span>
                    <span v-if="props.column.field === 'Pinjaman'">
                      {{ currency(props.row.LoanAmount) }}
                    </span>
                    <span v-if="props.column.field === 'InstallmentAmount'">
                      {{ currency(props.row.InstallmentAmount) }}
                    </span>
                    <span v-if="props.column.field === 'Tenor'">
                      {{ props.row.Tenor }} Bulan
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
                        @click.prevent="handleupdate(props.row.id)"
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
      </div>

      <!-- Moodal Edit -->
      <Update :dataModal="dataModal" />
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
import Detail from "../components/HCBP/Detail.vue";
import Update from "../components/HCBP/Update.vue";
import Utils from "@/utils/index";
import HCBPService from "../services/hcbp.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
    Detail,
    Update
  },
  data() {
    return {
      columns: [
        {
          label: "Tgl Pengajuan",
          field: "SubmitDate"
        },
        {
          label: "NIK",
          field: "NIK",
          type: "number"
        },
        {
          label: "Jabatan",
          field: "JobTitle"
        },
        {
          label: "Lokasi Kerja",
          field: "WorkLocation"
        },
        {
          label: "Pinjaman",
          field: "Pinjaman"
        },
        {
          label: "Angsuran",
          field: "InstallmentAmount"
        },
        {
          label: "Tenor",
          field: "Tenor"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [],
      dataModal: ""
    };
  },
  created() {
    HCBPService.getAll()
      .then(response => {
        this.rows = response.data;
      })
      .catch(error => {
        console.log("data tidak ditemukan", error.response);
      });
  },
  methods: {
    handledetail(id) {
      HCBPService.getShow(id)
        .then(response => {
          this.dataModal = response.data;
        })
        .catch(error => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
    handleupdate(id) {
      HCBPService.getShow(id)
        .then(response => {
          this.dataModal = response.data;
        })
        .catch(error => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
    currency(nominal) {
      return Utils.currencyRp(nominal);
    }
  }
};
</script>

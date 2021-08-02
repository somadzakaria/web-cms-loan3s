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
              <h1 class="h3 mb-3 text-gray-800" style="font-family: 'Poppins';">Approval</h1>
            </div>
            <div class="card shadow mt-5">
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered"
                    width="110%"
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
                          Tgl Pengajuan
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          NIK
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Nama
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Lokasi Kerja
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Pinjaman
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          DSR
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          SP
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Apv. Bendahara
                        </th>

                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Apv. Sekretaris
                        </th>

                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Apv. Ketua
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="aproval in aprovals" :key="aproval.id">
                        <td>
                          {{
                            aproval.SubmitDate | moment("DD MMMM YYYY HH:mm:s")
                          }}
                        </td>
                        <td>{{ aproval.NIK }}</td>
                        <td>{{ aproval.firstname }} {{ aproval.lastname }}</td>

                        <td>{{ aproval.WorkLocation }}</td>
                        <td>{{ currency(aproval.LoanAmount) }}</td>
                        <td>{{ aproval.DSR === 1 ? "Ya" : "Tidak" }}</td>
                        <td>{{ aproval.SP === 1 ? "Ya" : "Tidak" }}</td>
                        <td>
                          {{
                            aproval.ApvBendahara === "1"
                              ? "Disetujui"
                              : "Ditolak"
                          }}
                        </td>
                        <td>
                          {{
                            aproval.ApvSekretaris === "1"
                              ? "Disetujui"
                              : "Ditolak"
                          }}
                        </td>
                        <td>
                          {{
                            aproval.ApvKetua === "1" ? "Disetujui" : "Ditolak"
                          }}
                        </td>
                        <td>
                          <button
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#Detail"
                            @click.prevent="handledetail(aproval.id)"
                          >
                            Approval
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
      aprovals: [],
      dataModal: "",
    };
  },
  created() {
    AprovalService.getAll()
      .then((response) => {
        this.aprovals = response.data;
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

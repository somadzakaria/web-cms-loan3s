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
                <div class="row">
                  <div class="col-lg-6 text-left">
                    <h6
                      style="
                        font-family: 'Poppins';
                        font-size: 14px;
                        font-weight: bold;
                      "
                    >
                      HCBP
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered"  width="100%" cellspacing="0">
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
                          Jabatan
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
                          Angsuran
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
                          class="text-left"
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
                      <tr v-for="hcbp in hcbps" :key="hcbp.id">
                        <td>{{ hcbp.SubmitDate }}</td>
                        <td>{{ hcbp.NIK }}</td>
                        <td>{{ hcbp.firstname }} {{ hcbp.lastname }}</td>
                        <td>{{ hcbp.JobTitle }}</td>
                        <td>{{ hcbp.WorkLocation }}</td>
                        <td>{{ currency(hcbp.LoanAmount) }}</td>
                        <td>{{ hcbp.InstallmentAmount }}</td>
                        <td>{{ hcbp.Tenor }} Bulan</td>
                        <td class="text-left">
                           <button class="btn btn-universal" data-toggle="modal" data-target="#Detail" @click.prevent="handledetail(hcbp.id)"><i class="far fa-eye text-primary"></i></button>
                          <button class="btn btn-universal" data-toggle="modal" data-target="#Edit" @click.prevent="handleupdate(hcbp.id)"><i class="far fa-edit text-primary"></i></button>
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
    Update,
  },
  data() {
    return {
      hcbps: [],
      dataModal: "",
    };
  },
  created() {
    HCBPService.getAll()
      .then((response) => {
        this.hcbps = response.data;
      })
      .catch((error) => {
        console.log("data tidak ditemukan", error.response);
      });
  },
  methods: {
      handledetail(id) {
      HCBPService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
     handleupdate(id) {
      HCBPService.getShow(id)
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

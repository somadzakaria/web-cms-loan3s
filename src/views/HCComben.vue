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
                      HC Comben Recommendation
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                          Pinjaman
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
                          Rekomendasi
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
                          class="text-center"
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
                      <tr v-for="comben in combens" :key="comben.id">
                        <td>{{ comben.SubmitDate }}</td>
                        <td>{{ comben.NIK }}</td>
                        <td>{{ comben.firstname }} {{ comben.lastname }}</td>
                        <td>{{ comben.Jabatan }}</td>
                        <td>{{ currency(comben.LoanAmount) }}</td>
                        <td>{{ comben.WorkLocation }}</td>
                        <td>{{ comben.HC_Recommendations === "1" ? "Ya"  : "Tidak" }}</td>
                        <td >{{ comben.DSR === "1" ? "Ya"  : "Tidak"  }}</td>
                        <td>{{ comben.SP  ==- "1" ? "Ya"  : "Tidak" }}</td>
                        <td>
                          <button class="btn btn-universal" data-toggle="modal" data-target="#Detail" @click.prevent="handledetail(comben.id)"><i class="far fa-eye text-primary"></i></button>
                          <button class="btn btn-universal" data-toggle="modal" data-target="#Edit" @click.prevent="handleupdate(comben.id)"><i class="far fa-edit text-primary"></i></button>
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
    Update
  },
  data() {
    return {
      combens: [],
      dataModal: "",
    };
  },
  created() {
    HCCombenService.getAll()
      .then((response) => {
        this.combens = response.data;
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

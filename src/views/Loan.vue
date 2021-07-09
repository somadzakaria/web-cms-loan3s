<template>
  <div >
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
                      Loan Admin
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
                        <!-- <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Status
                        </th> -->
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
                      <tr v-for="loan in loans" :key="loan.id">
                        <td>{{ loan.SubmitDate }}</td>
                        <td>{{ loan.NIK }}</td>
                        <td>{{ loan.firstname }} {{ loan.lastname }}</td>
                        <td>{{ loan.WorkLocation }}</td>
                        <td>{{ loan.LoanAmount }}</td>
                        <td>{{ loan.DSR }}</td>
                        <td>{{ loan.SP }}</td>
                        <td style="width: 219px;">
                          <button class="btn btn-universal" data-toggle="modal" data-target="#exampleModal" @click.prevent="handledetail(loan.id)">
                            <i class="far fa-eye text-primary"></i>
                          </button>
                         <button class="btn btn-universal" @click.prevent="handleupdate(loan.id)"><i class="far fa-edit text-primary"></i></button>
                            <button class="btn btn-primary"><i class="fas fa-dollar-sign mr-3"></i>Cairkan</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
          <Detail :dataModal="dataModal" />
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

<script>
// @ is an alias to /src
import router from "@/router";
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import Detail from "../components/loan/Detail.vue";
import LoanService from "../services/loan.service";
export default {
  name: "Loan",
  components: {
    Sidebar,
    Navbar,
    Footer,
    Detail,
  },
  data() {
    return {
      loans: "",
      dataModal: "",
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
    handledetail(id) {
      LoanService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
    handleupdate(id) {
      router.push("/loan-update/" + id);
    },
  },
};
</script>

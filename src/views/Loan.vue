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
              <h1 class="h3 mb-3 text-gray-800" style="font-family: 'Poppins';">Loan Admin</h1>
            </div>
            <div class="card shadow mb-4">
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered"
                    width="100%"
                    id="MeTable "
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
                          Status
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
                      <tr v-for="loan in loans" :key="loan.id">
                        <td>
                          {{ loan.SubmitDate | moment("DD MMMM YYYY HH:mm:s") }}
                        </td>
                        <td>{{ loan.NIK }}</td>
                        <td>{{ loan.firstname }} {{ loan.lastname }}</td>
                        <td>{{ loan.WorkLocation }}</td>
                        <td>{{ currency(loan.LoanAmount) }}</td>
                        <td>{{ loan.DSR === 1 ? "Ya" : "Tidak" }}</td>
                        <td>{{ loan.SP === 1 ? "Ya" : "Tidak" }}</td>
                        <td>{{ loan.Status }}</td>
                        <td style="width: 219px;">
                          <button
                            class="btn btn-universal"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            @click.prevent="handledetail(loan.id)"
                          >
                            <i class="far fa-eye text-primary"></i>
                          </button>
                          <button
                            class="btn btn-universal"
                            data-toggle="modal"
                            data-target="#EditModal"
                            @click.prevent="handleUpdate(loan.id)"
                          >
                            <i class="far fa-edit text-primary"></i>
                          </button>
                          <button class="btn btn-primary">
                            <i class="fas fa-dollar-sign mr-3"></i>Cairkan
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
import $ from "jquery";
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
      loans: "",
      dataModal: "",
    };
  },
  created() {
    LoanService.getAll()
      .then((response) => {
        $("#MeTable").DataTable({
          data: response.data,
          columns: [
            { data: "SubmitDate" },
            { data: "NIK" },
            { data: "firstname" },
            { data: "WorkLocation" },
            { data: "LoanAmount" },
            { data: "DSR" },
            { data: "SP" },
            { data: "Status" },
            {
              data: "id",
              render: function(data) {
                return `<button data-id="${data}" class="btn btn-universal" data-toggle="modal" data-target="#exampleModal" @click.prevent="handledetail(loan.id)<i class="far fa-eye text-primary"></i></button>`;
              },
            },
          ],
        });
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

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
              <h1 class="h3 mb-3 text-gray-800" style="font-family: 'Poppins';"> Pengikian Data Karyawan</h1>
            </div>
            <div class="card shadow mb-4">
              
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
                          JG
                        </th>

                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          PG
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
                          Resign Date
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
                        <td>{{comben.NIK}}</td>
                        <td>{{comben.firstname}} {{comben.lastname}}</td>
                        <td>{{comben.jobtitle}}</td>
                        <td>{{comben.WorkLocation}}</td>
                        <td>{{comben.JG}}</td>
                        <td>{{comben.PG}}</td>
                        <td>{{comben.DSR === 1 ? "Ya" : "Tidak" }}</td>
                        <td>{{comben.SP === 1 ? "Ya" : "Tidak" }}</td> 
                        <td>{{comben.ResignDate | moment("DD MMMM YYYY HH:mm:s")}}</td>
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
        <Detail  :dataModal="dataModal" />
        <!-- End Modal Content -->
        <!-- Footer -->
        <Footer />
        <!-- End of Footer -->
        <Update  :dataModal="dataModal" />
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
import Detail from "../components/HCCombenUpdate/Detail.vue";
import Update from "../components/HCCombenUpdate/Update.vue";
import HCUpdateService from "../services/hccombenupdate.service";
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
    HCUpdateService.getAll()
      .then((response) => {
        this.combens = response.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
  methods:{
      handledetail(id) {
      HCUpdateService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
      handleupdate(id) {
        HCUpdateService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
  }
};
</script>

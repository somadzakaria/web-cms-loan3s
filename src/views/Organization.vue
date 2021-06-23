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
                <div class="row ">
                  <div class="col-lg-6 text-left">
                    <h6 style="font-family: 'Poppins'; font-size: 14px; font-weight: bold;">Organization Chart</h6>
                  </div>
                  <div class="col-lg-6 text-right">
                    <button class="btn btn-primary text-left"><i class="fa fa-plus mr-3"></i> Tambah</button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          PIC
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Jabatan
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Status
                        </th>

                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="ochart in ocharts" :key="ochart.id">
                        <td>{{ ochart.TitleName }}</td>
                        <td>{{ ochart.PIC }}</td>
                        <td>{{ ochart.Quotes }}</td>
                        <td>
                          <button class="btn btn-universal" data-toggle="modal" data-target="#exampleModal"><i class="far fa-eye text-primary"></i></button>
                          <button class="btn btn-universal" @click.prevent="handleupdate(ochart.id)"><i class="far fa-edit text-primary"></i></button>
                          <button class="btn btn-universal" type="submit" @click.prevent="handledelete(ochart.id)"><i class="far fa-trash-alt text-primary"></i></button>
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
        <Detail />
        <!-- End Modal Content -->
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
import Detail from "../components/Organization/Detail.vue";
import OchartService from "../services/ochart.service";

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
      ocharts: [],
    };
  },
  created() {
    OchartService.getAll()
      .then((response) => {
        this.ochart = response.data;
      })
      .catch((error) => {
        console.log("Eror Data Tidak Di Temukan", error.response);
      });
  },
  methods:{
     handledelete(id){  
      OchartService.getDelete(id).then((response) =>
      { 
        console.log(response,"Berhasil Terhapus");
        router.go();
      }).catch((error) => {
        console.log("Gagal Terhapus", error.response);
      });
    },
     handleCreate(){
      router.push('/Organization-create')
    },
     handleupdate(id){
      router.push('/Organization-update/' + id)
    }
  }
};
</script>

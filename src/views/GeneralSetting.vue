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
                      General Setting
                    </h6>
                  </div>

                  <div class="col-lg-6 text-right">
                <a class="btn btn-primary text-left"  @click.prevent="handleCreate"><i class="fa fa-plus mr-3"></i> Tambah</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
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
                          ID
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Name
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Value
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
                      <tr v-for="general in Generals" :key="general.id">
                        <td>{{general.GSID}}</td>
                        <td>{{general.Name}}</td>
                        <td>{{general.GSValue}}</td>
                        <td>
                                 <button class="btn btn-universal" @click.prevent="handleupdate(general.id)"><i class="far fa-edit text-primary"></i></button>
                          <button class="btn btn-universal" type="submit" @click.prevent="handledelete(general.id)"><i class="far fa-trash-alt text-primary"></i></button></td>
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
import router from "@/router";
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import GeneralSetting from "../services/general.service";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data(){
    return{
      Generals:[],
    }
  },
   created() {
    GeneralSetting.getAll()
      .then((response) => {
        this.Generals = response.data;
      })
      .catch((error) => {
        console.log("Eror Data Tidak Di Temukan", error.response);
      });
  },
  methods:{
      handleCreate(){
        router.push('/General-create')
      },
      handleupdate(id){
        router.push('/General-update/' + id)
      },
  }
};
</script>

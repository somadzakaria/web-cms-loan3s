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
                                    <h6 style="font-family: 'Poppins'; font-size: 14px; font-weight: bold;">Promotion
                                    </h6>
                                </div>
                                <div class="col-lg-6 text-right">
                                    <button class="btn btn-primary text-left"> <i class="fa fa-plus mr-3"></i>
                                        Tambah</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>

                                            <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                                                Judul
                                            </th>
                                            <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                                                Tgl Upload</th>
                                            <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                                                Author</th>
                                            <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                                                Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td> <button class="btn btn-universal" data-toggle="modal"
                                                    data-target="#exampleModal"><i
                                                        class="far fa-eye text-primary"></i></button>
                                                <button class="btn btn-universal" data-toggle="modal"
                                                    data-target="#EditDetail"><i
                                                        class="far fa-edit text-primary"></i></button></td>

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
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";


export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
};
</script>

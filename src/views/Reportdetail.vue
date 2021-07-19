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
              <h1 class="h3 mb-0 text-gray-800">Report Detail</h1>
            </div>
            <!-- Filter -->
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-white">Januari</button>
                    <button type="button" class="btn btn-white">
                      Februari
                    </button>
                    <button type="button" class="btn btn-white">Maret</button>
                    <button type="button" class="btn btn-white">April</button>
                    <button type="button" class="btn btn-white">Mei</button>
                    <button type="button" class="btn btn-white">Juni</button>
                    <button type="button" class="btn btn-white">Juli</button>
                    <button type="button" class="btn btn-white">Agustus</button>
                    <button type="button" class="btn btn-white">
                      September
                    </button>
                    <button type="button" class="btn btn-white">Oktover</button>
                    <button type="button" class="btn btn-white">
                      November
                    </button>
                    <button type="button" class="btn btn-white">
                      Desember
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Filter -->
            <div class="card shadow mt-5">
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
                  <table
                    class="table table-bordered"
            
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
                      <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>
                          <button
                            class="btn btn-universal"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            <i class="far fa-eye text-primary"></i>
                          </button>
                          <button
                            class="btn btn-universal"
                            data-toggle="modal"
                            data-target="#EditDetail"
                          >
                            <i class="far fa-edit text-primary"></i>
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



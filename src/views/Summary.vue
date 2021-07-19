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
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div class="row">
              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <img
                          src="../assets/img/JumlahUser.png"
                          width="60"
                          alt=""
                        />
                      </div>

                      <div class="col">
                        <div
                          class="text-center h3 mb-0 font-weight-bold text-gray-800"
                        >
                          25
                        </div>
                        <div
                          class="text-center font-weight-bold text-capitalize mt-1"
                          style="font-family: 'Poppins'"
                        >
                          Jumlah user
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <img
                          src="../assets/img/JumlahPinjaman.png"
                          width="60"
                          alt=""
                        />
                      </div>

                      <div class="col">
                        <div
                          class="text-center h3 mb-0 font-weight-bold text-gray-800"
                        >
                          25
                        </div>
                        <div
                          class="text-center font-weight-bold text-capitalize mt-1"
                          style="font-family: 'Poppins'"
                        >
                          Jumlah peminjam
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <img
                          src="../assets/img/BelumDiproses.png"
                          width="60"
                          alt=""
                        />
                      </div>

                      <div class="col">
                        <div
                          class="text-center h3 mb-0 font-weight-bold text-gray-800"
                        >
                          25
                        </div>
                        <div
                          class="text-center font-weight-bold text-capitalize mt-1"
                          style="font-family: 'Poppins'"
                        >
                          Belum diproses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <img
                          src="../assets/img/DiterimaPinjaman.png"
                          width="60"
                          alt=""
                        />
                      </div>

                      <div class="col">
                        <div
                          class="text-center h3 mb-0 font-weight-bold text-gray-800"
                        >
                          25
                        </div>
                        <div
                          class="text-center font-weight-bold text-capitalize mt-1"
                          style="font-family: 'Poppins'"
                        >
                          Diterima
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 my-auto">
                <div class="card">
                  <GChart
                    type="ColumnChart"
                    :data="chartData"
                    :options="chartOptions"
                  />
                </div>
              </div>
            </div>
             <div class="row">
              <div class="col-lg-12">
                <div class="card shadow mt-5 mb-4">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        class="table table-bordered"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th colspan="12" style="border: none">Loan List</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td style="border: none">
                              <img
                                class="img-profile rounded-circle mr-4"
                                src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                alt=""
                                width="35"
                              />
                              Annette Watson
                            </td>
                            <td style="border: none">11 Apr 2021 11:00</td>
                            <td style="border: none">082132</td>
                            <td style="border: none">Head Office</td>
                            <td style="border: none">Rp 10.000.000</td>
                            <td style="border: none">Belum diproses</td>
                          </tr>
                          <tr>
                            <td style="border: none">
                              <img
                                class="img-profile rounded-circle mr-4"
                                src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                alt=""
                                width="35"
                              />
                              Annette Watson
                            </td>
                            <td style="border: none">11 Apr 2021 11:00</td>
                            <td style="border: none">082132</td>
                            <td style="border: none">Head Office</td>
                            <td style="border: none">Rp 10.000.000</td>
                            <td style="border: none">Belum diproses</td>
                          </tr>
                          <tr>
                            <td style="border: none">
                              <img
                                class="img-profile rounded-circle mr-4"
                                src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                alt=""
                                width="35"
                              />
                              Annette Watson
                            </td>
                            <td style="border: none">11 Apr 2021 11:00</td>
                            <td style="border: none">082132</td>
                            <td style="border: none">Head Office</td>
                            <td style="border: none">Rp 10.000.000</td>
                            <td style="border: none">Belum diproses</td>
                          </tr>
                          <tr>
                            <td style="border: none">
                              <img
                                class="img-profile rounded-circle mr-4"
                                src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                alt=""
                                width="35"
                              />
                              Annette Watson
                            </td>
                            <td style="border: none">11 Apr 2021 11:00</td>
                            <td style="border: none">082132</td>
                            <td style="border: none">Head Office</td>
                            <td style="border: none">Rp 10.000.000</td>
                            <td style="border: none">Belum diproses</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Year", "Peminjam", "User"],
        ["2010", 1000, 400],
        ["2011", 3000, 400],
        ["2012", 2000, 400],
        ["2013", 1400, 400],
        ["2014", 1000, 400],
        ["2015", 1170, 460],
        ["2016", 660, 1120],
        ["2017", 1030, 540],
        ["2018", 1000, 400],
        ["2019", 1170, 460],
        ["2020", 660, 1120],
        ["2021", 1030, 540],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
};
</script>

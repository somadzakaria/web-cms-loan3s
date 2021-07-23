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
              <h1 class="h3 mb-5 text-gray-800">Report Summary</h1>
            </div>

            <div class="row">
              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-4 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div
                        class="col-12 font-weight-bold text-capitalize "
                        style="font-family: 'Poppins';
                        color: #4F4F4F; font-size: 20px;"
                      >
                        Karyawan Aktif
                      </div>
                      <div class="col-4">
                        <div class="header   mt-4 text-center">
                          <h6>Active</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            20
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div
                          class="header border-left-dark  mt-4 text-center"
                          style="border-left: 1px solid rgba(166, 172, 190, 0.5) !important;"
                        >
                          <h6>Borrower</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            20
                          </p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div
                          class="header border-left-dark  mt-4 text-center"
                          style="border-left: 1px solid rgba(166, 172, 190, 0.5) !important;"
                        >
                          <h6>Bulan ini</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            20
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div
                        class="col-12 font-weight-bold text-capitalize "
                        style="font-family: 'Poppins';
                        color: #4F4F4F; font-size: 20px;"
                      >
                        Pinjaman tersalurkan
                      </div>
                      <div class="col-6">
                        <div class="header   mt-4 text-center">
                          <h6>Bulan ini</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            20
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div
                          class="header border-left-dark  mt-4 text-center"
                          style="border-left: 1px solid rgba(166, 172, 190, 0.5) !important;"
                        >
                          <h6>Rata-rata</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            20
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div
                        class="col-12 font-weight-bold text-capitalize "
                        style="font-family: 'Poppins';
                        color: #4F4F4F; font-size: 20px;"
                      >
                        Pinjaman dalam proses
                      </div>
                      <div class="col-6">
                        <div class="header   mt-4 text-center">
                          <h6>Jumlah</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            20
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div
                          class="header border-left-dark  mt-4 text-center"
                          style="border-left: 1px solid rgba(166, 172, 190, 0.5) !important;"
                        >
                          <h6>Rata-rata</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            20
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div
                        class="col-12 font-weight-bold text-capitalize  text-center"
                        style="font-family: 'Poppins';
                        color: #4F4F4F; font-size: 18px;"
                      >
                        HC Comben <br />
                        Recommendation
                      </div>
                      <div class="col-12">
                        <div class="header mt-4 text-center">
                          <h6
                            style="color: #007AFF; font-size: 24px; font-family: Poppins;
font-style: normal;
font-weight: bold;"
                          >
                            20
                          </h6>
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
                      <div
                        class="col-12 font-weight-bold text-capitalize  text-center"
                        style="font-family: 'Poppins';
                        color: #4F4F4F; font-size: 18px;"
                      >
                        HC Comben <br />
                        Update
                      </div>
                      <div class="col-12">
                        <div class="header mt-4 text-center">
                          <h6
                            style="color: #007AFF; font-size: 24px; font-family: Poppins;
font-style: normal;
font-weight: bold;"
                          >
                            20
                          </h6>
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
                      <div
                        class="col-12 font-weight-bold text-capitalize  text-center"
                        style="font-family: 'Poppins';
                        color: #4F4F4F; font-size: 18px;"
                      >
                        Loan <br />
                        Approval
                      </div>
                      <div class="col-12">
                        <div class="header mt-4 text-center">
                          <h6
                            style="color: #007AFF; font-size: 24px; font-family: Poppins;
font-style: normal;
font-weight: bold;"
                          >
                            20
                          </h6>
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
                      <div
                        class="col-12 font-weight-bold text-capitalize  text-center"
                        style="font-family: 'Poppins';
                        color: #4F4F4F; font-size: 18px;"
                      >
                        Loan <br />
                        Approve
                      </div>
                      <div class="col-12">
                        <div class="header mt-4 text-center">
                          <h6
                            style="color: #007AFF; font-size: 24px; font-family: Poppins;
font-style: normal;
font-weight: bold;"
                          >
                            20
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 my-auto">
                <div class="card px-5 py-4">
                  <apexcharts
                    width="100%"
                    type="bar"
                    :options="chartOptions"
                    :series="series"
                  ></apexcharts>
                </div>
              </div>
              <div class="col-lg-4 my-auto">
                <div class="card px-5 py-4">
                  <apexcharts
                    width="100%"
                    type="bar"
                    :options="chartOptions"
                    :series="series"
                  ></apexcharts>
                </div>
              </div>
              <div class="col-lg-4 my-auto">
                <div class="card">
                  <div ref="chart" class="chart">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="card my-5 mx-2">
                  <h4
                    class="my-3 mx-4"
                    style="color:#404040; font-family: Poppins;
font-style: normal;
font-weight: 600;"
                  >
                    Pinjaman dalam proses
                  </h4>
                  <table class="table my-2 ">
                    <thead class="mx-2">
                      <tr>
                        <th scope="col">Borrower</th>
                        <th scope="col">NIK</th>
                        <th scope="col">Lokasi</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card my-5 mx-2">
                  <h4
                    class="my-3 mx-4"
                    style="color:#404040; font-family: Poppins;
font-style: normal;
font-weight: 600;"
                  >
                    Approved Loan
                  </h4>
                  <table class="table my-2 ">
                    <thead class="mx-2">
                      <tr>
                        <th scope="col">Borrower</th>
                        <th scope="col">NIK</th>
                        <th scope="col">Lokasi</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
                      </tr>
                      <tr>
                        <th scope="row">Ann Marlin</th>
                        <td>082123</td>
                        <td>Head Office</td>
                        <td>31 Nov 2020</td>
                        <td>10.000.000</td>
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
import ApexCharts from "apexcharts/dist/apexcharts.js";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
    apexcharts: VueApexCharts,
  },

  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  mounted() {
    // code from Example: https://apexcharts.com/javascript-chart-demos/area-charts/spline/
    var options = {
      chart: {
        height: 300,
        type: "radialBar",
      },
      series: [70, 60, 50, 40],
      colors: ["#39D074", "#FF3B30", "#007AFF", "#FFEB3B"],
      labels: ["Visibly", "Joint Analytics", "Green Tech", "Kambing"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: false,
            },
          },
        },
      },
    };

    if (this.$refs.chart) {
      // HTML element exists
      var chart = new ApexCharts(this.$refs.chart, options);
      chart.render();
    }
  },
};
</script>

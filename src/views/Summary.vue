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
                        <div class="header mt-4 text-center">
                          <h6>Active</h6>
                          <p
                            style="font-size: 20px; font-weight: 500; font-family: Poppins; color: #007AFF;"
                          >
                            {{ karyawanaktif.active }}
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
                            {{ karyawanaktif.borrower }}
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
                            {{ karyawanaktif.bulanini }}
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
                            {{ pinjamantersalurkan.bulanini }}
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
                            {{ pinjamantersalurkan.ratarata }}
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
                            {{ pinjamanproses.jumlah }}
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
                            {{ pinjamanproses.ratarata }}
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
                            {{ hcbp }}
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
                            {{ hccomben }}
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
                            {{ loanapproval }}
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
                            {{ loanapproved }}
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
                <div class="card p-2">
                  <apexcharts
                    height="200"
                    width="100%"
                    type="bar"
                    :options="chartOptions"
                    :series="barseries"
                  ></apexcharts>
                </div>
              </div>
              <div class="col-lg-4 my-auto">
                <div class="card p-2">
                  <apexcharts
                    height="200"
                    width="100%"
                    type="bar"
                    :options="chartOptions"
                    :series="barseries"
                  ></apexcharts>
                </div>
              </div>
              <div class="col-lg-4 my-auto">
                <div class="card ">
                  <apexcharts
                    type="radialBar"
                    height="200"
                    :options="chartOptions"
                    :series="series"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="card my-5 mx-2 p-3">
                  <h4
                    class="my-3 mx-4"
                    style="color:#404040; font-family: Poppins; font-style: normal; font-weight: 600;"
                  >
                    Pinjaman dalam proses
                  </h4>
                  <vue-good-table
                    :columns="columns"
                    :rows="rows"
                    :search-options="{
                      enabled: true,
                    }"
                    :pagination-options="{
                      enabled: true,
                      perPage: 5,
                    }"
                  >
                    <template slot="table-row" slot-scope="props">
                      <span v-if="props.column.field == 'SubmitDate'">
                        {{ props.row.SubmitDate | moment("DD MMMM YYYY ") }}
                      </span>
                      <span v-else>
                        {{ props.formattedRow[props.column.field] }}
                      </span>
                      <span v-if="props.column.field == 'amount'">
                        {{ currency(props.row.LoanAmount) }}
                      </span>
                    </template>
                  
                  </vue-good-table>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="card my-5 mx-2 p-3">
                  <h4
                    class="my-3 mx-4"
                    style="color:#404040; font-family: Poppins;
font-style: normal;
font-weight: 600;"
                  >
                    Approved Loan
                  </h4>
                  <vue-good-table
                    :columns="columns2"
                    :rows="rows2"
                    :search-options="{
                      enabled: true,
                    }"
                    :pagination-options="{
                      enabled: true,
                      perPage: 5,
                    }"
                  >
                    <template slot="table-row" slot-scope="props">
                      
                       <span v-if="props.column.field == 'EmployeeName2'">
                        {{ props.row.EmployeeName }}
                      </span>
                       <span v-if="props.column.field == 'NIK2'">
                        {{ props.row.EmployeeID }}
                      </span>
                       <span v-if="props.column.field == 'LOKASI'">
                        {{ props.row.WorkLocation }}
                      </span>
                       <span v-if="props.column.field == 'SubmitDate2'">
                        {{ props.row.SubmitDate | moment("DD MMMM YYYY ") }}
                      </span>
                      <span v-if="props.column.field == 'LoanAmount'">
                        {{ currency(props.row.LoanAmount) }}
                      </span>
                    </template>
                  </vue-good-table>
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
import dashboardService from "../services/dashboard.service";
import Utils from "@/utils/index";
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
      columns: [
        {
          label: "Borrower",
          field: "EmployeeName",
        },
        {
          label: "NIK",
          field: "EmployeeID",
        },
        {
          label: "Lokasi",
          field: "WorkLocation",
        },
        {
          label: "Date",
          field: "SubmitDate",
        },
        {
          label: "Ammont",
          field: "amount",
        },
      ],
      columns2: [
        {
          label: "Borrower",
          field: "EmployeeName2",
        },
        {
          label: "NIK",
          field: "NIK2",
        },
        {
          label: "Lokasi",
          field: "LOKASI",
        },
        {
          label: "Date",
          field: "SubmitDate2",
        },
        {
          label: "Ammont",
          field: "LoanAmount",
        },
      ],
      rows: [],
      rows2: [],
      barseries: [
        {
          name: "Net Profit",
          data: [20, 55, 57, 56, 61, 58, 63, 60, 66],
        },
      ],
      series: [76, 67, 61, 90],
      chartOptions: {
        colors: ["#008FFB", "#00E396", "#FEB019", "#D15F5F"],
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 1000,
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.05,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
        chart: {
          toolbar: {
            show: true,
          },
        },
        title: {
          text: "Multiple Radial Bars",
          align: "left",
          style: {
            color: "#FFF",
          },
        },
        plotOptions: {
          radialBar: {
            offsetY: -10,
            offsetX: 0,
            startAngle: 0,
            endAngle: 250,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
        legend: {
          show: false,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: -20,
          offsetY: 80,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function(seriesName, opts) {
            return (
              seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
            );
          },
          itemMargin: {
            horizontal: 1,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
      karyawanaktif: [],
      pinjamans: [],
      approveds: [],
    };
  },
  created() {
    dashboardService
      .getAll()
      .then((response) => {
        this.karyawanaktif = response.data.karyawanaktif;
        this.pinjamantersalurkan = response.data.pinjamantersalurkan;
        this.pinjamanproses = response.data.pinjamanproses;
        this.hcbp = response.data.hcbp;
        this.hccomben = response.data.hccomben;
        this.loanapproval = response.data.loanapproval;
        this.loanapproved = response.data.loanapproved;
        this.pinjamans = response.data.pinjamandalamproses;
        this.rows2 = response.data.approvedloan;
        this.rows = response.data.pinjamandalamproses;
        console.log(response.data.approvedloan);
      })
      .catch((error) => {
        console.log("Eror Data Tidak Di Temukan", error.response);
      });
  },
  methods: {
    currency(nominal) {
      return Utils.currencyRp(nominal);
    },
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
              show: true,
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

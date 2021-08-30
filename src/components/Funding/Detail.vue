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
          <div class="col-lg-12 mb-4">
            <button class="btn btn-universal" @click="handleback()">
              <i class="fas fa-arrow-left text-info fa-2x"></i>
            </button>
          </div>
          <!-- Begin Page Content -->
          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3" style="border-bottom:none;">
                Payment Voucher PV.210524.0
              </div>
              <div class="card-body">
                <vue-good-table
                  :columns="columns"
                  :rows="rows"
                  :search-options="{
                    enabled: true,
                  }"
                  :pagination-options="{
                    enabled: true,
                  }"
                >
                </vue-good-table>
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

      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>
<script>
import router from "@/router";
import Sidebar from "../navigation/Sidebar.vue";
import Navbar from "../navigation/Navbar.vue";
import Footer from "../navigation/Footer.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      columns: [
        {
          label: "Tgl Pengajuan",
          field: "ramanda",
        },
        {
          label: "No. Pengajuan",
        },
        {
          label: "NIK",
        },
        {
          label: "Nama",
        },
        {
          label: "Lokasi Kerja",
        },
        {
          label: "Pinjaman",
        },
        {
          label: "Tujuan",
        },
        {
          label: "Bank",
        },
        {
          label: "No.Rekening",
        },
        {
          label: "Payment Voucher",
        },
      ],
      rows: [],
    };
  },
  methods: {
    handleback() {
      router.back();
    },
  },
};
</script>

<template>
  <div class="home">
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
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
                      Persetujuan Payment Voucher
                    </h6>
                  </div>
                </div>
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
                      No. Payment Voucher
                    </th>
                    <th
                      style="
                        background: #edf2f7;
                        color: #4a5568;
                        font-family: 'Poppins';
                      "
                    >
                      Jumlah Transaksi
                    </th>
                    <th
                      style="
                        background: #edf2f7;
                        color: #4a5568;
                        font-family: 'Poppins';
                      "
                    >
                      Nominal
                    </th>
                    <th
                      style="
                        background: #edf2f7;
                        color: #4a5568;
                        font-family: 'Poppins';
                      "
                    >
                      Funding
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
                      View
                    </th>
                    <th
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
                  <tr v-for="(item, idx) in dataTable" :key="idx">
                    <td>{{ item.first_name }}</td>
                    <td>{{ item.email }}</td>
                    <td>Rp 1.000.000.000</td>
                    <td>Funding</td>
                    <td>
                      <img :src="item.avatar" alt="" />
                    </td>
                    <td>
                      <button
                        class="btn btn-universal"
                        v-if="item.first_name != 'Michael'"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i class="far fa-eye text-primary"></i>
                      </button>
                      <button v-else>Edit Phase</button>
                    </td>
                    <td>
                      <button
                        class="btn btn-primary text-left"
                        data-toggle="modal"
                        data-target="#EditDetail"
                        style="font-family: Poppins"
                      >
                        Approval
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Detail />

        <Edit />

        <Footer />
      </div>

      <Update />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navigation/Navbar";
import Detail from "../components/HCCombenUpdate/Detail";
import Footer from "../components/navigation/Footer";
import Sidebar from "../components/navigation/Sidebar";
import Update from "../components/HCCombenUpdate/Update";
import Edit from "../components/loan/Edit";
// import axios from "axios";
import base from "../services/base";

export default {
  components: { Edit, Update, Sidebar, Footer, Detail, Navbar },

  name: "PersetujuanPV",

  data() {
    return {
      services: new base("blog"),
      dataTable: null,
    };
  },

  created() {
    this.fetching();
  },
  methods: {
    fetching: async function () {
      const res = await this.services.get();
      const { data } = await res;
      this.dataTable = data;

      // const res = await axios.get("https://reqres.in/api/users?page=2");
      // let aa = await res.data.data;
      // this.dataTable = aa;

      // try {
      //   const res = await axios.get("https://reqres.in/api/users?page=2");
      //   let aa = await res.data.data;
      //   this.dataTable = aa;
      // } catch (error) {
      //   console.log(error);
      // }
    },
  },
};
</script>
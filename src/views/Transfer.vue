<template>
  <div class="home">
    <div id="wrapper">
      <Sidebar/>

      <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">
          <Navbar/>
          <div class="container-fluid">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <div class="row">
                  <div class="col-lg-6 text-left">
                    <h6 style="
                font-family: 'Poppins';
                font-size: 14px;
                font-weight: bold;">Transfer</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered"
                     id="dataTable"
                     width="100%"
                     cellspacing="0">
                <thead>
                <tr>
                  <th style="
              background: #edf2f7;
              color: #4A5568;
              font-family: 'Poppins';">Tanggal
                  </th>
                  <th style="
              background: #edf2f7;
              color: #4A5568;
              font-family: 'Poppins';">No. Batching
                  </th>
                  <th style="
              background: #edf2f7;
              color: #4A5568;
              font-family: 'Poppins';">Total Account
                  </th>
                  <th style="
              background: #edf2f7;
              color: #4A5568;
              font-family: 'Poppins';">Total Amount
                  </th>
                  <th style="
              background: #edf2f7;
              color: #4A5568;
              font-family: 'Poppins';">Status
                  </th>
                  <th style="
              background: #edf2f7;
              color: #4A5568;
              font-family: 'Poppins';">Action
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>02-Agus-2022</td>
                  <td>SIP-0010</td>
                  <td>2</td>
                  <td>Rp 10.000.000</td>
                  <td>NEW</td>
                  <td>
                    <button class="btn btn-primary text-left mr-3"
                            style="font-family: Poppins">
                      Paid
                    </button>

                    <button class="btn btn-primary"
                            style="font-family: Poppins">
                      <i class="fa fa-download mr-3"></i> Download
                    </button>
                  </td>
                </tr>

                </tbody>

              </table>

            </div>
          </div>

        </div>

        <Detail/>


        <Footer/>

      </div>


      <Update/>

    </div>

  </div>


</template>

<script>
import Navbar from "../components/navigation/Navbar";
import Detail from "../components/HCCombenUpdate/Detail";
import Footer from "../components/navigation/Footer";
import Sidebar from "../components/navigation/Sidebar";
import Update from "../components/HCCombenUpdate/Update";

export default {
  components: {Update, Sidebar, Footer, Detail, Navbar}
}
</script>
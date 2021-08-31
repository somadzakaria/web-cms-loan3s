<template>
  <div class="modal" id="Detail" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <form>
            <div class="form">
              <div class="row">
                <div class="col-lg-12 border py-3">
                  <div class="row">
                    <div class="col-lg-6 text-left">
                      <img src="../../assets/bfi.png" width="100px" />
                    </div>
                    <div class="col-lg-6 text-right">
                      <p
                        style="background:#F7FD04; color:black; height:50px !important; border:1px solid !important; width:200px; padding:10px; margin-left:330px; font-weight:bold; margin-top:10px; "
                      >
                        MDR2372.210810.0002
                      </p>
                    </div>
                    <div class="col-lg-12 text-left">
                      <ul style="list-style: none;">
                        <li
                          style="margin-top:10px !important; margin-left:-30px  !important; font-size:13px;"
                        >
                          <p class="font-weight-600">
                            NO. PRE KAS : MDR2372.210810.0002
                          </p>
                        </li>
                        <li
                          style="margin-top:-10px !important; margin-left:-30px !important; font-size:13px;"
                        >
                          <p>TGL PEMBUKUAN : 10 Agustus 2020</p>
                        </li>
                        <li
                          style="margin-top:-10px !important; margin-left:-30px !important; font-size:13px;"
                        >
                          <p>BANK : MDR 2372</p>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-12 text-left">
                      <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb bg-secondary">
                          <li
                            class="breadcrumb-item text-white"
                            aria-current="page"
                          >
                            BANK BCA 487 888 222
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div class="col-lg-12 mt-3">
                      <div class="row">
                        <div class="col-lg-12 text-left mb-2">
                          <a href="" style="color:black;">BANK IN</a>
                        </div>
                      </div>
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th class="text-left" style="width:300px;">
                              Rician Transaksi IN
                            </th>
                            <th scope="col">No. Referensi</th>
                            <th scope="col">Diterima Dari</th>
                            <th scope="col">Tgl Uang Masuk</th>
                            <th scope="col">Total Uang Masuk</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <th colspan="4" class="text-left table-active">
                            Total Bank IN
                          </th>
                          <th class="table-active">0.00</th>
                        </tfoot>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-lg-12 mt-3">
                      <div class="row">
                        <div class="col-lg-12 text-left mb-2">
                          <a href="" style="color:black;">BANK OUT</a>
                        </div>
                      </div>
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th class="text-left" style="width:300px;">
                              Rician Transaksi OUT
                            </th>
                            <th scope="col">No. Referensi</th>
                            <th scope="col">Dibayarkan Kepada</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Funding Koperasi MDR</th>
                            <th>Terlampir</th>
                            <th>Tegar</th>
                            <th>311,851,829,00</th>
                          </tr>
                        </tbody>
                        <tfoot>
                          <th colspan="3" class="text-left table-active">
                            Total Bank Out
                          </th>
                          <th class="table-active">311,851,829,00</th>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-bordered"></table>
                  </div>
                </div>

                <div class="col-lg-12 mt-5">
                  <button
                    type="button"
                    class="btn btn-danger mt-5 mr-3 btn-lg"
                    @click="submit('0')"
                  >
                    Reject
                  </button>
                  <button
                    type="button"
                    class="btn btn-success mt-5 btn-lg"
                    @click="submit('1')"
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.border {
  border-radius: 5px;
  border: 1px solid black !important;
}
.disable {
  background-color: #edf2f7;
}
</style>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    dataModal: {
      required: true,
    },
  },
};
</script>

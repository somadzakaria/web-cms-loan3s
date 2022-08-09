<template>
  <div>
    <div class="modal" id="ViewsProduct" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5
                class="modal-title font-weight-bold"
                style="font-family: 'Poppins'; color: #4a5568"
            >
              View Product
            </h5>
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
            <div class="form">
              <img src="img/image.png" width="350" alt=""/>
              <div class="row mt-5">
                <div class="col-lg-12 text-left">
                  <label for="ProductName" style="text-align: left"> Product Name</label>
                  <input type="text" id="ProductName" class="form-control"/>
                </div>
                <div class="col-lg-12 mt-3 text-left">
                  <label for="Description" style="text-align: left">Product Description</label>
                  <textarea
                      class="form-control"
                      id="Description"
                      cols="30"
                      rows="10"
                  ></textarea>
                </div>
                <div class="col-lg-12 text-left">
                  <label for="FinancePurpose" style="text-align: left"> Finance Purpose</label>
                  <input type="text" id="FinancePurpose" class="form-control" />

                </div>
                <div class="col-lg-12 text-left">
                  <label for="UploadImage" style="text-align: left">Upload Image</label>
                  <input type="file" id="UploadImage" class="form-control" />
                </div>
                <div class="col-lg-12 text-left">
                  <label for="TenorFrom" style="text-align: left"> Tenor From</label>
                  <input type="text" id="TenorFrom" class="form-control" />

                </div>
                <div class="col-lg-12 text-left">
                  <label for="EffectiveRate" style="text-align: left"> Effective Rate</label>
                  <input type="text" id="EffectiveRate" class="form-control" />

                </div>
                <div class="col-lg-12 text-left">
                  <label for="status" style="text-align: left">Status</label>
                  <select class="form-control" id="status" >
                    <option>pilih</option>
                    <option>1</option>
                    <option>1</option>

                  </select>

                </div>



                <div class="col-lg-12 mt-5 text-center">
                  <button class="btn btn-primary btn-lg">Simpan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal Content -->
      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
    </div>
  </div>
</template>


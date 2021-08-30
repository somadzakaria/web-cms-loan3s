<template>
  <div class="modal" id="Detail" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title font-weight-bold"
            style="font-family: 'Poppins'; color: #4a5568"
          >
            Detail
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
                        style="background:yellow; color:black; height:50px !important; border:1px solid !important; width:200px; padding:10px;"
                      >
                        MDR2372.210810.0002
                      </p>
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
  border-radius: 2px;
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

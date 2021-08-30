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
                <div class="col-lg-12">
                  <div class="table-responsive">
                      
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

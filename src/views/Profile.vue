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
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-body">
                    <h3
                      style="font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;"
                    >
                      Profile
                    </h3>
                    <hr />
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <h4
                          class="mt-5"
                          style="font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;"
                        >
                          Foto Profile
                        </h4>
                        <div class="image-upload ">
                          <label for="file-input">
                            <img
                              class="mt-4 mb-5 rounded-circle"
                              :src="users.data.user.image"
                              width="120"
                            />
                          </label>
                          <input id="file-input" type="file" />
                        </div>
                        <div class="row text-left mt-5">
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label for="exampleFormControlInput1"
                                >Nik</label
                              >
                              <input
                                type="email"
                                class="form-control"
                                v-model="users.data.user.NIK"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label for="exampleFormControlInput1"
                                >Nama Lengkap</label
                              >
                              <input
                                type="email"
                                class="form-control"
                                v-model="users.data.user.name"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label for="exampleFormControlInput1"
                                >Alamat Email</label
                              >
                              <input
                                type="email"
                                class="form-control"
                                v-model="users.data.user.email"
                                disabled
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label for="exampleFormControlInput1"
                                >Nomor Telepon</label
                              >
                              <input
                                type="email"
                                class="form-control"
                                v-model="users.data.user.mobilephoneno"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style="margin-top:100px" />
                    <div class="row" >
                      <div class="col-lg-12 text-center">
                        <button
                          class="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Ubah Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog ">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Edit Password
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
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-lg-12 text-center">
                            <h3
                              style="font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 24px;"
                            >
                              Ganti Password
                            </h3>
                            <p
                              style="font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;"
                            >
                              Masukkan password baru Anda
                            </p>
                          </div>
                        </div>
                        <div class="container mt-4">
                          <div class="row">
                            <div class="col-lg-1">
                              <em
                                ><img
                                  style="position:absolute; margin: 2px 0px 0px -15px; "
                                  src="../assets/Vector.png"
                                  alt=""
                              /></em>
                            </div>
                            <div class="col-lg-11">
                              <div class="form-group">
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                            <div class="col-lg-1">
                              <em
                                ><img
                                  style="position:absolute; margin: 2px 0px 0px -15px; "
                                  src="../assets/Vector.png"
                                  alt=""
                              /></em>
                            </div>
                            <div class="col-lg-11">
                              <div class="form-group">
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Password Baru"
                                />
                              </div>
                            </div>
                            <div class="col-lg-1">
                              <em
                                ><img
                                  style="position:absolute; margin: 2px 0px 0px -15px; "
                                  src="../assets/Vector.png"
                                  alt=""
                              /></em>
                            </div>
                            <div class="col-lg-11">
                              <div class="form-group">
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Konfirmasi Password"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->
        <!-- Modal Detail -->
        <Detail />
        <!-- End Modal Content -->
        <!-- Footer -->
        <Footer />
        <!-- End of Footer -->
      </div>

      <!-- Moodal Edit -->
      <Update />
      <!-- End of Content Wrapper -->
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
  computed: {
    users() {
      return this.$store.getters.getusers;
    },
  },
  mounted() {
    this.$store.commit("SET_PROFILE");
  },
};
</script>
<style scoped>
.image-upload > input {
  display: none;
}
</style>

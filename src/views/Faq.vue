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
                      Faq
                    </h6>
                  </div>
                    <div class="col-lg-6 text-right">
                    <a class="btn btn-primary text-left" @click.prevent="handleCreate"><i class="fa fa-plus mr-3"></i> Tambah</a>
                  </div>    
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Kategori
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Pertanyaan
                        </th>
                        <th
                          style="
                            background: #edf2f7;
                            color: #4a5568;
                            font-family: 'Poppins';
                          "
                        >
                          Jawaban
                        </th>

                        <th
                          class="text-left"
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
                      <tr v-for="Faq in Faqs" :key="Faq.id">
                        <td>{{ Faq.Category }}</td>
                        <td>{{ Faq.Question }}</td>
                        <td>{{ Faq.Answer }}</td>
                        <td class="text-left">
                          <button class="btn btn-universal" @click.prevent="handleupdate(Faq.id)"><i class="far fa-edit text-primary"></i></button>
                          <button class="btn btn-universal" type="submit" @click.prevent="handledelete(Faq.id)"><i class="far fa-trash-alt text-primary"></i></button>
                        </td>
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
import router from "@/router";
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import Detail from "../components/HCBP/Detail.vue";
import Update from "../components/HCBP/Update.vue";
import FaqService from "../services/faq.service";

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
    Detail,
    Update,
  },
  data() {
    return {
      Faqs: [],
    };
  },
  created() {
    FaqService.getAll()
      .then((response) => {
        this.Faqs = response.data;
      })
      .catch((error) => console.log("Eror Data Tidak Di Temukan", error.response));
  },
  methods: {
    handledelete(id) {
      FaqService.getDelete(id)
        .then((response) => {
          console.log(response, "Berhasil Terhapus");
          router.go();
        })
        .catch((error) => {
          console.log("Gagal Terhapus", error.response);
        });
    },
       handleCreate() {
      router.push("/Faq-create");
    },
     handleupdate(id) {
      router.push("/Faq-update/" + id);
    },
  },
};
</script>

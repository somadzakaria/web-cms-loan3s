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
                <div class="row ">
                  <div class="col-lg-6 text-left">
                    <h6 style="font-family: 'Poppins'; font-size: 14px; font-weight: bold;">Blog</h6>
                  </div>
                  <div class="col-lg-6 text-right">
                    <a class="btn btn-primary text-left" @click.prevent="handleCreate"><i class="fa fa-plus mr-3"></i> Tambah</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          ID
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Judul
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Kategori
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Tags
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Tgl Upload
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Author
                        </th>
                        <th style="background: #EDF2F7; color: #4A5568; font-family: 'Poppins';">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="blog in blogs" :key="blog.id">
                        <td>{{ blog.BlogID }}</td>
                        <td>{{ blog.TitleName }}</td>
                        <td>{{ blog.Category }}</td>
                        <td>{{ blog.Tags }}</td>
                        <td>{{ blog.Createdate }}</td>
                        <td>{{ blog.WritenBy }}</td>
                        <td>
                          <button class="btn btn-universal" data-toggle="modal" data-target="#Detail" @click.prevent="handledetail(blog.id)"><i class="far fa-eye text-primary"></i></button>
                          <button class="btn btn-universal" @click.prevent="handleupdate(blog.id)"><i class="far fa-edit text-primary"></i></button>
                          <button class="btn btn-universal" type="submit" @click.prevent="handledelete(blog.id)"><i class="far fa-trash-alt text-primary"></i></button>
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
        <Detail :dataModal="dataModal" />
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
import router from "@/router";
import Sidebar from "../components/navigation/Sidebar.vue";
import Navbar from "../components/navigation/Navbar.vue";
import Footer from "../components/navigation/Footer.vue";
import BlogService from "../services/blog.service";
import Detail from "../components/Blog/Detail.vue";
export default {
  props: ["id"],
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Detail,
    Footer,
  },
  data() {
    return {
       ProductId: this.$route.params.id,
      blogs: [],
      dataModal: "",
    };
  },
  created() {
    BlogService.getAll()
      .then((response) => {
        this.blogs = response.data;
      })
      .catch((error) => {
        console.log("Eror Data Tidak Di Temukan", error.response);
      });
  },
  methods: {
    handledelete(id) {
      BlogService.getDelete(id)
        .then((response) => {
          console.log(response, "Berhasil Terhapus");
          router.go();
        })
        .catch((error) => {
          console.log("Gagal Terhapus", error.response);
        });
    },
    handleCreate() {
      router.push("/blog-create");
    },
    handleupdate(id) {
      router.push("/blog-update/" + id);
    },
    handledetail(id) {
      BlogService.getShow(id)
        .then((response) => {
          this.dataModal = response.data;
        })
        .catch((error) => {
          console.log("Eror Data Tidak Di Temukan", error.response);
        });
    },
  },
};
</script>


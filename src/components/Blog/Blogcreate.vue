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
                      Create Blog
                    </h6>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="submit($event)">
                  <div class="form">
                    <div class="row">
                      <div class="col-lg-12 text-left">
                        <label for="NIK" style="text-align: left">Judul</label>
                        <input type="text" id="NIK" class="form-control" v-model="blog.TitleName" />
                      </div>
                      <div class="col-lg-6 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Kategori</label>
                        <input type="text" id="NIK" class="form-control" v-model="blog.Category" />
                      </div>
                      <div class="col-lg-6 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Tags</label>
                        <input type="text" id="NIK" class="form-control" v-model="blog.Tags" />
                      </div>
        
                      <div class="col-lg-12 mt-3">
                       <ckeditor :editor="editor"  v-model="blog.Blog_Description"></ckeditor>
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Upload Image</label>
                        <input id="file-input" accept="image/*" @change="onFileChange" type="file" class="form-control" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align:left">Di Tulis Oleh.</label>
                        <input type="text" id="NIK" class="form-control" v-model="blog.WritenBy" />
                      </div>
                      <div class="col-lg-12 mt-3 text-left">
                        <label for="NIK" style="text-align: left">Status</label>
                        <select class="form-control" v-model="blog.isactive">
                          <option value="1">Active</option>
                          <option value="0">No Active</option>
                        </select>
                      </div>
                      <div class="col-lg-12 mt-4 text-center">
                        <button class="btn-primary btn-lg text-center" type="submit">Simpan</button>
                      </div>
                    </div>
                  </div>
                </form>
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
import BlogService from "../../services/blog.service";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {},
      blog: {
        TitleName: "",
        Category: "",
        Tags: "",
        Blog_Description: "",
        ImagesPath: "",
        WritenBy: "",
        isactive: "",
      },
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      let params = {
        TitleName: this.blog.TitleName,
        Category: this.blog.Category,
        Tags: this.blog.Tags,
        Blog_Description: this.blog.Blog_Description,
        ImagesPath: this.blog.ImagesPath,
        WritenBy: this.blog.WritenBy,
        isactive: this.blog.isactive,
      };
      BlogService.postCrate(params)
        .then((response) => {
          console.log(response, "Berhasil Di tambahkan");
          router.back();
        })
        .catch((error) => {
          console.log("Gagal Di tambahkan", error.res);
        });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
      this.blog.ImagesPath=e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
